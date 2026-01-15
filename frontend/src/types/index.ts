/**
 * Tipos y definiciones globales para OMiPYME
 * Sistema de tipos TypeScript para el proyecto
 */

// ============================================
// TIPOS DE PILARES
// ============================================

export type PilarType =
  | 'observatorio'
  | 'herramientas'
  | 'investigacion'
  | 'formacion'
  | 'ecosistema';

export interface Pilar {
  id: PilarType;
  nombre: string;
  descripcion: string;
  color: string;
  colorLight: string;
  colorDark: string;
  icon: string;
  ruta: string;
  orden: number;
}

export interface SubSeccionPilar {
  id: string;
  pilarId: PilarType;
  nombre: string;
  descripcion: string;
  ruta: string;
  icono?: string;
  destacado?: boolean;
}

// ============================================
// NAVEGACIÓN
// ============================================

export interface NavItem {
  label: string;
  href: string;
  pilar?: PilarType;
  children?: NavItem[];
  external?: boolean;
  icon?: string;
}

export interface MobileMenuState {
  isOpen: boolean;
  activePilar: PilarType | null;
}

// ============================================
// INDICADORES Y ESTADÍSTICAS
// ============================================

export interface Indicador {
  id: string;
  label: string;
  valor: number | string;
  unidad?: string;
  icono?: string;
  tendencia?: 'up' | 'down' | 'neutral';
  cambio?: number;
  ultimaActualizacion: Date;
  descripcion?: string;
}

export interface EstadisticaMIPYME {
  id: string;
  canton?: string;
  provincia?: string;
  sector?: string;
  numeroEmpresas: number;
  empleos: number;
  facturacionPromedio?: number;
  fecha: Date;
}

// ============================================
// CONTENIDO (WordPress)
// ============================================

export interface Publicacion {
  id: number;
  titulo: string;
  slug: string;
  extracto: string;
  contenido: string;
  autor: Autor;
  fechaPublicacion: Date;
  fechaModificacion: Date;
  categorias: Categoria[];
  etiquetas: string[];
  imagenDestacada?: Imagen;
  pilar: PilarType;
  tipo: 'articulo' | 'investigacion' | 'noticia' | 'recurso';
}

export interface Autor {
  id: number;
  nombre: string;
  slug: string;
  avatar?: string;
  bio?: string;
  email?: string;
  cargo?: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  slug: string;
  descripcion?: string;
  pilar?: PilarType;
}

export interface Imagen {
  id: number;
  url: string;
  alt: string;
  titulo?: string;
  ancho: number;
  alto: number;
  thumbnails?: {
    small?: string;
    medium?: string;
    large?: string;
  };
}

// ============================================
// HERRAMIENTAS
// ============================================

export interface Herramienta {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  tipo: 'calculadora' | 'diagnostico' | 'chatbot' | 'plantilla';
  ruta: string;
  destacada: boolean;
  categorias: string[];
  pilar: PilarType;
}

export interface SelfieDistrital {
  id: string;
  canton: string;
  provincia: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
  indicadores: IndicadorDistrital[];
  fortalezas: string[];
  oportunidades: string[];
  recomendaciones: string[];
  fechaGeneracion: Date;
}

export interface IndicadorDistrital {
  nombre: string;
  valor: number | string;
  puntuacion: number; // 1-10
  categoria: 'economico' | 'social' | 'infraestructura' | 'educacion';
}

// ============================================
// FORMACIÓN
// ============================================

export interface Curso {
  id: string;
  titulo: string;
  descripcion: string;
  instructor: string;
  duracion: number; // minutos
  nivel: 'basico' | 'intermedio' | 'avanzado';
  modalidad: 'presencial' | 'virtual' | 'hibrido';
  precio: number;
  imagenPortada?: string;
  categorias: string[];
  fechaInicio?: Date;
  fechaFin?: Date;
  cupo?: number;
  inscritos?: number;
  certificado: boolean;
}

export interface Toolkit {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  recursos: RecursoToolkit[];
  imagenPortada?: string;
  descargas: number;
  fechaPublicacion: Date;
  version: string;
}

export interface RecursoToolkit {
  id: string;
  nombre: string;
  tipo: 'pdf' | 'excel' | 'word' | 'plantilla' | 'video' | 'otro';
  url: string;
  tamano: number; // bytes
  descripcion?: string;
}

