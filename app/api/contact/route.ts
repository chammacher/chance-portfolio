import nodemailer from "nodemailer";

type ContactPayload = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const escapeHtml = (value: string) => {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
};

type GoogleTokenResponse = {
    access_token?: string;
    error?: string;
    error_description?: string;
};

const getGoogleAccessToken = async ({
    clientId,
    clientSecret,
    refreshToken,
}: {
    clientId: string;
    clientSecret: string;
    refreshToken: string;
}) => {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
            grant_type: "refresh_token",
        }),
    });

    const data = (await tokenResponse.json()) as GoogleTokenResponse;

    if (!tokenResponse.ok || !data.access_token) {
        return {
            ok: false as const,
            error: data.error ?? "token_exchange_failed",
            errorDescription:
                data.error_description ?? "Could not fetch Google access token.",
        };
    }

    return {
        ok: true as const,
        accessToken: data.access_token,
    };
};

export async function POST(request: Request) {
    let payload: ContactPayload;

    try {
        payload = (await request.json()) as ContactPayload;
    } catch {
        return Response.json({ error: "Invalid request body." }, { status: 400 });
    }

    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const subject = payload.subject?.trim() ?? "";
    const message = payload.message?.trim() ?? "";

    if (!name || !email || !subject || !message) {
        return Response.json(
            { error: "Please fill out all required fields." },
            { status: 400 }
        );
    }

    if (!isValidEmail(email)) {
        return Response.json(
            { error: "Please enter a valid email address." },
            { status: 400 }
        );
    }

    const smtpUser = process.env.SMTP_USER;
    const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
    const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
    const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

    if (!smtpUser || !oauthClientId || !oauthClientSecret || !oauthRefreshToken) {
        return Response.json(
            {
                error: "Email sender is not configured on the server.",
            },
            { status: 500 }
        );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL ?? smtpUser;
    const fromEmail = process.env.SMTP_FROM_EMAIL ?? smtpUser;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const tokenResult = await getGoogleAccessToken({
        clientId: oauthClientId,
        clientSecret: oauthClientSecret,
        refreshToken: oauthRefreshToken,
    });

    if (!tokenResult.ok) {
        const isInvalidGrant = tokenResult.error === "invalid_grant";

        return Response.json(
            {
                error: isInvalidGrant
                    ? "Google OAuth refresh token is invalid or revoked. Regenerate GOOGLE_OAUTH_REFRESH_TOKEN for the same Gmail account as SMTP_USER."
                    : `Google OAuth token exchange failed: ${tokenResult.errorDescription}`,
            },
            { status: 500 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: smtpUser,
                clientId: oauthClientId,
                clientSecret: oauthClientSecret,
                refreshToken: oauthRefreshToken,
                accessToken: tokenResult.accessToken,
            },
        });

        await transporter.sendMail({
            from: fromEmail,
            to: toEmail,
            replyTo: email,
            subject: `[Portfolio Contact] ${subject}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Subject: ${subject}`,
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Subject:</strong> ${safeSubject}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
            `,
        });

        return Response.json({ ok: true });
    } catch (error) {
        console.error("Contact mail send failed", error);
        return Response.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
