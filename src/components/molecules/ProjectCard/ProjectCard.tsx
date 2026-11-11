import { LockClosedIcon } from '@heroicons/react/24/outline';
import type { Project } from '../../../types';
import { TechBadge } from '../../atoms/TechBadge';

interface ProjectCardProps {
    project: Project;
}

const Step = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
        <dt className="font-mono text-xs uppercase tracking-wider text-brand-green mb-1">{label}</dt>
        <dd className="text-sm leading-relaxed text-gray-300">{children}</dd>
    </div>
);

/**
 * ProjectCard Component (Molecule)
 *
 * Tarjeta de proyecto con la estructura problema → solución → stack → resultado.
 * Las secciones sin datos (problem/result) se omiten en lugar de mostrar texto de relleno.
 */
export const ProjectCard = ({ project }: ProjectCardProps) => {
    const headingId = `project-${project.id}`;

    return (
        <article
            aria-labelledby={headingId}
            className="flex flex-col h-full bg-gray-800 border border-gray-700 rounded-xl p-5 sm:p-6"
        >
            <header className="mb-4">
                <p className="text-xs text-gray-400 mb-1">{project.context}</p>
                <h3 id={headingId} className="text-xl font-semibold text-white">{project.title}</h3>
                {project.badge && (
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-gray-900/70 px-2 py-1 text-xs text-gray-300">
                        <LockClosedIcon aria-hidden="true" className="h-3.5 w-3.5" />
                        {project.badge}
                    </p>
                )}
                <p className="mt-3 text-sm text-gray-300">{project.summary}</p>
            </header>

            <dl className="flex flex-col gap-4 flex-grow">
                {project.problem && <Step label="Problema">{project.problem}</Step>}
                <Step label="Solución">
                    <ul className="list-disc ps-5 space-y-1">
                        {project.solution.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </Step>
                <Step label="Stack">
                    <ul className="flex flex-wrap gap-2 mt-1" aria-label={`Tecnologías de ${project.title}`}>
                        {project.stack.map((id) => <li key={id}><TechBadge id={id} /></li>)}
                    </ul>
                </Step>
                {project.result && (
                    <Step label="Resultado">
                        <span className="font-semibold text-white">{project.result}</span>
                    </Step>
                )}
            </dl>
        </article>
    );
};
