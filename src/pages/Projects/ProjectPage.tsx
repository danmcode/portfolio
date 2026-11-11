import React from 'react';
import { ProjectCard } from '../../components/molecules/ProjectCard';
import { CodeEditor, type EditorFile } from '../../components/organisms/CodeEditor';
import { FeaturedProject } from '../../components/organisms/FeaturedProject';
import { projectsData } from '../../data/ProjectsData';
import { usePageTitle } from '../../hooks/usePageTitle';

/**
 * ProjectsPage Component (Page)
 *
 * Los proyectos se muestran como archivos en un editor de código con pestañas.
 * El proyecto destacado se abre por defecto.
 */
export const ProjectsPage: React.FC = () => {
    usePageTitle('Proyectos');
    const [featured, ...rest] = projectsData;

    const files: EditorFile[] = [
        {
            id: featured.id,
            name: `${featured.id}.md`,
            label: featured.title,
            language: 'Markdown',
            content: <FeaturedProject project={featured} />,
        },
        ...rest.map((project): EditorFile => ({
            id: project.id,
            name: `${project.id}.ts`,
            label: project.title,
            language: 'TypeScript',
            content: <ProjectCard project={project} />,
        })),
    ];

    return (
        <section aria-labelledby="projects-title" className="fit:flex-1 fit:min-h-0 flex flex-col">
            <h1 id="projects-title" className="sr-only">Proyectos</h1>
            <p className="font-mono text-sm text-gray-400 mb-4 flex-shrink-0">
                <span aria-hidden="true">// </span>
                Abre un archivo del explorador para ver cada proyecto. Los proyectos empresariales no tienen repositorio público.
            </p>
            <CodeEditor idPrefix="projects" folder="proyectos" files={files} initialFile={featured.id} />
        </section>
    );
};
