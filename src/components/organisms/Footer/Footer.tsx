import { Link } from '../../atoms/Link';

import {
    CodeBracketIcon,
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
        py-0 
        px-4 
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

            <div className="flex space-x-4">
                <Link
                    href="https://github.com/danmcode"
                    className="hover:text-white transition-colors duration-200"
                    aria-label="GitHub Profile"
                    variant="tab"
                >
                    <CodeBracketIcon className="h-6 w-6" />
                </Link>

                <Link
                    href="https://www.linkedin.com/in/danmcode/"
                    className="hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                    variant="tab"
                >
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                </Link>

                <Link
                    href="mailto:danmcode@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                    aria-label="Send email"
                    variant="tab"
                >
                    <EnvelopeIcon className="h-6 w-6" />
                </Link>
            </div>
        </footer>
    );
};