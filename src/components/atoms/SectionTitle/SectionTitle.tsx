interface SectionTitleProps {
    id?: string;
    children: React.ReactNode;
    as?: 'h1' | 'h2';
}

/**
 * SectionTitle Component (Atom)
 *
 * Título de sección con estilo de comentario de código (`// título`).
 * Las barras son decorativas y se ocultan a lectores de pantalla.
 */
export const SectionTitle = ({ id, children, as: Tag = 'h2' }: SectionTitleProps) => (
    <Tag id={id} className="font-inter text-2xl sm:text-3xl font-bold text-white mb-6">
        <span aria-hidden="true" className="text-brand-green font-mono">// </span>
        {children}
    </Tag>
);
