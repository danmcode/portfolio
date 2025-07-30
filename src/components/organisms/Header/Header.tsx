import React, { useState, useEffect } from 'react';
import { Navbar } from '../../molecules/Navbar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import danmcodeIcom from '../../../assets/icons/damncode-logo.png';
import { DownloadCVButton } from '../../atoms/Button/DownloadCVButton';

/**
 * Header Component (Organism)
 *
 * Este componente representa el encabezado principal de la aplicación.
 * Contiene el nombre del portafolio y la barra de navegación con estilo de pestañas de editor.
 * Ahora adaptado con un menú de hamburguesa para pantallas pequeñas.
 */
export const Header: React.FC = () => {
    const [activeSection, _] = useState<string>('hello');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full items-stretch bg-[var(--dark-blue)] border-b border-gray-700 sticky top-0 z-50 h-full">

            <div className="flex items-stretch justify-between w-full">
                <div className="flex items-center px-2 border-r border-gray-700 flex-shrink-0">
                    <div className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis m-2">
                        <img
                            src={danmcodeIcom}
                            alt="Protecnica"
                            width={80}
                            className='max-w-[80px] h-auto'
                        />
                    </div>
                </div>

                <button
                    onClick={toggleMobileMenu}
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
                    <Navbar activeSection={activeSection} isMobileView={false} />
                </div>

                <div className="hidden h-full lg:flex lg:items-center lg:px-4 lg:py-2 lg:flex-shrink-0 lg:min-w-0">
                    <DownloadCVButton />
                </div>

            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden flex flex-col bg-[#1A202C] border-t border-gray-700 absolute w-full left-0 transition-all duration-300 ease-in-out top-full z-40">

                    <Navbar activeSection={activeSection} isMobileView={true} />

                    <div className="py-4 px-4 text-center border-t border-gray-700">
                        <DownloadCVButton />
                    </div>
                </div>
            )}
        </header>
    );
};