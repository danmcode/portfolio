import { tech, type TechId } from '../../../data/tech';

interface TechBadgeProps {
    id: TechId;
    size?: 'sm' | 'md';
}

/**
 * TechBadge Component (Atom)
 *
 * Chip con el icono y el nombre de una tecnología, en fuente monoespaciada.
 * El icono es decorativo (aria-hidden): el nombre siempre va como texto.
 */
export const TechBadge = ({ id, size = 'sm' }: TechBadgeProps) => {
    const { label, icon: Icon, color } = tech[id];
    const sizes = size === 'md'
        ? 'gap-2 px-2.5 py-1.5 text-sm'
        : 'gap-1.5 px-2 py-1 text-xs';

    return (
        <span className={`inline-flex items-center rounded-md border border-gray-600 bg-gray-900/70 font-mono text-gray-200 ${sizes}`}>
            <Icon aria-hidden="true" focusable="false" className={size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'} style={{ color }} />
            {label}
        </span>
    );
};
