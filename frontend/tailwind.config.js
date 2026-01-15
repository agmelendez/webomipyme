/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores Institucionales UNED
        'uned-blue': {
          DEFAULT: '#003366',
          50: '#E6EBF0',
          100: '#CCD7E0',
          200: '#99AFC1',
          300: '#6687A2',
          400: '#335F83',
          500: '#003366',
          600: '#002952',
          700: '#001F3D',
          800: '#001429',
          900: '#000A14',
        },
        'uned-green': {
          DEFAULT: '#006633',
          50: '#E6F2EB',
          100: '#CCE6D6',
          200: '#99CCAD',
          300: '#66B385',
          400: '#33995C',
          500: '#006633',
          600: '#005229',
          700: '#003D1F',
          800: '#002914',
          900: '#00140A',
        },

        // Colores por Pilar (Modelo de Cinco Pilares)
        'pilar-observatorio': {
          DEFAULT: '#003366',
          light: '#0055AA',
          dark: '#001A33',
          bg: '#E6EBF0',
        },
        'pilar-herramientas': {
          DEFAULT: '#FF6B35',
          light: '#FF8C5C',
          dark: '#CC4A1F',
          bg: '#FFF3EF',
        },
        'pilar-investigacion': {
          DEFAULT: '#006633',
          light: '#009944',
          dark: '#004422',
          bg: '#E6F2EB',
        },
        'pilar-formacion': {
          DEFAULT: '#7B2CBF',
          light: '#9D4EDD',
          dark: '#5A1E8C',
          bg: '#F3E8FF',
        },
        'pilar-ecosistema': {
          DEFAULT: '#00A8A8',
          light: '#00D4D4',
          dark: '#007878',
          bg: '#E6F9F9',
        },

        // Colores de Soporte (Grises y Estados)
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },

      fontFamily: {
        // Tipografía del Sistema de Diseño
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],

        // Aliases semánticos
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        // Escala tipográfica optimizada
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
        '8xl': ['6rem', { lineHeight: '1' }],           // 96px
      },

      spacing: {
        // Sistema de espaciado consistente
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
        '112': '28rem',  // 448px
        '128': '32rem',  // 512px
      },

      maxWidth: {
        // Contenedores responsivos
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
      },

      boxShadow: {
        // Sombras para elevación
        'pilar': '0 4px 6px -1px rgba(0, 51, 102, 0.1), 0 2px 4px -1px rgba(0, 51, 102, 0.06)',
        'pilar-lg': '0 10px 15px -3px rgba(0, 51, 102, 0.1), 0 4px 6px -2px rgba(0, 51, 102, 0.05)',
        'pilar-xl': '0 20px 25px -5px rgba(0, 51, 102, 0.1), 0 10px 10px -5px rgba(0, 51, 102, 0.04)',
      },

      animation: {
        // Animaciones personalizadas
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
      },

      backgroundImage: {
        // Gradientes por Pilar
        'gradient-observatorio': 'linear-gradient(135deg, #003366 0%, #0055AA 100%)',
        'gradient-herramientas': 'linear-gradient(135deg, #FF6B35 0%, #FF8C5C 100%)',
        'gradient-investigacion': 'linear-gradient(135deg, #006633 0%, #009944 100%)',
        'gradient-formacion': 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 100%)',
        'gradient-ecosistema': 'linear-gradient(135deg, #00A8A8 0%, #00D4D4 100%)',
        'gradient-hero': 'linear-gradient(135deg, #003366 0%, #006633 100%)',
      },

      borderRadius: {
        // Radios personalizados
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      zIndex: {
        // Capas de elevación
        'navigation': '1000',
        'dropdown': '1010',
        'modal': '1020',
        'tooltip': '1030',
        'notification': '1040',
      },

      screens: {
        // Breakpoints personalizados
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
