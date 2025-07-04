import React from 'react';
import { Text } from '../../atoms/Text';
import { WorkExperienceStepper } from '../../molecules/WorkExperienceStepper';
import { experienceData } from '../../../data/ExperienceData';

/**
 * HeroSection Component (Organism)
 *
 * Este componente representa la sección principal de bienvenida en el portafolio.
 * Contiene el saludo, el nombre del desarrollador, el título y la información de contacto
 * simulando un bloque de código, y ahora una sección para la experiencia laboral.
 * Se han actualizado los colores para la marca personal y el layout a dos columnas.
 */
export const HeroSection: React.FC = () => {
    return (
        <section
            id="hello"
            className="w-full flex flex-col lg:flex-row justify-center items-start py-16 md:py-24 gap-8 lg:gap-12 px-4 sm:px-6"
        >
            <div className="flex flex-col items-start w-full lg:w-1/2 max-w-full">
                <Text variant="p" className="text-lg text-gray-300 mb-2">
                    Hola 👋, soy
                </Text>

                <Text variant="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                    Daniel Alexander Muelas
                </Text>

                <Text variant="h2" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-green mb-8">
                    &gt; Desarrollador Web FullStack
                </Text>

                <pre className="bg-gray-800 p-4 rounded-lg text-sm leading-relaxed max-w-full overflow-x-auto">
                    <code className="language-typecript">
                        <span className="text-gray-400">// mi número de teléfono</span>{"\n"}
                        <span className="text-blue-400">const</span> <span className="text-green-400">telephoneNum</span> <span className="text-white">=</span> <span className="text-yellow-300">310 890 35 71</span>;{"\n"}
                        {"\n"}
                        <span className="text-gray-400">// mi correo electrónico</span>{"\n"}
                        <span className="text-blue-400">const</span> <span className="text-green-400">email</span> <span className="text-white">=</span> <span className="text-orange-300">"danmcode@gmail.com"</span>;{"\n"}
                        {"\n"}
                        <span className="text-gray-400">// También puedes visitar es mi GitHub</span>{"\n"}
                        <span className="text-blue-400">const</span> <span className="text-green-400">githubLink</span> <span className="text-white">=</span> <span className="text-orange-300">"https://github.com/danmcode"</span>;{"\n"}
                        {"\n"}
                        <span className="text-gray-400">// Puedes visitarme en mi LinkedIn</span>{"\n"}
                        <span className="text-blue-400">const</span> <span className="text-green-400">linkedInPage</span> <span className="text-white">=</span> <span className="text-orange-300">"https://www.linkedin.com/in/danmcode/"</span>;
                    </code>
                </pre>
            </div>

            <div className="w-full lg:w-1/2 max-w-full">
                <WorkExperienceStepper data={experienceData} />
            </div>
        </section>
    );
};