// src/pages/Contact/ContactMePage.tsx

import React from 'react';

/**
 * ContactMePage Component (Page)
 *
 * Este componente representa la página "Contact Me" completa.
 * Muestra la información de contacto en un formato que simula un archivo de código
 * dentro de un layout de dos columnas.
 */
export const ContactMePage: React.FC = () => {
    return (
        // La etiqueta 'section' es semántica para agrupar contenido temáticamente relacionado.
        // El 'id="contact-me"' es importante para la navegación interna desde el Header.
        //
        // flex flex-col lg:flex-row: Layout de dos columnas que se adapta a diferentes tamaños de pantalla.
        // gap-8 lg:gap-12: Espacio entre las columnas.
        // py-8 md:py-12: Padding vertical para la sección.
        // h-full: Ocupa toda la altura disponible del contenedor padre.
        <section id="contact-me" className="h-full flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 md:py-12">
            {/* Columna Izquierda: Barra lateral simple */}
            {/*
        w-full lg:w-1/4: Ocupa todo el ancho en móvil, 1/4 del ancho en pantallas grandes.
        bg-gray-800: Fondo oscuro para la barra lateral.
        p-4 rounded-lg: Padding y bordes redondeados.
        flex-shrink-0: Evita que la columna se encoja.
      */}
            <aside className="w-full lg:w-1/4 bg-gray-800 p-4 rounded-lg flex-shrink-0">
                <h3 className="text-lg font-semibold text-white mb-4">contact-me</h3>
                {/* Aquí podríamos añadir enlaces a redes sociales con iconos, etc. */}
                <ul className="space-y-2 text-gray-300">
                    <li><span className="text-orange-500">&gt;</span> find-me-on-github</li>
                    <li><span className="text-orange-500">&gt;</span> find-me-on-linkedin</li>
                    <li><span className="text-orange-500">&gt;</span> send-me-an-email</li>
                </ul>
            </aside>

            {/* Columna Derecha: Contenido Principal (Simulando Editor de Código para Contacto) */}
            {/*
        flex-grow: Permite que esta columna ocupe todo el espacio restante.
        bg-gray-800: Fondo oscuro para el área de contenido.
        rounded-lg: Bordes redondeados.
        overflow-hidden: Oculta cualquier contenido que se desborde.
        flex flex-col: Para organizar el contenido interno (pestañas y área de texto).
      */}
            <div className="flex-grow bg-gray-800 rounded-lg overflow-hidden flex flex-col">
                {/* Pestaña del editor de código para contacto */}
                <div className="flex border-b border-gray-700 overflow-x-auto">
                    <div className="px-4 py-2 text-gray-400 border-r border-gray-700 whitespace-nowrap">
                        _contact-me
                    </div>
                </div>

                {/* Área de contenido del editor de código para contacto */}
                <div className="p-4 flex-grow overflow-y-auto text-gray-300">
                    <pre className="text-sm leading-relaxed">
                        <code>
                            <span className="text-gray-400">/**</span>{"\n"}
                            <span className="text-gray-400"> * Contáctame!</span>{"\n"}
                            <span className="text-gray-400"> * Estoy abierto a nuevas oportunidades y colaboraciones.</span>{"\n"}
                            <span className="text-gray-400"> */</span>{"\n"}
                            {"\n"}
                            <span className="text-blue-400">const</span> <span className="text-green-400">myEmail</span> <span className="text-white">=</span> <span className="text-orange-300">"davide_simone1996@proton.me"</span>;{"\n"}
                            <span className="text-blue-400">const</span> <span className="text-green-400">myPhone</span> <span className="text-white">=</span> <span className="text-yellow-300">"392 86 08 006"</span>;{"\n"}
                            {"\n"}
                            <span className="text-gray-400">// Puedes encontrarme en:</span>{"\n"}
                            <span className="text-blue-400">const</span> <span className="text-green-400">githubProfile</span> <span className="text-white">=</span> <span className="text-orange-300">"https://github.com/daveinthahood"</span>;{"\n"}
                            <span className="text-blue-400">const</span> <span className="text-green-400">linkedInProfile</span> <span className="text-white">=</span> <span className="text-orange-300">"https://www.linkedin.com/in/davide-simone-a2823619a/"</span>;{"\n"}
                            <span className="text-blue-400">const</span> <span className="text-green-400">behanceProfile</span> <span className="text-white">=</span> <span className="text-orange-300">"https://www.behance.net/davidefemale"</span>;{"\n"}
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};