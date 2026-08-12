"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { getProjectFromHash, projectContent } from "@/lib/data";

export default function HighlightsPage() {
    const { theme, resolvedTheme } = useTheme();
    const currentTheme =
        theme === "system" ? (resolvedTheme ?? "light") : (theme ?? "light");

    const [activeProject, setActiveProject] = useState(projectContent[0].title);
    const [expandedBulletIndex, setExpandedBulletIndex] = useState<number | null>(null);

    useEffect(() => {
        const syncProjectFromHash = () => {
            setActiveProject(getProjectFromHash(window.location.hash).title);
            setExpandedBulletIndex(null);
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

    if (currentTheme === "light") {
        return (
            <main className="flex-grow w-full max-w-container-max mx-auto px-md md:px-xl py-xl md:py-20">
                {/* <!-- Engineering Highlights Section --> */}
                <section className="mt-lg">
                    <h2 className="font-h3 text-h3 text-on-surface mb-md flex items-center gap-sm">
                        <span className="material-symbols-outlined text-outline">
                            architecture
                        </span>
                        Engineering Highlights
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-md ml-indent">
                        A selection of pivotal technical contributions and
                        architectural decisions across recent projects.
                    </p>
                    {/* <!-- Highlights Grid (Notion Callout Style) --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md ml-indent mb-lg">
                        {/* <!-- Callout Item 1 --> */}
                         {projectContent.map((project) => {
                        const isActive =
                            project.title === selectedProject.title;

                        return (
                            <div
                                key={project.title}
                                onClick={() => handleProjectClick(project.slug)}
                                className={`notion-block rounded-lg p-md flex items-start gap-md hover:bg-surface-container-high cursor-pointer ${
                                    isActive
                                        ? "border-primary bg-surface-container-high shadow-sm"
                                        : "border-outline-variant bg-surface-container-low hover:border-primary"
                                }`}>
                                <span className="text-[20px] leading-none emoji-icon mt-xs">
                                    ✅
                                </span>
                                <div className="font-body-md text-body-md text-on-surface">
                                    {project.title}
                                </div>
                            </div>
                        )
                    })}                   
                    </div>
                    <article className="flex flex-col gap-md bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-sm">
                                <span className="text-[24px]">🎨</span>
                                <h2 className="font-h2 text-h2 text-on-surface">
                                    {selectedProject.title}
                                </h2>
                            </div>
                            <span className="bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded-full">
                                Completed
                            </span>
                        </div>
                        <div className="font-body-md text-body-md text-on-surface-variant pl-indent">
                            {selectedProject.summary}
                        </div>
                        {/* <!-- Toggles for Case Study 1 --> */}
                        <div className="pl-indent flex flex-col gap-sm mt-sm">
                            {/* <!-- Toggle Item --> */}
                            {selectedProject.bullets.map((bullet, index) => {
                                const isExpanded = expandedBulletIndex === index;

                                return (
                                    <div className="toggle-group" key={`${selectedProject.title}-${bullet.title}`}>
                                        <button
                                            type="button"
                                            className="cursor-pointer flex items-center gap-sm w-full text-left py-1 hover:bg-surface-container-low rounded transition-colors"
                                            onClick={() =>
                                                setExpandedBulletIndex((current) =>
                                                    current === index ? null : index,
                                                )
                                            }
                                            aria-expanded={isExpanded}
                                        >
                                            <span
                                                className={`material-symbols-outlined text-[16px] toggle-icon text-on-surface-variant ${
                                                    isExpanded ? "transform rotate-90" : ""
                                                }`}
                                            >
                                                chevron_right
                                            </span>
                                            <span className="text-[16px]">{bullet.icon}</span>
                                            <span className="font-body-md text-body-md font-medium text-on-surface">
                                                {bullet.title.replace(/^(\d+\.)\s*/, "")}
                                            </span>
                                        </button>
                                        <div
                                            className={`toggle-content pl-indent pt-sm pb-md font-body-sm text-body-sm text-on-surface-variant border-l border-outline-variant ml-[8px] ${
                                                isExpanded ? "" : "hidden"
                                            }`}
                                        >
                                            {bullet.description}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                </section>
                {/* <!-- Divider --> */}
                <hr className="border-t border-outline-variant opacity-50 my-lg" />
                {/* <!-- End of page marker (Subtle) --> */}
                <div className="flex justify-center mt-xl opacity-30 text-outline">
                    <span className="material-symbols-outlined text-[16px]">
                        page_info
                    </span>
                </div>
            </main>
        );
    }

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
                        const isActive =
                            project.title === selectedProject.title;

                        return (
                            <button
                                key={project.title}
                                type="button"
                                onClick={() => handleProjectClick(project.slug)}
                                className={`rounded-xl border p-gutter text-left transition-all cursor-pointer ${
                                    isActive
                                        ? "border-primary bg-surface-container shadow-sm"
                                        : "border-outline-variant bg-surface-container-low hover:border-primary"
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
                                                ? "text-primary"
                                                : "text-on-surface-variant"
                                        }`}
                                    >
                                        {isActive
                                            ? "expand_less"
                                            : "open_in_new"}
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
                                        {String(index + 1).padStart(2, "0")}.
                                    </span>
                                    <div>
                                        <h4 className="font-label-caps text-tertiary">
                                            {bullet.title.replace(
                                                /^\d+\.\s*/,
                                                "",
                                            )}
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
