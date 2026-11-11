import { useState } from 'react';

interface UseTabsOptions {
    /** Si es true, la última pestaña abierta no se puede cerrar. */
    keepLastTab?: boolean;
}

/**
 * Maneja el estado de pestañas estilo editor de código:
 * pestañas abiertas, pestaña activa, abrir y cerrar.
 */
export const useTabs = (initialTab: string, { keepLastTab = false }: UseTabsOptions = {}) => {
    const [openTabs, setOpenTabs] = useState<string[]>([initialTab]);
    const [activeTab, setActiveTab] = useState<string>(initialTab);

    const openTab = (tabId: string) => {
        setOpenTabs((prevTabs) => (prevTabs.includes(tabId) ? prevTabs : [...prevTabs, tabId]));
        setActiveTab(tabId);
    };

    const closeTab = (tabId: string) => {
        if (keepLastTab && openTabs.length <= 1) return;

        const closedIndex = openTabs.indexOf(tabId);
        const newOpenTabs = openTabs.filter((tab) => tab !== tabId);
        setOpenTabs(newOpenTabs);

        if (activeTab === tabId) {
            // Igual que un editor: activa la pestaña vecina a la que se cerró.
            const nextIndex = Math.min(closedIndex, newOpenTabs.length - 1);
            setActiveTab(newOpenTabs[nextIndex] ?? '');
        }
    };

    const canClose = !keepLastTab || openTabs.length > 1;

    return { openTabs, activeTab, openTab, setActiveTab, closeTab, canClose };
};
