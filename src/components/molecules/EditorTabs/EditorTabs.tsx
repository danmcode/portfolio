import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface EditorTabsProps {
    tabs: string[];
    activeTab: string;
    canClose: boolean;
    onSelect: (tabId: string) => void;
    onClose: (tabId: string) => void;
    /** Prefijo para los ids, para enlazar cada pestaña con su panel. */
    idPrefix: string;
    children: React.ReactNode;
}

/**
 * EditorTabs Component (Molecule)
 *
 * Barra de pestañas estilo editor de código con su panel de contenido.
 * Cada pestaña tiene dos botones hermanos (seleccionar y cerrar),
 * evitando anidar un <button> dentro de otro (HTML inválido).
 */
export const EditorTabs = ({
    tabs,
    activeTab,
    canClose,
    onSelect,
    onClose,
    idPrefix,
    children,
}: EditorTabsProps) => {
    return (
        <div className="flex-grow bg-gray-800 rounded-lg overflow-hidden flex flex-col">
            <div role="tablist" className="flex border-b border-gray-700 overflow-x-auto custom-scrollbar">
                {tabs.map((tabId) => {
                    const isActive = activeTab === tabId;
                    return (
                        <div
                            key={tabId}
                            className={`
                                flex items-center border-r border-gray-700 whitespace-nowrap
                                transition-colors duration-200
                                ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
                            `}
                        >
                            <button
                                id={`${idPrefix}-tab-${tabId}`}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`${idPrefix}-panel`}
                                onClick={() => onSelect(tabId)}
                                className="px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-danmcode)]"
                            >
                                _{tabId}
                            </button>
                            {canClose && (
                                <button
                                    onClick={() => onClose(tabId)}
                                    className="mr-2 p-1 rounded-full hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-danmcode)]"
                                    aria-label={`Cerrar pestaña ${tabId}`}
                                >
                                    <XMarkIcon className="h-4 w-4 text-gray-400 hover:text-white" />
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>

            <div
                id={`${idPrefix}-panel`}
                role="tabpanel"
                aria-labelledby={activeTab ? `${idPrefix}-tab-${activeTab}` : undefined}
                className="p-4 flex-grow overflow-y-auto text-gray-300"
            >
                {children}
            </div>
        </div>
    );
};
