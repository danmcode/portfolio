import { Outlet } from "react-router-dom";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer";


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
                bg-gradient-to-br from-[var(--dark-blue)] via-[var(--dark-blue)] to-cyan-950
                text-white 
                font-inter 
                flex flex-col
                fit:h-dvh fit:min-h-0"
        >
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 fit:py-5 fit:min-h-0 fit:flex fit:flex-col">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
