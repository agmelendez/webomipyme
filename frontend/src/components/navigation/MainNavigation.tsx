'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BookOpenIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { MENU_PRINCIPAL, PILARES, A11Y_LABELS } from '@/lib/constants';
import { PilarType } from '@/types';

/**
 * Componente de Navegación Principal
 * Muestra los 5 pilares del Modelo de OMiPYME con navegación responsive
 */

// Mapeo de iconos por pilar
const ICON_MAP = {
  observatorio: ChartBarIcon,
  herramientas: WrenchScrewdriverIcon,
  investigacion: AcademicCapIcon,
  formacion: BookOpenIcon,
  ecosistema: GlobeAltIcon,
};

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Detectar scroll para cambiar estilos del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isActivePath = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const getPilarColor = (pilar?: PilarType) => {
    if (!pilar) return 'text-uned-blue';
    return `text-pilar-${pilar}`;
  };

  return (
    <>
      {/* Skip to content - Accesibilidad */}
      <a
        href="#main-content"
        className="skip-to-content"
        aria-label={A11Y_LABELS.skipToContent}
      >
        {A11Y_LABELS.skipToContent}
      </a>

      {/* Header Principal */}
      <header
        className={`sticky top-0 z-navigation transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm shadow-md'
        }`}
      >
        {/* Barra Superior - Logo y búsqueda */}
        <div className="bg-uned-blue text-white">
          <div className="container-custom">
            <div className="flex items-center justify-between py-3">
              {/* Logo y nombre */}
              <Link
                href="/"
                className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
                aria-label={A11Y_LABELS.logo}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-uned-blue font-bold text-xl">OM</span>
                  </div>
                  <div className="ml-3">
                    <h1 className="text-xl font-heading font-bold text-white leading-tight">
                      OMiPYME
                    </h1>
                    <p className="text-xs text-white/80">UNED Costa Rica</p>
                  </div>
                </div>
              </Link>

              {/* Buscador Desktop */}
              <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
                <div className="relative w-full">
                  <input
                    type="search"
                    placeholder="Buscar recursos, publicaciones, herramientas..."
                    className="w-full px-4 py-2 pl-10 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label={A11Y_LABELS.search}
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
              </div>

              {/* Botones de acción */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  href="/contacto"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Contacto
                </Link>
                <Link
                  href="https://www.uned.ac.cr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  UNED
                </Link>
              </div>

              {/* Menú Hamburguesa (Mobile) */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={isMenuOpen ? A11Y_LABELS.closeMenu : A11Y_LABELS.openMenu}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Barra de Navegación - Los 5 Pilares */}
        <nav className="hidden md:block border-t border-gray-200">
          <div className="container-custom">
            <ul className="flex items-center justify-center space-x-1 lg:space-x-2">
              {MENU_PRINCIPAL.map((item) => {
                const Icon = item.pilar ? ICON_MAP[item.pilar] : null;
                const isActive = isActivePath(item.href);
                const isDropdownOpen = activeDropdown === item.label;

                return (
                  <li key={item.label} className="relative group">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      className={`flex items-center space-x-2 px-4 py-4 font-semibold text-sm lg:text-base transition-all duration-200 ${
                        isActive
                          ? `${getPilarColor(item.pilar)} border-b-2 ${
                              item.pilar
                                ? `border-pilar-${item.pilar}`
                                : 'border-uned-blue'
                            }`
                          : 'text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`absolute left-0 top-full mt-0 w-64 bg-white shadow-xl rounded-b-lg overflow-hidden transition-all duration-200 ${
                          isDropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        } ${
                          item.pilar
                            ? `border-t-4 border-pilar-${item.pilar}`
                            : 'border-t-4 border-uned-blue'
                        }`}
                      >
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                                  isActivePath(child.href)
                                    ? `${getPilarColor(item.pilar)} bg-gray-50`
                                    : 'text-gray-700'
                                }`}
                              >
                                <span className="text-sm font-medium">
                                  {child.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>

      {/* Menú Móvil (Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Overlay oscuro */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Panel del menú */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
            {/* Header del menú móvil */}
            <div className="bg-uned-blue text-white p-4 flex items-center justify-between">
              <span className="font-heading font-bold text-lg">Menú</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={A11Y_LABELS.closeMenu}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Búsqueda móvil */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-uned-blue"
                  aria-label={A11Y_LABELS.search}
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>

            {/* Items del menú móvil */}
            <nav className="p-4">
              <ul className="space-y-2">
                {MENU_PRINCIPAL.map((item) => {
                  const Icon = item.pilar ? ICON_MAP[item.pilar] : null;
                  const isActive = isActivePath(item.href);
                  const isExpanded = activeDropdown === item.label;

                  return (
                    <li key={item.label}>
                      {/* Item principal */}
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          isActive
                            ? `${getPilarColor(item.pilar)} bg-gray-50`
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {Icon && <Icon className="w-5 h-5" />}
                          <span className="font-semibold">{item.label}</span>
                        </div>
                        {item.children && (
                          <ChevronDownIcon
                            className={`w-5 h-5 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>

                      {/* Subitems */}
                      {item.children && isExpanded && (
                        <ul className="mt-2 ml-8 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={`block p-2 rounded-lg text-sm transition-colors ${
                                  isActivePath(child.href)
                                    ? `${getPilarColor(item.pilar)} bg-gray-50 font-medium`
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Links adicionales móvil */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/nosotros"
                      className="block text-gray-700 hover:text-uned-blue font-medium"
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className="block text-gray-700 hover:text-uned-blue font-medium"
                    >
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.uned.ac.cr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700 hover:text-uned-blue font-medium"
                    >
                      UNED Costa Rica
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
