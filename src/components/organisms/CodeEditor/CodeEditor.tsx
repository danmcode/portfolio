import { useRef } from 'react';
import type { IconType } from 'react-icons';
import { SiTypescript } from 'react-icons/si';
import { VscChevronDown, VscClose, VscJson, VscMarkdown, VscSourceControl, VscTerminal } from 'react-icons/vsc';
import { useTabs } from '../../../hooks/useTabs';

export type EditorLanguage = 'TypeScript' | 'Markdown' | 'JSON' | 'Shell';

export interface EditorFile {
    id: string;
    /** Nombre de archivo visible, ej. "secuara.md". */
    name: string;
    /** Nombre legible para lectores de pantalla, ej. "Secuara". */
    label: string;
    language: EditorLanguage;
    content: React.ReactNode;
}

interface CodeEditorProps {
    /** Nombre de la carpeta en el explorador y en la barra de título. */
    folder: string;
    files: EditorFile[];
    initialFile?: string;
    /** Prefijo único para los ids de pestañas y paneles. */
    idPrefix: string;
}

const fileIcons: Record<EditorLanguage, { icon: IconType; color: string }> = {
    TypeScript: { icon: SiTypescript, color: '#4A90E2' },
    Markdown: { icon: VscMarkdown, color: '#60A5FA' },
    JSON: { icon: VscJson, color: '#FDE047' },
    Shell: { icon: VscTerminal, color: '#4ADE80' },
};

const FileIcon = ({ language }: { language: EditorLanguage }) => {
    const { icon: Icon, color } = fileIcons[language];
    return <Icon aria-hidden="true" className="h-3.5 w-3.5 flex-shrink-0" style={{ color }} />;
};

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green';

/**
 * CodeEditor Component (Organism)
 *
 * Simula un editor de código: barra de título, explorador de archivos, pestañas,
 * panel con scroll interno y barra de estado.
 * - En escritorio ocupa el alto de la ventana: el contenido largo se desplaza dentro del panel, no en la página.
 * - Las pestañas siguen el patrón ARIA "tabs": flechas izquierda/derecha, Inicio y Fin para moverse.
 */
export const CodeEditor = ({ folder, files, initialFile, idPrefix }: CodeEditorProps) => {
    const { openTabs, activeTab, openTab, setActiveTab, closeTab, canClose } = useTabs(initialFile ?? files[0].id);
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    const activeFile = files.find((file) => file.id === activeTab) ?? files[0];
    const fileById = (id: string) => files.find((file) => file.id === id)!;

    const handleTabKeyDown = (event: React.KeyboardEvent, index: number) => {
        const keys: Record<string, number> = {
            ArrowRight: (index + 1) % openTabs.length,
            ArrowLeft: (index - 1 + openTabs.length) % openTabs.length,
            Home: 0,
            End: openTabs.length - 1,
        };
        if (!(event.key in keys)) return;
        event.preventDefault();
        const nextId = openTabs[keys[event.key]];
        setActiveTab(nextId);
        tabRefs.current[nextId]?.focus();
    };

    return (
        <div className="flex flex-col rounded-xl overflow-hidden border border-gray-700 bg-gray-800 shadow-lg shadow-black/30 fit:flex-1 fit:min-h-0">
            {/* Barra de título */}
            <div aria-hidden="true" className="relative flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">
                <span className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </span>
                <span className="absolute inset-x-0 text-center font-mono text-xs text-gray-400 pointer-events-none truncate px-20">
                    {activeFile.name} — {folder} — danmcode
                </span>
            </div>

            <div className="flex flex-col lg:flex-row flex-1 min-h-0">
                {/* Explorador */}
                <nav
                    aria-label={`Explorador: ${folder}`}
                    className="lg:w-[17rem] flex-shrink-0 bg-gray-900/50 border-b lg:border-b-0 lg:border-r border-gray-700 font-mono text-sm"
                >
                    <p aria-hidden="true" className="hidden lg:block px-4 pt-3 pb-1 text-[11px] uppercase tracking-wider text-gray-400">
                        Explorador
                    </p>
                    <p aria-hidden="true" className="hidden lg:flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase text-gray-300">
                        <VscChevronDown className="h-4 w-4" />
                        {folder}
                    </p>
                    <ul className="relative flex flex-wrap lg:flex-nowrap lg:flex-col lg:overflow-y-auto custom-scrollbar px-2 py-2 lg:py-1 gap-1 lg:gap-0">
                        {files.map((file) => {
                            const isActive = file.id === activeTab;
                            return (
                                <li key={file.id} className="lg:w-full">
                                    <button
                                        type="button"
                                        onClick={() => openTab(file.id)}
                                        aria-current={isActive ? 'true' : undefined}
                                        className={`w-full flex items-center gap-2 rounded px-2 lg:ps-6 py-1.5 text-left whitespace-nowrap transition-colors ${focusRing}
                                            ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                                    >
                                        <FileIcon language={file.language} />
                                        <span className="truncate" title={file.name}>{file.name}</span>
                                        <span className="sr-only"> ({file.label})</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Pestañas + panel */}
                <div className="flex flex-col flex-1 min-w-0 min-h-0">
                    <div role="tablist" aria-label="Archivos abiertos" className="flex bg-gray-900/70 border-b border-gray-700 overflow-x-auto custom-scrollbar flex-shrink-0">
                        {openTabs.map((tabId, index) => {
                            const file = fileById(tabId);
                            const isActive = tabId === activeTab;
                            return (
                                <div
                                    key={tabId}
                                    className={`flex items-center border-r border-gray-700 whitespace-nowrap font-mono text-sm transition-colors
                                        ${isActive ? 'bg-gray-800 text-white shadow-[inset_0_2px_0_var(--color-brand-green)]' : 'text-gray-400 hover:bg-gray-800/60 hover:text-white'}`}
                                >
                                    <button
                                        ref={(el) => { tabRefs.current[tabId] = el; }}
                                        id={`${idPrefix}-tab-${tabId}`}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-controls={`${idPrefix}-panel`}
                                        tabIndex={isActive ? 0 : -1}
                                        onClick={() => setActiveTab(tabId)}
                                        onKeyDown={(event) => handleTabKeyDown(event, index)}
                                        className={`flex items-center gap-2 ps-3 pe-2 py-2 ${focusRing}`}
                                    >
                                        <FileIcon language={file.language} />
                                        {file.name}
                                    </button>
                                    {canClose && (
                                        <button
                                            type="button"
                                            onClick={() => closeTab(tabId)}
                                            aria-label={`Cerrar ${file.name}`}
                                            className={`me-1.5 p-0.5 rounded hover:bg-gray-600 ${focusRing}`}
                                        >
                                            <VscClose aria-hidden="true" className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div
                        key={activeFile.id}
                        id={`${idPrefix}-panel`}
                        role="tabpanel"
                        aria-labelledby={`${idPrefix}-tab-${activeFile.id}`}
                        tabIndex={0}
                        className={`flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 sm:p-6 font-mono text-sm leading-relaxed text-gray-300 break-words ${focusRing}`}
                    >
                        {activeFile.content}
                    </div>
                </div>
            </div>

            {/* Barra de estado */}
            <div aria-hidden="true" className="flex items-center justify-between gap-4 px-3 py-1 bg-brand-green text-gray-900 font-mono text-xs">
                <span className="flex items-center gap-1.5">
                    <VscSourceControl className="h-3.5 w-3.5" />
                    main
                </span>
                <span className="flex gap-4">
                    <span className="hidden sm:inline">UTF-8</span>
                    <span>{activeFile.language}</span>
                </span>
            </div>
        </div>
    );
};
