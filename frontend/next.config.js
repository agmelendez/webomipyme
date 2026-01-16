/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Configuración de imágenes
  images: {
    domains: [
      'localhost',
      'omipyme.uned.ac.cr',
      'cms.omipyme.uned.ac.cr',
      'www.uned.ac.cr',
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Variables de entorno públicas
  env: {
    SITE_NAME: 'OMiPYME - Observatorio MIPYME UNED',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://omipyme.uned.ac.cr',
  },

  // Configuración de i18n (internacionalización futura)
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },

  // Headers de seguridad según especificaciones técnicas UNED
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Prevenir clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Prevenir MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // XSS Protection (legacy pero útil)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Política de referrer
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Content Security Policy - Protección XSS y ataques de inyección
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-src 'self' https://www.youtube.com https://www.uned.ac.cr",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // Permissions Policy - Controlar acceso a características del navegador
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
          },
          // Strict Transport Security - Forzar HTTPS (solo en producción)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // X-DNS-Prefetch-Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },

  // Redirecciones
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Webpack customization
  webpack: (config, { isServer }) => {
    // Configuraciones adicionales de webpack si es necesario
    return config;
  },
};

module.exports = nextConfig;
