import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { SectionTitle } from '../../components/atoms/SectionTitle';
import { TechBadge } from '../../components/atoms/TechBadge';
import { ContactLinks } from '../../components/molecules/ContactLinks';
import { aiUsageNote, education, profile, skillGroups } from '../../data/profile';
import { usePageTitle } from '../../hooks/usePageTitle';

/**
 * AboutPage Component (Page)
 *
 * Habilidades agrupadas, educación y contacto.
 */
export const AboutPage = () => {
    usePageTitle('Sobre mí');

    return (
        <div className="py-4 md:py-8 space-y-12">
            <header>
                <SectionTitle as="h1">sobre mí</SectionTitle>
                <div className="max-w-3xl space-y-3 text-gray-200 leading-relaxed">
                    {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
            </header>

            <section aria-labelledby="skills-title">
                <SectionTitle id="skills-title">habilidades</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {skillGroups.map((group) => (
                        <section key={group.title} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
                            <h3 className="text-lg font-semibold text-white mb-3">{group.title}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {group.skills.map((id) => <li key={id}><TechBadge id={id} size="md" /></li>)}
                            </ul>
                            {group.title === 'IA' && (
                                <p className="mt-3 text-sm text-gray-300">{aiUsageNote}</p>
                            )}
                        </section>
                    ))}
                </div>
            </section>

            <section aria-labelledby="education-title">
                <SectionTitle id="education-title">educación</SectionTitle>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {education.map((item) => {
                        const Icon = item.period ? AcademicCapIcon : TrophyIcon;
                        return (
                            <li key={item.title} className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex gap-3">
                                <Icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-brand-green" />
                                <div>
                                    <h3 className="font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.institution}</p>
                                    {item.period && <p className="text-sm text-gray-400">{item.period}</p>}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section aria-labelledby="contact-title">
                <SectionTitle id="contact-title">contacto</SectionTitle>
                <p className="text-gray-300 mb-4">
                    {profile.location} · {profile.availability}
                </p>
                <ContactLinks />
            </section>
        </div>
    );
};
