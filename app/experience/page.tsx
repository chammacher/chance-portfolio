"use client";

import { useEffect } from "react";

type experienceSection = {
    duration: string;
    title: string;
    subtitle: string;
    description: string;
    skills: string[];
    topThree: string[];
};

const experience: experienceSection[] = [
    {
        duration: "Oct 2018 — Present",
        title: "Senior Full-Stack Developer",
        subtitle: "Ops.Work (formerly Flow Healthcare)",
        description:
            "Cloud-native SaaS platform used daily by healthcare organizations for onboarding, credentialing, learning, task management, forms, document collection, approvals, reminders, and workflow automation.",
        skills: [
            "React",
            "Node.js",
            "TypeScript",
            "Kubernetes",
            "AWS",
            "Express.js",
            "SOC II",
            "HIPAA",
        ],
        topThree: [
            "Own full-stack development and production operations across React/TypeScript frontends, Node.js/Express backend services, REST APIs, PostgreSQL databases, AWS infrastructure, Kubernetes workloads, CI/CD, security, production support and a CMS public website.",
            "Implement and maintain secure application functionality and third-party integrations using IAM, OAuth, REST APIs, and AWS WAF while supporting HIPAA and SOC 2 compliance requirements.",
            "Led and independently executed a platform-wide UI/UX modernization, redesigning and rebuilding application pages with reusable React components and a cohesive design system, improving usability and mobile responsiveness while reducing duplicated frontend code.",
        ],
    },
    {
        duration: "January 2015 – May 2018",
        title: "Student Software Engineer",
        subtitle:
            "Space Science & Engineering Center (SSEC), University of Wisconsin–Madison",
        description:
            "Developed and maintained Python applications, Linux-based workflows, and visualization tools supporting satellite imagery processing, atmospheric research, and scientific data analysis.",
        skills: [
            "Python",
            "Satelite Data Processing",
            "Command Line Automation",
        ],
        topThree: [
            "Developed Python applications and Linux-based workflows supporting satellite imagery processing, validation, visualization, and scientific data analysis.",
            "Automated quality-assurance and recurring data-processing workflows, reducing manual effort and improving repeatability.",
            "Trained new team members on applications, development practices, and technical processes.",
        ],
    },
];

