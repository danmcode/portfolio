import { profile } from '../../../data/profile';
import { DownloadCVButton } from '../../atoms/Button';
import { Kw, Syntax, Var } from '../../atoms/Code';

const linkClass =
    'text-orange-300 underline underline-offset-2 hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-sm break-all';

interface ContactLine {
    name: string;
    href: string;
    text: string;
    external: boolean;
}

/**
 * ContactLinks Component (Molecule)
 *
 * Enlaces de contacto escritos como declaraciones de código (`const email = "..."`)
 * y botón de descarga del CV.
 */
export const ContactLinks = ({ showCV = true }: { showCV?: boolean }) => {
    const { email, linkedin, github } = profile.contact;

    const lines: ContactLine[] = [
        { name: 'email', href: `mailto:${email}?subject=Contacto%20desde%20tu%20portafolio`, text: email, external: false },
        { name: 'linkedIn', href: linkedin, text: linkedin.replace('https://www.', ''), external: true },
        { name: 'gitHub', href: github, text: github.replace('https://', ''), external: true },
    ];

    return (
        <div>
            <ul aria-label="Contacto" className="space-y-1">
                {lines.map((line) => (
                    <li key={line.name}>
                        <Kw>const </Kw>
                        <Var>{line.name}</Var>
                        <Syntax> = </Syntax>
                        <a
                            href={line.href}
                            className={linkClass}
                            {...(line.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                            <Syntax className="">"</Syntax>{line.text}<Syntax className="">"</Syntax>
                            {line.external && <span className="sr-only"> (abre en una pestaña nueva)</span>}
                        </a>
                        <Syntax>;</Syntax>
                    </li>
                ))}
            </ul>
            {showCV && (
                <div className="mt-4">
                    <DownloadCVButton />
                </div>
            )}
        </div>
    );
};
