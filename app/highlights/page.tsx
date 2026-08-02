'use client';

import { useEffect, useState } from 'react';

type ProjectBullet = {
    title: string;
    description: string;
};

type ProjectItem = {
    title: string;
    summary: string;
    bullets: ProjectBullet[];
    slug: string;
};

const projectContent: ProjectItem[] = [
    {
        title: 'UI Modernization & Design Systems',
        slug: 'ui-modernization-design-systems',
        summary:
            'A full-stack design modernization effort that simplified fragmented interfaces and improved consistency across product surfaces.',
        bullets: [
            {
                title: '01. Problem',
                description:
                    'Legacy interfaces were inconsistent across a growing set of micro-frontends, creating maintenance drag and slowing release velocity.',
            },
            {
                title: '02. Schema',
                description:
                    'Dynamic design tokens and shared layout metadata were normalized so teams could evolve the system without duplicated effort.',
            },
            {
                title: '03. Logic',
                description:
                    'Atomic design principles were applied alongside visual regression checks so changes stayed stable through CI/CD.',
            },
            {
                title: '04. UI Flexibility',
                description:
                    'Headless UI components and Tailwind-based theming made the experience flexible while keeping the implementation lean.',
            },
        ],
    },
    {
        title: 'Configurable Onboarding Platform',
        slug: 'configurable-onboarding-platform',
        summary:
            'A configurable onboarding platform transformed manual delivery into a scalable workflow that clients could adapt without engineering support.',
        bullets: [
            {
                title: '01. Problem',
                description:
                    'Client onboarding took weeks because each setup relied on hardcoded steps and manual document coordination.',
            },
            {
                title: '02. Schema',
                description:
                    'Workflow logic, edge conditions, and field requirements were modeled as reusable content so onboarding could be changed safely.',
            },
            {
                title: '03. Logic',
                description:
                    'A directed acyclic graph engine handled conditional branching in real time and reduced handoffs between teams.',
            },
            {
                title: '04. UI Flexibility',
                description:
                    'A JSON-driven builder gave non-technical admins control over flows while preserving a polished experience for end users.',
            },
        ],
    },
    {
        title: 'AI-Powered Analytics Experience',
        slug: 'ai-powered-analytics-experience',
        summary:
            'An analytics experience brought together data exploration, guided insights, and rapid iteration for teams making operational decisions.',
        bullets: [
            {
                title: '01. Problem',
                description:
                    'Operators had to piece together dashboards manually and lacked a shared path from raw data to action.',
            },
            {
                title: '02. Schema',
                description:
                    'A layered content model connected metrics, explanations, and recommended actions into a single context-aware view.',
            },
            {
                title: '03. Logic',
                description:
                    'Realtime summarization and contextual prompts helped teams move from question to decision without context switching.',
            },
            {
                title: '04. UI Flexibility',
                description:
                    'The interface adapted to different roles so executives, analysts, and operators each saw the right level of detail.',
            },
        ],
    },
    {
        title: "Led Contractor Development",
        slug: "led-contractor-development",
        summary: "Led a small team of contractors to deliver high growth and high impact items.",
        bullets: [
            {
                title: "01. Problem",
                description:
                    "Projects were in need of additional engineering support to meet deadlines and deliver high quality work.",
            },
            {
                title: "02. Schema",
                description:
                    "A clear project roadmap and task breakdown was created to ensure contractors had a clear understanding of their responsibilities.",
            },
            {
                title: "03. Logic",
                description:
                    "Regular check-ins and code reviews were conducted to ensure quality and consistency across the team.",
            },
            {
                title: "04. UI Flexibility",
                description:
                    "The team was able to adapt to changing requirements and priorities, delivering high quality work on time.",
            }
        ],
    },
    {
        title: "Designed a Reusable React Design System",
        slug: "designed-reusable-react-design-system",
        summary: "A reusable React design system that improved consistency and efficiency across multiple projects.",
        bullets: [
            {
                title: "01. Problem",
                description: "Inconsistent UI patterns and duplicated frontend code made features slower to build and harder to maintain.",
            },
            {
                title: "02. Schema",
                description: "A shared component architecture with standardized variants, states, sizing, accessibility rules, and design tokens.",
            },
            {
                title: "03. Logic",
                description: "Reusable React components centralized common behavior, validation, responsiveness, and interaction patterns.",
            },
            {
                title: "04. UI Flexibility",
                description: "Configurable props and composable layouts allowed components to support different workflows without sacrificing consistency.",
            }
        ],
    },
    {
        title: "Developed Agentic AI Assistants",
        slug: "developed-agentic-ai-assistants",
        summary: "An AI assistant that can autonomously perform tasks and make decisions to lessen daily admin burden.",
        bullets: [
            {
                title: "01. Problem",
                description: "Repetitive administrative tasks consumed time and required frequent manual follow-up.",
            },
            {
                title: "02. Schema",
                description: "A modular agent architecture connecting user requests, business data, tools, permissions, and action results.",
            },
            {
                title: "03. Logic",
                description: "The assistant interprets intent, selects the appropriate tools, evaluates context, and completes multi-step tasks with safeguards.",
            },
            {
                title: "04. UI Flexibility",
                description: "A conversational interface supports guided actions, approvals, status updates, and reusable workflows across different administrative processes.",
            }
        ],
    }
];

