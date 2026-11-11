import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Project } from '../../../types';
import { TechBadge } from '../../atoms/TechBadge';
import { ArchitectureDiagram } from '../../molecules/ArchitectureDiagram';

interface FeaturedProjectProps {
    project: Project;
}

/**
 * FeaturedProject Component (Organism)
 *
 * Versión ampliada de la tarjeta de proyecto: resumen y resultado, bloques técnicos,
 * diagrama de arquitectura y siguientes pasos.
 */
export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
    const headingId = `project-${project.id}`;

    return (
        <article
            aria-labelledby={headingId}
            className="bg-gray-800 border border-brand-green/50 rounded-xl p-5 sm:p-8 shadow-lg shadow-brand-green/10"
        >
            <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-brand-green mb-1">
                        Proyecto destacado · {project.context}
                    </p>
                    <h3 id={headingId} className="text-3xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-base text-gray-300 max-w-2xl">{project.summary}</p>
                </div>
                {project.link && (
                    <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 self-start rounded-full border border-brand-green px-4 py-2 text-sm font-medium text-white hover:bg-brand-green hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                    >
                        {project.link.label}
                        <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
                        <span className="sr-only">(abre en una pestaña nueva)</span>
                    </a>
                )}
            </header>

            {project.result && (
                <p className="mb-6 rounded-lg bg-gray-900/60 border-s-4 border-brand-green px-4 py-3 text-sm text-white">
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-green me-2">Resultado</span>
                    {project.result}
                </p>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-brand-green mb-3">Arquitectura</h4>
                    <ArchitectureDiagram />

                    {project.nextSteps && (
                        <section aria-labelledby={`${headingId}-next`} className="mt-6">
                            <h4 id={`${headingId}-next`} className="font-mono text-xs uppercase tracking-wider text-brand-green mb-2">
                                Siguientes pasos
                            </h4>
                            <p className="text-sm text-gray-400 mb-2">Decisiones técnicas identificadas:</p>
                            <ul className="list-disc ps-5 space-y-1 text-sm text-gray-300">
                                {project.nextSteps.map((step) => <li key={step}>{step}</li>)}
                            </ul>
                        </section>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
                    {project.details?.map((block) => (
                        <section key={block.title}>
                            <h4 className="text-base font-semibold text-white mb-2">{block.title}</h4>
                            <ul className="list-disc ps-5 space-y-1 text-sm text-gray-300">
                                {block.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-brand-green mb-3">Stack</h4>
                <ul className="flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
                    {project.stack.map((id) => <li key={id}><TechBadge id={id} size="md" /></li>)}
                </ul>
            </div>
        </article>
    );
};
