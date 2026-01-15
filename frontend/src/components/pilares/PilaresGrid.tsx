'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChartBarIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BookOpenIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { PILARES } from '@/lib/constants';
import { PilarType } from '@/types';

/**
 * Componente PilaresGrid
 * Tarjetas de acceso a los 5 pilares del modelo OMiPYME
 */

// Mapeo de iconos por pilar
const ICON_MAP = {
  observatorio: ChartBarIcon,
  herramientas: WrenchScrewdriverIcon,
  investigacion: AcademicCapIcon,
  formacion: BookOpenIcon,
  ecosistema: GlobeAltIcon,
};

// Mapeo de gradientes por pilar
const GRADIENT_MAP = {
  observatorio: 'from-pilar-observatorio to-pilar-observatorio-light',
  herramientas: 'from-pilar-herramientas to-pilar-herramientas-light',
  investigacion: 'from-pilar-investigacion to-pilar-investigacion-light',
  formacion: 'from-pilar-formacion to-pilar-formacion-light',
  ecosistema: 'from-pilar-ecosistema to-pilar-ecosistema-light',
};

// Subsecciones destacadas por pilar
const SUBSECCIONES: Record<PilarType, { nombre: string; href: string }[]> = {
  observatorio: [
    { nombre: 'Dashboards', href: '/observatorio/dashboards' },
    { nombre: 'Estadísticas', href: '/observatorio/datos' },
    { nombre: 'Mapas', href: '/observatorio/mapas' },
  ],
  herramientas: [
    { nombre: 'Selfie Distrital', href: '/herramientas/selfie-distrital' },
    { nombre: 'Chatbot OBI', href: '/herramientas/chatbot-obi' },
    { nombre: 'Calculadoras', href: '/herramientas/calculadoras' },
  ],
  investigacion: [
    { nombre: 'Publicaciones', href: '/investigacion/publicaciones' },
    { nombre: 'Proyectos', href: '/investigacion/proyectos' },
    { nombre: 'Equipo', href: '/investigacion/equipo' },
  ],
  formacion: [
    { nombre: 'Cursos', href: '/formacion/cursos' },
    { nombre: 'Toolkits', href: '/formacion/toolkits' },
    { nombre: 'Podcast', href: '/formacion/podcast' },
  ],
  ecosistema: [
    { nombre: 'Eventos', href: '/ecosistema/eventos' },
    { nombre: 'Aliados', href: '/ecosistema/aliados' },
    { nombre: 'Comunidad', href: '/ecosistema/comunidad' },
  ],
};

interface PilaresGridProps {
  showSubsections?: boolean;
  variant?: 'default' | 'compact';
}

export default function PilaresGrid({
  showSubsections = true,
  variant = 'default',
}: PilaresGridProps) {
  const pilaresList = Object.values(PILARES).sort((a, b) => a.orden - b.orden);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-heading font-bold text-uned-blue mb-4">
            Nuestros Cinco Pilares
          </h2>
          <p className="text-xl text-gray-600">
            Explora las diferentes áreas del observatorio diseñadas para
            fortalecer y apoyar a las MiPYMEs de Costa Rica
          </p>
          <div className="divider-pilar bg-gradient-to-r from-uned-blue to-uned-green mt-6" />
        </div>

        {/* Grid de pilares */}
        <div className="pilares-grid">
          {pilaresList.map((pilar, index) => {
            const Icon = ICON_MAP[pilar.id];
            const subsecciones = SUBSECCIONES[pilar.id];

            return (
              <div
                key={pilar.id}
                className="group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`card-pilar h-full flex flex-col transition-all duration-300 hover:shadow-2xl`}
                  style={{
                    borderTopColor: pilar.color,
                  }}
                >
                  {/* Header de la tarjeta con gradiente */}
                  <div
                    className="p-6 text-white bg-gradient-to-br"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${pilar.color} 0%, ${pilar.colorLight} 100%)`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-mono font-semibold bg-white/20 px-3 py-1 rounded-full">
                        {pilar.orden}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {pilar.nombre}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {pilar.descripcion}
                    </p>
                  </div>

                  {/* Subsecciones */}
                  {showSubsections && (
                    <div className="p-6 flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Explora
                      </p>
                      <ul className="space-y-2">
                        {subsecciones.map((subseccion) => (
                          <li key={subseccion.nombre}>
                            <Link
                              href={subseccion.href}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                            >
                              <span className="text-gray-700 font-medium text-sm">
                                {subseccion.nombre}
                              </span>
                              <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover/link:text-gray-700 group-hover/link:translate-x-1 transition-all" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Footer con botón */}
                  <div className="p-6 pt-0">
                    <Link
                      href={pilar.ruta}
                      className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform group-hover:scale-105"
                      style={{
                        backgroundColor: pilar.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = pilar.colorLight;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = pilar.color;
                      }}
                    >
                      <span>Ver más</span>
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                ¿No encuentras lo que buscas?
              </p>
              <p className="text-gray-600">
                Contáctanos y te ayudaremos a encontrar la información que necesitas
              </p>
            </div>
            <Link
              href="/contacto"
              className="px-8 py-3 bg-uned-blue text-white font-bold rounded-lg hover:bg-uned-blue/90 transition-colors whitespace-nowrap"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
