import React from 'react';
import { NavLink } from 'react-router-dom';

interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'tab';
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Link Component (Atom)
 *
 * This UI atom component represents a navigable link.
 * It encapsulates the semantics of an <a> tag and applies base styles with Tailwind CSS.
 * Now supports different style variants and uses brand colors.
 *
 * @param {LinkProps} props - The component properties.
 * @param {string} props.href - The URL the link points to.
 * @param {React.ReactNode} props.children - The content of the link.
 * @param {string} [props.className] - Additional Tailwind classes for customization.
 * @param {'default' | 'tab'} [props.variant='default'] - The style variant of the link.
 * @param {function} [props.onClick] - Optional callback function for click events.
 */
export const Link: React.FC<LinkProps> = ({ href, children, className, variant = 'default', onClick }: LinkProps) => {

    return (
        <NavLink
            to={href}
            className={({ isActive }) => {
                const base = `transition-colors duration-200 focus:outline-none h-full`;

                const defaultStyles = `text-gray-400 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium`;

                const tabStyles = isActive
                    ? `text-white border-r border-gray-700 border-b-2 border-b-[var(--green-danmcode)]`
                    : `text-gray-400 hover:bg-gray-700 hover:text-white`;

                const variantStyles = variant === 'tab' ? `flex items-center p-4 text-sm font-medium whitespace-nowrap ${tabStyles}` : defaultStyles;

                return `${base} ${variantStyles} ${className || ''}`;
            }}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
};