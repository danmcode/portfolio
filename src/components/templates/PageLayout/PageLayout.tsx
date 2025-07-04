import { Outlet } from "react-router-dom";
import { Footer } from "../../organisms/Footer";
import { Header } from "../../organisms/Header";


/**
 * PageLayout Component
 *
 * Este componente actúa como una plantilla para la estructura general de una página.
 * Proporciona un contenedor centralizado y un padding consistente,
 * asegurando que el contenido se vea bien en diferentes tamaños de pantalla.
 */
export const PageLayout = () => {
    return (
        <div
            className="min-h-screen 
                bg-gradient-to-br from-[var(--dark-blue)] via-[var(--dark-blue)] to-[var(--brand-green)]
                text-white 
                font-inter 
                flex flex-col"
        >
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
