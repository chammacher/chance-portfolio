"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { skillsGridContent } from "@/lib/data";

export default function SkillsPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { theme, resolvedTheme } = useTheme();
    const currentTheme =
        theme === "system" ? (resolvedTheme ?? "light") : (theme ?? "light");

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        type Particle = {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
        };

        const particles: Particle[] = [];
        let animationFrameId = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            canvas.width = parent ? parent.clientWidth : window.innerWidth;
            canvas.height = parent ? parent.clientHeight : window.innerHeight;
        };

        const resetParticle = (particle: Particle) => {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
            particle.size = Math.random() * 1.5;
            particle.speedX = (Math.random() - 0.5) * 0.2;
            particle.speedY = (Math.random() - 0.5) * 0.2;
            particle.opacity = Math.random() * 0.5;
        };

        const createParticle = (): Particle => {
            const particle: Particle = {
                x: 0,
                y: 0,
                size: 0,
                speedX: 0,
                speedY: 0,
                opacity: 0,
            };
            resetParticle(particle);
            return particle;
        };

        resize();
        for (let i = 0; i < 50; i += 1) {
            particles.push(createParticle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const particle of particles) {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (
                    particle.x < 0 ||
                    particle.x > canvas.width ||
                    particle.y < 0 ||
                    particle.y > canvas.height
                ) {
                    resetParticle(particle);
                }

                ctx.fillStyle = `rgba(173, 198, 255, ${particle.opacity})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = window.requestAnimationFrame(animate);
        };

        animationFrameId = window.requestAnimationFrame(animate);
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (currentTheme === "light") {
        return (
            <main className="relative pt-8 pb-section-gap overflow-hidden">
                <div className="max-w-container-max mx-auto px-gutter">
                    {/* <!-- Header --> */}
                    <header className="mb-xl">
                        <div className="text-6xl mb-sm">🛠️</div>
                        <h1 className="font-h1 text-h1 text-on-surface mb-sm">
                            Skills &amp; Proficiency
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            A comprehensive overview of technical capabilities,
                            tools, and methodologies. Structured for clarity.
                        </p>
                    </header>
                    <div className="notion-divider"></div>
                    {/* <!-- Integrated Tech Stack Callouts --> */}
                    <section className="mb-xl">
                        <h2 className="font-h3 text-h3 text-on-surface mb-md">
                            Integrated Tech Stack
                        </h2>
                        <div className="notion-callout mb-md">
                            <div className="notion-callout-icon">🌐</div>
                            <div>
                                <strong className="font-body-md text-body-md text-on-surface block mb-xs">
                                    Modern Web Infrastructure
                                </strong>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    Specializing in Jamstack architectures,
                                    utilizing Next.js for SSR/SSG, decoupled CMS
                                    solutions (Contentful, Sanity), and edge
                                    computing for global low-latency content
                                    delivery. Emphasis on scalable,
                                    micro-frontend designs.
                                </p>
                            </div>
                        </div>
                        <div className="notion-callout">
                            <div className="notion-callout-icon">🔒</div>
                            <div>
                                <strong className="font-body-md text-body-md text-on-surface block mb-xs">
                                    System Security
                                </strong>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    Implementing defense-in-depth strategies.
                                    Proficient in OAuth 2.0 / OIDC integrations,
                                    JWT-based stateless authentication,
                                    automated vulnerability scanning in CI/CD
                                    pipelines, and adherence to OWASP Top 10
                                    guidelines.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="notion-divider"></div>
                    {/* <!-- Skills Grid --> */}
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                            {skillsGridContent.map((section) => (
                                <div
                                    key={section.title}
                                    className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant/30"
                                >
                                    <h3 className="font-h3 text-h3 text-on-surface mb-md flex items-center gap-sm">
                                        <span
                                            className="material-symbols-outlined text-primary"
                                            data-icon={section.icon}
                                        >
                                            {section.icon}
                                        </span>
                                        {section.title}
                                    </h3>
                                    <div className="flex flex-col gap-md pl-indent border-l border-outline-variant/30 ml-sm pb-sm">
                                        {section.skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between font-body-sm text-body-sm text-on-surface mb-xs">
                                                    <span>{skill.name}</span>
                                                    <span className="text-on-surface-variant">
                                                        {skill.proficiency}%
                                                    </span>
                                                </div>
                                                <div className="notion-progress-bg">
                                                    <div
                                                        className="notion-progress-fill"
                                                        style={{ width: `${skill.proficiency}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        );
    }

    return (
        <main className="relative pt-32 pb-section-gap overflow-hidden">
            <canvas
                id="atmosphere-canvas"
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            />
            {/* <!-- Background Atmospheric Element --> */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
            <div className="max-w-container-max mx-auto px-gutter">
                {/* <!-- Header Section --> */}
                <header className="mb-stack-lg max-w-2xl">
                    <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-base block">
                        Expertise
                    </span>
                    <h1 className="font-headline-lg text-headline-lg md:text-display mb-stack-md leading-tight">
                        Technical Stack &amp; <br />
                        <span className="text-primary">Core Proficiency.</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                        A systematic breakdown of my engineering capabilities,
                        from high-performance frontend architectures to scalable
                        cloud infrastructure.
                    </p>
                </header>
                {/* <!-- Skills Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md mt-section-gap">
                    {skillsGridContent.map((section) => (
                        <div className="space-y-stack-md" key={section.title}>
                            <div className="flex items-center gap-stack-sm mb-stack-sm">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    {section.icon}
                                </span>
                                <h2 className="font-headline-md text-headline-md">
                                    {section.title}
                                </h2>
                            </div>
                            <div className="space-y-stack-sm">
                                {section.skills.map((skill) => (
                                    <div
                                        className="skill-card p-stack-md border border-outline-variant bg-surface-container-low rounded-xl"
                                        key={skill.name}
                                    >
                                        <div className="flex justify-between items-start mb-base">
                                            <span className="font-label-caps text-label-caps text-primary">
                                                {skill.name}
                                            </span>
                                            <span className="font-code-sm text-code-sm text-tertiary">
                                                {skill.proficiency}%
                                            </span>
                                        </div>
                                        <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-stack-sm">
                                            {skill.description}
                                        </p>
                                        <div className="h-1 w-full bg-outline-variant rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary transition-all duration-1000"
                                                style={{
                                                    width: `${skill.proficiency}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* <!-- Bento Featured Section --> */}
                <section className="mt-section-gap">
                    <div className="mb-stack-lg">
                        <h2 className="font-headline-md text-headline-md">
                            Integrated Tech Stack
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            How I orchestrate these technologies for production
                            environments.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-stack-md">
                        {/* <!-- Tech Stack Highlight 1 --> */}
                        <div className="md:col-span-2 p-stack-lg border border-outline-variant bg-surface-container rounded-xl flex flex-col justify-between overflow-hidden relative">
                            <div className="relative z-10">
                                <h3 className="font-headline-md text-headline-md mb-stack-sm">
                                    Modern Web Infrastructure
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Built on a scalable cloud architecture using
                                    React, TypeScript, Node.js, Express,
                                    PostgreSQL, and AWS. Containerized with
                                    Docker, orchestrated with Kubernetes, and
                                    deployed through an automated CI/CD pipeline
                                    using GitHub, CircleCI, GitLab CI, and Helm
                                    to enable reliable, efficient releases.
                                </p>
                            </div>
                            <div className="flex gap-stack-sm mt-stack-lg">
                                <span className="px-3 py-1 bg-surface-variant rounded-full font-code-sm text-code-sm text-secondary">
                                    Edge Runtime
                                </span>
                                <span className="px-3 py-1 bg-surface-variant rounded-full font-code-sm text-code-sm text-secondary">
                                    React Server Components
                                </span>
                                <span className="px-3 py-1 bg-surface-variant rounded-full font-code-sm text-code-sm text-secondary">
                                    TRPC
                                </span>
                            </div>
                            <div className="absolute -right-16 -bottom-16 w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center opacity-20">
                                <div className="w-48 h-48 border border-primary/40 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 border border-primary/60 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Tech Stack Highlight 2 --> */}
                        <div className="p-stack-lg border border-outline-variant bg-surface-container-high rounded-xl flex flex-col justify-between">
                            <div>
                                <span
                                    className="material-symbols-outlined text-tertiary mb-stack-sm"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    security
                                </span>
                                <h3 className="font-headline-md text-headline-md mb-stack-sm">
                                    System Security
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Implementing OAuth2 and secure cookie
                                    management across full-stack applications.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Tech Stack Highlight 3 --> */}
                        <div className="p-stack-lg border border-outline-variant bg-surface-container rounded-xl flex flex-col justify-between">
                            <div>
                                <span
                                    className="material-symbols-outlined text-primary mb-stack-sm"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    monitoring
                                </span>
                                <h3 className="font-headline-md text-headline-md mb-stack-sm">
                                    Observability
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Leveraging PostHog and New Relic for
                                    real-time monitoring and error tracking.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Tech Stack Highlight 4 --> */}
                        <div className="md:col-span-2 p-stack-lg border border-outline-variant bg-surface-container-lowest rounded-xl flex flex-col md:flex-row items-center gap-stack-lg">
                            <div className="flex-1">
                                <h3 className="font-headline-md text-headline-md mb-stack-sm">
                                    Automated Code Quality
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
                                    Strict linting, automated testing suites,
                                    and type-coverage requirements ensure
                                    maintainable codebases for growing teams.
                                </p>
                                <div className="flex flex-wrap gap-base">
                                    <span className="bg-surface-variant px-2 py-1 rounded font-code-sm text-code-sm text-on-secondary-container">
                                        ESLint
                                    </span>
                                    <span className="bg-surface-variant px-2 py-1 rounded font-code-sm text-code-sm text-on-secondary-container">
                                        Prettier
                                    </span>
                                    <span className="bg-surface-variant px-2 py-1 rounded font-code-sm text-code-sm text-on-secondary-container">
                                        SonarQube
                                    </span>
                                </div>
                            </div>
                            <div className="w-full md:w-48 aspect-square bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant">
                                <span className="material-symbols-outlined text-6xl text-primary opacity-40">
                                    code_blocks
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Learning / Lab Section --> */}
                <section className="mt-section-gap p-stack-lg bg-primary-container/10 border border-primary/20 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-stack-lg">
                        <div className="text-center md:text-left">
                            <h2 className="font-headline-lg text-headline-md md:text-headline-lg mb-stack-sm">
                                Currently Mastering
                            </h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">
                                I believe in continuous evolution. My current
                                focus is on agentic AI orchestration—designing
                                autonomous, tool-enabled AI systems that
                                coordinate complex workflows, make informed
                                decisions, and integrate seamlessly with modern
                                software platforms.
                            </p>
                        </div>
                        <div className="flex gap-stack-md">
                            <div className="px-6 py-4 bg-surface border border-outline-variant rounded-xl flex items-center gap-stack-sm">
                                <div className="w-3 h-3 bg-tertiary rounded-full animate-pulse"></div>
                                <span className="font-label-caps text-label-caps">
                                    Agentic Orchestration
                                </span>
                            </div>
                            <div className="px-6 py-4 bg-surface border border-outline-variant rounded-xl flex items-center gap-stack-sm">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <span className="font-label-caps text-label-caps">
                                    LLMs
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