export interface EpisodiosPodcast {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  duracion: number; // segundos
  fechaPublicacion: Date;
  audioUrl: string;
  imagenPortada?: string;
  invitados: string[];
  transcripcion?: string;
  notas?: string;
}

// ============================================
// ECOSISTEMA
// ============================================

export interface Evento {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'feria' | 'taller' | 'conferencia' | 'networking' | 'webinar';
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  modalidad: 'presencial' | 'virtual' | 'hibrido';
  ubicacion?: string;
  urlVirtual?: string;
  organizadores: string[];
  imagenBanner?: string;
  cupoMaximo?: number;
  inscritosActuales?: number;
  requiereInscripcion: boolean;
  urlInscripcion?: string;
  estado: 'proximo' | 'en_curso' | 'finalizado' | 'cancelado';
}

export interface Aliado {
  id: string;
  nombre: string;
  descripcion: string;
  logo: string;
  tipo: 'publico' | 'privado' | 'ong' | 'academico';
  sitioWeb?: string;
  email?: string;
  telefono?: string;
  areas: string[];
  colaboraciones: string[];
  activo: boolean;
}

export interface OportunidadNegocio {
  id: string;
  titulo: string;
  descripcion: string;
  empresa: string;
  tipo: 'compra' | 'venta' | 'colaboracion' | 'inversion';
  sector: string;
  monto?: number;
  moneda: 'CRC' | 'USD';
  fechaPublicacion: Date;
  fechaVencimiento?: Date;
  contacto: {
    nombre: string;
    email: string;
    telefono?: string;
  };
  estado: 'activa' | 'cerrada' | 'en_negociacion';
}

// ============================================
// INVESTIGACIÓN
// ============================================

export interface ProyectoInvestigacion {
  id: string;
  titulo: string;
  resumen: string;
  objetivos: string[];
  investigadores: Autor[];
  estado: 'planificacion' | 'en_curso' | 'finalizado' | 'publicado';
  fechaInicio: Date;
  fechaFin?: Date;
  financiamiento?: {
    monto: number;
    fuente: string;
  };
  publicaciones: Publicacion[];
  palabrasClave: string[];
  area: string;
}

// ============================================
// DASHBOARD Y VISUALIZACIONES
// ============================================

export interface DashboardConfig {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'shiny' | 'powerbi' | 'tableau' | 'custom';
  url: string;
  pilar: PilarType;
  publico: boolean;
  requiereAuth: boolean;
  parametros?: Record<string, any>;
}

export interface GraficoData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
  }[];
}

// ============================================
// BÚSQUEDA Y FILTROS
// ============================================

export interface FiltrosBusqueda {
  query: string;
  pilar?: PilarType;
  categoria?: string;
  fechaDesde?: Date;
  fechaHasta?: Date;
  tipo?: string;
  ordenar?: 'relevancia' | 'fecha' | 'popularidad';
  pagina: number;
  porPagina: number;
}

export interface ResultadoBusqueda {
  id: string;
  tipo: 'publicacion' | 'herramienta' | 'curso' | 'evento' | 'proyecto';
  titulo: string;
  descripcion: string;
  url: string;
  pilar: PilarType;
  fecha: Date;
  relevancia: number;
  imagenPreview?: string;
}

export interface PaginacionResponse<T> {
  datos: T[];
  total: number;
  pagina: number;
  porPagina: number;
  totalPaginas: number;
}

// ============================================
// API Y RESPONSES
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    timestamp: Date;
    version: string;
  };
}

export interface ApiError {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
}

// ============================================
// FORMULARIOS
// ============================================

export interface FormContacto {
  nombre: string;
  email: string;
  telefono?: string;
  empresa?: string;
  mensaje: string;
  asunto: string;
  pilar?: PilarType;
}

export interface FormInscripcion {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  empresa?: string;
  cargo?: string;
  provincia: string;
  canton: string;
  eventoCursoId: string;
  comentarios?: string;
}

// ============================================
// UTILIDADES
// ============================================

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface MetadataSEO {
  titulo: string;
  descripcion: string;
  palabrasClave?: string[];
  imagenOG?: string;
  urlCanonical?: string;
  tipo?: 'website' | 'article' | 'profile';
  autor?: string;
  fechaPublicacion?: Date;
}

export interface Toast {
  id: string;
  tipo: 'success' | 'error' | 'warning' | 'info';
  titulo: string;
  mensaje?: string;
  duracion?: number;
  accion?: {
    label: string;
    onClick: () => void;
  };
}
