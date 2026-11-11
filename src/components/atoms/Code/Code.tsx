/**
 * Code atoms
 *
 * Fragmentos con colores de sintaxis para simular código.
 * La "puntuación" de código (const, =, [, //, etc.) se oculta a lectores de pantalla con <Syntax>,
 * para que lean solo el contenido real.
 */

type Props = { children: React.ReactNode; className?: string };

/** Sintaxis decorativa: visible, pero oculta para lectores de pantalla. */
export const Syntax = ({ children, className = 'text-gray-400' }: Props) => (
    <span aria-hidden="true" className={className}>{children}</span>
);

/** Palabra reservada (const, export...). Decorativa. */
export const Kw = ({ children }: Props) => <Syntax className="text-blue-400">{children}</Syntax>;

/** Nombre de variable (verde). */
export const Var = ({ children, className = '' }: Props) => <span className={`text-green-400 ${className}`}>{children}</span>;

/** Texto tipo string (naranja). */
export const Str = ({ children, className = '' }: Props) => <span className={`text-orange-300 ${className}`}>{children}</span>;

/** Comentario (gris). */
export const Cm = ({ children, className = '' }: Props) => <span className={`text-gray-400 ${className}`}>{children}</span>;

/**
 * Etiqueta con forma de declaración: `const nombre = [`.
 * El lector de pantalla solo lee `label`.
 */
export const Decl = ({ name, label, open = '[' }: { name: string; label: string; open?: string }) => (
    <>
        <span className="sr-only">{label}</span>
        <span aria-hidden="true">
            <span className="text-blue-400">const </span>
            <span className="text-green-400">{name}</span>
            <span className="text-gray-300"> = {open}</span>
        </span>
    </>
);
