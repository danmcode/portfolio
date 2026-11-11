import { Cm, Str, Syntax, Var } from '../../components/atoms/Code';
import { TechBadge } from '../../components/atoms/TechBadge';
import { ContactLinks } from '../../components/molecules/ContactLinks';
import { CodeEditor, type EditorFile } from '../../components/organisms/CodeEditor';
import { aiUsageNote, education, profile, skillGroups } from '../../data/profile';
import { usePageTitle } from '../../hooks/usePageTitle';

/** Título de archivo con forma de comentario: `// habilidades`. */
const FileTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-lg font-bold text-white mb-4">
        <Syntax className="text-brand-green">// </Syntax>{children}
    </h2>
);

const Prompt = ({ command }: { command: string }) => (
    <p aria-hidden="true" className="mb-3">
        <span className="text-green-400">danmcode</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-gray-400">$ </span>
        <span className="text-white">{command}</span>
    </p>
);

const ProfileFile = () => (
    <div className="max-w-3xl">
        <Prompt command="whoami" />
        <h2 className="text-white font-semibold">{profile.name}</h2>
        <p className="text-brand-green mb-4">{profile.headline}</p>
        <div className="space-y-2">
            {profile.about.map((paragraph) => (
                <p key={paragraph} className="flex gap-2">
                    <Syntax>&gt;</Syntax>
                    <span>{paragraph}</span>
                </p>
            ))}
        </div>
        <Cm className="block mt-4"><Syntax>// </Syntax>📍 {profile.location} · {profile.availability}</Cm>
    </div>
);

const SkillsFile = () => (
    <div>
        <FileTitle>habilidades</FileTitle>
        <Syntax className="text-gray-300">{'{'}</Syntax>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-5 ps-4 my-1">
            {skillGroups.map((group) => (
                <section key={group.title}>
                    <h3 className="mb-2">
                        <Syntax className="text-orange-300">"</Syntax>
                        <Var className="font-semibold">{group.title}</Var>
                        <Syntax className="text-orange-300">"</Syntax>
                        <Syntax className="text-gray-300">: [</Syntax>
                    </h3>
                    <ul className="flex flex-wrap gap-2 ps-4">
                        {group.skills.map((id) => <li key={id}><TechBadge id={id} size="md" /></li>)}
                    </ul>
                    {group.title === 'IA' && (
                        <Cm className="block ps-4 mt-2"><Syntax>// </Syntax>{aiUsageNote}</Cm>
                    )}
                    <Syntax className="text-gray-300">],</Syntax>
                </section>
            ))}
        </div>
        <Syntax className="text-gray-300">{'}'}</Syntax>
    </div>
);

const EducationFile = () => (
    <div className="max-w-3xl">
        <FileTitle>educación</FileTitle>
        <Syntax>/**</Syntax>
        <ul>
            {education.map((item) => (
                <li key={item.title} className="flex gap-2 py-1">
                    <Syntax className="flex-shrink-0">&nbsp;*</Syntax>
                    <span>
                        <span className="text-white font-semibold">
                            {item.period ? '' : '🏆 '}{item.title}
                        </span>
                        <span className="block text-gray-400">
                            {item.institution}{item.period && <> · <Str>{item.period}</Str></>}
                        </span>
                    </span>
                </li>
            ))}
        </ul>
        <Syntax>&nbsp;*/</Syntax>
    </div>
);

const ContactFile = () => (
    <div className="max-w-3xl">
        <FileTitle>contacto</FileTitle>
        <Cm className="block mb-3"><Syntax>// </Syntax>{profile.location} · {profile.availability}</Cm>
        <ContactLinks />
    </div>
);

/**
 * AboutPage Component (Page)
 *
 * Perfil, habilidades, educación y contacto como archivos en un editor de código con pestañas.
 */
export const AboutPage = () => {
    usePageTitle('Sobre mí');

    const files: EditorFile[] = [
        { id: 'perfil', name: 'whoami.sh', label: 'Perfil', language: 'Shell', content: <ProfileFile /> },
        { id: 'habilidades', name: 'habilidades.json', label: 'Habilidades', language: 'JSON', content: <SkillsFile /> },
        { id: 'educacion', name: 'educacion.md', label: 'Educación', language: 'Markdown', content: <EducationFile /> },
        { id: 'contacto', name: 'contacto.ts', label: 'Contacto', language: 'TypeScript', content: <ContactFile /> },
    ];

    return (
        <section aria-labelledby="about-title">
            <h1 id="about-title" className="sr-only">Sobre mí</h1>
            <p className="font-mono text-sm text-gray-400 mb-4">
                <span aria-hidden="true">// </span>
                Abre un archivo del explorador para ver cada sección.
            </p>
            <CodeEditor idPrefix="about" folder="sobre-mi" files={files} initialFile="perfil" />
        </section>
    );
};
