import {
    ExperienceSection,
    ProjectItem,
    SkillSection,
    HighlightLink,
    TechnicalInterest,
} from "./types";

export const experience: ExperienceSection[] = [
    {
        duration: "Oct 2018 — Present",
        title: "Senior Full-Stack Developer",
        subtitle: "Ops.Work",
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
        subtitle: "SSEC, UW–Madison",
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

export const skillsGridContent: SkillSection[] = [
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
];

export const engineeringHighlights: HighlightLink[] = [
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

export const technicalInterests: TechnicalInterest[] = [
    {
        title: "Cloud Infrastructure & Architecture",
        icon: "☁️",
        description:
            "Designing resilient, auto-scaling architectures on AWS and GCP. Obsessed with Terraform and the Infrastructure as Code philosophy.",
        chips: ["Kubernetes", "Docker", "Terraform"],
    },
    {
        title: "Design Systems & Tokens",
        icon: "🎨",
        description:
            "Building with the grain of the web. TypeScript, React, and Next.js are my tools of choice for creating performant, accessible UIs.",
        chips: ["React 18", "TypeScript", "Tailwind"],
    },
    {
        title: "Performance Optimization",
        icon: "⚡",
        description:
            "From reducing TTI to optimizing database queries, I find joy in shaving off milliseconds.",
        chips: ["TTI", "Query Tuning", "Browser Perf"],
    },
];

export const projectContent: ProjectItem[] = [
    {
        title: "UI Modernization & Design Systems",
        slug: "ui-modernization-design-systems",
        summary:
            "A full-stack design modernization effort that simplified fragmented interfaces and improved consistency across product surfaces.",
        bullets: [
            {
                title: "01. Problem",
                icon: "🎯",
                description:
                    "Legacy interfaces were inconsistent across a growing set of micro-frontends, creating maintenance drag and slowing release velocity.",
            },
            {
                title: "02. Schema",
                icon: "📝",
                description:
                    "Dynamic design tokens and shared layout metadata were normalized so teams could evolve the system without duplicated effort.",
            },
            {
                title: "03. Logic",
                icon: "🔀",
                description:
                    "Atomic design principles were applied alongside visual regression checks so changes stayed stable through CI/CD.",
            },
            {
                title: "04. UI Flexibility",
                icon: "🎨",
                description:
                    "Headless UI components and Tailwind-based theming made the experience flexible while keeping the implementation lean.",
            },
        ],
    },
    {
        title: "Configurable Onboarding Platform",
        slug: "configurable-onboarding-platform",
        summary:
            "A configurable onboarding platform transformed manual delivery into a scalable workflow that clients could adapt without engineering support.",
        bullets: [
            {
                title: "01. Problem",
                icon: "🎯",
                description:
                    "Client onboarding took weeks because each setup relied on hardcoded steps and manual document coordination.",
            },
            {
                title: "02. Schema",
                icon: "📝",
                description:
                    "Workflow logic, edge conditions, and field requirements were modeled as reusable content so onboarding could be changed safely.",
            },
            {
                title: "03. Logic",
                icon: "🔀",
                description:
                    "A directed acyclic graph engine handled conditional branching in real time and reduced handoffs between teams.",
            },
            {
                title: "04. UI Flexibility",
                icon: "🎨",
                description:
                    "A JSON-driven builder gave non-technical admins control over flows while preserving a polished experience for end users.",
            },
        ],
    },
    {
        title: "AI-Powered Analytics Experience",
        slug: "ai-powered-analytics-experience",
        summary:
            "An analytics experience brought together data exploration, guided insights, and rapid iteration for teams making operational decisions.",
        bullets: [
            {
                title: "01. Problem",
                icon: "🎯",
                description:
                    "Operators had to piece together dashboards manually and lacked a shared path from raw data to action.",
            },
            {
                title: "02. Schema",
                icon: "📝",
                description:
                    "A layered content model connected metrics, explanations, and recommended actions into a single context-aware view.",
            },
            {
                title: "03. Logic",
                icon: "🔀",
                description:
                    "Realtime summarization and contextual prompts helped teams move from question to decision without context switching.",
            },
            {
                title: "04. UI Flexibility",
                icon: "🎨",
                description:
                    "The interface adapted to different roles so executives, analysts, and operators each saw the right level of detail.",
            },
        ],
    },
    {
        title: "Led Contractor Development",
        slug: "led-contractor-development",
        summary:
            "Led a small team of contractors to deliver high growth and high impact items.",
        bullets: [
            {
                title: "01. Problem",
                icon: "🎯",
                description:
                    "Projects were in need of additional engineering support to meet deadlines and deliver high quality work.",
            },
            {
                title: "02. Schema",
                icon: "📝",
                description:
                    "A clear project roadmap and task breakdown was created to ensure contractors had a clear understanding of their responsibilities.",
            },
            {
                title: "03. Logic",
                icon: "🔀",
                description:
                    "Regular check-ins and code reviews were conducted to ensure quality and consistency across the team.",
            },
            {
                title: "04. UI Flexibility",
                icon: "🎨",
                description:
                    "The team was able to adapt to changing requirements and priorities, delivering high quality work on time.",
            },
        ],
    },
    {
        title: "Designed a Reusable React Design System",
        slug: "designed-reusable-react-design-system",
        summary:
            "A reusable React design system that improved consistency and efficiency across multiple projects.",
        bullets: [
            {
                title: "01. Problem",
                icon: "🎯",
                description:
                    "Inconsistent UI patterns and duplicated frontend code made features slower to build and harder to maintain.",
            },
            {
                title: "02. Schema",
                icon: "📝",
                description:
                    "A shared component architecture with standardized variants, states, sizing, accessibility rules, and design tokens.",
            },
            {
                title: "03. Logic",
                icon: "🔀",
                description:
                    "Reusable React components centralized common behavior, validation, responsiveness, and interaction patterns.",
            },
            {
                title: "04. UI Flexibility",
                icon: "🎨",
                description:
                    "Configurable props and composable layouts allowed components to support different workflows without sacrificing consistency.",
            },
        ],
    },
    {
        title: "Developed Agentic AI Assistants",
        slug: "developed-agentic-ai-assistants",
        summary:
            "An AI assistant that can autonomously perform tasks and make decisions to lessen daily admin burden.",
        bullets: [
            {
                title: "01. Problem",
                icon: "🎯",
                description:
                    "Repetitive administrative tasks consumed time and required frequent manual follow-up.",
            },
            {
                title: "02. Schema",
                icon: "📝",
                description:
                    "A modular agent architecture connecting user requests, business data, tools, permissions, and action results.",
            },
            {
                title: "03. Logic",
                icon: "🔀",
                description:
                    "The assistant interprets intent, selects the appropriate tools, evaluates context, and completes multi-step tasks with safeguards.",
            },
            {
                title: "04. UI Flexibility",
                icon: "🎨",
                description:
                    "A conversational interface supports guided actions, approvals, status updates, and reusable workflows across different administrative processes.",
            },
        ],
    },
];

export const getProjectFromHash = (hash: string) => {
    const slug = hash.replace(/^#/, "");

    return (
        projectContent.find((project) => project.slug === slug) ??
        projectContent[0]
    );
};
