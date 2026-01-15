import React, { ReactNode } from 'react';
import Head from 'next/head';
import MainNavigation from '@/components/navigation/MainNavigation';
import Footer from '@/components/layout/Footer';
import { SEO_DEFAULTS } from '@/lib/constants';

/**
 * Layout Component
 * Plantilla base para todas las páginas del sitio
 * Incluye navegación, footer y meta tags SEO
 */

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title,
  description,
  keywords,
  ogImage,
  noIndex = false,
}: LayoutProps) {
  // Construir el título completo
  const pageTitle = title
    ? `${title} | ${SEO_DEFAULTS.siteName}`
    : SEO_DEFAULTS.siteName;

  // Usar valores por defecto si no se proveen
  const pageDescription = description || SEO_DEFAULTS.description;
  const pageKeywords = keywords || SEO_DEFAULTS.keywords;
  const pageOgImage = ogImage || SEO_DEFAULTS.ogImage;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={SEO_DEFAULTS.author} />

        {/* No index si es necesario */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageOgImage} />
        <meta property="og:site_name" content={SEO_DEFAULTS.siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_DEFAULTS.twitterHandle} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageOgImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Navegación Principal */}
      <MainNavigation />

      {/* Contenido Principal */}
      <main id="main-content" className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
