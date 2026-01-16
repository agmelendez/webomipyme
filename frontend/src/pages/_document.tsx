import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document Component
 * Configura el HTML base de la aplicación
 * Cumple con especificaciones técnicas UNED:
 * - Idioma correcto (es-CR)
 * - Metadatos institucionales
 * - Accesibilidad WCAG 2.1 AA
 * - Skip link para navegación por teclado
 */

export default function Document() {
  return (
    <Html lang="es-CR">
      <Head>
        {/* Fuentes de Google Fonts - Optimizadas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Meta tags generales institucionales */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#003366" />
        <meta name="msapplication-TileColor" content="#003366" />
        <meta
          name="author"
          content="Universidad Estatal a Distancia (UNED) - OMiPYME"
        />
        <meta name="copyright" content="UNED Costa Rica" />
        <meta httpEquiv="content-language" content="es-CR" />

        {/* Información institucional */}
        <meta name="organization" content="Universidad Estatal a Distancia" />
        <meta name="department" content="Observatorio de MIPYMES" />
        <meta name="country" content="Costa Rica" />

        {/* PWA y App Icons */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#003366" />

        {/* Preload y DNS Prefetch para optimización */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.uned.ac.cr" />

        {/* Licencia de contenido - Ley 6683 */}
        <link
          rel="license"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
        />
      </Head>
      <body>
        {/* Skip Link para accesibilidad WCAG 2.1 AA - Nivel A */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-uned-blue focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-uned-blue/50"
        >
          Saltar al contenido principal
        </a>

        {/* Contenido principal */}
        <Main />
        <NextScript />

        {/* Estilos para Skip Link (solo visible al hacer focus) */}
        <style jsx global>{`
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }
        `}</style>
      </body>
    </Html>
  );
}