const getProjectFromHash = (hash: string) => {
    const slug = hash.replace(/^#/, "");

    return projectContent.find((project) => project.slug === slug) ?? projectContent[0];
};

export default function HighlightsPage() {
    const [activeProject, setActiveProject] = useState(projectContent[0].title);

    useEffect(() => {
        const syncProjectFromHash = () => {
            setActiveProject(getProjectFromHash(window.location.hash).title);
        };

        syncProjectFromHash();
        window.addEventListener("hashchange", syncProjectFromHash);

        return () => {
            window.removeEventListener("hashchange", syncProjectFromHash);
        };
    }, []);

    const selectedProject =
        projectContent.find((project) => project.title === activeProject) ??
        projectContent[0];

    const handleProjectClick = (slug: string) => {
        window.history.replaceState(null, "", `#${slug}`);
        setActiveProject(getProjectFromHash(`#${slug}`).title);
    };

    return (
        <main className="mt-24 mb-section-gap max-w-container-max mx-auto px-gutter">
            <header className="mb-stack-lg">
                <h1 className="font-display text-display mb-stack-sm md:text-headline-lg lg:text-display">
                    Project Archive.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    A curated selection of technical solutions, architectural
                    explorations, and open-source contributions crafted with
                    precision and performance in mind.
                </p>
            </header>

            <section className="mb-stack-lg rounded-xl border border-outline-variant bg-surface-container-low p-gutter">
                <h2 className="mb-stack-lg font-headline-md text-headline-md text-on-surface">
                    Engineering Highlights
                </h2>
                <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2 lg:grid-cols-3">
                    {projectContent.map((project) => {
                        const isActive = project.title === selectedProject.title;

                        return (
                            <button
                                key={project.title}
                                type="button"
                                onClick={() => handleProjectClick(project.slug)}
                                className={`rounded-xl border p-gutter text-left transition-all cursor-pointer ${
                                    isActive
                                        ? 'border-primary bg-surface-container shadow-sm'
                                        : 'border-outline-variant bg-surface-container-low hover:border-primary'
                                }`}
                            >
                                <div className="flex items-start justify-between gap-stack-sm">
                                    <div>
                                        <h3 className="font-headline-md text-on-surface">
                                            {project.title}
                                        </h3>
                                        <p className="mt-base text-body-md text-on-surface-variant">
                                            {project.summary}
                                        </p>
                                    </div>
                                    <span
                                        className={`material-symbols-outlined ${
                                            isActive
                                                ? 'text-primary'
                                                : 'text-on-surface-variant'
                                        }`}
                                    >
                                        {isActive ? 'expand_less' : 'open_in_new'}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-low p-gutter">
                <div className="mb-stack-lg flex items-start justify-between gap-stack-sm">
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                            Technical Case Studies
                        </h2>
                        <p className="mt-base text-body-md text-on-surface-variant">
                            Select a project to expand its detailed breakdown.
                        </p>
                    </div>
                    <span className="rounded-full border border-primary/30 px-3 py-1 text-label-md text-primary">
                        {selectedProject.title}
                    </span>
                </div>

                <div className="rounded-xl border border-outline-variant bg-surface-container p-gutter">
                    <h3 className="font-headline-md text-on-surface">
                        {selectedProject.title}
                    </h3>
                    <p className="mt-base text-body-md text-on-surface-variant">
                        {selectedProject.summary}
                    </p>

                    <ol className="mt-stack-lg space-y-stack-sm">
                        {selectedProject.bullets.map((bullet, index) => (
                            <li
                                key={`${selectedProject.title}-${bullet.title}`}
                                className="rounded-lg border border-outline-variant bg-surface-container-low p-gutter"
                            >
                                <div className="flex gap-stack-sm">
                                    <span className="font-label-caps text-primary">
                                        {String(index + 1).padStart(2, '0')}.
                                    </span>
                                    <div>
                                        <h4 className="font-label-caps text-tertiary">
                                            {bullet.title.replace(/^\d+\.\s*/, '')}
                                        </h4>
                                        <p className="mt-base text-body-md text-on-surface-variant">
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </main>
    );
}
