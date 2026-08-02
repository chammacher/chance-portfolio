"use client";


export default function SkillsPage() {
    return (
        <main className="mt-24 max-w-container-max mx-auto px-gutter">
            {/* <!-- Hero Section / Professional Bio --> */}
            <section className="mb-section-gap">
                <div className="flex flex-col lg:flex-row gap-stack-lg items-start">
                    <div className="lg:w-2/3 space-y-stack-md">
                        <div className="inline-block px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant">
                            <span className="font-label-caps text-label-caps text-tertiary">
                                FULL-STACK DEVELOPER
                            </span>
                        </div>
                        <h1 className="font-display text-display lg:text-display text-headline-lg-mobile">
                            Engineering{" "}
                            <span className="text-primary">Scalable</span>{" "}
                            Digital Systems.
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                            I am a Senior software engineer with 11+ years of experience designing, developing, and operating production software, including 8+ years building healthcare-focused SaaS applications. Experienced in end-to-end ownership across React and TypeScript frontends, Node.js backend services, REST APIs, PostgreSQL, AWS, Kubernetes, and CI/CD. Proven ability to translate business requirements into maintainable software, lead technical initiatives, modernize application architecture and user experiences, and deliver secure solutions in regulated environments.
                        </p>
                    </div>
                    <div className="lg:w-1/3 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square overflow-hidden rounded-xl ghost-border">
                                <img
                                    className="w-full h-full object-cover transition-all duration-500"
                                    data-alt="A professional, high-end portrait of a software developer in a dark, minimalist studio. The lighting is dramatic and technical, with cool blue rim lights highlighting the subject's profile against a deep navy background. The overall aesthetic is clean, sharp, and modern, reflecting a sense of technical mastery and professional focus."
                                    src="https://api.dicebear.com/10.x/glyphs/svg?seed=rbwoctsc"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- By the Numbers Grid --> */}
            <section className="mb-section-gap">
                <h2 className="font-headline-lg text-headline-lg mb-stack-lg border-l-4 border-primary pl-4">
                    By the Tech
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md">
                    <div className="p-stack-md bg-surface-container-low ghost-border rounded-xl flex flex-col justify-center transition-transform hover:-translate-y-1">
                        <span className="font-display text-headline-lg text-primary">
                            08+
                        </span>
                        <span className="font-label-caps text-label-caps text-on-surface-variant">
                            Years of Experience
                        </span>
                    </div>
                    <div className="p-stack-md bg-surface-container-low ghost-border rounded-xl flex flex-col justify-center transition-transform hover:-translate-y-1">
                        <span className="font-display text-headline-lg text-tertiary">
                            React
                        </span>
                        <span className="font-label-caps text-label-caps text-on-surface-variant">
                            Frontend
                        </span>
                    </div>
                    <div className="p-stack-md bg-surface-container-low ghost-border rounded-xl flex flex-col justify-center transition-transform hover:-translate-y-1">
                        <span className="font-display text-headline-lg text-secondary">
                            Node
                        </span>
                        <span className="font-label-caps text-label-caps text-on-surface-variant">
                            Backend
                        </span>
                    </div>
                    <div className="p-stack-md bg-surface-container-low ghost-border rounded-xl flex flex-col justify-center transition-transform hover:-translate-y-1">
                        <span className="font-display text-headline-lg text-on-surface">
                            AWS
                        </span>
                        <span className="font-label-caps text-label-caps text-on-surface-variant">
                            Cloud Service
                        </span>
                    </div>
                </div>
            </section>
            {/* <!-- Technical Interests - Bento Grid Layout --> */}
            <section className="mb-section-gap">
                <h2 className="font-headline-lg text-headline-lg mb-stack-lg border-l-4 border-tertiary pl-4">
                    Technical Interests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-stack-md h-auto lg:h-[450px]">
                    {/* <!-- Cloud Infrastructure --> */}
                    <div className="md:col-span-3 bg-surface-container-low ghost-border rounded-xl p-stack-md flex flex-col justify-between overflow-hidden relative group">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">
                                cloud
                            </span>
                            <h3 className="font-headline-md text-headline-md mb-2">
                                Cloud Infrastructure
                            </h3>
                            <p className="text-on-surface-variant font-body-md">
                                Designing resilient, auto-scaling architectures
                                on AWS and GCP. Obsessed with Terraform and the
                                "Infrastructure as Code" philosophy.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 relative z-10 mt-4">
                            <span className="bg-surface-container-high px-3 py-1 rounded text-code-sm font-code-sm text-secondary">
                                Kubernetes
                            </span>
                            <span className="bg-surface-container-high px-3 py-1 rounded text-code-sm font-code-sm text-secondary">
                                Docker
                            </span>
                            <span className="bg-surface-container-high px-3 py-1 rounded text-code-sm font-code-sm text-secondary">
                                Terraform
                            </span>
                        </div>
                    </div>
                    {/* <!-- Web Standards --> */}
                    <div className="md:col-span-3 bg-surface-container-low ghost-border rounded-xl p-stack-md flex flex-col justify-between group">
                        <div>
                            <span className="material-symbols-outlined text-primary text-4xl mb-4">
                                code_blocks
                            </span>
                            <h3 className="font-headline-md text-headline-md mb-2">
                                Modern Web Standards
                            </h3>
                            <p className="text-on-surface-variant font-body-md">
                                Building with the grain of the web. TypeScript,
                                React, and Next.js are my tools of choice for
                                creating performant, accessible UIs.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-surface-container-high px-3 py-1 rounded text-code-sm font-code-sm text-secondary">
                                React 18
                            </span>
                            <span className="bg-surface-container-high px-3 py-1 rounded text-code-sm font-code-sm text-secondary">
                                TypeScript
                            </span>
                            <span className="bg-surface-container-high px-3 py-1 rounded text-code-sm font-code-sm text-secondary">
                                Tailwind
                            </span>
                        </div>
                    </div>
                    {/* <!-- Deep Learning --> */}
                    <div className="md:col-span-2 bg-surface-container-low ghost-border rounded-xl p-stack-md group">
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                            psychology
                        </span>
                        <h3 className="font-headline-md text-headline-md mb-2">
                            ML / AI
                        </h3>
                        <p className="text-on-surface-variant font-body-md">
                            Exploring RAG pipelines and LLM integration for
                            smarter apps.
                        </p>
                    </div>
                    {/* <!-- System Performance --> */}
                    <div className="md:col-span-4 bg-surface-container-low ghost-border rounded-xl p-stack-md flex items-center gap-stack-md group">
                        <div className="flex-1">
                            <h3 className="font-headline-md text-headline-md mb-2">
                                Performance Optimization
                            </h3>
                            <p className="text-on-surface-variant font-body-md">
                                From reducing TTI to optimizing database
                                queries, I find joy in shaving off milliseconds.
                            </p>
                        </div>
                        <div className="w-24 h-24 flex items-center justify-center bg-surface-container-high rounded-full border border-outline-variant">
                            <span className="material-symbols-outlined text-tertiary text-5xl group-hover:rotate-12 transition-transform">
                                speed
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Personal Philosophy / Code Block --> */}
            <section className="mb-section-gap">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden shadow-2xl">
                        <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <span className="font-code-sm text-code-sm text-on-surface-variant">
                                philosophy.ts
                            </span>
                            <button className="text-on-surface-variant hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">
                                    content_copy
                                </span>
                            </button>
                        </div>
                        <div className="p-stack-lg font-code-sm text-code-sm leading-relaxed overflow-x-auto">
                            <pre className="whitespace-pre">
                                <code className="text-on-surface">
                                    
        <span className="text-tertiary">const</span> <span className="text-primary">developer</span>{" = { \n"}
            {"  "}name: <span className="text-secondary">'Chance Dev'</span>,{"\n"}
            {"  "}mantra: <span className="text-secondary">'Build it right, or don't build it at all.'</span>,{"\n"}
            {"  "}values: [{"\n"}
                {"    "}<span className="text-secondary">'Architectural Integrity'</span>,{"\n"}
                {"    "}<span className="text-secondary">'User-Centric Design'</span>,{"\n"}
                {"    "}<span className="text-secondary">'Radical Transparency'</span>{"\n"}
            ],{"\n"}
            {"  "}solveProblem: (<span className="text-primary">complexity</span>) =&gt; {"{\n"}
                {"    "}<span className="text-on-surface-variant">// Strip away the unnecessary</span>{"\n"}
                {"    "}<span className="text-tertiary">return</span> simplify(complexity);{"\n"}
            {"  }"},{"\n"}
        {"};"},{"\n"}

        <span className="text-outline">/* My goal is to create software that feels
        inevitable in its simplicity. */</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
