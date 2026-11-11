import { LockClosedIcon } from '@heroicons/react/24/outline';
import type { Project } from '../../../types';
import { Cm, Decl, Str, Syntax } from '../../atoms/Code';
import { TechBadge } from '../../atoms/TechBadge';

interface ProjectCardProps {
    project: Project;
}

/**
 * ProjectCard Component (Molecule)
 *
 * Proyecto con la estructura problema → solución → stack → resultado,
 * escrita como código. Las secciones sin datos (problem/result) se omiten.
 */
export const ProjectCard = ({ project }: ProjectCardProps) => {
    const headingId = `project-${project.id}`;

    return (
        <article aria-labelledby={headingId} className="max-w-3xl">
            <header className="mb-4">
                <Cm className="block text-xs"><Syntax>// </Syntax>{project.context}</Cm>
                <h2 id={headingId} className="mt-1 text-xl font-bold text-yellow-300">{project.title}</h2>
                {project.badge && (
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-gray-900/70 px-2 py-1 text-xs text-gray-300">
                        <LockClosedIcon aria-hidden="true" className="h-3.5 w-3.5" />
                        {project.badge}
                    </p>
                )}
            </header>

            <dl className="space-y-4">
                <div>
                    <dt className="sr-only">Resumen</dt>
                    <dd>
                        <Syntax>/** </Syntax>
                        <Cm className="text-gray-300">{project.summary}</Cm>
                        <Syntax> */</Syntax>
                    </dd>
                </div>

                {project.problem && (
                    <div>
                        <dt className="text-gray-400 inline"><Syntax>// </Syntax>problema:</dt>{' '}
                        <dd className="inline text-gray-300">{project.problem}</dd>
                    </div>
                )}

                <div>
                    <dt><Decl name="solucion" label="Solución" /></dt>
                    <dd>
                        <ul className="ps-4 space-y-1">
                            {project.solution.map((item) => (
                                <li key={item}>
                                    <Syntax className="text-orange-300">"</Syntax><Str>{item}</Str><Syntax className="text-orange-300">"</Syntax><Syntax>,</Syntax>
                                </li>
                            ))}
                        </ul>
                        <Syntax className="text-gray-300">];</Syntax>
                    </dd>
                </div>

                <div>
                    <dt><Decl name="stack" label="Stack" /></dt>
                    <dd>
                        <ul className="flex flex-wrap gap-2 ps-4 my-1" aria-label={`Tecnologías de ${project.title}`}>
                            {project.stack.map((id) => <li key={id}><TechBadge id={id} /></li>)}
                        </ul>
                        <Syntax className="text-gray-300">];</Syntax>
                    </dd>
                </div>

                {project.result && (
                    <div className="rounded-md bg-gray-900/70 border-s-4 border-green-400 px-3 py-2">
                        <dt className="inline text-green-400 font-semibold">
                            <Syntax className="">✔ </Syntax>resultado:
                        </dt>{' '}
                        <dd className="inline font-semibold text-white">{project.result}</dd>
                    </div>
                )}
            </dl>
        </article>
    );
};
