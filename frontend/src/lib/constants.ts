/**
 * Constantes y configuración global de OMiPYME
 * Definición del Modelo de Cinco Pilares y datos estáticos
 */

import { Pilar, NavItem, PilarType } from '@/types';

// ============================================
// CONFIGURACIÓN DE LOS 5 PILARES
// ============================================

export const PILARES: Record<PilarType, Pilar> = {
  observatorio: {
    id: 'observatorio',
    nombre: 'Observatorio',
    descripcion: 'Datos, encuestas y dashboards interactivos del sector MIPYME',
    color: '#003366',
    colorLight: '#0055AA',
    colorDark: '#001A33',
    icon: 'ChartBarIcon',
    ruta: '/observatorio',
    orden: 1,
  },
  herramientas: {
    id: 'herramientas',
    nombre: 'Herramientas',
    descripcion: 'Selfie Distrital, Chatbot OBI, Calculadoras y recursos digitales',
    color: '#FF6B35',
    colorLight: '#FF8C5C',
    colorDark: '#CC4A1F',
    icon: 'WrenchScrewdriverIcon',
    ruta: '/herramientas',
    orden: 2,
  },
  investigacion: {
    id: 'investigacion',
    nombre: 'Investigación',
    descripcion: 'Publicaciones, proyectos y equipo investigador',
    color: '#006633',
    colorLight: '#009944',
    colorDark: '#004422',
    icon: 'AcademicCapIcon',
    ruta: '/investigacion',
    orden: 3,
  },
  formacion: {
    id: 'formacion',
    nombre: 'Formación',
    descripcion: 'Cursos, toolkits, podcast y certificaciones',
    color: '#7B2CBF',
    colorLight: '#9D4EDD',
    colorDark: '#5A1E8C',
    icon: 'BookOpenIcon',
    ruta: '/formacion',
    orden: 4,
  },
  ecosistema: {
    id: 'ecosistema',
    nombre: 'Ecosistema',
    descripcion: 'Ferias, eventos, aliados y comunidad MIPYME',
    color: '#00A8A8',
    colorLight: '#00D4D4',
    colorDark: '#007878',
    icon: 'GlobeAltIcon',
    ruta: '/ecosistema',
    orden: 5,
  },
};

// ============================================
// NAVEGACIÓN PRINCIPAL
// ============================================

export const MENU_PRINCIPAL: NavItem[] = [
  {
    label: 'Observatorio',
    href: '/observatorio',
    pilar: 'observatorio',
    children: [
      {
        label: 'Dashboards',
        href: '/observatorio/dashboards',
        icon: 'ChartBarIcon',
      },
      {
        label: 'Estadísticas MIPYME',
        href: '/observatorio/datos',
        icon: 'TableCellsIcon',
      },
      {
        label: 'Encuestas y Estudios',
        href: '/observatorio/encuestas',
        icon: 'ClipboardDocumentListIcon',
      },
      {
        label: 'Mapas Territoriales',
        href: '/observatorio/mapas',
        icon: 'MapIcon',
      },
    ],
  },
  {
    label: 'Herramientas',
    href: '/herramientas',
    pilar: 'herramientas',
    children: [
      {
        label: 'Selfie Distrital',
        href: '/herramientas/selfie-distrital',
        icon: 'MapPinIcon',
      },
      {
        label: 'Chatbot OBI',
        href: '/herramientas/chatbot-obi',
        icon: 'ChatBubbleLeftRightIcon',
      },
      {
        label: 'Calculadoras',
        href: '/herramientas/calculadoras',
        icon: 'CalculatorIcon',
      },
      {
        label: 'Recursos Digitales',
        href: '/herramientas/recursos',
        icon: 'FolderIcon',
      },
    ],
  },
  {
    label: 'Investigación',
    href: '/investigacion',
    pilar: 'investigacion',
    children: [
      {
        label: 'Publicaciones',
        href: '/investigacion/publicaciones',
        icon: 'DocumentTextIcon',
      },
      {
        label: 'Proyectos',
        href: '/investigacion/proyectos',
        icon: 'BeakerIcon',
      },
      {
        label: 'Equipo Investigador',
        href: '/investigacion/equipo',
        icon: 'UsersIcon',
      },
      {
        label: 'Repositorio Documental',
        href: '/investigacion/repositorio',
        icon: 'ArchiveBoxIcon',
      },
    ],
  },
  {
    label: 'Formación',
    href: '/formacion',
    pilar: 'formacion',
    children: [
      {
        label: 'Cursos y Talleres',
        href: '/formacion/cursos',
        icon: 'AcademicCapIcon',
      },
      {
        label: 'Toolkits Empresariales',
        href: '/formacion/toolkits',
        icon: 'BriefcaseIcon',
      },
      {
        label: 'Podcast OMiPYME',
        href: '/formacion/podcast',
        icon: 'MicrophoneIcon',
      },
      {
        label: 'Certificaciones',
        href: '/formacion/certificaciones',
        icon: 'TrophyIcon',
      },
    ],
  },
  {
    label: 'Ecosistema',
    href: '/ecosistema',
    pilar: 'ecosistema',
    children: [
      {
        label: 'Ferias y Eventos',
        href: '/ecosistema/eventos',
        icon: 'CalendarIcon',
      },
      {
        label: 'Red de Aliados',
        href: '/ecosistema/aliados',
        icon: 'UserGroupIcon',
      },
      {
        label: 'Oportunidades de Negocio',
        href: '/ecosistema/oportunidades',
        icon: 'BanknotesIcon',
      },
      {
        label: 'Comunidad MIPYME',
        href: '/ecosistema/comunidad',
        icon: 'ChatBubbleBottomCenterTextIcon',
      },
    ],
  },
];

