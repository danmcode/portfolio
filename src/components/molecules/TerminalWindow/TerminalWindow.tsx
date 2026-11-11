interface TerminalWindowProps {
    /** Nombre de archivo o ruta en la barra de título, ej. "~/proyectos/secuara.ts". */
    title: string;
    /** Comando que se muestra en la primera línea, ej. "cat secuara.md". */
    command?: string;
    as?: 'div' | 'section' | 'article';
    labelledBy?: string;
    className?: string;
    bodyClassName?: string;
    highlight?: boolean;
    /** En pantallas `fit`, el contenido se desplaza dentro de la ventana en lugar de crecer. */
    scrollable?: boolean;
    children: React.ReactNode;
}

/**
 * TerminalWindow Component (Molecule)
 *
 * Ventana estilo terminal/editor: barra con los tres puntos y el nombre de archivo,
 * una línea de comando opcional y el contenido en fuente monoespaciada.
 * La barra y el comando son decorativos (aria-hidden); el contenido real va en children.
 */
export const TerminalWindow = ({
    title,
    command,
    as: Tag = 'div',
    labelledBy,
    className = '',
    bodyClassName = '',
    highlight = false,
    scrollable = false,
    children,
}: TerminalWindowProps) => (
    <Tag
        aria-labelledby={labelledBy}
        className={`flex flex-col rounded-xl overflow-hidden bg-gray-800 border shadow-lg
            ${highlight ? 'border-brand-green/60 shadow-brand-green/15' : 'border-gray-700 shadow-black/20'} ${scrollable ? 'fit:min-h-0' : ''} ${className}`}
    >
        <div aria-hidden="true" className="flex flex-shrink-0 items-center gap-3 px-4 py-2 bg-gray-900/80 border-b border-gray-700">
            <span className="flex gap-1.5 flex-shrink-0">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </span>
            <span className="font-mono text-xs text-gray-400 truncate">{title}</span>
        </div>

        <div className={`flex-grow p-4 sm:p-5 font-mono text-sm leading-relaxed text-gray-300 break-words ${scrollable ? 'fit:min-h-0 fit:overflow-y-auto custom-scrollbar' : ''} ${bodyClassName}`}
            {...(scrollable ? { tabIndex: 0 } : {})}
        >
            {command && (
                <p aria-hidden="true" className="mb-3">
                    <span className="text-green-400">danmcode</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$ </span>
                    <span className="text-white">{command}</span>
                </p>
            )}
            {children}
        </div>
    </Tag>
);
