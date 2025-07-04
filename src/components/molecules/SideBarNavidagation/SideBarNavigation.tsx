import { NavItem } from "../../atoms/NavItem";

interface SidebarNavigationProps {
    activeItem: string;
    onItemClick: (itemId: string) => void;
}
/**
 * SidebarNavigation Component (Molecule)
 *
 * Este componente es una molécula de UI que representa la barra de navegación lateral.
 * Agrupa varios NavItems y gestiona el estado del elemento activo.
 *
 * @param {SidebarNavigationProps} props - Las propiedades del componente.
 * @param {string} props.activeItem - El ID del elemento actualmente activo.
 * @param {function} props.onItemClick - Callback para cuando se hace clic en un elemento.
 */
export const SideBarNavigation = ({
    activeItem,
    onItemClick
}: SidebarNavigationProps) => {
    const navItems = [
        { id: 'bio', label: 'Biografía' },
        { id: 'interests', label: 'Intereses' },
        { id: 'education', label: 'Educación' },
        { id: 'contacts', label: 'Contacto' },
    ];

    return (
        <nav className="space-y-2">
            {
                navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        label={item.label}
                        href={`#${item.id}`}
                        isActive={activeItem === item.id}
                        onClick={() => onItemClick(item.id)}
                    />
                ))
            }
        </nav>
    );
}
