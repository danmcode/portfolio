import React from 'react';
import { Link } from 'react-router-dom';
import { Str, Syntax, Var } from '../../atoms/Code';
import { WorkExperienceStepper } from '../../molecules/WorkExperienceStepper';
import { ContactLinks } from '../../molecules/ContactLinks';
import { TerminalWindow } from '../../molecules/TerminalWindow';
import { experienceData } from '../../../data/ExperienceData';
import { profile } from '../../../data/profile';
import { usePageTitle } from '../../../hooks/usePageTitle';

/**
 * HeroSection Component (Organism)
 *
 * Página de inicio: nombre, titular, resumen profesional, contacto y experiencia,
 * con estética de terminal. Layout a dos columnas en pantallas grandes.
 */
export const HeroSection: React.FC = () => {
    usePageTitle();

    return (
        <section
            aria-labelledby="hero-title"
            className="w-full flex flex-col lg:flex-row justify-center items-start py-6 md:py-12 gap-10 lg:gap-12"
        >
            <div className="flex flex-col items-start w-full lg:w-1/2 max-w-full gap-6">
                <div>
                    <p className="font-mono text-base text-gray-300 mb-2">Hola 👋, soy</p>
                    <h1 id="hero-title" className="font-inter text-4xl sm:text-5xl font-bold text-white mb-3">
                        {profile.name}
                    </h1>
                    <p className="font-mono text-2xl sm:text-3xl font-semibold text-brand-green mb-3">
                        <Syntax className="">&gt; </Syntax>
                        {profile.role}
                        <span aria-hidden="true" className="inline-block w-3 h-7 ms-1 align-middle bg-brand-green motion-safe:animate-pulse" />
                    </p>
                    <p className="font-mono text-sm sm:text-base text-gray-300">
                        Node.js · TypeScript · NestJS · PostgreSQL · AWS
                    </p>
                    <p className="font-mono text-sm text-gray-400">APIs, automatización e integraciones</p>
                </div>

                <TerminalWindow title="~/danmcode/sobre-mi.ts" command="cat sobre-mi.md" className="w-full">
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

                    <p className="mt-4 text-gray-400">
                        <Syntax>// </Syntax>📍 {profile.location} · {profile.availability}
                    </p>
                </TerminalWindow>

                <TerminalWindow title="~/danmcode/contacto.ts" className="w-full">
                    <h2 className="sr-only">Contacto</h2>
                    <ContactLinks />
                </TerminalWindow>

                <Link
                    to="/projects"
                    className="font-mono inline-flex items-center rounded-md border border-brand-green bg-gray-900/70 px-4 py-2 text-sm text-white hover:bg-brand-green hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    <Syntax className="text-brand-green me-2">$ cd</Syntax>
                    ./proyectos
                    <span className="sr-only"> (ver proyectos)</span>
                </Link>
            </div>

            <div className="w-full lg:w-1/2 max-w-full">
                <WorkExperienceStepper data={experienceData} />
            </div>
        </section>
    );
};
