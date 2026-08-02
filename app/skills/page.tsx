"use client";

import { useEffect, useRef } from "react";

type SkillItem = {
    name: string;
    proficiency: number;
    description: string;
};

type SkillSection = {
    title: string;
    icon: string;
    skills: SkillItem[];
};

const skillsGridContent: SkillSection[] = [
    {
        title: "Frontend",
        icon: "terminal",
        skills: [
            {
                name: "React / Next.js",
                proficiency: 95,
                description:
                    "Building complex SPAs with SSR, ISR, and optimized Hydration patterns.",
            },
            {
                name: "TypeScript",
                proficiency: 90,
                description:
                    "Advanced type engineering, generics, and strict compile-time safety.",
            },
            {
                name: "Tailwind CSS",
                proficiency: 100,
                description:
                    "Developing modular, responsive Design Systems and complex layouts.",
            },
        ],
    },
    {
        title: "Backend",
        icon: "database",
        skills: [
            {
                name: "Node.js",
                proficiency: 90,
                description:
                    "Architecting high-concurrency microservices and REST APIs.",
            },
            {
                name: "PostgreSQL",
                proficiency: 88,
                description:
                    "Relational modeling, query optimization, and transaction management.",
            },
            {
                name: "GraphQL",
                proficiency: 80,
                description:
                    "Designing Apollo federated schemas and efficient resolver logic.",
            },
        ],
    },
    {
        title: "DevOps",
        icon: "cloud",
        skills: [
            {
                name: "AWS / GCP",
                proficiency: 75,
                description:
                    "Managing EC2, S3, and serverless infrastructure deployments.",
            },
            {
                name: "Docker / K8s",
                proficiency: 70,
                description:
                    "Containerization strategies and basic Kubernetes orchestration.",
            },
            {
                name: "CI/CD Pipeline",
                proficiency: 90,
                description:
                    "Automating tests and deployments via GitHub Actions and Vercel.",
            },
        ],
    },
    {
        title: "Security",
        icon: "architecture",
        skills: [
            {
                name: "HIPAA",
                proficiency: 90,
                description:
                    "Built healthcare applications following HIPAA security and privacy best practices.",
            },
            {
                name: "SOC 2",
                proficiency: 95,
                description:
                    "Implemented SOC 2-aligned security controls and secure development practices..",
            },
            {
                name: "OAUTH",
                proficiency: 90,
                description:
                    "Implemented OAuth 2.0 and OpenID Connect for secure authentication and authorization.",
            },
        ],
    },
    // {
    //     title: "Tools",
    //     icon: "architecture",
    //     skills: [
    //         {
    //             name: "Figma",
    //             proficiency: 85,
    //             description:
    //                 "Prototyping and design-to-code handoff execution.",
    //         },
    //         {
    //             name: "Git / CLI",
    //             proficiency: 95,
    //             description:
    //                 "Advanced branching strategies, rebase workflows, and bash scripting.",
    //         },
    //         {
    //             name: "Testing",
    //             proficiency: 82,
    //             description:
    //                 "Unit, integration, and E2E testing with Jest.",
    //         },
    //     ],
    // },
];

export default function SkillsPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
                                    style={{ fontVariationSettings: "'FILL' 1" }}
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
                                                style={{ width: `${skill.proficiency}%` }}
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
                                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                    Built on a scalable cloud architecture using React, TypeScript, Node.js, Express, PostgreSQL, and AWS. Containerized with Docker, orchestrated with Kubernetes, and deployed through an automated CI/CD pipeline using GitHub, CircleCI, GitLab CI, and Helm to enable reliable, efficient releases.
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
                                    Leveraging PostHog and New Relic for real-time
                                    monitoring and error tracking.
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
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="font-headline-lg text-headline-md md:text-headline-lg mb-stack-sm">
                                Currently Mastering
                            </h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">
                                I believe in continuous evolution. My current focus is on agentic AI orchestration—designing autonomous, tool-enabled AI systems that coordinate complex workflows, make informed decisions, and integrate seamlessly with modern software platforms.
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
