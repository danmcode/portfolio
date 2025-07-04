import React from 'react';
import { Text } from '../../atoms/Text';

export interface ExperienceEntry {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string;
}

interface Props {
    data: ExperienceEntry[];
    title?: string;
    className?: string;
}

export const WorkExperienceStepper: React.FC<Props> = ({ data, title = '// experiencia laboral', className = '' }) => {
    return (
        <div
            className={`relative max-h-[550px] overflow-y-auto p-6 bg-gray-800 rounded-xl shadow-lg shadow-brand-green/20 custom-scrollbar
        [mask-image:linear-gradient(to_top,transparent_0%,black_15%,black_20%,black_30%)] ${className}`}
        >
            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2D3748;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4A5568;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #A0AEC0;
        }
      `}</style>
            <pre>
                <Text variant="h3" className="text-2xl font-bold text-white mb-6">
                    {title}
                </Text>

                <ol className="relative border-s border-gray-700 text-gray-300 space-y-12 ps-4 mb-50">
                    {data.map((entry) => (
                        <li key={entry.id} className="ms-6">
                            <span className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full -start-3 ring-4 ring-gray-900"></span>

                            <h3 className="font-semibold text-blue-400 text-lg">
                                {entry.title}
                            </h3>
                            <p className="text-sm italic text-green-400 mb-2">
                                {entry.company} – {entry.duration}
                            </p>
                            <pre className="text-sm leading-relaxed text-gray-400 whitespace-pre-wrap">
                                <code>
                                    {entry.description}
                                </code>
                            </pre>
                        </li>
                    ))}
                </ol>
            </pre>
        </div>
    );
};

export default WorkExperienceStepper;
