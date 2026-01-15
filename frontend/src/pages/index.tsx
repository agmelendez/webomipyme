import React from 'react';
import Head from 'next/head';
import MainNavigation from '@/components/navigation/MainNavigation';
import HeroSection from '@/components/common/HeroSection';
import PilaresGrid from '@/components/pilares/PilaresGrid';
import { SEO_DEFAULTS } from '@/lib/constants';

/**
 * Página de Inicio - Home
 * Página principal de OMiPYME con Hero y acceso a los 5 pilares
 */

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{SEO_DEFAULTS.siteName}</title>
        <meta name="description" content={SEO_DEFAULTS.description} />
        <meta name="keywords" content={SEO_DEFAULTS.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO_DEFAULTS.siteName} />
        <meta property="og:description" content={SEO_DEFAULTS.description} />
        <meta property="og:image" content={SEO_DEFAULTS.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_DEFAULTS.twitterHandle} />
        <meta name="twitter:title" content={SEO_DEFAULTS.siteName} />
        <meta name="twitter:description" content={SEO_DEFAULTS.description} />
        <meta name="twitter:image" content={SEO_DEFAULTS.ogImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Navegación Principal */}
      <MainNavigation />

      {/* Contenido Principal */}
      <main id="main-content">
        {/* Hero Section con indicadores dinámicos y buscador */}
        <HeroSection />

        {/* Grid de los 5 Pilares */}
        <PilaresGrid showSubsections={true} />

        {/* Sección de estadísticas destacadas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-heading font-bold text-uned-blue mb-4">
                Impacto en el Sector MIPYME
              </h2>
              <p className="text-lg text-gray-600">
                Conoce cómo OMiPYME está contribuyendo al fortalecimiento del
                ecosistema empresarial costarricense
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  numero: '12K+',
                  titulo: 'Empresas',
                  descripcion: 'Registradas en la base de datos',
                  color: '#003366',
                },
                {
                  numero: '82',
                  titulo: 'Cantones',
                  descripcion: 'Con cobertura territorial',
                  color: '#FF6B35',
                },
                {
                  numero: '156',
                  titulo: 'Publicaciones',
                  descripcion: 'Investigaciones académicas',
                  color: '#006633',
                },
                {
                  numero: '2.5M',
                  titulo: 'Datos',
                  descripcion: 'Puntos de datos analizados',
                  color: '#7B2CBF',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div
                    className="text-5xl font-bold font-mono mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.numero}
                  </div>
                  <div className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {stat.titulo}
                  </div>
                  <div className="text-sm text-gray-600">{stat.descripcion}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de últimas actualizaciones */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-heading font-bold text-uned-blue">
                Últimas Actualizaciones
              </h2>
              <a
                href="/blog"
                className="text-uned-blue hover:text-uned-blue/80 font-semibold"
              >
                Ver todas →
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  tipo: 'Publicación',
                  titulo: 'Informe Anual MIPYME 2024',
                  fecha: '15 Dic 2024',
                  pilar: 'Investigación',
                  color: '#006633',
                },
                {
                  tipo: 'Herramienta',
                  titulo: 'Nueva versión del Selfie Distrital',
                  fecha: '10 Dic 2024',
                  pilar: 'Herramientas',
                  color: '#FF6B35',
                },
                {
                  tipo: 'Curso',
                  titulo: 'Taller de Marketing Digital para MiPYMEs',
                  fecha: '5 Dic 2024',
                  pilar: 'Formación',
                  color: '#7B2CBF',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                      }}
                    >
                      {item.pilar}
                    </span>
                    <span className="text-sm text-gray-500">{item.fecha}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.tipo}</p>
                  <a
                    href="#"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: item.color }}
                  >
                    Leer más →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de aliados */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-heading font-bold text-uned-blue mb-4">
                Nuestros Aliados Estratégicos
              </h2>
              <p className="text-lg text-gray-600">
                Trabajamos en conjunto con instituciones públicas y privadas para
                fortalecer el ecosistema MIPYME
              </p>
            </div>

            {/* Placeholder para logos de aliados */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="text-gray-400 text-sm">Logo {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action final */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              ¿Listo para fortalecer tu empresa?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Accede a datos, herramientas y recursos diseñados específicamente
              para MiPYMEs costarricenses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/herramientas"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-uned-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explorar Herramientas
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                {/* Redes sociales - placeholders */}
                {['F', 'T', 'I', 'L'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-uned-blue transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2 - Enlaces rápidos */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {['Nosotros', 'Contacto', 'Blog', 'Ayuda'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
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
                <li>observatorio@uned.ac.cr</li>
                <li>+506 2527-2000</li>
                <li>San José, Costa Rica</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © 2024 OMiPYME - Universidad Estatal a Distancia. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
