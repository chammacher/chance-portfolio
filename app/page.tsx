"use client";

import { useEffect } from "react";

import Link from "next/link";

const engineeringHighlights = [
    {
        href: "/highlights#ui-modernization-design-systems",
        label: "Led a complete UI modernization",
    },
    {
        href: "/highlights#configurable-onboarding-platform",
        label: "Built a configurable onboarding platform",
    },
    {
        href: "/highlights#designed-reusable-react-design-system",
        label: "Designed a reusable React design system",
    },
    {
        href: "/highlights#ai-powered-analytics-experience",
        label: "Built AI-powered dashboards",
    },
    {
        href: "/highlights#led-contractor-development",
        label: "Led contractor development",
    },
];

export default function Home() {
    useEffect(() => {
        // Smooth scrolling for in-page anchors.
        const anchors =
            document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
        const anchorHandlers: Array<() => void> = [];

        anchors.forEach((anchor) => {
            const onClick = (event: MouseEvent) => {
                const href = anchor.getAttribute("href");
                if (!href || href === "#") {
                    return;
                }

                const target = document.querySelector<HTMLElement>(href);
                if (!target) {
                    return;
                }

                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            };

            anchor.addEventListener("click", onClick);
            anchorHandlers.push(() =>
                anchor.removeEventListener("click", onClick),
            );
        });

        let lastScroll = 0;
        const header = document.querySelector<HTMLElement>("header");
        const onScroll = () => {
            if (!header) {
                return;
            }

            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = "translateY(-100%)";
            } else {
                header.style.transform = "translateY(0)";
            }
            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            anchorHandlers.forEach((removeHandler) => removeHandler());
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className="font-body-md">
            {/* Top Navigation Bar */}
            <main className="mt-16">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center pt-section-gap pb-stack-lg hero-gradient overflow-hidden">
                    <div className="max-w-container-max mx-auto px-gutter w-full relative z-10">
                        <div className="grid lg:grid-cols-2 gap-stack-lg items-center">
                            <div className="space-y-stack-md">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-label-caps text-label-caps">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                                    </span>
                                    Available for new projects
                                </div>
                                <h1 className="font-display text-[48px] md:text-display text-on-background">
                                    Architecting <br />
                                    <span className="text-primary italic">
                                        Digital Excellence
                                    </span>
                                    .
                                </h1>
                                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                                    Senior Software Engineer specialized in
                                    building high-performance distributed
                                    systems and premium front-end experiences. I
                                    turn complex logic into elegant code.
                                </p>
                                <div className="flex flex-wrap gap-stack-md pt-stack-sm">
                                    <Link
                                        className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-caps text-label-caps flex items-center gap-2 hover:brightness-110 transition-all"
                                        href="/highlights"
                                    >
                                        View Highlights
                                        <span
                                            className="material-symbols-outlined"
                                            data-icon="arrow_forward"
                                        >
                                            arrow_forward
                                        </span>
                                    </Link>
                                    <Link
                                        className="px-8 py-4 rounded-lg border border-outline text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-all"
                                        href="/skills"
                                    >
                                        Stack &amp; Skills
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:block relative">
                                <div className="code-container rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="code-header px-4 py-3 flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                        </div>
                                        <div className="mx-auto text-code-sm font-code-sm text-outline">
                                            src/engine/ProjectManager.ts
                                        </div>
                                    </div>
                                    <div className="p-6 font-code-sm text-code-sm text-secondary leading-relaxed">
                                        <pre className="whitespace-pre overflow-x-auto">
                                            <code>
                                                <span className="text-tertiary">async</span>{" "}
                                                <span className="text-primary">function</span>{" "}
                                                <span className="text-primary-container">
                                                    initializePortfolio
                                                </span>
                                                () {"{"}
                                                {"\n"}
                                                {"    "}
                                                <span className="text-on-surface-variant">
                                                    {"// Architecture definition"}
                                                </span>
                                                {"\n"}
                                                {"    "}
                                                <span className="text-tertiary">const</span>{" "}
                                                techStack = [
                                                <span className="text-secondary-fixed">
                                                    {'"React"'}
                                                </span>
                                                ,{" "}
                                                <span className="text-secondary-fixed">
                                                    {'"Node.js"'}
                                                </span>
                                                ,{" "}
                                                <span className="text-secondary-fixed">
                                                    {'"AWS"'}
                                                </span>
                                                ];
                                                {"\n\n"}
                                                {"    "}
                                                <span className="text-tertiary">const</span>{" "}
                                                projects ={" "}
                                                <span className="text-tertiary">await</span>{" "}
                                                db.fetchLatest();
                                                {"\n\n"}
                                                {"    "}
                                                <span className="text-primary">return</span>{" "}
                                                projects.map((p) =&gt; ({"{"})
                                                {"\n"}
                                                {"        "}...p,
                                                {"\n"}
                                                {"        "}status:{" "}
                                                <span className="text-secondary-fixed">
                                                    {'"LIVE"'}
                                                </span>
                                                ,
                                                {"\n"}
                                                {"        "}performance:{" "}
                                                <span className="text-tertiary">0.98</span>,
                                                {"\n"}
                                                {"    "}{"}"}));
                                                {"\n"}
                                                {"}"}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                                {/* Floating Tech Tags */}
                                <div className="absolute -top-4 -right-4 bg-surface-container-high border border-outline-variant p-4 rounded-xl shadow-lg animate-bounce duration-3000">
                                    <span
                                        className="material-symbols-outlined text-primary mb-2"
                                        data-icon="deployed_code"
                                    >
                                        deployed_code
                                    </span>
                                    <div className="font-label-caps text-label-caps text-on-surface-variant">
                                        System Uptime
                                    </div>
                                    <div className="font-headline-md text-headline-md text-tertiary">
                                        99.9%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Work Preview */}
                <section className="py-section-gap max-w-container-max mx-auto px-gutter">
                    <div className="space-y-stack-lg">
                        <div className="space-y-stack-sm">
                            <h2 className="font-headline-lg text-headline-lg text-on-background">
                                Engineering Highlights
                            </h2>
                            <p className="text-on-surface-variant max-w-md">
                                Key technical milestones and architectural
                                leadership across diverse engineering domains.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
                            {engineeringHighlights.map((highlight) => (
                                <Link
                                    key={highlight.href}
                                    className="glass-card p-6 rounded-xl flex items-start gap-4 transition-colors hover:border-primary"
                                    href={highlight.href}
                                >
                                    <span
                                        className="material-symbols-outlined text-tertiary"
                                        data-icon="check_circle"
                                    >
                                        check_circle
                                    </span>
                                    <span className="font-body-md text-on-surface">
                                        {highlight.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Skill Stripes (Scrolling Logo Parallax) */}
                <section className="py-stack-lg border-y border-outline-variant bg-surface-container-lowest/50 overflow-hidden">
                    <div className="flex whitespace-nowrap gap-stack-lg animate-[scroll_40s_linear_infinite]">
                        <div className="flex gap-stack-lg items-center text-outline-variant font-display text-[32px] opacity-50 select-none">
                            <span className="">REACT</span>
                            <span className="text-primary">•</span>
                            <span className="">TYPESCRIPT</span>
                            <span className="text-primary">•</span>
                            <span className="">NEXT.JS</span>
                            <span className="text-primary">•</span>
                            <span className="">PYTHON</span>
                            <span className="text-primary">•</span>
                            <span className="">NODE.JS</span>
                            <span className="text-primary">•</span>
                            <span className="">AWS</span>
                            <span className="text-primary">•</span>
                            <span className="">POSTGRESQL</span>
                            <span className="text-primary">•</span>
                            <span className="">KUBERNETES</span>
                            <span className="text-primary">•</span>
                            <span className="">DOCKER</span>
                            <span className="text-primary">•</span>
                            <span className="">REST APIs</span>
                            <span className="text-primary">•</span>
                            <span>TAILWIND CSS</span>
                            <span className="text-primary">•</span>
                            <span>JAVA</span>
                            <span className="text-primary">•</span>
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex gap-stack-lg items-center text-outline-variant font-display text-[32px] opacity-50 select-none">
                            <span className="">REACT</span>
                            <span className="text-primary">•</span>
                            <span className="">TYPESCRIPT</span>
                            <span className="text-primary">•</span>
                            <span className="">NEXT.JS</span>
                            <span className="text-primary">•</span>
                            <span className="">PYTHON</span>
                            <span className="text-primary">•</span>
                            <span className="">NODE.JS</span>
                            <span className="text-primary">•</span>
                            <span className="">AWS</span>
                            <span className="text-primary">•</span>
                            <span className="">POSTGRESQL</span>
                            <span className="text-primary">•</span>
                            <span className="">KUBERNETES</span>
                            <span className="text-primary">•</span>
                            <span className="">DOCKER</span>
                            <span className="text-primary">•</span>
                            <span className="">REST APIs</span>
                            <span className="text-primary">•</span>
                            <span>TAILWIND CSS</span>
                            <span className="text-primary">•</span>
                            <span>JAVA</span>
                            <span className="text-primary">•</span>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-section-gap">
                    <div className="max-w-container-max mx-auto px-gutter text-center">
                        <div className="glass-card p-12 rounded-2xl border-2 border-primary/20 space-y-stack-md max-w-3xl mx-auto">
                            <h2 className="font-headline-lg text-headline-lg text-on-background">
                                Let&apos;s build something{" "}
                                <span className="text-primary">
                                    extraordinary
                                </span>
                                .
                            </h2>
                            <p className="text-body-lg text-on-surface-variant">
                                Looking for a technical partner for your next
                                project or a senior addition to your engineering
                                team?
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-stack-md pt-stack-md">
                                <Link
                                    className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-caps text-label-caps hover:shadow-lg hover:shadow-primary/20 transition-all"
                                    href="/contact"
                                >
                                    Start a Conversation
                                </Link>
                                <a
                                    className="px-10 py-4 rounded-lg border border-outline text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-all"
                                    download
                                    href="/Chance-Hammacher-Resume.pdf"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
