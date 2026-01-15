import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Custom App Component
 * Punto de entrada de la aplicación Next.js
 */

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Google Analytics / Matomo tracking (si está configurado)
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Agregar tracking de analytics aquí
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Accesibilidad: Anunciar cambios de ruta a lectores de pantalla
  useEffect(() => {
    const handleRouteChange = () => {
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        (mainContent as HTMLElement).focus();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
