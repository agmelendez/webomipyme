import React from 'react';
import Layout from '@/components/layout/Layout';

/**
 * Página de Declaración de Accesibilidad
 * Cumple con WCAG 2.1 AA y directrices UNED
 * Requisito obligatorio según especificaciones técnicas
 */

export default function Accesibilidad() {
  return (
    <Layout
      title="Declaración de Accesibilidad"
      description="Declaración de Accesibilidad Web del Observatorio de MIPYMES (OMiPYME) - UNED Costa Rica. Cumplimiento WCAG 2.1 AA"
      noIndex={false}
    >
      <div className="bg-gray-50 py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h1 className="text-4xl font-heading font-bold text-uned-blue mb-4">
              Declaración de Accesibilidad
            </h1>
            <p className="text-gray-600 text-lg">
              Observatorio de Micro, Pequeñas y Medianas Empresas (OMiPYME)
              <br />
              Universidad Estatal a Distancia (UNED)
              <br />
              <strong>Última actualización:</strong> Enero 2026
            </p>
          </div>

          {/* Contenido */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-uned-blue mb-4">
              Compromiso con la Accesibilidad
            </h2>
            <p>
              La Universidad Estatal a Distancia (UNED) está comprometida con
              garantizar la accesibilidad digital para personas con
              discapacidad. Estamos continuamente mejorando la experiencia del
              usuario para todos y aplicando los estándares de accesibilidad
              pertinentes.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Estándares de Conformidad
            </h2>
            <div className="bg-uned-blue/5 p-6 rounded-lg">
              <p className="mb-4">
                Este sitio web cumple con el nivel{' '}
                <strong>AA de las Pautas de Accesibilidad para el Contenido Web
                (WCAG) 2.1</strong>, establecidas por el World Wide Web
                Consortium (W3C).
              </p>
              <div className="flex items-start gap-3">
                <svg
                  className="w-8 h-8 text-green-600 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-semibold">Nivel de Conformidad: AA</p>
                  <p className="text-sm text-gray-600">
                    Conforme a las directrices institucionales de la UNED y las
                    mejores prácticas internacionales
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Características de Accesibilidad Implementadas
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-3">⌨️</span>
                  Navegación por Teclado
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    Todas las funcionalidades son accesibles mediante el teclado
                  </li>
                  <li>
                    Skip link para saltar al contenido principal (presione Tab al
                    cargar la página)
                  </li>
                  <li>
                    Orden de tabulación lógico y predecible
                  </li>
                  <li>
                    Indicadores visuales claros del foco del teclado
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-3">🎨</span>
                  Contraste y Diseño Visual
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    Contraste mínimo de 4.5:1 para texto normal
                  </li>
                  <li>
                    Contraste mínimo de 3:1 para texto grande y elementos gráficos
                  </li>
                  <li>
                    No se usa únicamente el color para transmitir información
                  </li>
                  <li>
                    Diseño responsive adaptable a diferentes tamaños de pantalla
                  </li>
                  <li>
                    Zoom de hasta 200% sin pérdida de contenido o funcionalidad
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-3">🔊</span>
                  Compatibilidad con Lectores de Pantalla
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    Etiquetas ARIA apropiadas para elementos interactivos
                  </li>
                  <li>
                    Texto alternativo descriptivo para todas las imágenes
                  </li>
                  <li>
                    Estructura de encabezados jerárquica (H1 → H6)
                  </li>
                  <li>
                    Roles y propiedades ARIA para componentes personalizados
                  </li>
                  <li>
                    Anuncios de cambios dinámicos de contenido
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-3">📝</span>
                  Contenido y Lenguaje
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    Lenguaje claro y comprensible
                  </li>
                  <li>
                    Lenguaje inclusivo en todo el contenido
                  </li>
                  <li>
                    Definición de idioma de la página (es-CR)
                  </li>
                  <li>
                    Etiquetas semánticas HTML5 apropiadas
                  </li>
                  <li>
                    Enlaces descriptivos (no se usa "clic aquí")
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  Visualizaciones de Datos Accesibles
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    Alternativas textuales para gráficos y visualizaciones
                  </li>
                  <li>
                    Tablas de datos complementarias
                  </li>
                  <li>
                    Uso de patrones además de colores para distinguir series
                  </li>
                  <li>
                    Descripciones de tendencias principales en datos
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  Formularios Accesibles
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    Todas las entradas tienen etiquetas (labels) asociadas
                  </li>
                  <li>
                    Mensajes de error descriptivos y sugerencias de corrección
                  </li>
                  <li>
                    Instrucciones claras para completar formularios
                  </li>
                  <li>
                    Validación accesible en tiempo real
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Tecnologías Utilizadas
            </h2>
            <p>
              El sitio web se basa en las siguientes tecnologías para su
              accesibilidad:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>HTML5 semántico</li>
              <li>CSS3 con enfoque en accesibilidad</li>
              <li>
                JavaScript con mejora progresiva (progressive enhancement)
              </li>
              <li>ARIA (Accessible Rich Internet Applications)</li>
              <li>Next.js 14 con optimización de rendimiento</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Limitaciones Conocidas
            </h2>
            <p>
              A pesar de nuestros esfuerzos por garantizar la accesibilidad,
              pueden existir algunas limitaciones:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Documentos PDF antiguos pueden no ser completamente accesibles
                (estamos trabajando en su remediación)
              </li>
              <li>
                Algunos videos de terceros pueden no tener subtítulos (se
                recomienda verificar en la plataforma original)
              </li>
              <li>
                Contenido externo enlazado puede no cumplir nuestros estándares
                de accesibilidad
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Herramientas de Asistencia Recomendadas
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-3 font-semibold">
                Lectores de pantalla compatibles:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>NVDA (Windows) - gratuito</li>
                <li>JAWS (Windows)</li>
                <li>VoiceOver (macOS e iOS) - integrado</li>
                <li>TalkBack (Android) - integrado</li>
                <li>Narrator (Windows) - integrado</li>
              </ul>
              <p className="mt-4 mb-3 font-semibold">
                Navegadores recomendados:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Chrome (última versión)</li>
                <li>Mozilla Firefox (última versión)</li>
                <li>Microsoft Edge (última versión)</li>
                <li>Safari (última versión)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Atajos de Teclado
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-uned-blue text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Acción</th>
                    <th className="px-6 py-3 text-left font-semibold">Teclas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Saltar al contenido principal</td>
                    <td className="px-6 py-4">
                      <code className="bg-gray-100 px-2 py-1 rounded">Tab</code>{' '}
                      al cargar
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Navegar hacia adelante</td>
                    <td className="px-6 py-4">
                      <code className="bg-gray-100 px-2 py-1 rounded">Tab</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Navegar hacia atrás</td>
                    <td className="px-6 py-4">
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        Shift + Tab
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Activar enlace o botón</td>
                    <td className="px-6 py-4">
                      <code className="bg-gray-100 px-2 py-1 rounded">Enter</code>{' '}
                      o{' '}
                      <code className="bg-gray-100 px-2 py-1 rounded">Space</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Cerrar diálogo</td>
                    <td className="px-6 py-4">
                      <code className="bg-gray-100 px-2 py-1 rounded">Esc</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Evaluación y Pruebas
            </h2>
            <p>
              Este sitio web ha sido evaluado utilizando las siguientes
              herramientas y métodos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Lighthouse:</strong> Auditorías automatizadas de
                accesibilidad
              </li>
              <li>
                <strong>axe DevTools:</strong> Verificación de problemas de
                accesibilidad
              </li>
              <li>
                <strong>WAVE:</strong> Evaluación de accesibilidad web
              </li>
              <li>
                <strong>Pruebas con lectores de pantalla:</strong> NVDA,
                VoiceOver y TalkBack
              </li>
              <li>
                <strong>Pruebas de navegación por teclado:</strong> Sin uso de
                mouse
              </li>
              <li>
                <strong>Evaluación manual:</strong> Revisión por especialistas
                en accesibilidad
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Retroalimentación y Contacto
            </h2>
            <p>
              Sus comentarios son importantes para nosotros. Si encuentra
              barreras de accesibilidad en este sitio web, por favor
              contáctenos:
            </p>
            <div className="bg-uned-blue/10 border-l-4 border-uned-blue p-6 rounded mt-4">
              <p className="mb-2">
                <strong>Correo electrónico:</strong>{' '}
                <a
                  href="mailto:observatorio@uned.ac.cr"
                  className="text-uned-blue underline"
                >
                  observatorio@uned.ac.cr
                </a>
              </p>
              <p className="mb-2">
                <strong>Teléfono:</strong> +506 2527-2000
              </p>
              <p className="mt-4 text-sm">
                Nos esforzamos por responder a las consultas sobre accesibilidad
                en un plazo de <strong>5 días hábiles</strong>.
              </p>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              Mejora Continua
            </h2>
            <p>
              La accesibilidad es un proceso continuo. Nos comprometemos a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Revisar y actualizar regularmente el contenido para mantener los
                estándares de accesibilidad
              </li>
              <li>
                Capacitar a nuestro personal en mejores prácticas de
                accesibilidad
              </li>
              <li>
                Incorporar la accesibilidad en todos los nuevos desarrollos
              </li>
              <li>
                Remediar activamente cualquier problema de accesibilidad
                identificado
              </li>
              <li>
                Actualizar esta declaración cuando realicemos cambios
                significativos
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-8">
              <p className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Compromiso institucional:</strong> La UNED se
                  compromete a garantizar que sus sitios web sean accesibles
                  para todas las personas, independientemente de sus capacidades
                  o de la tecnología que utilicen.
                </span>
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8 text-sm">
              <p>
                <strong>Última actualización de esta declaración:</strong> Enero
                2026
              </p>
              <p className="mt-2">
                <strong>Fecha de la última evaluación:</strong> Enero 2026
              </p>
              <p className="mt-2">
                <strong>Método de evaluación:</strong> Autoevaluación y pruebas
                con herramientas automatizadas y manuales
              </p>
            </div>
          </div>

          {/* Footer de la página */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center text-uned-blue hover:text-uned-blue/80 font-semibold"
            >
              ← Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
