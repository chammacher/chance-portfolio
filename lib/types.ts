export type ExperienceSection = {
    duration: string;
    title: string;
    subtitle: string;
    description: string;
    skills: string[];
    topThree: string[];
};

export type SkillItem = {
    name: string;
    proficiency: number;
    description: string;
};

export type SkillSection = {
    title: string;
    icon: string;
    skills: SkillItem[];
};

export type ProjectBullet = {
    title: string;
    description: string;
    icon?: string;
};

export type ProjectItem = {
    title: string;
    summary: string;
    bullets: ProjectBullet[];
    slug: string;
};

export type HighlightLink = {
    href: string;
    label: string;
};

export type TechnicalInterest = {
    title: string;
    icon: string;
    description: string;
    chips: string[];
};
