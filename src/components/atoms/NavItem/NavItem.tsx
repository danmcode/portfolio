interface NavItemProps {
    label: string;
    href: string;
    isActive?: boolean;
    onClick?: (href: string) => void;
}

/**
 * NavItem Component (Atom)
 *
 * Este componente es un átomo de UI que representa un elemento individual en una lista de navegación.
 * Incluye un prefijo visual (la flecha) y maneja los estados activo y de interacción.
 *
 * @param {NavItemProps} props - Las propiedades del componente.
 * @param {string} props.label - El texto a mostrar para el elemento de navegación.
 * @param {string} props.href - La URL a la que apunta el elemento.
 * @param {boolean} [props.isActive=false] - Indica si el elemento está activo.
 * @param {function} [props.onClick] - Callback opcional al hacer clic.
 */
export const NavItem = ({
    label,
    href,
    isActive = false,
    onClick,
}: NavItemProps) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {

        event.preventDefault();

        if (onClick) {
            onClick(href);
        }

        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`
            py-2 px-3 rounded-md text-sm font-medium flex items-center
            ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          `}
            aria-current={isActive ? 'page' : undefined}
        >
            <span className="text-orange-500 mr-2">&gt;</span>
            {label}
        </a>
    );
}
