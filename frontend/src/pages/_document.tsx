import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document Component
 * Configura el HTML base de la aplicación
 */

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Fuentes de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Meta tags generales */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#003366" />
        <meta name="author" content="UNED Costa Rica - OMiPYME" />

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* Preload critical assets */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
