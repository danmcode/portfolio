import { useState } from 'react';

/**
 * Maneja el estado de pestañas estilo editor de código:
 * pestañas abiertas, pestaña activa, abrir y cerrar.
 * La última pestaña abierta no se puede cerrar, para que el panel nunca quede vacío.
 */
export const useTabs = (initialTab: string) => {
    const [openTabs, setOpenTabs] = useState<string[]>([initialTab]);
    const [activeTab, setActiveTab] = useState<string>(initialTab);

    const openTab = (tabId: string) => {
        setOpenTabs((prevTabs) => (prevTabs.includes(tabId) ? prevTabs : [...prevTabs, tabId]));
        setActiveTab(tabId);
    };

    const closeTab = (tabId: string) => {
        if (openTabs.length <= 1) return;

        const closedIndex = openTabs.indexOf(tabId);
        const newOpenTabs = openTabs.filter((tab) => tab !== tabId);
        setOpenTabs(newOpenTabs);

        if (activeTab === tabId) {
            // Igual que un editor: activa la pestaña vecina a la que se cerró.
            setActiveTab(newOpenTabs[Math.min(closedIndex, newOpenTabs.length - 1)]);
        }
    };

    return { openTabs, activeTab, openTab, setActiveTab, closeTab, canClose: openTabs.length > 1 };
};
