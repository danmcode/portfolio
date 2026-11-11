import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadCVButton } from '../../atoms/Button';
import { Cm, Str, Syntax, Var } from '../../atoms/Code';
import { WorkExperienceStepper } from '../../molecules/WorkExperienceStepper';
import { ContactLinks } from '../../molecules/ContactLinks';
import { TerminalWindow } from '../../molecules/TerminalWindow';
import { experienceData } from '../../../data/ExperienceData';
import { profile } from '../../../data/profile';
import { usePageTitle } from '../../../hooks/usePageTitle';

/**
 * HeroSection Component (Organism)
 *
 * Página de inicio con estética de terminal, en dos columnas:
 * - Izquierda: presentación y "sobre mí".
 * - Derecha: contacto y experiencia.
 * En pantallas `fit` (escritorio con alto suficiente) ocupa exactamente la ventana:
 * "sobre mí" y la experiencia se desplazan dentro de su propia ventana, no la página.
 */
export const HeroSection: React.FC = () => {
    usePageTitle();

    return (
        <section
            aria-labelledby="hero-title"
            className="w-full flex flex-col lg:flex-row gap-6 py-2 fit:py-0 fit:flex-1 fit:min-h-0"
        >
            {/* Columna izquierda */}
            <div className="flex flex-col gap-5 w-full lg:w-1/2 min-w-0 fit:min-h-0">
                <div className="flex-shrink-0">
                    <p className="font-mono text-base text-gray-300 mb-1">Hola 👋, soy</p>
                    <h1 id="hero-title" className="font-inter text-4xl sm:text-5xl fit:text-4xl xl:fit:text-5xl font-bold text-white mb-2">
                        {profile.name}
                    </h1>
                    <p className="font-mono text-2xl sm:text-3xl fit:text-2xl font-semibold text-brand-green mb-2">
                        <Syntax className="">&gt; </Syntax>
                        {profile.role}
                        <span aria-hidden="true" className="inline-block w-3 h-6 ms-1 align-middle bg-brand-green motion-safe:animate-pulse" />
                    </p>
                    <p className="font-mono text-sm sm:text-base text-gray-300">
                        Node.js · TypeScript · NestJS · PostgreSQL · AWS
                        <span className="text-gray-400"> | APIs, automatización e integraciones</span>
                    </p>
                </div>

                <TerminalWindow
                    title="~/danmcode/sobre-mi.ts"
                    command="cat sobre-mi.md"
                    className="w-full fit:flex-1"
                    scrollable
                >
                    <h2 className="sr-only">Sobre mí</h2>
                    <p aria-hidden="true">
                        <span className="text-blue-400">const </span>
                        <Var>sobreMi</Var>
                        <span className="text-gray-300"> = </span>
                        <Str>`</Str>
                    </p>
                    <div className="ps-4 space-y-2">
                        {profile.about.map((paragraph) => <Str key={paragraph} className="block">{paragraph}</Str>)}
                    </div>
                    <p aria-hidden="true"><Str>`</Str><span className="text-gray-300">;</span></p>

                    <Cm className="block mt-4">
                        <Syntax>// </Syntax>📍 {profile.location} · {profile.availability}
                    </Cm>
                </TerminalWindow>
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col gap-5 w-full lg:w-1/2 min-w-0 fit:min-h-0">
                <TerminalWindow title="~/danmcode/contacto.ts" className="w-full flex-shrink-0">
                    <h2 className="sr-only">Contacto</h2>
                    <ContactLinks showCV={false} />
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <DownloadCVButton />
                        <Link
                            to="/projects"
                            className="font-mono inline-flex items-center rounded-full border border-brand-green bg-gray-900/70 px-3 py-2 text-sm text-white hover:bg-brand-green hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            <Syntax className="text-brand-green me-2">$ cd</Syntax>
                            ./proyectos
                            <span className="sr-only"> (ver proyectos)</span>
                        </Link>
                    </div>
                </TerminalWindow>

                <WorkExperienceStepper data={experienceData} className="w-full fit:flex-1" />
            </div>
        </section>
    );
};
