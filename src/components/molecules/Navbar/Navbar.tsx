import { Link } from '../../atoms/Link';

interface NavbarProps {
    activeSection: string;
    isMobileView?: boolean;
}

/**
 * Navbar Component (Molécula)
 *
 * This UI molecule component represents the main navigation bar.
 * It groups several atoms (links) to form a functional navigation unit,
 * with an "editor tab" style, adaptable for mobile views.
 */
export const Navbar = ({
    isMobileView = false
}: NavbarProps) => {
    const navLinks = [
        { name: '_hola 👋', href: 'hello' },
        { name: '_sobre-mí', href: 'about-me' },
        { name: '_proyectos', href: 'projects' },
    ];

    return (
        <nav className={`flex ${isMobileView ? 'flex-col' : ''} overflow-x-auto h-full`}>
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    variant={isMobileView ? 'default' : 'tab'}
                    className={isMobileView ? 'block w-full px-4 py-2 text-lg' : 'border-r border-gray-700'}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};