import { Link } from '../../atoms/Link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    EnvelopeIcon,
    ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

/**
 * Footer Component (Organism)
 *
 * Este componente representa el pie de página de la aplicación.
 * Contiene información de derechos de autor y enlaces a perfiles de redes sociales.
 * Mantiene la estética de "editor de código" con bordes y colores consistentes.
 */
export const Footer = () => {
    return (
        <footer className="w-full 
        bg-[var(--dark-blue)]
        border
        border-gray-700 
        py-2
        px-2
        sm:px-6 
        lg:px-8 
        flex 
        flex-col 
        sm:flex-row 
        justify-between 
        items-center 
        text-gray-400 
        text-sm
        bottom-0
        "
        >
            <div> <p>&copy; 2025 Danmcode. All rights reserved.</p></div>

            <div className="flex mt-2 space-x-5">
                <a
                    href="https://github.com/danmcode"
                    target='blank'
                    className="hover:text-white transition-colors duration-200"
                    aria-label="GitHub Profile"
                >
                    <FaGithub className="h-6 w-6" />
                </a>

                <a
                    href="https://www.linkedin.com/in/danmcode/"
                    target='blank'
                    className="hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin className="h-6 w-6" />
                </a>

                <a
                    href="mailto:danmcode@gmail.com"
                    target='blank'
                    className="hover:text-white transition-colors duration-200"
                    aria-label="Send email"
                >
                    <FaEnvelope className="h-6 w-6" />
                </a>
            </div>
        </footer>
    );
};