import React from 'react';
import type { ExperienceEntry } from '../../../types';
import { Cm, Syntax } from '../../atoms/Code';
import { TerminalWindow } from '../TerminalWindow';

interface Props {
    data: ExperienceEntry[];
    className?: string;
}

/**
 * WorkExperienceStepper Component (Molecule)
 *
 * Línea de tiempo de experiencia laboral dentro de una ventana de terminal,
 * de la más reciente a la más antigua.
 */
export const WorkExperienceStepper: React.FC<Props> = ({ data, className = '' }) => {
    return (
        <TerminalWindow
            as="section"
            labelledBy="experience-title"
            title="~/danmcode/experiencia.log"
            command="git log --experiencia"
            className={className}
        >
            <h2 id="experience-title" className="text-lg font-bold text-white mb-5">
                <Syntax>// </Syntax>experiencia
            </h2>

            <ol className="relative border-s border-gray-600 space-y-7 ps-4">
                {data.map((entry) => (
                    <li key={entry.id} className="ms-3">
                        <span aria-hidden="true" className="absolute w-3 h-3 bg-brand-green rounded-full -start-1.5 mt-1.5 ring-4 ring-gray-800"></span>

                        <h3 className="font-semibold text-blue-400 text-base">
                            {entry.title}
                        </h3>
                        <p className="text-sm text-green-400 mb-1">
                            {entry.company} <Syntax>·</Syntax><span className="sr-only">,</span> <time className="text-gray-400">{entry.duration}</time>
                        </p>
                        {entry.highlights.length > 0 && (
                            <ul className="space-y-1 text-sm">
                                {entry.highlights.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <Syntax>//</Syntax>
                                        <Cm className="text-gray-300">{item}</Cm>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </TerminalWindow>
    );
};

export default WorkExperienceStepper;
