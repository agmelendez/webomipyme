# Estructura Completa del Repositorio OMiPYME

Este documento detalla todos los archivos y directorios creados para el proyecto.

## 📁 Estructura de Directorios

```
omipyme-web/
│
├── 📄 README.md                           # Documentación principal del proyecto
├── 📄 QUICK_START.md                      # Guía de inicio rápido
├── 📄 CONTRIBUTING.md                     # Guía de contribución
├── 📄 LICENSE                             # Licencia del proyecto
├── 📄 .gitignore                          # Archivos ignorados por Git
├── 📄 package.json                        # Scripts del monorepo
├── 📄 docker-compose.yml                  # Orquestación de servicios
├── 📄 STRUCTURE.md                        # Este archivo
│
├── 📂 frontend/                           # Aplicación Next.js
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── 📂 navigation/
│   │   │   │   └── 📄 MainNavigation.tsx  # Navegación principal con 5 pilares
│   │   │   ├── 📂 pilares/
│   │   │   │   └── 📄 PilaresGrid.tsx     # Grid de tarjetas de pilares
│   │   │   ├── 📂 common/
│   │   │   │   └── 📄 HeroSection.tsx     # Sección hero con indicadores
│   │   │   └── 📂 dashboard/
│   │   ├── 📂 pages/
│   │   │   ├── 📄 _app.tsx                # App wrapper
│   │   │   ├── 📄 _document.tsx           # Document wrapper
│   │   │   ├── 📄 index.tsx               # Página de inicio
│   │   │   ├── 📂 observatorio/
│   │   │   ├── 📂 herramientas/
│   │   │   ├── 📂 investigacion/
│   │   │   ├── 📂 formacion/
│   │   │   └── 📂 ecosistema/
│   │   ├── 📂 styles/
│   │   │   └── 📄 globals.css             # Estilos globales + Tailwind
│   │   ├── 📂 lib/
│   │   │   └── 📄 constants.ts            # Constantes y configuración
│   │   ├── 📂 types/
│   │   │   └── 📄 index.ts                # Tipos TypeScript
│   │   └── 📂 hooks/
│   ├── 📂 public/
│   │   ├── 📂 images/
│   │   ├── 📂 icons/
│   │   └── 📂 fonts/
│   ├── 📄 package.json                    # Dependencias frontend
│   ├── 📄 tailwind.config.js              # Configuración Tailwind CSS
│   ├── 📄 tsconfig.json                   # Configuración TypeScript
│   ├── 📄 next.config.js                  # Configuración Next.js
│   ├── 📄 postcss.config.js               # Configuración PostCSS
│   └── 📄 .env.example                    # Variables de entorno ejemplo
│
├── 📂 cms/                                # WordPress Headless
│   ├── 📂 themes/
│   │   └── 📂 omipyme-theme/
│   │       ├── 📂 assets/
│   │       │   ├── 📂 css/
│   │       │   ├── 📂 js/
│   │       │   └── 📂 images/
│   │       ├── 📂 templates/
│   │       └── 📂 inc/
│   └── 📂 plugins/
│       └── 📂 omipyme-custom/
│
├── 📂 api/                                # Python FastAPI
│   ├── 📂 app/
│   │   ├── 📄 main.py                     # Aplicación principal FastAPI
│   │   ├── 📂 routers/
│   │   ├── 📂 models/
│   │   ├── 📂 services/
│   │   └── 📂 core/
│   ├── 📂 tests/
│   ├── 📄 requirements.txt                # Dependencias Python
│   └── 📄 .env.example
│
├── 📂 dashboards/                         # R Shiny Dashboards
│   ├── 📂 observatorio/
│   ├── 📂 herramientas/
│   └── 📂 common/
│       ├── 📂 components/
│       └── 📂 utils/
│
├── 📂 docs/                               # Documentación
│   ├── 📂 architecture/
│   │   └── 📄 SITEMAP.md                  # Mapa completo de rutas
│   ├── 📂 design-system/
│   │   └── 📄 DESIGN_SYSTEM.md            # Sistema de diseño completo
│   └── 📂 api-docs/
│
└── 📂 .github/                            # GitHub Actions
    ├── 📂 workflows/
    └── 📂 ISSUE_TEMPLATE/
```

## 🎨 Sistema de Diseño

