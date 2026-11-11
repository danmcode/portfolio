export interface ProjectData {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    fullDescription: string;
    technologies: string[];
    screenshots: string[];
}

export interface ExperienceEntry {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string;
}
