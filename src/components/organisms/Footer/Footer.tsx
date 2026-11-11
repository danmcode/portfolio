import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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
        "
        >
            <div> <p>&copy; {new Date().getFullYear()} Daniel Alexander Muelas Rivera.</p></div>

            <div className="flex mt-2 space-x-5">
                <a
                    href="https://github.com/danmcode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                    aria-label="Perfil de GitHub"
                >
                    <FaGithub aria-hidden="true" className="h-6 w-6" />
                </a>

                <a
                    href="https://www.linkedin.com/in/danmcode/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                    aria-label="Perfil de LinkedIn"
                >
                    <FaLinkedin aria-hidden="true" className="h-6 w-6" />
                </a>

                <a
                    href="mailto:danmcode@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                    aria-label="Enviar correo"
                >
                    <FaEnvelope aria-hidden="true" className="h-6 w-6" />
                </a>
            </div>
        </footer>
    );
};