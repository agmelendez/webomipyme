import React from 'react';
import { PILARES, REDES_SOCIALES, CONTACTO } from '@/lib/constants';

/**
 * Footer Component
 * Footer reutilizable para todas las páginas
 */

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">OMiPYME</h3>
            <p className="text-gray-400 mb-4">
              Observatorio de Micro, Pequeñas y Medianas Empresas de la UNED
              Costa Rica
            </p>
            <div className="flex space-x-4">
              {/* Redes sociales */}
              {Object.entries(REDES_SOCIALES).map(([nombre, url]) => (
                <a
                  key={nombre}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-uned-blue transition-colors"
                  aria-label={nombre}
                  title={nombre}
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
              <li>{CONTACTO.email}</li>
              <li>{CONTACTO.telefono}</li>
              <li>{CONTACTO.direccion}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} OMiPYME - Universidad Estatal a
            Distancia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
