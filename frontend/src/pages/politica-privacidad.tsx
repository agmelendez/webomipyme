import React from 'react';
import Layout from '@/components/layout/Layout';

/**
 * Página de Política de Privacidad
 * Cumple con Ley 8968 - Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales
 * Requisito obligatorio según directrices UNED
 */

export default function PoliticaPrivacidad() {
  return (
    <Layout
      title="Política de Privacidad"
      description="Política de Privacidad y Protección de Datos Personales del Observatorio de MIPYMES (OMiPYME) - UNED Costa Rica"
      noIndex={false}
    >
      <div className="bg-gray-50 py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h1 className="text-4xl font-heading font-bold text-uned-blue mb-4">
              Política de Privacidad y Protección de Datos Personales
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
              1. Marco Legal
            </h2>
            <p>
              Esta Política de Privacidad se establece en cumplimiento de la{' '}
              <strong>
                Ley 8968 - Ley de Protección de la Persona frente al
                Tratamiento de sus Datos Personales
              </strong>{' '}
              y sus reglamentos, así como las directrices institucionales de la
              Universidad Estatal a Distancia (UNED) de Costa Rica.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              2. Responsable del Tratamiento de Datos
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Entidad:</strong> Universidad Estatal a Distancia
                (UNED)
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
            </div>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              3. Tipos de Datos que Recopilamos
            </h2>
            <p>
              El sitio web de OMiPYME puede recopilar los siguientes tipos de
              datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Datos de contacto:</strong> nombre, correo electrónico,
                teléfono (solo cuando usted los proporciona voluntariamente a
                través de formularios)
              </li>
              <li>
                <strong>Datos de navegación:</strong> dirección IP, tipo de
                navegador, páginas visitadas, tiempo de permanencia (mediante
                cookies analíticas)
              </li>
              <li>
                <strong>Datos de encuestas:</strong> información proporcionada
                voluntariamente en encuestas de investigación del sector MIPYME
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              4. Finalidad del Tratamiento de Datos
            </h2>
            <p>Los datos personales recopilados se utilizan para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a consultas y solicitudes de información</li>
              <li>Realizar investigaciones académicas y estadísticas del sector MIPYME</li>
              <li>Mejorar la experiencia del usuario en el sitio web</li>
              <li>Enviar comunicaciones sobre eventos, publicaciones y servicios del observatorio (con su consentimiento previo)</li>
              <li>Cumplir con obligaciones legales y reglamentarias</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              5. Base Legal del Tratamiento
            </h2>
            <p>El tratamiento de sus datos personales se fundamenta en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Consentimiento informado:</strong> cuando usted
                proporciona sus datos de forma voluntaria
              </li>
              <li>
                <strong>Interés público:</strong> investigación académica y
                estadística del sector MIPYME
              </li>
              <li>
                <strong>Cumplimiento de obligaciones legales:</strong>
                conforme a la normativa costarricense
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              6. Compartición de Datos
            </h2>
            <p>
              La UNED y OMiPYME <strong>NO venden, alquilan ni ceden</strong>{' '}
              sus datos personales a terceros con fines comerciales. Los datos
              solo pueden ser compartidos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Con entidades públicas cuando la ley lo requiera</li>
              <li>
                Con instituciones académicas colaboradoras, previa
                anonimización para fines de investigación
              </li>
              <li>Con proveedores de servicios tecnológicos bajo acuerdos de confidencialidad</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              7. Derechos de las Personas Titulares de los Datos
            </h2>
            <p>
              Conforme a la Ley 8968, usted tiene derecho a:
            </p>
            <div className="bg-uned-blue/5 p-6 rounded-lg">
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="text-uned-blue font-bold mr-2">✓</span>
                  <div>
                    <strong>Acceso:</strong> Conocer qué datos personales
                    poseemos sobre usted
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-uned-blue font-bold mr-2">✓</span>
                  <div>
                    <strong>Rectificación:</strong> Corregir datos inexactos o
                    incompletos
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-uned-blue font-bold mr-2">✓</span>
                  <div>
                    <strong>Cancelación:</strong> Solicitar la eliminación de
                    sus datos personales
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-uned-blue font-bold mr-2">✓</span>
                  <div>
                    <strong>Oposición:</strong> Oponerse al tratamiento de sus
                    datos en ciertos casos
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-uned-blue font-bold mr-2">✓</span>
                  <div>
                    <strong>Revocación del consentimiento:</strong> Retirar su
                    autorización en cualquier momento
                  </div>
                </li>
              </ul>
            </div>
            <p className="mt-4">
              Para ejercer estos derechos, puede contactarnos en{' '}
              <a
                href="mailto:observatorio@uned.ac.cr"
                className="text-uned-blue underline hover:text-uned-blue/80"
              >
                observatorio@uned.ac.cr
              </a>
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              8. Seguridad de los Datos
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para
              proteger sus datos personales contra acceso no autorizado,
              pérdida, alteración o divulgación, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cifrado de datos mediante HTTPS/TLS</li>
              <li>Control de acceso basado en roles</li>
              <li>Copias de seguridad periódicas</li>
              <li>Auditorías de seguridad regulares</li>
              <li>Capacitación del personal en protección de datos</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              9. Retención de Datos
            </h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario
              para cumplir con las finalidades para las que fueron recopilados
              o según lo establezca la legislación costarricense. Los datos
              anonimizados para investigación pueden conservarse
              indefinidamente.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              10. Cookies y Tecnologías de Seguimiento
            </h2>
            <p>
              Este sitio web utiliza cookies para mejorar la experiencia del
              usuario y realizar análisis estadísticos. Puede configurar su
              navegador para rechazar cookies, aunque esto puede afectar la
              funcionalidad del sitio.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              11. Enlaces a Sitios Externos
            </h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios web de terceros.
              No somos responsables de las prácticas de privacidad de estos
              sitios externos.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              12. Cambios a esta Política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta Política de
              Privacidad periódicamente. Los cambios significativos serán
              notificados en el sitio web.
            </p>

            <h2 className="text-2xl font-heading font-bold text-uned-blue mt-8 mb-4">
              13. Contacto y Quejas
            </h2>
            <p>
              Para consultas, quejas o ejercicio de derechos relacionados con
              sus datos personales:
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
              <p className="mt-4">
                También puede presentar quejas ante la{' '}
                <strong>
                  Agencia de Protección de Datos de los Habitantes (PRODHAB)
                </strong>{' '}
                de Costa Rica.
              </p>
            </div>

            <div className="bg-uned-blue/10 border-l-4 border-uned-blue p-6 rounded mt-8">
              <p className="text-sm">
                <strong>Nota importante:</strong> Esta política cumple con la
                Ley 8968 de Costa Rica y las directrices institucionales de la
                UNED. Al utilizar este sitio web, usted acepta los términos de
                esta política de privacidad.
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
