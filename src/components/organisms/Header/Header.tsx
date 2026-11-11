import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../../molecules/Navbar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import danmcodeIcom from '../../../assets/icons/damncode-logo.png';
import { DownloadCVButton } from '../../atoms/Button';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

/**
 * Header Component (Organism)
 *
 * Este componente representa el encabezado principal de la aplicación.
 * Contiene el nombre del portafolio y la barra de navegación con estilo de pestañas de editor.
 * Incluye un menú de hamburguesa para pantallas pequeñas.
 */
export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const { pathname } = useLocation();

    // Cierra el menú móvil al pasar a escritorio o al cambiar de página.
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [isDesktop, pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((isOpen) => !isOpen);
    };

    return (
        <header className="w-full items-stretch bg-[var(--dark-blue)] border-b border-gray-700 sticky top-0 z-50 flex-shrink-0">

            <div className="flex items-stretch justify-between w-full">
                <div className="flex items-center px-2 border-r border-gray-700 flex-shrink-0">
                    <div className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis m-2">
                        <img
                            src={danmcodeIcom}
                            alt="Logo de Danmcode"
                            width={80}
                            className='max-w-[80px] h-auto'
                        />
                    </div>
                </div>

                <button
                    onClick={toggleMobileMenu}
                    aria-controls="mobile-menu"
                    className="lg:hidden text-gray-400 hover:text-white px-4"
                    aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>

                <div className="hidden h-full lg:flex-grow lg:h-full lg:flex lg:items-stretch lg:border-r lg:border-gray-700">
                    <Navbar isMobileView={false} />
                </div>

                <div className="hidden h-full lg:flex lg:items-center lg:px-4 lg:py-2 lg:flex-shrink-0 lg:min-w-0">
                    <DownloadCVButton />
                </div>

            </div>

            {isMobileMenuOpen && (
                <div id="mobile-menu" className="lg:hidden flex flex-col bg-[#1A202C] border-t border-gray-700 absolute w-full left-0 transition-all duration-300 ease-in-out top-full z-40">

                    <Navbar isMobileView={true} />

                    <div className="py-4 px-4 text-center border-t border-gray-700">
                        <DownloadCVButton />
                    </div>
                </div>
            )}
        </header>
    );
};