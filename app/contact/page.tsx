"use client";

import { FormEvent, useState } from "react";
import { useTheme } from "next-themes";

export default function ContactPage() {
    const { theme, resolvedTheme } = useTheme();
    const currentTheme =
        theme === "system" ? (resolvedTheme ?? "light") : (theme ?? "light");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormMessage(null);
        setIsSubmitting(true);

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            subject: String(formData.get("subject") ?? "").trim(),
            message: String(formData.get("message") ?? "").trim(),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result: { error?: string } = await response.json();

            if (!response.ok) {
                throw new Error(result.error ?? "Unable to send message.");
            }

            setFormMessage({
                type: "success",
                text: "Message sent. I will get back to you soon.",
            });
            form.reset();
        } catch (error) {
            setFormMessage({
                type: "error",
                text:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (currentTheme === "light") {
        return (
            <main className="pt-8 pb-section-gap px-gutter max-w-container-max mx-auto">
                <div className="flex flex-col">
                    {/* <!-- Header --> */}
                    <div className="mb-xl">
                        <div className="text-[72px] leading-none mb-sm">📩</div>
                        <h1 className="font-h1 text-h1-mobile md:text-h1 mb-md">
                            Get in touch
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            Whether you have a specific project in mind or just
                            want to chat about the latest in web tech, my inbox
                            is always open. I&apos;m currently looking for new
                            opportunities and collaborations.
                        </p>
                    </div>
                    {/* <!-- Callouts --> */}
                    <div className="flex flex-col gap-sm mb-xl ml-indent">
                        {/* <!-- Callout 1 --> */}
                        <div className="bg-surface-container-low px-md py-sm rounded flex items-center gap-sm">
                            <span className="text-lg">📧</span>
                            <span className="font-body-md text-body-md text-on-surface">
                                hello@devportfolio.com
                            </span>
                        </div>
                        {/* <!-- Callout 2 --> */}
                        <div className="bg-surface-container-low px-md py-sm rounded flex items-center gap-sm">
                            <span className="text-lg">📍</span>
                            <span className="font-body-md text-body-md text-on-surface">
                                San Francisco, CA
                            </span>
                        </div>
                    </div>
                    {/* <!-- Social Profiles --> */}
                    {/* <div className="mb-xl ml-indent">
                        <h3 className="font-body-md text-body-md font-bold mb-sm">
                            Social Profiles
                        </h3>
                        <div className="flex gap-sm">
                            <a
                                className="bg-surface-container-high hover:bg-surface-variant px-md py-xs rounded-xl flex items-center gap-xs transition-colors duration-150"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    code
                                </span>
                                <span className="font-body-sm text-body-sm">
                                    GitHub
                                </span>
                            </a>
                            <a
                                className="bg-surface-container-high hover:bg-surface-variant px-md py-xs rounded-xl flex items-center gap-xs transition-colors duration-150"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    flutter_dash
                                </span>
                                <span className="font-body-sm text-body-sm">
                                    Twitter
                                </span>
                            </a>
                            <a
                                className="bg-surface-container-high hover:bg-surface-variant px-md py-xs rounded-xl flex items-center gap-xs transition-colors duration-150"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    work
                                </span>
                                <span className="font-body-sm text-body-sm">
                                    LinkedIn
                                </span>
                            </a>
                        </div>
                    </div> */}
                    <hr className="border-t border-outline-variant my-xl" />
                    {/* <!-- Contact Form --> */}
                    <div className="ml-indent">
                        <h2 className="font-h3 text-h3 mb-md">
                            Send a Message
                        </h2>
                        <form className="flex flex-col gap-lg w-full">
                            <div className="flex flex-col">
                                <label
                                    className="font-body-sm text-body-sm text-on-surface-variant mb-xs"
                                    htmlFor="name"
                                >
                                    Full Name
                                </label>
                                <input
                                    className="notion-input font-body-md text-body-md text-on-surface"
                                    id="name"
                                    name="name"
                                    placeholder="Jane Doe"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="font-body-sm text-body-sm text-on-surface-variant mb-xs"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="notion-input font-body-md text-body-md text-on-surface"
                                    id="email"
                                    name="email"
                                    placeholder="jane@example.com"
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="font-body-sm text-body-sm text-on-surface-variant mb-xs"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="notion-textarea font-body-md text-body-md text-on-surface"
                                    id="message"
                                    name="message"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <div className="mt-sm">
                                <button
                                    className="bg-[#2383E2] hover:bg-primary text-white font-body-md text-body-md px-lg py-sm rounded transition-colors duration-150"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">
                                    Avg. response time: &lt; 24 hours
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-8 pb-section-gap px-gutter max-w-container-max mx-auto">
            <div className="flex flex-col lg:flex-row gap-section-gap">
                {/* <!-- Left Side: Content & Socials --> */}
                <div className="w-full lg:w-1/2 space-y-stack-lg">
                    <div className="space-y-stack-sm">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                            Get in touch
                        </span>
                        <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface">
                            Let&apos;s build something{" "}
                            <span className="text-primary">extraordinary</span>{" "}
                            together.
                        </h1>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                        Whether you have a specific project in mind or just want
                        to chat about the latest in web tech, my inbox is always
                        open. I&apos;m currently looking for new opportunities
                        and collaborations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-stack-md">
                        {/* <!-- Direct Contact Cards --> */}
                        <a
                            className="contact-card p-stack-md rounded-lg flex items-center gap-stack-md group"
                            href="mailto:chance.hammacher@gmail.com"
                        >
                            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                <span className="material-symbols-outlined">
                                    mail
                                </span>
                            </div>
                            <div>
                                <p className="font-label-caps text-label-caps text-on-surface-variant">
                                    Email
                                </p>
                                <p className="font-body-md text-body-md font-semibold text-on-surface">
                                    chance.hammacher@gmail.com
                                </p>
                            </div>
                        </a>
                        <div className="contact-card p-stack-md rounded-lg flex items-center gap-stack-md group">
                            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary transition-colors">
                                <span className="material-symbols-outlined">
                                    location_on
                                </span>
                            </div>
                            <div>
                                <p className="font-label-caps text-label-caps text-on-surface-variant">
                                    Location
                                </p>
                                <p className="font-body-md text-body-md font-semibold text-on-surface">
                                    Madison, WI
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="space-y-stack-md pt-stack-lg">
                        <p className="font-label-caps text-label-caps text-on-surface-variant">
                            Social Profiles
                        </p>
                        <div className="flex gap-stack-md">
                            <a
                                className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all active:scale-90"
                                href="#"
                            >
                                <span className="material-symbols-outlined">
                                    terminal
                                </span>
                            </a>
                            <a
                                className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all active:scale-90"
                                href="#"
                            >
                                <span className="material-symbols-outlined">
                                    share
                                </span>
                            </a>
                            <a
                                className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all active:scale-90"
                                href="#"
                            >
                                <span className="material-symbols-outlined">
                                    public
                                </span>
                            </a>
                            <a
                                className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all active:scale-90"
                                href="#"
                            >
                                <span className="material-symbols-outlined">
                                    link
                                </span>
                            </a>
                        </div>
                    </div> */}
                </div>
                {/* <!-- Right Side: Contact Form --> */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-surface-container-low p-stack-lg rounded-xl border border-outline-variant relative overflow-hidden">
                        {/* <!-- Subtle Glow Effect --> */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                        <form
                            className="relative z-10 space-y-stack-md"
                            id="contactForm"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
                                <div className="space-y-base">
                                    <label
                                        className="font-label-caps text-label-caps text-on-surface-variant"
                                        htmlFor="name"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        className="form-input w-full p-stack-md rounded text-on-surface font-body-md"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required={true}
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-base">
                                    <label
                                        className="font-label-caps text-label-caps text-on-surface-variant"
                                        htmlFor="email"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        className="form-input w-full p-stack-md rounded text-on-surface font-body-md"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required={true}
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-base">
                                <label
                                    className="font-label-caps text-label-caps text-on-surface-variant"
                                    htmlFor="subject"
                                >
                                    Subject
                                </label>
                                <select
                                    className="form-input w-full p-stack-md rounded text-on-surface font-body-md appearance-none"
                                    id="subject"
                                    name="subject"
                                >
                                    <option value="Project Inquiry">
                                        Project Inquiry
                                    </option>
                                    <option value="Collaboration">
                                        Collaboration
                                    </option>
                                    <option value="Employment">
                                        Employment Opportunities
                                    </option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-base">
                                <label
                                    className="font-label-caps text-label-caps text-on-surface-variant"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="form-input w-full p-stack-md rounded text-on-surface font-body-md resize-none"
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your vision..."
                                    required={true}
                                    rows={5}
                                ></textarea>
                            </div>
                            <button
                                className="w-full bg-primary text-on-primary py-4 rounded font-bold font-body-md flex items-center justify-center gap-stack-sm hover:brightness-110 active:scale-[0.98] transition-all"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                <span>
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </span>
                                <span className="material-symbols-outlined text-base">
                                    send
                                </span>
                            </button>
                            {formMessage ? (
                                <p
                                    aria-live="polite"
                                    className={`text-center font-code-sm text-code-sm ${formMessage.type === "success" ? "text-primary" : "text-red-500"}`}
                                >
                                    {formMessage.text}
                                </p>
                            ) : null}
                            <p className="text-center font-code-sm text-code-sm text-on-surface-variant/60">
                                Avg. response time: &lt; 24 hours
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
