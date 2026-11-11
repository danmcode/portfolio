import { useEffect } from 'react';

const SITE = 'Daniel Muelas · Backend Engineer';

/** Actualiza el <title> del documento según la página (SPA). */
export const usePageTitle = (page?: string) => {
    useEffect(() => {
        document.title = page ? `${page} | ${SITE}` : `${SITE} | Node.js · TypeScript · AWS`;
    }, [page]);
};