export default function ExperiencePage() {
    useEffect(() => {
        // Scroll interaction for timeline dots
        window.addEventListener("scroll", () => {
            const dots = document.querySelectorAll(
                ".absolute.left-0.md\\:left-1\\/2, .absolute.left-4",
            );
            const triggerBottom = window.innerHeight * 0.8;

            dots.forEach((dot) => {
                const dotTop = dot.getBoundingClientRect().top;
                if (dotTop < triggerBottom) {
                    dot.classList.add("bg-primary");
                    dot.classList.remove("bg-outline-variant");
                } else {
                    dot.classList.remove("bg-primary");
                    dot.classList.add("bg-outline-variant");
                }
            });
        });
    });
    return (
        <main className="mt-16 py-section-gap max-w-container-max mx-auto px-gutter">
            <header className="mb-section-gap max-w-3xl">
                <h1 className="font-display text-display mb-stack-md">
                    Professional Journey
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                    A chronological record of my contributions to the industry,
                    from architecting scalable cloud solutions to mentoring
                    next-gen engineering teams.
                </p>
            </header>
            {/* <!-- Timeline Container --> */}
            <div className="relative">
                {/* <!-- Vertical Line --> */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 hidden md:block"></div>
                <div className="absolute left-4 top-0 bottom-0 w-px timeline-line md:hidden"></div>
                {/* <!-- Experience Items --> */}
                <div className="space-y-section-gap">
                    {/* <!-- Role 1: Senior Systems Architect --> */}
                    {experience.map((e, index) => {
                        return (
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
                                key={index + "-experience"}
                            >
                                {/* <!-- Dot --> */}
                                <div
                                    className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface -translate-x-1/2 z-10 hidden md:block"
                                    style={{ top: "2rem;" }}
                                ></div>
                                <div
                                    className="absolute left-4 w-3 h-3 rounded-full bg-primary border-2 border-surface -translate-x-1/2 z-10 md:hidden"
                                    style={{ top: "2rem" }}
                                ></div>
                                {/* <!-- Content Left --> */}
                                <div
                                    className={
                                        "md:text-right " +
                                        (index % 2 === 0
                                            ? "order-2 md:order-1 md:pr-16"
                                            : "order-1 md:order-2 md:pl-16")
                                    }
                                >
                                    <span className="font-code-sm text-code-sm text-tertiary mb-stack-sm block uppercase tracking-widest">
                                        {e.duration}
                                    </span>
                                    <h2 className="font-headline-md text-headline-md text-on-surface">
                                        {e.title}
                                    </h2>
                                    <h3 className="font-body-lg text-body-lg text-primary mb-stack-md">
                                        {e.subtitle}
                                    </h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                                        {e.description}
                                    </p>
                                    <div className="flex flex-wrap md:justify-end gap-stack-sm mb-stack-md">
                                        {e.skills.map((s) => {
                                            return (
                                                <span
                                                    key={index + "-" + s}
                                                    className="bg-surface-container-high text-on-secondary-container font-code-sm text-code-sm px-3 py-1 rounded"
                                                >
                                                    {s}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* <!-- Visual Right --> */}
                                <div className={"" + (index%2 === 0 ? "order-1 md:order-2 md:pl-16" : "order-2 md:order-1 md:pr-16")}>
                                    <div className="experience-card border border-outline-variant rounded-xl p-stack-md bg-surface-container-low transition-all duration-300">
                                        <ul className="space-y-stack-sm font-body-md text-body-md text-on-surface-variant">
                                            {e.topThree.map((item, idx) => {
                                                return (
                                                    <li
                                                        className="flex items-start gap-stack-sm"
                                                        key={item + "-" + idx}
                                                    >
                                                        <span
                                                            className="material-symbols-outlined text-tertiary mt-1"
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                            }}
                                                        >
                                                            {index%2 === 0 ? "check_circle" : "bolt"}
                                                        </span>
                                                        {item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <!-- Featured Education Bento (Additional context) --> */}
            <section className="mt-section-gap">
                <h2 className="font-headline-lg text-headline-lg mb-stack-lg">
                    Education & Foundation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
                    <div className="md:col-span-2 p-stack-lg border border-outline-variant rounded-xl bg-surface-container relative overflow-hidden">
                        <div className="relative z-10">
                            <span className="font-label-caps text-primary uppercase block mb-base">
                                Bachlor of Arts
                            </span>
                            <h4 className="font-headline-md text-headline-md mb-stack-sm">
                                Computer Science
                            </h4>
                            <p className="text-on-surface-variant mb-stack-md">
                                University of Wisconsin - Madison | 2014 — 2018
                            </p>
                            {/* <p className="font-body-md text-body-md text-on-surface-variant">
                                {
                                    'Thesis: "Scalable Neural Networks for Distributed Real-time Object Detection in Edge Computing Environments."'
                                }
                            </p> */}
                        </div>
                        {/* <!-- Decorative code snippet in background --> */}
                        <div className="absolute -bottom-4 -right-4 opacity-10 font-code-sm text-code-sm rotate-12 hidden md:block pointer-events-none">
                            <pre>
                                class NeuralNet: def __init__(self, layers):
                                self.layers = layers self.weights =
                                [np.random.randn(y, x) for x, y in
                                zip(layers[:-1], layers[1:])]
                            </pre>
                        </div>
                    </div>
                    {/* <div className="p-stack-lg border border-outline-variant rounded-xl bg-surface-container-high flex flex-col justify-between">
                        <div>
                            <span className="font-label-caps text-tertiary uppercase block mb-base">
                                Continuous Learning
                            </span>
                            <h4 className="font-headline-md text-headline-md mb-stack-sm">
                                Certifications
                            </h4>
                        </div>
                        <ul className="space-y-stack-sm font-code-sm text-code-sm text-on-secondary-container">
                            <li>• AWS Certified Solutions Architect</li>
                            <li>• Google Cloud Professional</li>
                            <li>• Kubernetes Administrator (CKA)</li>
                        </ul>
                    </div> */}
                </div>
            </section>
        </main>
    );
}