// ============================================
// NAVEGACIÓN SECUNDARIA
// ============================================

export const MENU_SECUNDARIO: NavItem[] = [
  {
    label: 'Nosotros',
    href: '/nosotros',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

// ============================================
// LINKS INSTITUCIONALES
// ============================================

export const LINKS_INSTITUCIONALES = {
  UNED: 'https://www.uned.ac.cr',
  UNED_INVESTIGACION: 'https://www.uned.ac.cr/investigacion',
  UNED_EXTENSION: 'https://www.uned.ac.cr/extension',
};

// ============================================
// REDES SOCIALES
// ============================================

export const REDES_SOCIALES = {
  facebook: 'https://facebook.com/omipyme.uned',
  twitter: 'https://twitter.com/omipyme_uned',
  instagram: 'https://instagram.com/omipyme.uned',
  linkedin: 'https://linkedin.com/company/omipyme-uned',
  youtube: 'https://youtube.com/@omipyme-uned',
};

// ============================================
// INFORMACIÓN DE CONTACTO
// ============================================

export const CONTACTO = {
  email: 'observatorio@uned.ac.cr',
  telefono: '+506 2527-2000',
  direccion: 'Mercedes de Montes de Oca, San José, Costa Rica',
  horario: 'Lunes a Viernes, 8:00 AM - 5:00 PM',
};

// ============================================
// CONFIGURACIÓN DE API
// ============================================

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  WORDPRESS_URL: process.env.NEXT_PUBLIC_WP_URL || 'http://localhost:8080',
  SHINY_URL: process.env.NEXT_PUBLIC_SHINY_URL || 'http://localhost:3838',
  TIMEOUT: 30000,
};

// ============================================
// CONFIGURACIÓN DE PAGINACIÓN
// ============================================

export const PAGINACION = {
  ITEMS_POR_PAGINA: 12,
  ITEMS_POR_PAGINA_BLOG: 9,
  ITEMS_POR_PAGINA_BUSQUEDA: 15,
};

// ============================================
// PROVINCIAS Y CANTONES DE COSTA RICA
// ============================================

export const PROVINCIAS = [
  'San José',
  'Alajuela',
  'Cartago',
  'Heredia',
  'Guanacaste',
  'Puntarenas',
  'Limón',
] as const;

export const SECTORES_ECONOMICOS = [
  'Agricultura y Ganadería',
  'Comercio',
  'Construcción',
  'Educación',
  'Hotelería y Turismo',
  'Industria Manufacturera',
  'Servicios Profesionales',
  'Tecnología e Innovación',
  'Transporte y Logística',
  'Otros',
] as const;

// ============================================
// METADATOS SEO DEFAULTS
// ============================================

export const SEO_DEFAULTS = {
  siteName: 'OMiPYME - Observatorio MIPYME UNED',
  description:
    'Observatorio de Micro, Pequeñas y Medianas Empresas de la Universidad Estatal a Distancia (UNED) de Costa Rica. Datos, investigación, herramientas y formación para el fortalecimiento del sector MIPYME.',
  keywords: [
    'MIPYME',
    'Costa Rica',
    'UNED',
    'Observatorio',
    'Pequeñas empresas',
    'Emprendimiento',
    'Investigación',
    'Datos económicos',
  ],
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@omipyme_uned',
};

// ============================================
// COLORES POR PILAR (Para estilos dinámicos)
// ============================================

export const COLORES_PILARES = {
  observatorio: {
    bg: 'bg-pilar-observatorio',
    text: 'text-pilar-observatorio',
    border: 'border-pilar-observatorio',
    hover: 'hover:bg-pilar-observatorio/90',
    gradient: 'bg-gradient-observatorio',
  },
  herramientas: {
    bg: 'bg-pilar-herramientas',
    text: 'text-pilar-herramientas',
    border: 'border-pilar-herramientas',
    hover: 'hover:bg-pilar-herramientas/90',
    gradient: 'bg-gradient-herramientas',
  },
  investigacion: {
    bg: 'bg-pilar-investigacion',
    text: 'text-pilar-investigacion',
    border: 'border-pilar-investigacion',
    hover: 'hover:bg-pilar-investigacion/90',
    gradient: 'bg-gradient-investigacion',
  },
  formacion: {
    bg: 'bg-pilar-formacion',
    text: 'text-pilar-formacion',
    border: 'border-pilar-formacion',
    hover: 'hover:bg-pilar-formacion/90',
    gradient: 'bg-gradient-formacion',
  },
  ecosistema: {
    bg: 'bg-pilar-ecosistema',
    text: 'text-pilar-ecosistema',
    border: 'border-pilar-ecosistema',
    hover: 'hover:bg-pilar-ecosistema/90',
    gradient: 'bg-gradient-ecosistema',
  },
} as const;

// ============================================
// ICONOS POR TIPO (Para mapeo dinámico)
// ============================================

export const ICONOS_TIPO = {
  // Pilares
  observatorio: 'ChartBarIcon',
  herramientas: 'WrenchScrewdriverIcon',
  investigacion: 'AcademicCapIcon',
  formacion: 'BookOpenIcon',
  ecosistema: 'GlobeAltIcon',

  // Herramientas
  calculadora: 'CalculatorIcon',
  diagnostico: 'ClipboardDocumentCheckIcon',
  chatbot: 'ChatBubbleLeftRightIcon',
  plantilla: 'DocumentDuplicateIcon',

  // Contenido
  articulo: 'DocumentTextIcon',
  video: 'VideoCameraIcon',
  podcast: 'MicrophoneIcon',
  descarga: 'ArrowDownTrayIcon',
  enlace: 'LinkIcon',
} as const;

// ============================================
// TEXTOS DE ACCESIBILIDAD
// ============================================

export const A11Y_LABELS = {
  skipToContent: 'Saltar al contenido principal',
  openMenu: 'Abrir menú de navegación',
  closeMenu: 'Cerrar menú de navegación',
  search: 'Buscar en OMiPYME',
  logo: 'Logo de OMiPYME - Ir a página de inicio',
  loading: 'Cargando contenido...',
  error: 'Ha ocurrido un error',
  noResults: 'No se encontraron resultados',
};

// ============================================
// MENSAJES DEL SISTEMA
// ============================================

export const MENSAJES = {
  errorGenerico: 'Ha ocurrido un error. Por favor, intente nuevamente.',
  errorConexion: 'Error de conexión. Verifique su conexión a internet.',
  exitoFormulario: 'Formulario enviado exitosamente.',
  campoRequerido: 'Este campo es requerido.',
  emailInvalido: 'Por favor, ingrese un email válido.',
  busquedaVacia: 'Por favor, ingrese un término de búsqueda.',
  sinResultados: 'No se encontraron resultados para su búsqueda.',
};

// ============================================
// CONFIGURACIÓN DE ANIMACIONES
// ============================================

export const ANIMACIONES = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
