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

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
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
