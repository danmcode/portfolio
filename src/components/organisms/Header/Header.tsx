import React, { useState, useEffect } from 'react';
import { Navbar } from '../../molecules/Navbar';
import { Link } from '../../atoms/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import danmcodeIcom from '../../../assets/icons/damncode-logo.png';

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
        <header className="w-full items-stretch px-4 sm:px-6 lg:px-8 bg-[var(--dark-blue)] border-b border-gray-700 sticky top-0 z-50 h-full">

            <div className="flex items-stretch justify-between">
                <div className="flex items-center px-4 border-r border-gray-700 flex-shrink-0 min-w-0">
                    <h1 className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                        <img src={danmcodeIcom} alt="Protecnica" width={80} />
                    </h1>
                </div>

                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden text-gray-400 hover:text-white"
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
                    <Link
                        href="#contact-me"
                        isActive={activeSection === 'contact-me'}
                        variant="tab"
                        className="!border-r-0 !px-0 !py-0"
                    >
                        _contact-me
                    </Link>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden flex flex-col bg-gray-800 border-t border-gray-700
                        absolute w-full left-0 transition-all duration-300 ease-in-out top-full z-40">

                    <div className="py-4">
                        <Navbar activeSection={activeSection} isMobileView={true} />
                    </div>

                    <div className="py-4 px-4 text-center border-t border-gray-700">
                        <Link
                            href="#contact-me"
                            isActive={activeSection === 'contact-me'}
                            variant="default"
                            className="block w-full text-lg"
                            onClick={toggleMobileMenu}
                        >
                            _contact-me
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};