### Colores por Pilar
- **Observatorio**: Azul (#003366)
- **Herramientas**: Naranja (#FF6B35)
- **Investigación**: Verde (#006633)
- **Formación**: Morado (#7B2CBF)
- **Ecosistema**: Teal (#00A8A8)

### Tipografía
- **Títulos**: Montserrat Bold
- **Cuerpo**: Open Sans Regular
- **Datos**: JetBrains Mono

## 🚀 Stack Tecnológico

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS 3
- Heroicons

### Backend
- Python 3.11
- FastAPI
- PostgreSQL
- Redis

### CMS
- WordPress 6.4 (Headless)
- MySQL 8.0

### Dashboards
- R Shiny
- R 4.2+

## 📦 Componentes Principales Creados

### 1. MainNavigation.tsx
Navegación principal con:
- Barra superior con logo y búsqueda
- Menú con los 5 pilares
- Dropdowns por pilar
- Menú móvil responsive
- Estados activos

### 2. HeroSection.tsx
Sección hero con:
- Gradiente institucional
- 4 indicadores dinámicos en tiempo real
- Buscador global prominente
- CTA buttons
- Animaciones de entrada

### 3. PilaresGrid.tsx
Grid de pilares con:
- Tarjetas distintivas por color
- Subsecciones listadas
- Efectos hover
- Botones de acceso
- Responsive design

### 4. Página de Inicio
Incluye:
- Hero section completa
- Grid de 5 pilares
- Sección de estadísticas
- Últimas actualizaciones
- Aliados estratégicos
- Call to action final
- Footer completo

## 📄 Archivos de Configuración

### Frontend
- `tailwind.config.js` - Sistema de diseño completo
- `next.config.js` - Configuración Next.js
- `tsconfig.json` - TypeScript estricto
- `package.json` - Scripts y dependencias
- `.env.example` - Variables de entorno

### API
- `main.py` - FastAPI setup básico
- `requirements.txt` - Dependencias Python
- `.env.example` - Variables de entorno

### Root
- `docker-compose.yml` - Todos los servicios
- `package.json` - Scripts del monorepo
- `.gitignore` - Archivos ignorados

## 📚 Documentación

### README.md
- Descripción completa del proyecto
- Los 5 pilares explicados
- Arquitectura técnica
- Instrucciones de instalación
- Sistema de diseño overview
- Mapa del sitio
- Información de contacto

### QUICK_START.md
- Guía de inicio rápido
- Instalación con Docker
- Instalación manual
- Comandos útiles
- Troubleshooting

### CONTRIBUTING.md
- Guía de contribución
- Estándares de código
- Flujo de trabajo Git
- Mensajes de commit
- Pull requests
- Testing

### SITEMAP.md
- Estructura completa de URLs
- Rutas por pilar
- Convenciones de nomenclatura
- Ejemplos de uso
- Integraciones

### DESIGN_SYSTEM.md
- Paleta de colores completa
- Tipografía y escalas
- Componentes UI
- Accesibilidad WCAG 2.1
- Animaciones
- Responsive design

## 🔧 Próximos Pasos

1. ✅ Estructura base creada
2. ⏳ Implementar páginas individuales de pilares
3. ⏳ Desarrollar Selfie Distrital
4. ⏳ Integrar dashboards R Shiny
5. ⏳ Implementar sistema de búsqueda
6. ⏳ Crear Chatbot OBI
7. ⏳ Sistema de autenticación
8. ⏳ API endpoints completos
9. ⏳ Tests automatizados
10. ⏳ CI/CD pipeline

## 📊 Estado del Proyecto

- **Fase Actual**: MVP - Estructura Base
- **Progreso**: 25%
- **Fecha**: Diciembre 2024

## 🎯 Features Implementados

- [x] Estructura de directorios completa
- [x] Sistema de diseño definido
- [x] Navegación principal con 5 pilares
- [x] Página de inicio funcional
- [x] Configuración de Tailwind CSS
- [x] Tipos TypeScript completos
- [x] Configuración Docker
- [x] Documentación completa
- [x] Guías de contribución

## 📞 Contacto

**OMiPYME - UNED Costa Rica**
- Email: observatorio@uned.ac.cr
- Web: https://omipyme.uned.ac.cr
- GitHub: https://github.com/uned-cr/omipyme-web

---

**Última actualización**: 2024-12-15
**Versión**: 1.0.0
