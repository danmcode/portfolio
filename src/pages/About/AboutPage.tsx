import { Text } from '../../components/atoms/Text';
import { SideBarNavigation } from '../../components/molecules/SideBarNavigation';
import { EditorTabs } from '../../components/molecules/EditorTabs';
import { useTabs } from '../../hooks/useTabs';

/**
 * AboutMePage Component (Page)
 *
 * Este componente representa la página "About Me" completa.
 * Organiza el menú de navegación lateral y el área de contenido principal
 * (simulando un editor de código con pestañas).
 */
export const AboutPage = () => {
    const { openTabs, activeTab, openTab, setActiveTab, closeTab, canClose } = useTabs('bio', { keepLastTab: true });

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
                                    {"  "}Soy Daniel Muelas, nací en 1997 y siempre he sido un apasionado de la tecnología.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Estudié Ingeniería Informática y actualmente trabajo como desarrollador Full Stack.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Mi stack principal incluye React, Node.js, TypeScript y Docker, aunque también disfruto
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}explorar nuevas herramientas y buenas prácticas del ecosistema JavaScript.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Soy fan de Linux, la automatización, el código limpio y crear soluciones útiles que resuelvan problemas reales.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Creo en la mejora continua, en compartir conocimiento y en el poder de la comunidad tech.
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Cuando no estoy programando, me gusta aprender, escuchar música y desarmar cosas (a veces funcionan después 😅).
                                </span>
                                {"\n"}
                                <span className="text-orange-300">
                                    {"  "}Mi meta: nunca dejar de aprender, nunca dejar de construir.
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
                            <span className="text-gray-400"> * [Diploma] Ingeniería Informática en "Universidad Autónoma de Occidente"</span>{"\n"}
                            <span className="text-gray-400"> * [Diploma] Tecnólogo en Gestión de Redes de Datos en "Servicio Nacional de Aprendizaje (SENA)"</span>{"\n"}
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

                            <span className="text-gray-400"> * Teléfono: <a
                                href="https://wa.me/573108903571"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 underline underline-offset-2 hover:text-green-400"
                            >
                                3108903571
                            </a></span>{"\n"}
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
                <h3 className="text-lg font-semibold text-white mb-4">Información</h3>
                <SideBarNavigation
                    activeItem={activeTab}
                    onItemClick={openTab}
                />
            </aside>

            <EditorTabs
                idPrefix="about"
                tabs={openTabs}
                activeTab={activeTab}
                canClose={canClose}
                onSelect={setActiveTab}
                onClose={closeTab}
            >
                {renderContent()}
            </EditorTabs>
        </section>
    );
};