import React from 'react';
import { PILARES, REDES_SOCIALES, CONTACTO, LINKS_INSTITUCIONALES } from '@/lib/constants';

/**
 * Footer Component
 * Footer reutilizable para todas las páginas
 * Cumple con directrices institucionales UNED:
 * - Link visible a www.uned.ac.cr (obligatorio)
 * - Licencia Creative Commons (Ley 6683)
 * - Aviso legal y política de privacidad (Ley 8968)
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        {/* Banner Institucional UNED - OBLIGATORIO */}
        <div className="mb-8 pb-8 border-b border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-heading font-semibold mb-2">
                Universidad Estatal a Distancia
              </p>
              <p className="text-gray-400">
                Observatorio de Micro, Pequeñas y Medianas Empresas
              </p>
            </div>
            <a
              href={LINKS_INSTITUCIONALES.UNED}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-uned-blue hover:bg-uned-blue/80 rounded-lg transition-colors font-semibold"
            >
              <span className="mr-2">🏛️</span>
              Ir a www.uned.ac.cr
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Info y Redes */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">OMiPYME</h3>
            <p className="text-gray-400 mb-4">
              Observatorio de Micro, Pequeñas y Medianas Empresas de la UNED
              Costa Rica
            </p>
            <div className="flex space-x-3">
              {/* Redes sociales */}
              {Object.entries(REDES_SOCIALES).map(([nombre, url]) => (
                <a
                  key={nombre}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-uned-blue transition-colors"
                  aria-label={`Seguir en ${nombre}`}
                  title={`Seguir en ${nombre}`}
                >
                  <span className="text-sm font-semibold capitalize">
                    {nombre.charAt(0).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/nosotros"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/ayuda"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Pilares */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Pilares</h4>
            <ul className="space-y-2">
              {Object.values(PILARES).map((pilar) => (
                <li key={pilar.id}>
                  <a
                    href={pilar.ruta}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {pilar.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href={`mailto:${CONTACTO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACTO.email}
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                {CONTACTO.telefono}
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                {CONTACTO.direccion}
              </li>
            </ul>
          </div>
        </div>

        {/* Licencias y Aviso Legal - OBLIGATORIO según Ley 6683 y Ley 8968 */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
                target="_blank"
                rel="noopener noreferrer license"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Licencia Creative Commons BY-NC-SA 4.0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M9.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S11 10.83 11 10s-.67-1.5-1.5-1.5zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                </svg>
                <span className="underline">CC BY-NC-SA 4.0</span>
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/aviso-legal"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Aviso Legal
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/politica-privacidad"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/accesibilidad"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Accesibilidad
              </a>
            </div>
          </div>
        </div>

        {/* Copyright y Créditos */}
        <div className="pt-6 border-t border-gray-800 text-center text-sm">
          <p className="text-gray-400 mb-2">
            © {currentYear} Universidad Estatal a Distancia (UNED) - Todos los
            derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Este contenido está licenciado bajo{' '}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
              target="_blank"
              rel="noopener noreferrer license"
              className="underline hover:text-gray-400"
            >
              Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0
              Internacional
            </a>
            . Ley de Derechos de Autor y Derechos Conexos (Ley 6683). Ley de
            Protección de la Persona frente al Tratamiento de sus Datos
            Personales (Ley 8968).
          </p>
        </div>
      </div>
    </footer>
  );
}
