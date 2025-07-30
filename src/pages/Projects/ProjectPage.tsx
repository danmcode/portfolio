import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Text } from '../../components/atoms/Text';
import { projectsData } from '../../data/ProjectsData';

/**
 * ProjectsPage Component (Page)
 *
 * Este componente representa la página "Projects" completa.
 * Muestra una cuadrícula de ProjectCards y, al hacer clic en una,
 * abre una pestaña en un "editor de código" simulado con los detalles del proyecto.
 */
export const ProjectsPage: React.FC = () => {
    const [openTabs, setOpenTabs] = useState<string[]>(['danmcode-portfolio']);
    const [activeTab, setActiveTab] = useState<string>('danmcode-portfolio');

    const handleViewProject = (projectId: string) => {
        if (!openTabs.includes(projectId)) {
            setOpenTabs((prevTabs) => [...prevTabs, projectId]);
        }
        setActiveTab(projectId);
    };

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const handleCloseTab = (tabToClose: string, event: React.MouseEvent) => {
        event.stopPropagation();

        const newOpenTabs = openTabs.filter((tab) => tab !== tabToClose);
        setOpenTabs(newOpenTabs);

        if (activeTab === tabToClose) {
            setActiveTab(newOpenTabs.length > 0 ? newOpenTabs[0] : '');
        }
    };

    const renderTabContent = () => {
        if (!activeTab) {
            return (
                <Text variant="p" className="text-gray-400 italic">
                    Selecciona un proyecto de la lista o haz clic en una tarjeta para ver sus detalles aquí.
                </Text>
            );
        }

        const project = projectsData.find((p) => p.id === activeTab);

        if (!project) {
            return (
                <Text variant="p" className="text-red-400 italic">
                    Contenido del proyecto no encontrado.
                </Text>
            );
        }

        return (
            <div className="flex flex-col h-full">

                <Text variant="h3" className="text-xl font-semibold text-white mb-2">
                    Proyecto:  {project.id}
                </Text>

                <pre className="custom-scrollbar overflow-x-auto text-sm leading-relaxed text-gray-300 overflow-y-auto flex-grow">
                    <code>
                        <span className="text-gray-400">/**</span>{"\n"}
                        <span className="text-gray-400"> * {project.title}</span>{"\n"}
                        <span className="text-gray-400"> * </span>{"\n"}

                        {project.fullDescription.trim().split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                <span className="text-gray-400"> * {line.trim()}</span>{"\n"}
                            </React.Fragment>
                        ))}

                        <span className="text-gray-400"> */</span>{"\n"}
                        {"\n"}
                        <span className="text-blue-400">const </span>
                        <span className="text-green-400">technologiesUsed </span>

                        <span className="text-white">=</span> <span className="text-orange-300">
                            [{project.technologies.map(tech => `"${tech}"`).join(', ')}]
                        </span>;{"\n"}

                        <span className="text-blue-400">const </span>
                        <span className="text-green-400">githubRepo </span>
                        <span className="text-white">=</span>
                        <span className="text-orange-300"> "{project.githubLink}"</span>;{"\n"}
                        {"\n"}

                        {project.screenshots.length > 0 && (

                            project.screenshots.map((screenshot, index) => (
                                <React.Fragment key={index}>
                                    <span className="text-gray-400">// Screenshots:</span>{"\n"}
                                    <span className="text-gray-400">// {screenshot}</span>{"\n"}
                                </React.Fragment>
                            ))

                        )}
                    </code>
                </pre>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {
                        project.screenshots.length > 0 && (
                            project.screenshots.map((src, index) => (
                                <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="rounded-md" />
                            ))
                        )
                    }
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="h-full flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 md:py-12">
            <aside className="w-full lg:w-1/4 bg-gray-800 p-4 rounded-lg flex-shrink-0">
                <h3 className="text-lg font-semibold text-white mb-4">projects</h3>

                <ul className="space-y-2 text-gray-300">

                    {projectsData.map((project) => (
                        <li key={project.id}>
                            <button
                                onClick={() => handleViewProject(project.id)}
                                className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium flex items-center
                                    ${activeTab === project.id
                                        ? 'bg-gray-700 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    } transition-colors duration-200 focus:outline-none`}

                                aria-current={activeTab === project.id ? 'page' : undefined}
                            >
                                <span className="text-orange-500 mr-2">&gt;</span> {project.id}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            <div className="flex-grow bg-gray-800 rounded-lg overflow-hidden flex flex-col">

                <div className="flex border-b border-gray-700 overflow-x-auto">
                    {openTabs.map((tabId) => (
                        <button
                            key={tabId}
                            onClick={() => handleTabClick(tabId)}
                            className={`
                flex items-center px-4 py-2 text-sm font-medium
                border-r border-gray-700
                ${activeTab === tabId ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
                transition-colors duration-200
                focus:outline-none
                whitespace-nowrap
              `}
                            aria-selected={activeTab === tabId}
                            role="tab"
                        >
                            _{tabId}
                            {openTabs.length > 0 && (
                                <button
                                    onClick={(e) => handleCloseTab(tabId, e)}
                                    className="ml-2 p-1 rounded-full hover:bg-gray-600 focus:outline-none"
                                    aria-label={`Cerrar pestaña ${tabId}`}
                                >
                                    <XMarkIcon className="h-4 w-4 text-gray-400 hover:text-white" />
                                </button>
                            )}
                        </button>
                    ))}
                </div>

                <div className="p-4 flex-grow overflow-y-auto text-gray-300">
                    {renderTabContent()}
                </div>
            </div>
        </section>
    );
};