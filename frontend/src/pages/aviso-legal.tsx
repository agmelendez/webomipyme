import React from 'react';
import Layout from '@/components/layout/Layout';

/**
 * Página de Aviso Legal
 * Cumple con Ley 6683 (Derechos de Autor) y directrices UNED
 * Requisito obligatorio según especificaciones técnicas
 */

export default function AvisoLegal() {
  return (
    <Layout
      title="Aviso Legal"
      description="Aviso Legal, Términos de Uso y Condiciones del sitio web del Observatorio de MIPYMES (OMiPYME) - UNED Costa Rica"
      noIndex={false}
    >
      <div className="bg-gray-50 py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h1 className="text-4xl font-heading font-bold text-uned-blue mb-4">
              Aviso Legal y Términos de Uso
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
              1. Información General
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Titular del sitio web:</strong> Universidad Estatal a
                Distancia (UNED)
              </p>
              <p className="mb-2">
                <strong>Dependencia:</strong> Observatorio de Micro, Pequeñas y
                Medianas Empresas (OMiPYME)
              </p>
              <p className="mb-2">
                <strong>Dirección:</strong> Mercedes de Montes de Oca, San
                José, Costa Rica
              </p>
              <p className="mb-2">
                <strong>Teléfono:</strong> +506 2527-2000
              </p>
              <p className="mb-2">
                <strong>Correo electrónico:</strong> observatorio@uned.ac.cr
              </p>
              <p className="mb-2">
                <strong>Sitio web institucional:</strong>{' '}
                <a
                  href="https://www.uned.ac.cr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-uned-blue underline"
                >
                  www.uned.ac.cr
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              2. Objeto y Aceptación
            </h2>
            <p>
              El presente Aviso Legal regula el uso del sitio web del
              Observatorio de MIPYMES (OMiPYME) de la Universidad Estatal a
              Distancia (UNED) de Costa Rica. El acceso y uso del sitio web
              implica la aceptación plena y sin reservas de todos los términos
              establecidos en este Aviso Legal.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              3. Marco Normativo
            </h2>
            <p>
              Este sitio web cumple con las siguientes normativas y directrices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Directrices para el desarrollo e implementación de
                sitios web de la UNED</strong> (Consejo de Rectoría, 14 de
                julio de 2014)
              </li>
              <li>
                <strong>Ley 6683 - Ley de Derechos de Autor y Derechos
                Conexos</strong>
              </li>
              <li>
                <strong>Ley 8968 - Ley de Protección de la Persona frente al
                Tratamiento de sus Datos Personales</strong>
              </li>
              <li>
                <strong>Políticas para el uso y seguridad de Internet</strong>{' '}
                (Acuerdo CU-1604-2002)
              </li>
              <li>
                <strong>Normativa-Directriz 40</strong> (Presidencia de la
                República y MICITT, 28 de abril de 2005)
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              4. Propiedad Intelectual y Licencias
            </h2>
            <div className="bg-uned-blue/5 p-6 rounded-lg">
              <p className="mb-4">
                Todo el contenido de este sitio web (textos, imágenes,
                logotipos, gráficos, videos, software, estructura, diseño y
                cualquier otro material) está protegido por derechos de
                propiedad intelectual de conformidad con la{' '}
                <strong>Ley 6683 de Costa Rica</strong>.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M9.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S11 10.83 11 10s-.67-1.5-1.5-1.5zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                </svg>
                <div>
                  <p className="font-bold text-lg">
                    Licencia Creative Commons BY-NC-SA 4.0
                  </p>
                  <p className="text-sm">
                    Reconocimiento - NoComercial - CompartirIgual 4.0
                    Internacional
                  </p>
                </div>
              </div>
              <p className="text-sm">
                Salvo indicación contraria, el contenido de este sitio está
                licenciado bajo{' '}
                <a
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
                  target="_blank"
                  rel="noopener noreferrer license"
                  className="text-uned-blue underline font-semibold"
                >
                  Creative Commons Reconocimiento-NoComercial-CompartirIgual
                  4.0 Internacional (CC BY-NC-SA 4.0)
                </a>
                . Esto significa que puede:
              </p>
              <ul className="list-none space-y-2 mt-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <strong>Compartir</strong> — copiar y redistribuir el material
                  en cualquier medio o formato
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <strong>Adaptar</strong> — remezclar, transformar y construir a
                  partir del material
                </li>
              </ul>
              <p className="text-sm mt-3">
                <strong>Bajo las siguientes condiciones:</strong>
              </p>
              <ul className="list-none space-y-2 mt-2 text-sm">
                <li className="flex items-start">
                  <span className="text-uned-blue mr-2">•</span>
                  <strong>Reconocimiento</strong> — Debe dar crédito de manera
                  adecuada, citando a la UNED y OMiPYME
                </li>
                <li className="flex items-start">
                  <span className="text-uned-blue mr-2">•</span>
                  <strong>NoComercial</strong> — No puede utilizar el material
                  para fines comerciales
                </li>
                <li className="flex items-start">
                  <span className="text-uned-blue mr-2">•</span>
                  <strong>CompartirIgual</strong> — Si remezcla, transforma o
                  crea a partir del material, debe distribuir sus contribuciones
                  bajo la misma licencia
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              5. Uso Autorizado del Contenido
            </h2>
            <p>Está permitido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Descargar y utilizar el contenido para fines educativos,
                académicos o de investigación no comercial
              </li>
              <li>
                Citar y referenciar el contenido con la debida atribución a la
                UNED y OMiPYME
              </li>
              <li>
                Compartir enlaces a las páginas del sitio web en redes sociales
                y otros medios digitales
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              6. Usos Prohibidos
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="font-semibold mb-3">
                Está expresamente prohibido:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Utilizar el contenido con fines comerciales sin autorización
                  expresa
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Modificar, alterar o eliminar avisos de derechos de autor o
                  licencias
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Reproducir contenido sin el debido reconocimiento a la UNED
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Utilizar el sitio web para actividades contrarias a la ley, la
                  moral o las buenas costumbres
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Introducir virus, código malicioso o cualquier elemento que
                  pueda dañar el sistema
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Realizar actividades que generen sobrecarga en los servidores
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              7. Responsabilidades del Usuario
            </h2>
            <p>El usuario del sitio web se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Hacer uso correcto del sitio web conforme a la legislación
                costarricense
              </li>
              <li>
                No utilizar el sitio para transmitir, distribuir o almacenar
                material ilegal
              </li>
              <li>
                Respetar los derechos de propiedad intelectual de la UNED y
                terceros
              </li>
              <li>
                Proporcionar información veraz y actualizada cuando sea
                requerida
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              8. Limitación de Responsabilidad
            </h2>
            <p>
              La UNED y OMiPYME se esfuerzan por mantener la información del
              sitio web actualizada y precisa. Sin embargo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                No garantizamos la exactitud, vigencia o integridad absoluta de
                la información publicada
              </li>
              <li>
                No nos hacemos responsables de interrupciones temporales del
                servicio por mantenimiento o causas técnicas
              </li>
              <li>
                No somos responsables del contenido de sitios web de terceros
                enlazados desde este sitio
              </li>
              <li>
                Los datos estadísticos y estudios publicados son de carácter
                informativo y académico
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              9. Enlaces a Sitios Externos
            </h2>
            <p>
              Este sitio puede contener enlaces a sitios web externos. La UNED
              no se responsabiliza del contenido, políticas de privacidad o
              prácticas de estos sitios de terceros. Le recomendamos revisar
              sus términos y condiciones.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              10. Política de Actualización de Contenido
            </h2>
            <p>
              Conforme a las directrices UNED, nos comprometemos a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mantener el contenido actualizado y pertinente</li>
              <li>
                Eliminar contenido obsoleto previo aviso cuando corresponda
              </li>
              <li>Indicar fechas de publicación y última actualización</li>
              <li>Mantener un archivo histórico de contenido relevante</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              11. Modificaciones del Aviso Legal
            </h2>
            <p>
              La UNED se reserva el derecho de modificar este Aviso Legal en
              cualquier momento. Las modificaciones entrarán en vigor desde el
              momento de su publicación en el sitio web. Se recomienda revisar
              periódicamente esta página.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              12. Jurisdicción y Ley Aplicable
            </h2>
            <p>
              Este Aviso Legal se rige por la legislación de la República de
              Costa Rica. Para cualquier controversia derivada del uso del sitio
              web, las partes se someten a los tribunales competentes de San
              José, Costa Rica.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              13. Contacto
            </h2>
            <p>
              Para consultas sobre este Aviso Legal o el uso del sitio web:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
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
              <p className="mb-2">
                <strong>Dirección:</strong> Mercedes de Montes de Oca, San
                José, Costa Rica
              </p>
              <p className="mt-4">
                <strong>Sitio web institucional:</strong>{' '}
                <a
                  href="https://www.uned.ac.cr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-uned-blue underline"
                >
                  www.uned.ac.cr
                </a>
              </p>
            </div>

            <div className="bg-uned-blue/10 border-l-4 border-uned-blue p-6 rounded mt-8">
              <p className="text-sm">
                <strong>Última actualización:</strong> Enero 2026
                <br />
                Este aviso legal cumple con las directrices institucionales de
                la UNED y la legislación costarricense vigente.
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
