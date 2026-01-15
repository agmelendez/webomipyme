'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ChartBarIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

/**
 * Componente Hero Section
 * Sección principal de la página de inicio con indicadores dinámicos
 */

interface IndicadorHero {
  id: string;
  label: string;
  valor: string;
  icono: React.ElementType;
  tendencia?: 'up' | 'down' | 'neutral';
  cambio?: string;
}

export default function HeroSection() {
  const [indicadores, setIndicadores] = useState<IndicadorHero[]>([
    {
      id: 'empresas',
      label: 'Empresas Registradas',
      valor: '12,458',
      icono: BuildingOffice2Icon,
      tendencia: 'up',
      cambio: '+234',
    },
    {
      id: 'cantones',
      label: 'Cantones Cubiertos',
      valor: '82',
      icono: MapPinIcon,
      tendencia: 'neutral',
    },
    {
      id: 'publicaciones',
      label: 'Publicaciones',
      valor: '156',
      icono: DocumentTextIcon,
      tendencia: 'up',
      cambio: '+12',
    },
    {
      id: 'datos',
      label: 'Datos Analizados',
      valor: '2.5M',
      icono: ChartBarIcon,
      tendencia: 'up',
      cambio: '+150K',
    },
  ]);

  // Simulación de actualización de datos en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setIndicadores((prev) =>
        prev.map((ind) => {
          if (ind.id === 'empresas') {
            const currentValue = parseInt(ind.valor.replace(',', ''));
            const newValue = currentValue + Math.floor(Math.random() * 3);
            return {
              ...ind,
              valor: newValue.toLocaleString(),
            };
          }
          return ind;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative hero-section bg-gradient-hero overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Contenido principal */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Observatorio de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                MiPYMEs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Datos, investigación, herramientas y formación para el
              fortalecimiento del sector de Micro, Pequeñas y Medianas Empresas
              de Costa Rica.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/observatorio/dashboards"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-uned-blue font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ChartBarIcon className="w-5 h-5 mr-2" />
                Explorar Datos
              </Link>
              <Link
                href="/herramientas"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Ver Herramientas
              </Link>
            </div>

            {/* Indicador de scroll */}
            <div className="hidden lg:block mt-12 animate-bounce">
              <p className="text-white/70 text-sm mb-2">Descubre más</p>
              <svg
                className="w-6 h-6 text-white/70 mx-auto lg:mx-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>

          {/* Indicadores en tiempo real */}
          <div className="grid grid-cols-2 gap-4">
            {indicadores.map((indicador, index) => {
              const Icon = indicador.icono;
              return (
                <div
                  key={indicador.id}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-uned-blue/10 rounded-lg">
                      <Icon className="w-6 h-6 text-uned-blue" />
                    </div>
                    {indicador.tendencia === 'up' && (
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        ↑ {indicador.cambio}
                      </span>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-uned-blue mb-1 font-mono">
                    {indicador.valor}
                  </div>
                  <div className="text-sm text-gray-600">{indicador.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Buscador global prominente */}
        <div className="max-w-3xl mx-auto -mb-8 relative z-20 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl p-4">
            <form className="flex gap-3">
              <input
                type="search"
                placeholder="¿Qué información necesitas? Busca datos, publicaciones, herramientas..."
                className="flex-1 px-6 py-4 text-lg border-0 focus:outline-none focus:ring-0"
                aria-label="Buscador global de OMiPYME"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-uned-blue text-white font-bold rounded-xl hover:bg-uned-blue/90 transition-colors flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="hidden sm:inline">Buscar</span>
              </button>
            </form>

            {/* Búsquedas sugeridas */}
            <div className="flex flex-wrap gap-2 mt-4 px-2">
              <span className="text-sm text-gray-600">Búsquedas populares:</span>
              {['Estadísticas', 'Selfie Distrital', 'Cursos', 'Eventos'].map(
                (term) => (
                  <button
                    key={term}
                    className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
