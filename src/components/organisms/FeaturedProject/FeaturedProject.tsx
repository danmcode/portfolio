import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Project } from '../../../types';
import { Cm, Str, Syntax } from '../../atoms/Code';
import { TechBadge } from '../../atoms/TechBadge';
import { ArchitectureDiagram } from '../../molecules/ArchitectureDiagram';

interface FeaturedProjectProps {
    project: Project;
}

/** Subtítulo de bloque con forma de comentario: `// arquitectura`. */
const BlockTitle = ({ id, children }: { id?: string; children: React.ReactNode }) => (
    <h3 id={id} className="text-sm font-semibold text-gray-400 mb-3">
        <Syntax>// </Syntax>{children}
    </h3>
);

/**
 * FeaturedProject Component (Organism)
 *
 * Versión ampliada de la tarjeta de proyecto:
 * resumen y resultado, bloques técnicos, diagrama de arquitectura y siguientes pasos.
 */
export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
    const headingId = `project-${project.id}`;

    return (
        <article aria-labelledby={headingId}>
            <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                    <p className="text-xs uppercase tracking-wider text-brand-green mb-1">
                        <Syntax className="">★ </Syntax>Proyecto destacado · {project.context}
                    </p>
                    <h2 id={headingId} className="font-inter text-3xl font-bold text-white">
                        <Syntax className="text-brand-green"># </Syntax>{project.title}
                    </h2>
                    <p className="mt-2 text-gray-300 max-w-2xl">{project.summary}</p>
                </div>
                {project.link && (
                    <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 self-start rounded-md border border-brand-green bg-gray-900/70 px-3 py-2 text-sm text-white hover:bg-brand-green hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                    >
                        <Syntax className="text-brand-green">$ open </Syntax>
                        {project.link.label}
                        <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
                        <span className="sr-only">(abre en una pestaña nueva)</span>
                    </a>
                )}
            </header>

            {project.result && (
                <p className="mb-8 rounded-md bg-gray-900/70 border-s-4 border-green-400 px-4 py-3 text-white">
                    <span className="text-green-400 font-semibold me-2"><Syntax className="">✔ </Syntax>resultado:</span>
                    {project.result}
                </p>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                    <BlockTitle>arquitectura</BlockTitle>
                    <ArchitectureDiagram />

                    {project.nextSteps && (
                        <section aria-labelledby={`${headingId}-next`} className="mt-8">
                            <BlockTitle id={`${headingId}-next`}>siguientes pasos</BlockTitle>
                            <Cm className="block mb-2">Decisiones técnicas identificadas:</Cm>
                            <ul className="space-y-1">
                                {project.nextSteps.map((step) => (
                                    <li key={step} className="flex gap-2">
                                        <Syntax className="text-yellow-300 flex-shrink-0">[ ]</Syntax>
                                        <span className="text-gray-300">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
                    {project.details?.map((block) => (
                        <section key={block.title}>
                            <h3 className="text-green-400 font-semibold mb-2">
                                <Syntax className="text-blue-400">const </Syntax>
                                {block.title}
                                <Syntax className="text-gray-300"> = [</Syntax>
                            </h3>
                            <ul className="ps-4 space-y-1">
                                {block.items.map((item) => (
                                    <li key={item}>
                                        <Str>{item}</Str><Syntax>,</Syntax>
                                    </li>
                                ))}
                            </ul>
                            <Syntax className="text-gray-300">];</Syntax>
                        </section>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <BlockTitle>stack</BlockTitle>
                <ul className="flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
                    {project.stack.map((id) => <li key={id}><TechBadge id={id} size="md" /></li>)}
                </ul>
            </div>
        </article>
    );
};
