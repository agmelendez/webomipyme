# OMiPYME - Observatorio de Micro, Pequeñas y Medianas Empresas

<div align="center">
  <img src="./docs/design-system/logo-omipyme.svg" alt="OMiPYME Logo" width="200"/>

  **Universidad Estatal a Distancia (UNED) - Costa Rica**

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
  [![WordPress](https://img.shields.io/badge/WordPress-6.4-21759b)](https://wordpress.org/)
  [![Python](https://img.shields.io/badge/Python-3.11-3776ab)](https://www.python.org/)
  [![R Shiny](https://img.shields.io/badge/R_Shiny-1.8-276dc3)](https://shiny.rstudio.com/)
</div>

---

## 📋 Descripción del Proyecto

OMiPYME es el **Observatorio de Micro, Pequeñas y Medianas Empresas** de la UNED Costa Rica, rediseñado con una arquitectura moderna basada en el **Modelo de Cinco Pilares**. Este repositorio contiene el código fuente completo del ecosistema digital que integra datos, herramientas interactivas, investigación, formación y networking para el fortalecimiento del sector MIPYME costarricense.

---

## 🏛️ Modelo de Cinco Pilares

La arquitectura del sitio se estructura en cinco pilares temáticos que guían la navegación y organización del contenido:

### 1️⃣ **Observatorio** (Azul `#003366`)
- 📊 **Dashboards Interactivos** - Visualización de datos en tiempo real con R Shiny
- 📈 **Estadísticas MIPYME** - Datos económicos y demográficos por cantón
- 🔍 **Encuestas y Estudios** - Resultados de investigaciones cuantitativas
- 🗺️ **Mapas Georreferenciados** - Distribución territorial de empresas

### 2️⃣ **Herramientas** (Naranja `#FF6B35`)
- 🎯 **Selfie Distrital** - Diagnóstico personalizado por ubicación
- 🤖 **Chatbot OBI** - Asistente inteligente para MiPYMEs
- 🧮 **Calculadoras** - Herramientas de análisis financiero y operativo
- 📱 **Recursos Digitales** - Plantillas y guías descargables

### 3️⃣ **Investigación** (Verde `#006633`)
- 📚 **Publicaciones Académicas** - Artículos, papers y reportes
- 🔬 **Proyectos de Investigación** - Estudios en curso y finalizados
- 👥 **Equipo Investigador** - Directorio de investigadores
- 📖 **Repositorio Documental** - Biblioteca digital especializada

### 4️⃣ **Formación** (Morado `#7B2CBF`)
- 🎓 **Cursos y Talleres** - Capacitaciones para emprendedores
- 📦 **Toolkits Empresariales** - Kits de herramientas temáticas
- 🎙️ **Podcast OMiPYME** - Serie de entrevistas y contenido educativo
- 🏆 **Certificaciones** - Programas de formación certificada

### 5️⃣ **Ecosistema** (Teal `#00A8A8`)
- 🎪 **Ferias y Eventos** - Calendario de actividades presenciales/virtuales
- 🤝 **Red de Aliados** - Organizaciones colaboradoras
- 💼 **Oportunidades de Negocio** - Conexiones entre empresas
- 🌐 **Comunidad MIPYME** - Foros y networking

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico (Monorepo Híbrido)

```
omipyme-web/
│
├── frontend/          → Next.js 14 (React, TypeScript, Tailwind CSS)
├── cms/               → WordPress 6.4 (Headless CMS)
├── api/               → Python FastAPI (API REST)
├── dashboards/        → R Shiny (Dashboards interactivos)
└── docs/              → Documentación técnica
```

### Tecnologías Clave

| Capa | Tecnología | Propósito |
|------|-----------|-----------|
| **Frontend** | Next.js 14 + React 18 | Interfaz de usuario moderna, SSR/SSG |
| **CMS** | WordPress (Headless) | Gestión de contenido, blog, publicaciones |
| **API** | Python FastAPI | Endpoints REST, integración de datos |
| **Dashboards** | R Shiny | Visualizaciones interactivas de datos |
| **Estilos** | Tailwind CSS 3 | Sistema de diseño utilitario |
| **Base de Datos** | PostgreSQL | Datos estructurados |
| **Analytics** | R + Python | Procesamiento de datos MIPYME |

---

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
/* Colores Institucionales */
--color-primary:    #003366;  /* Azul UNED */
--color-secondary:  #006633;  /* Verde Institucional */

/* Colores por Pilar */
--color-observatorio:  #003366;  /* Azul */
--color-herramientas:  #FF6B35;  /* Naranja */
--color-investigacion: #006633;  /* Verde */
--color-formacion:     #7B2CBF;  /* Morado */
--color-ecosistema:    #00A8A8;  /* Teal */

/* Colores de Soporte */
--color-gray-50:   #F9FAFB;
--color-gray-900:  #111827;
```

### Tipografía

- **Títulos**: Montserrat Bold (700)
- **Cuerpo**: Open Sans Regular (400)
- **Datos/Código**: JetBrains Mono (400)

### Accesibilidad

- ✅ WCAG 2.1 Nivel AA
- ✅ Contraste mínimo 4.5:1
- ✅ Navegación por teclado
- ✅ Lectores de pantalla (ARIA)

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos

```bash
Node.js >= 18.0.0
Python >= 3.11
R >= 4.2.0
Docker >= 24.0 (opcional)
```

### Configuración Rápida

#### 1. Frontend (Next.js)

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
# http://localhost:3000
```

#### 2. API (Python FastAPI)

```bash
cd api
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
# http://localhost:8000/docs
```

#### 3. WordPress (Headless CMS)

```bash
cd cms
# Seguir instrucciones en cms/README.md
# Configurar WP con tema omipyme-theme
```

#### 4. Dashboards (R Shiny)

```bash
cd dashboards
Rscript -e "install.packages(c('shiny', 'shinydashboard', 'tidyverse'))"
# Ejecutar apps individuales según necesidad
```

### Docker (Entorno Completo)

```bash
docker-compose up -d
# Frontend:   http://localhost:3000
# API:        http://localhost:8000
# WordPress:  http://localhost:8080
# Dashboards: http://localhost:3838
```

---

## 📂 Estructura del Proyecto

```
omipyme-web/
│
├── frontend/                    # Aplicación Next.js
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   │   ├── navigation/      # Navegación principal y secundaria
│   │   │   ├── pilares/         # Componentes específicos por pilar
│   │   │   ├── common/          # Componentes reutilizables
│   │   │   └── dashboard/       # Integraciones con R Shiny
│   │   ├── pages/               # Rutas de la aplicación
│   │   │   ├── index.tsx        # Home (Hero + Pilares)
│   │   │   ├── observatorio/    # Páginas del pilar Observatorio
│   │   │   ├── herramientas/    # Páginas del pilar Herramientas
│   │   │   ├── investigacion/   # Páginas del pilar Investigación
│   │   │   ├── formacion/       # Páginas del pilar Formación
│   │   │   └── ecosistema/      # Páginas del pilar Ecosistema
│   │   ├── styles/              # Estilos globales y Tailwind
│   │   ├── lib/                 # Utilidades y helpers
│   │   ├── types/               # TypeScript types/interfaces
│   │   └── hooks/               # Custom React hooks
│   └── public/                  # Archivos estáticos
│
├── cms/                         # WordPress Headless
│   ├── themes/
│   │   └── omipyme-theme/       # Tema personalizado
│   └── plugins/
│       └── omipyme-custom/      # Funcionalidad custom
│
├── api/                         # Python FastAPI
│   ├── app/
│   │   ├── routers/             # Endpoints REST
│   │   ├── models/              # Modelos de datos (ORM)
│   │   ├── services/            # Lógica de negocio
│   │   └── core/                # Configuración y seguridad
│   └── tests/                   # Tests automatizados
│
├── dashboards/                  # R Shiny Applications
│   ├── observatorio/            # Dashboards de datos MIPYME
│   ├── herramientas/            # Selfie Distrital, etc.
│   └── common/                  # Componentes reutilizables R
│
├── docs/                        # Documentación
│   ├── architecture/            # Diagramas y decisiones técnicas
│   ├── design-system/           # Guía de estilos y componentes
│   └── api-docs/                # Documentación de API
│
├── .github/                     # GitHub Actions (CI/CD)
│   └── workflows/
│
├── docker-compose.yml           # Orquestación de contenedores
├── package.json                 # Scripts root del monorepo
└── README.md                    # Este archivo
```

---

## 🗺️ Mapa del Sitio (Rutas Principales)

```
/                                # Home (Hero + 5 Pilares)
│
├── /observatorio/
│   ├── /dashboards              # Visualizaciones interactivas
│   ├── /datos                   # Datasets públicos
│   ├── /encuestas               # Resultados de encuestas
│   └── /mapas                   # Mapas georreferenciados
│
├── /herramientas/
│   ├── /selfie-distrital        # Diagnóstico por ubicación
│   ├── /chatbot-obi             # Asistente inteligente
│   ├── /calculadoras            # Herramientas financieras
│   └── /recursos                # Descargas
│
├── /investigacion/
│   ├── /publicaciones           # Papers y artículos
│   ├── /proyectos               # Proyectos de investigación
│   ├── /equipo                  # Investigadores
│   └── /repositorio             # Biblioteca digital
│
├── /formacion/
│   ├── /cursos                  # Capacitaciones
│   ├── /toolkits                # Kits de herramientas
│   ├── /podcast                 # Serie de audio
│   └── /certificaciones         # Programas certificados
│
└── /ecosistema/
    ├── /eventos                 # Calendario de ferias
    ├── /aliados                 # Red de colaboradores
    ├── /oportunidades           # Networking empresarial
    └── /comunidad               # Foros y grupos
```

---

## 🧪 Testing y Calidad

```bash
# Frontend - Tests de componentes
cd frontend && npm run test

# API - Tests de endpoints
cd api && pytest

# Linting y formato
npm run lint
npm run format

# Accesibilidad (a11y)
npm run test:a11y
```

---

## 🚢 Despliegue

### Variables de Entorno

Crear archivos `.env` en cada subdirectorio según `.env.example`:

```env
# frontend/.env.local
NEXT_PUBLIC_API_URL=https://api.omipyme.uned.ac.cr
NEXT_PUBLIC_WP_URL=https://cms.omipyme.uned.ac.cr
NEXT_PUBLIC_SHINY_URL=https://dashboards.omipyme.uned.ac.cr

# api/.env
DATABASE_URL=postgresql://user:pass@localhost:5432/omipyme
SECRET_KEY=your-secret-key-here
WORDPRESS_API_URL=https://cms.omipyme.uned.ac.cr/wp-json
```

### Producción

El proyecto está configurado para despliegue en:
- **Frontend**: Vercel / Netlify / UNED Infraestructura
- **API**: AWS Lambda / Google Cloud Run / Servidor UNED
- **WordPress**: Hosting WordPress institucional
- **Dashboards**: Shiny Server / RStudio Connect

---

## 👥 Equipo y Contribuciones

### Mantenedores

- **Dirección OMiPYME** - UNED Costa Rica
- **Equipo de Desarrollo** - [Lista de contribuidores](./CONTRIBUTORS.md)

### Guía de Contribución

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Add: nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crea un Pull Request

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles.

---

## 📄 Licencia

Este proyecto es propiedad de la **Universidad Estatal a Distancia (UNED)** de Costa Rica.

**Uso Educativo y de Investigación** - Ver [LICENSE](./LICENSE) para términos específicos.

---

## 📞 Contacto y Soporte

- **Web**: [https://omipyme.uned.ac.cr](https://omipyme.uned.ac.cr)
- **Email**: observatorio@uned.ac.cr
- **Teléfono**: +506 2527-2000
- **Issues**: [GitHub Issues](https://github.com/uned-cr/omipyme-web/issues)

---

<div align="center">
  <p>Desarrollado con ❤️ por la <strong>UNED Costa Rica</strong></p>
  <p>© 2024 Universidad Estatal a Distancia - Todos los derechos reservados</p>
</div>
