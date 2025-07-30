import React, { useState, useEffect } from 'react';
import { Text } from '../../components/atoms/Text'; // Necesitaremos Text para el contenido
import { XMarkIcon } from '@heroicons/react/24/outline'; // Importamos el icono de cierre desde Heroicons
import { SideBarNavigation } from '../../components/molecules/SideBarNavidagation';

/**
 * AboutMePage Component (Page)
 *
 * Este componente representa la página "About Me" completa.
 * Su función principal es organizar las sub-secciones:
 * el menú de navegación lateral y el área de contenido principal (simulando un editor de código).
 *
 * Utiliza un layout de dos columnas que se adapta a diferentes tamaños de pantalla,
 * y ahora implementa una interfaz de pestañas para el contenido del "editor de código".
 */
export const AboutPage = () => {
    const [activeSidebarItem, setActiveSidebarItem] = useState<string>('bio');
    const [openTabs, setOpenTabs] = useState<string[]>(['bio']);
    const [activeTab, setActiveTab] = useState<string>('bio');

    useEffect(() => {
        setActiveSidebarItem(activeTab);
    }, [activeTab]);

    const handleSidebarItemClick = (itemId: string) => {
        if (!openTabs.includes(itemId)) {
            setOpenTabs((prevTabs) => [...prevTabs, itemId]);
        }
        setActiveTab(itemId);
    };

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const handleCloseTab = (tabToClose: string, event: React.MouseEvent) => {
        event.stopPropagation(); // Evita que el clic en el botón de cierre active la pestaña.

        const newOpenTabs = openTabs.filter((tab) => tab !== tabToClose);
        setOpenTabs(newOpenTabs);

        if (activeTab === tabToClose) {
            setActiveTab(newOpenTabs.length > 0 ? newOpenTabs[0] : '');
        }
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'bio':
                return (
                    <>
                        <pre className="text-sm leading-relaxed custom-scrollbar overflow-x-auto">
                            <code>
                                <span className="text-gray-400">/**</span>{"\n"}
                                <span className="text-gray-400"> * Acerca de Daniel Muelas</span>{"\n"}
                                <span className="text-gray-400"> * Bienvenidos a mi portafolio.</span>{"\n"}
                                <span className="text-gray-400"> */</span>{"\n"}
                                {"\n"}
                                <span className="text-blue-400">const</span>{" "}
                                <span className="text-green-400">bio</span>{" "}
                                <span className="text-white">=</span>{" "}
                                <span className="text-orange-300">`</span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Soy Daniel Muelas, nací en 1997 y desde siempre he sido un curioso de la tecnología.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Estudié Ingeniería Informática y trabajo con React, Node.js, TypeScript y Docker.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Me encanta Linux, automatizar procesos, construir soluciones útiles
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}y aprender cada día en este mundo que cambia tan rápido.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Creo en el poder de la comunidad, el código limpio y en nunca dejar de crecer.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">`</span>;
                            </code>
                        </pre>
                    </>
                );
            case 'interests':
                return (
                    <pre className="text-sm leading-relaxed custom-scrollbar overflow-x-auto">
                        <code>
                            <span className="text-gray-400">/**</span>{"\n"}
                            <span className="text-gray-400"> * [Intereses personales]</span>{"\n"}
                            <span className="text-gray-400"> * Además del código, disfruto:</span>{"\n"}
                            <span className="text-gray-400"> * - El fútbol (hincha fiel, claro 😄)</span>{"\n"}
                            <span className="text-gray-400"> * - Viajar en moto por carretera</span>{"\n"}
                            <span className="text-gray-400"> * - Los videojuegos (especialmente los retro)</span>{"\n"}
                            <span className="text-gray-400"> * - Aprender sobre IA y tecnología emergente</span>{"\n"}
                            <span className="text-gray-400"> * - El café (fuerte y sin azúcar)</span>{"\n"}
                            <span className="text-gray-400"> * Me gusta explorar, conocer gente nueva y ver el mundo con un casco y curiosidad.</span>{"\n"}
                            <span className="text-gray-400"> */</span>{"\n"}
                        </code>
                    </pre>
                );
            case 'education':
                return (
                    <pre className="text-sm leading-relaxed custom-scrollbar overflow-x-auto">
                        <code>
                            <span className="text-gray-400">/**</span>{"\n"}
                            <span className="text-gray-400"> * [Diploma] Ingeniería en Informatica en "Univiversidad Autonoma de Occidente"</span>{"\n"}
                            <span className="text-gray-400"> * [Diploma] Tecnologo en gestion de Redes de Datos en "Servicio Nacional de Aprendizaje (SENA)"</span>{"\n"}
                            <span className="text-gray-400"> */</span>{"\n"}
                        </code>
                    </pre>
                );
            case 'contacts':
                return (
                    <pre className="text-sm leading-relaxed">
                        <code>
                            <span className="text-gray-400">/**</span>{"\n"}
                            <span className="text-gray-400"> * [Contacto]</span>{"\n"}
                            <span className="text-gray-400"> * Email: <a
                                href="mailto:%22Daniel%20Muelas%20Rivera%22%20<danmcode@gmail.com>?subject=Contacto%20desde%20tu%20portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 underline underline-offset-2 hover:text-green-400"
                            >
                                danmcode@gmail.com
                            </a></span>{"\n"}

                            <span className="text-gray-400"> * Telefono: <a
                                href="https://wa.me/573108903571"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 underline underline-offset-2 hover:text-green-400"
                            >
                                3108903571
                            </a>;</span>{"\n"}
                            <span className="text-gray-400"> */</span>{"\n"}
                        </code>
                    </pre>
                );
            default:
                return (
                    <Text variant="p" className="text-gray-400 italic">
                        Selecciona una sección del menú lateral para ver su contenido.
                    </Text>
                );
        }
    };

    return (
        <section id="about-me" className="h-full flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 md:py-12">
            <aside className="w-full lg:w-1/4 bg-gray-800 p-4 rounded-lg flex-shrink-0">
                <h3 className="text-lg font-semibold text-white mb-4">Información </h3>
                <SideBarNavigation
                    activeItem={activeSidebarItem}
                    onItemClick={handleSidebarItemClick}
                />
            </aside>

            <div className="flex-grow bg-gray-800 rounded-lg overflow-hidden flex flex-col">
                <div className="flex border-b border-gray-700 overflow-x-auto custom-scrollbar">
                    {openTabs.map((tabId) => (
                        <button
                            key={tabId}
                            onClick={() => handleTabClick(tabId)}
                            className={`
                flex items-center px-4 py-2 text-sm font-medium
                border-r border-gray-700
                ${activeTab === tabId ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
                transition-colors duration-200
                whitespace-nowrap
              `}
                            aria-selected={activeTab === tabId}
                            role="tab"
                        >
                            _{tabId}
                            {openTabs.length > 1 && (
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
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};