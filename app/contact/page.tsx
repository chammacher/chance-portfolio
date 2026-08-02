"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
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

    return (
        <main className="pt-32 pb-section-gap px-gutter max-w-container-max mx-auto">
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
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                        Whether you have a specific project in mind or just want
                        to chat about the latest in web tech, my inbox is always
                        open. I&apos;m currently looking for new opportunities and
                        collaborations.
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
