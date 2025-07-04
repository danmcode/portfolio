interface TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    children: React.ReactNode;
    className?: string;
}

/**
 * Text Component (Atom)
 *
 * Este componente es un átomo de UI que representa un elemento de texto.
 * Permite renderizar diferentes etiquetas HTML semánticas (h1-h6, p, span)
 * y aplicar estilos base con Tailwind CSS.
 *
 * @param {TextProps} props - Las propiedades del componente.
 * @param {string} [props.variant='p'] - La etiqueta HTML semántica a renderizar.
 * @param {React.ReactNode} props.children - El contenido de texto.
 * @param {string} [props.className] - Clases de Tailwind adicionales para personalizar.
 */

export const Text = ({
    variant = 'p',
    children,
    className = '',
}: TextProps) => {
    const Tag = variant;

    const baseStyles = 'font-inter';

    let variantStyles = '';
    switch (variant) {
        case 'h1':
            variantStyles = 'text-4xl sm:text-5xl md:text-6xl font-bold text-white';
            break;
        case 'h2':
            variantStyles = 'text-3xl sm:text-4xl font-semibold text-white';
            break;
        case 'p':
            variantStyles = 'text-base sm:text-lg text-gray-300';
            break;
        case 'span':
            variantStyles = 'text-sm text-gray-400';
            break;
        default:
            variantStyles = 'text-base text-white';
    }

    return (
        <Tag className={`${baseStyles} ${variantStyles} ${className || ''}`}>
            {children}
        </Tag>
    );
}
