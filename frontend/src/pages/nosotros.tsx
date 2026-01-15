import React from 'react';
import Layout from '@/components/layout/Layout';
import { PILARES } from '@/lib/constants';

/**
 * Página Nosotros
 * Ejemplo de página usando el Layout base
 */

export default function NosotrosPage() {
  return (
    <Layout
      title="Nosotros"
      description="Conoce más sobre OMiPYME, el Observatorio de Micro, Pequeñas y Medianas Empresas de la UNED Costa Rica"
      keywords={['OMiPYME', 'UNED', 'nosotros', 'quiénes somos', 'misión', 'visión']}
    >
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Sobre OMiPYME
            </h1>
            <p className="text-xl text-white/90">
              Impulsando el desarrollo de las Micro, Pequeñas y Medianas Empresas
              de Costa Rica a través de datos, herramientas y conocimiento
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="w-16 h-16 bg-uned-blue/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-uned-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-heading font-bold text-uned-blue mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Fortalecer el ecosistema de las micro, pequeñas y medianas empresas
                de Costa Rica mediante la generación de conocimiento, herramientas
                digitales y formación especializada que impulsen su competitividad
                y sostenibilidad.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 bg-pilar-herramientas/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-pilar-herramientas"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-heading font-bold text-pilar-herramientas mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ser el centro de referencia nacional en información, análisis y
                apoyo para las MiPYMEs costarricenses, reconocido por su impacto
                en el desarrollo económico y social del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Cinco Pilares */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-uned-blue mb-4">
              Modelo de Cinco Pilares
            </h2>
            <p className="text-lg text-gray-600">
              Nuestro trabajo se estructura en cinco pilares fundamentales que se
              complementan para ofrecer un apoyo integral al sector MIPYME
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(PILARES).map((pilar, index) => (
              <div
                key={pilar.id}
                className="card p-6 hover:shadow-xl transition-shadow"
                style={{ borderTop: `4px solid ${pilar.color}` }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${pilar.color}20`, color: pilar.color }}
                  >
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    {pilar.nombre}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{pilar.descripcion}</p>
                <a
                  href={pilar.ruta}
                  className="inline-flex items-center text-sm font-semibold hover:underline"
                  style={{ color: pilar.color }}
                >
                  Explorar {pilar.nombre} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-uned-blue mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600">
              Conformado por profesionales en economía, estadística, desarrollo
              empresarial y tecnología comprometidos con el sector MIPYME
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                nombre: 'Director/a',
                rol: 'Dirección General',
                area: 'observatorio',
              },
              {
                nombre: 'Investigador/a',
                rol: 'Investigación y Análisis',
                area: 'investigacion',
              },
              {
                nombre: 'Desarrollador/a',
                rol: 'Herramientas Digitales',
                area: 'herramientas',
              },
              {
                nombre: 'Coordinador/a',
                rol: 'Formación y Capacitación',
                area: 'formacion',
              },
            ].map((miembro, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Foto</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                  {miembro.nombre}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{miembro.rol}</p>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${PILARES[miembro.area as keyof typeof PILARES].color}20`,
                    color: PILARES[miembro.area as keyof typeof PILARES].color,
                  }}
                >
                  {PILARES[miembro.area as keyof typeof PILARES].nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            ¿Quieres saber más sobre nosotros?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos para conocer cómo podemos apoyar a tu empresa o
            institución
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-uned-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </Layout>
  );
}
