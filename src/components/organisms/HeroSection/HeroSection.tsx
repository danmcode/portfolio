import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Text } from '../../atoms/Text';
import { WorkExperienceStepper } from '../../molecules/WorkExperienceStepper';
import { ContactLinks } from '../../molecules/ContactLinks';
import { experienceData } from '../../../data/ExperienceData';
import { profile } from '../../../data/profile';
import { usePageTitle } from '../../../hooks/usePageTitle';

/**
 * HeroSection Component (Organism)
 *
 * Página de inicio: nombre, titular, resumen profesional, contacto y experiencia.
 * Usa un layout a dos columnas en pantallas grandes.
 */
export const HeroSection: React.FC = () => {
    usePageTitle();

    return (
        <section
            aria-labelledby="hero-title"
            className="w-full flex flex-col lg:flex-row justify-center items-start py-8 md:py-16 gap-10 lg:gap-12"
        >
            <div className="flex flex-col items-start w-full lg:w-1/2 max-w-full">
                <Text variant="p" className="font-mono text-base text-gray-300 mb-2">
                    Hola, soy
                </Text>

                <h1 id="hero-title" className="font-inter text-4xl sm:text-5xl font-bold text-white mb-3">
                    {profile.name}
                </h1>

                <p className="text-2xl sm:text-3xl font-semibold text-brand-green mb-3">
                    <span aria-hidden="true" className="font-mono">&gt; </span>
                    {profile.role}
                </p>

                <p className="text-sm sm:text-base text-gray-300 mb-2">
                    Node.js · TypeScript · NestJS · PostgreSQL · AWS
                    <span className="block text-gray-400">APIs, automatización e integraciones</span>
                </p>

                <p className="inline-flex items-center gap-1.5 text-sm text-gray-400 mb-8">
                    <MapPinIcon aria-hidden="true" className="h-4 w-4" />
                    {profile.location} · {profile.availability}
                </p>

                <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 mb-8 max-w-2xl">
                    <h2 className="font-mono text-sm text-brand-green mb-3">
                        <span aria-hidden="true">// </span>sobre mí
                    </h2>
                    <div className="space-y-3 text-base leading-relaxed text-gray-200">
                        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </div>

                <ContactLinks />

                <Link
                    to="/projects"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark-blue)]"
                >
                    Ver proyectos
                    <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
                </Link>
            </div>

            <div className="w-full lg:w-1/2 max-w-full">
                <WorkExperienceStepper data={experienceData} />
            </div>
        </section>
    );
};
