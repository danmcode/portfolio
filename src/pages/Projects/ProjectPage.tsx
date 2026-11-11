import React from 'react';
import { SectionTitle } from '../../components/atoms/SectionTitle';
import { ProjectCard } from '../../components/molecules/ProjectCard';
import { FeaturedProject } from '../../components/organisms/FeaturedProject';
import { projectsData } from '../../data/ProjectsData';
import { usePageTitle } from '../../hooks/usePageTitle';

/**
 * ProjectsPage Component (Page)
 *
 * Proyecto destacado a ancho completo y el resto como tarjetas
 * con la estructura problema → solución → stack → resultado.
 */
export const ProjectsPage: React.FC = () => {
    usePageTitle('Proyectos');
    const [featured, ...rest] = projectsData;

    return (
        <section aria-labelledby="projects-title" className="py-4 md:py-8">
            <SectionTitle as="h1" id="projects-title">proyectos</SectionTitle>
            <p className="text-gray-300 mb-8 max-w-3xl">
                Los proyectos empresariales no tienen repositorio público. Para cada uno describo el problema,
                la solución, el stack y el resultado.
            </p>

            <FeaturedProject project={featured} />

            <h2 className="sr-only">Otros proyectos</h2>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((project) => (
                    <li key={project.id}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </section>
    );
};
