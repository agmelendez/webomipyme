import React from 'react';
import Head from 'next/head';
import { SEO_DEFAULTS } from '@/lib/constants';

/**
 * SEO Component
 * Componente reutilizable para metadatos SEO completos
 * Cumple con especificaciones técnicas UNED:
 * - Open Graph para redes sociales
 * - Twitter Cards
 * - JSON-LD para datos estructurados (Schema.org)
 * - Metadatos básicos optimizados
 */

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonicalUrl?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEO({
  title,
  description = SEO_DEFAULTS.description,
  keywords = SEO_DEFAULTS.keywords,
  ogImage = SEO_DEFAULTS.ogImage,
  ogType = 'website',
  canonicalUrl,
  author = SEO_DEFAULTS.author,
  publishedTime,
  modifiedTime,
  noindex = false,
  nofollow = false,
}: SEOProps) {
  // Construir título completo
  const fullTitle = title
    ? `${title} | ${SEO_DEFAULTS.siteName}`
    : SEO_DEFAULTS.siteName;

  // Construir URL canónica
  const canonical =
    canonicalUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://omipyme.uned.ac.cr'}`;

  // Construir robots meta tag
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  // JSON-LD para datos estructurados (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    name: 'Observatorio de MIPYMES - UNED',
    alternateName: 'OMiPYME',
    url: canonical,
    logo: `${canonical}/images/logo-omipyme.png`,
    description: description,
    parentOrganization: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad Estatal a Distancia',
      alternateName: 'UNED',
      url: 'https://www.uned.ac.cr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mercedes de Montes de Oca',
        addressLocality: 'San José',
        addressCountry: 'CR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+506-2527-2000',
        contactType: 'General Information',
        availableLanguage: 'Spanish',
      },
    },
    foundingDate: '2015',
    knowsAbout: [
      'MIPYME',
      'Micro, Pequeñas y Medianas Empresas',
      'Emprendimiento',
      'Desarrollo Empresarial',
      'Investigación Económica',
      'Estadísticas Empresariales',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
  };

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Viewport y responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Language */}
      <meta httpEquiv="content-language" content="es-CR" />
      <html lang="es-CR" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEO_DEFAULTS.siteName} />
      <meta property="og:locale" content="es_CR" />

      {/* Open Graph - Artículos */}
      {ogType === 'article' && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {author && <meta property="article:author" content={author} />}
          <meta property="article:section" content="Investigación MIPYME" />
          {keywords.map((keyword) => (
            <meta key={keyword} property="article:tag" content={keyword} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_DEFAULTS.twitterHandle} />
      <meta name="twitter:creator" content={SEO_DEFAULTS.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicons y App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme Color */}
      <meta name="theme-color" content="#003366" />
      <meta name="msapplication-TileColor" content="#003366" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Preconnect para optimización */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Head>
  );
}

/**
 * Función auxiliar para generar metadatos de artículos/publicaciones
 */
export function generateArticleSEO({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  keywords,
  imageUrl,
}: {
  title: string;
  description: string;
  author?: string;
  publishedDate: string;
  modifiedDate?: string;
  keywords?: string[];
  imageUrl?: string;
}): SEOProps {
  return {
    title,
    description,
    author,
    ogType: 'article',
    publishedTime: publishedDate,
    modifiedTime: modifiedDate,
    keywords: keywords || SEO_DEFAULTS.keywords,
    ogImage: imageUrl || SEO_DEFAULTS.ogImage,
  };
}

/**
 * Función auxiliar para generar metadatos de páginas de pilar
 */
export function generatePilarSEO(
  pilarNombre: string,
  pilarDescripcion: string,
  pilarKeywords: string[]
): SEOProps {
  return {
    title: pilarNombre,
    description: pilarDescripcion,
    keywords: [...SEO_DEFAULTS.keywords, ...pilarKeywords],
    ogType: 'website',
  };
}
