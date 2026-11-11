import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../../data/profile';
import { DownloadCVButton } from '../../atoms/Button';

const linkClass =
    'inline-flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:border-brand-green hover:text-brand-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green';

/**
 * ContactLinks Component (Molecule)
 *
 * Enlaces de contacto (correo, LinkedIn, GitHub) y descarga del CV.
 */
export const ContactLinks = ({ showCV = true }: { showCV?: boolean }) => {
    const { email, linkedin, github } = profile.contact;

    return (
        <ul className="flex flex-wrap gap-3" aria-label="Contacto">
            <li>
                <a href={`mailto:${email}?subject=Contacto%20desde%20tu%20portafolio`} className={linkClass}>
                    <FaEnvelope aria-hidden="true" className="h-4 w-4" />
                    {email}
                </a>
            </li>
            <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <FaLinkedin aria-hidden="true" className="h-4 w-4" />
                    LinkedIn
                    <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
            </li>
            <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <FaGithub aria-hidden="true" className="h-4 w-4" />
                    GitHub
                    <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
            </li>
            {showCV && (
                <li>
                    <DownloadCVButton />
                </li>
            )}
        </ul>
    );
};
