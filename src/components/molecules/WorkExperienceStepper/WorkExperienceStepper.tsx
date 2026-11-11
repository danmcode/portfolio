import React from 'react';
import type { ExperienceEntry } from '../../../types';

interface Props {
    data: ExperienceEntry[];
    title?: string;
    className?: string;
}

/**
 * WorkExperienceStepper Component (Molecule)
 *
 * Línea de tiempo de experiencia laboral, de la más reciente a la más antigua.
 */
export const WorkExperienceStepper: React.FC<Props> = ({ data, title = 'experiencia', className = '' }) => {
    return (
        <section
            aria-labelledby="experience-title"
            className={`p-5 sm:p-6 bg-gray-800 border border-gray-700 rounded-xl ${className}`}
        >
            <h2 id="experience-title" className="text-2xl font-bold text-white mb-6">
                <span aria-hidden="true" className="font-mono text-brand-green">// </span>
                {title}
            </h2>

            <ol className="relative border-s border-gray-600 text-gray-300 space-y-8 ps-4">
                {data.map((entry) => (
                    <li key={entry.id} className="ms-4">
                        <span aria-hidden="true" className="absolute w-3 h-3 bg-brand-green rounded-full -start-1.5 mt-2 ring-4 ring-gray-800"></span>

                        <h3 className="font-semibold text-white text-lg">
                            {entry.title}
                        </h3>
                        <p className="text-sm text-blue-300 mb-2">
                            {entry.company} · <time>{entry.duration}</time>
                        </p>
                        {entry.highlights.length > 0 && (
                            <ul className="list-disc ps-5 space-y-1 text-sm leading-relaxed text-gray-300">
                                {entry.highlights.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default WorkExperienceStepper;
