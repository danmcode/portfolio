import type { TechId } from '../data/tech';

export type { TechId };

/** Bloque de detalle técnico (ej. "Backend", "Seguridad") de un proyecto destacado. */
export interface ProjectDetailBlock {
    title: string;
    items: string[];
}

export interface Project {
    id: string;
    title: string;
    /** Empresa o contexto del proyecto (ej. "Protécnica Ingeniería"). */
    context: string;
    /** Etiqueta de visibilidad del código, ej. "Proyecto empresarial — código privado". */
    badge?: string;
    summary: string;
    /** Problema que resolvía. Opcional: si falta, la tarjeta omite la sección. */
    problem?: string;
    solution: string[];
    stack: TechId[];
    /** Resultado medible. Opcional: si falta, la tarjeta omite la sección. */
    result?: string;
    link?: { href: string; label: string };
    /** Solo para el proyecto destacado. */
    details?: ProjectDetailBlock[];
    nextSteps?: string[];
}

export interface ExperienceEntry {
    id: string;
    title: string;
    company: string;
    location?: string;
    duration: string;
    highlights: string[];
}

export interface SkillGroup {
    title: string;
    skills: TechId[];
}

export interface EducationEntry {
    title: string;
    institution: string;
    period?: string;
    note?: string;
}

export interface Language {
    name: string;
    level: string;
}
