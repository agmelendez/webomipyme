# Mapa del Sitio - OMiPYME

Este documento define la estructura de rutas del sitio web de OMiPYME basado en el **Modelo de Cinco Pilares**.

## Arquitectura de URLs

Todas las rutas siguen una estructura jerárquica clara basada en los pilares:

```
/{pilar}/{sección}/{subsección?}/{detalle?}
```

---

## 🏠 Páginas Principales

| Ruta | Descripción | Componente |
|------|-------------|------------|
| `/` | Página de inicio con Hero y acceso a pilares | `pages/index.tsx` |
| `/nosotros` | Información sobre OMiPYME | `pages/nosotros.tsx` |
| `/contacto` | Formulario de contacto | `pages/contacto.tsx` |
| `/buscar` | Búsqueda global | `pages/buscar.tsx` |
| `/blog` | Blog y noticias | `pages/blog/index.tsx` |

---

## 1️⃣ PILAR OBSERVATORIO

**Base URL**: `/observatorio`
**Color**: Azul (#003366)

### Rutas Principales

```
/observatorio
├── /dashboards                    # Dashboards interactivos (R Shiny)
│   ├── /empresas                  # Dashboard de empresas por sector
│   ├── /territorial               # Análisis territorial
│   ├── /sectorial                 # Análisis por sector económico
│   └── /[dashboard-id]            # Dashboard específico
│
├── /datos                         # Estadísticas y datos
│   ├── /provincias                # Datos por provincia
│   ├── /cantones                  # Datos por cantón
│   ├── /sectores                  # Datos por sector
│   └── /descargas                 # Datasets descargables
│
├── /encuestas                     # Encuestas y estudios
│   ├── /resultados                # Resultados de encuestas
│   ├── /participar                # Participar en encuestas activas
│   └── /[encuesta-id]             # Encuesta específica
│
└── /mapas                         # Mapas georreferenciados
    ├── /interactivo               # Mapa interactivo general
    ├── /densidad                  # Mapa de densidad empresarial
    └── /[mapa-id]                 # Mapa específico
```

### Casos de Uso

- **Dashboard en tiempo real**: `/observatorio/dashboards/empresas`
- **Datos de Cartago**: `/observatorio/datos/provincias/cartago`
- **Resultados encuesta 2024**: `/observatorio/encuestas/resultados/encuesta-mipyme-2024`

---

## 2️⃣ PILAR HERRAMIENTAS

**Base URL**: `/herramientas`
**Color**: Naranja (#FF6B35)

### Rutas Principales

```
/herramientas
├── /selfie-distrital              # Diagnóstico por ubicación
│   ├── /                          # Landing page de Selfie
│   ├── /iniciar                   # Iniciar diagnóstico
│   ├── /resultados/[id]           # Resultados del selfie
│   └── /historico                 # Selfies guardados del usuario
│
├── /chatbot-obi                   # Chatbot asistente
│   ├── /                          # Interfaz del chatbot
│   └── /preguntas-frecuentes      # FAQ del chatbot
│
├── /calculadoras                  # Herramientas de cálculo
│   ├── /financiera                # Calculadora financiera
│   ├── /flujo-caja                # Calculadora de flujo de caja
│   ├── /rentabilidad              # Calculadora de rentabilidad
│   ├── /punto-equilibrio          # Punto de equilibrio
│   └── /[calculadora-id]          # Calculadora específica
│
└── /recursos                      # Recursos descargables
    ├── /plantillas                # Plantillas empresariales
    ├── /guias                     # Guías descargables
    ├── /casos-exito               # Casos de éxito documentados
    └── /[recurso-id]              # Recurso específico
```

### Casos de Uso

- **Selfie de San José**: `/herramientas/selfie-distrital/iniciar?canton=san-jose`
- **Calculadora de ROI**: `/herramientas/calculadoras/rentabilidad`
- **Plantilla de plan de negocios**: `/herramientas/recursos/plantillas/plan-negocios`

---

## 3️⃣ PILAR INVESTIGACIÓN

**Base URL**: `/investigacion`
**Color**: Verde (#006633)

### Rutas Principales

```
/investigacion
├── /publicaciones                 # Publicaciones académicas
│   ├── /articulos                 # Artículos científicos
│   ├── /papers                    # Working papers
│   ├── /reportes                  # Reportes de investigación
│   ├── /tesis                     # Tesis relacionadas
│   └── /[publicacion-id]          # Publicación específica
│
├── /proyectos                     # Proyectos de investigación
│   ├── /activos                   # Proyectos en curso
│   ├── /finalizados               # Proyectos completados
│   ├── /por-area                  # Filtrado por área temática
│   └── /[proyecto-id]             # Proyecto específico
│
├── /equipo                        # Equipo investigador
│   ├── /investigadores            # Directorio de investigadores
│   ├── /colaboradores             # Colaboradores externos
│   └── /[investigador-id]         # Perfil de investigador
│
└── /repositorio                   # Repositorio documental
    ├── /buscar                    # Búsqueda avanzada
    ├── /categorias                # Categorías del repositorio
    └── /[documento-id]            # Documento específico
```

### Casos de Uso

- **Paper sobre MiPYMEs digitales**: `/investigacion/publicaciones/papers/digitalizacion-mipymes-2024`
- **Proyecto de innovación**: `/investigacion/proyectos/innovacion-rural-mipymes`
- **Perfil de investigadora**: `/investigacion/equipo/investigadores/maria-rodriguez`

---

## 4️⃣ PILAR FORMACIÓN

**Base URL**: `/formacion`
**Color**: Morado (#7B2CBF)

### Rutas Principales

```
/formacion
├── /cursos                        # Cursos y talleres
│   ├── /proximos                  # Cursos próximos
│   ├── /virtuales                 # Cursos en línea
│   ├── /presenciales              # Cursos presenciales
│   ├── /por-tema                  # Filtrado por temática
│   ├── /inscripcion/[curso-id]    # Inscripción a curso
│   └── /[curso-id]                # Detalle del curso
│
├── /toolkits                      # Kits de herramientas
│   ├── /emprendimiento            # Toolkit de emprendimiento
│   ├── /marketing                 # Toolkit de marketing
│   ├── /finanzas                  # Toolkit de finanzas
│   ├── /tecnologia                # Toolkit de tecnología
│   └── /[toolkit-id]              # Toolkit específico
│
├── /podcast                       # Serie de podcast
│   ├── /episodios                 # Lista de episodios
│   ├── /por-temporada             # Episodios por temporada
│   ├── /temas                     # Filtrado por tema
│   └── /[episodio-id]             # Episodio específico
│
└── /certificaciones               # Programas certificados
    ├── /disponibles               # Certificaciones disponibles
    ├── /mis-certificados          # Certificados del usuario
    └── /[certificacion-id]        # Detalle de certificación
```

### Casos de Uso

- **Curso de marketing digital**: `/formacion/cursos/marketing-digital-mipymes`
- **Toolkit de finanzas**: `/formacion/toolkits/finanzas/descargar`
- **Episodio 15 del podcast**: `/formacion/podcast/episodios/15-gestion-efectiva-tiempo`

---

## 5️⃣ PILAR ECOSISTEMA

**Base URL**: `/ecosistema`
**Color**: Teal (#00A8A8)

### Rutas Principales

```
/ecosistema
├── /eventos                       # Ferias y eventos
│   ├── /calendario                # Calendario de eventos
│   ├── /proximos                  # Próximos eventos
│   ├── /pasados                   # Eventos pasados
│   ├── /inscripcion/[evento-id]   # Inscripción a evento
│   └── /[evento-id]               # Detalle del evento
│
├── /aliados                       # Red de aliados
│   ├── /publicos                  # Aliados del sector público
│   ├── /privados                  # Aliados del sector privado
│   ├── /academicos                # Aliados académicos
│   ├── /ongs                      # ONGs colaboradoras
│   └── /[aliado-id]               # Perfil de aliado
│
├── /oportunidades                 # Oportunidades de negocio
│   ├── /compras                   # Oportunidades de compra
│   ├── /ventas                    # Oportunidades de venta
│   ├── /colaboraciones            # Colaboraciones empresariales
│   ├── /publicar                  # Publicar oportunidad
│   └── /[oportunidad-id]          # Detalle de oportunidad
│
└── /comunidad                     # Comunidad MIPYME
    ├── /foros                     # Foros de discusión
    ├── /grupos                    # Grupos de networking
    ├── /historias                 # Historias de éxito
    └── /directorio                # Directorio de empresas
```

### Casos de Uso

- **Feria MIPYME 2025**: `/ecosistema/eventos/feria-mipyme-2025`
- **Aliado MEIC**: `/ecosistema/aliados/publicos/meic`
- **Oportunidad de exportación**: `/ecosistema/oportunidades/ventas/exportacion-cafe-organico`

---

## 📄 Páginas de Usuario (Autenticado)

```
/mi-cuenta
├── /perfil                        # Perfil del usuario
├── /favoritos                     # Contenido guardado
├── /cursos                        # Mis cursos inscritos
├── /certificados                  # Mis certificados
├── /eventos                       # Mis eventos registrados
├── /selfies                       # Mis selfies distritales
└── /configuracion                 # Configuración de cuenta
```

---

## 🔍 Búsqueda y Filtros

### Búsqueda Global

```
/buscar?q={query}&pilar={pilar}&tipo={tipo}&fecha={fecha}
```

**Parámetros de URL**:
- `q`: término de búsqueda
- `pilar`: filtro por pilar (observatorio, herramientas, etc.)
- `tipo`: tipo de contenido (publicacion, curso, evento, etc.)
- `fecha`: filtro por rango de fechas
- `page`: número de página
- `sort`: ordenamiento (relevancia, fecha, popularidad)

**Ejemplos**:
- `/buscar?q=marketing&pilar=formacion`
- `/buscar?q=exportacion&tipo=oportunidad`
- `/buscar?q=estadisticas&pilar=observatorio&fecha=2024`

---

## 🌐 Páginas Institucionales

```
/institucional
├── /politicas-privacidad          # Políticas de privacidad
├── /terminos-condiciones          # Términos y condiciones
├── /accesibilidad                 # Declaración de accesibilidad
├── /preguntas-frecuentes          # FAQ general
└── /sitemap                       # Mapa del sitio HTML
```

---

## 🔐 Autenticación y Autorización

```
/auth
├── /login                         # Iniciar sesión
├── /registro                      # Crear cuenta
├── /recuperar-password            # Recuperar contraseña
└── /verificar-email               # Verificar email
```

---

## 🚀 API Endpoints (Frontend → Backend)

El frontend consume estos endpoints de la API:

```
/api/v1
├── /pilares                       # Datos de pilares
├── /buscar                        # Búsqueda global
├── /estadisticas                  # Indicadores generales
├── /observatorio/*                # Endpoints del observatorio
├── /herramientas/*                # Endpoints de herramientas
├── /investigacion/*               # Endpoints de investigación
├── /formacion/*                   # Endpoints de formación
└── /ecosistema/*                  # Endpoints del ecosistema
```

---

## 📊 Integraciones con R Shiny

Los dashboards de R Shiny se integran mediante iframes en rutas específicas:

```
/observatorio/dashboards/[dashboard-name]
→ Carga iframe: {SHINY_URL}/dashboards/[dashboard-name]
```

**Ejemplos**:
- `/observatorio/dashboards/empresas` → `http://shiny.omipyme.uned.ac.cr/empresas`
- `/observatorio/dashboards/territorial` → `http://shiny.omipyme.uned.ac.cr/territorial`

---

## 🎨 Páginas de Error

```
/404                               # Página no encontrada
/500                               # Error del servidor
/error                             # Error genérico
```

---

## 📱 Rutas de PWA

```
/manifest.json                     # Web App Manifest
/sw.js                             # Service Worker
/offline                           # Página offline
```

---

## 🗺️ Generación de Sitemaps

### XML Sitemap (SEO)

```
/sitemap.xml                       # Sitemap principal
/sitemap-observatorio.xml          # Sitemap del pilar Observatorio
/sitemap-herramientas.xml          # Sitemap del pilar Herramientas
/sitemap-investigacion.xml         # Sitemap del pilar Investigación
/sitemap-formacion.xml             # Sitemap del pilar Formación
/sitemap-ecosistema.xml            # Sitemap del pilar Ecosistema
```

---

## 🔄 Redirecciones

Mapeo de URLs antiguas a nuevas (si aplica):

```
/old-url → /new-url (301 Redirect)
```

---

## 📐 Convenciones de Nomenclatura

### Reglas para URLs:

1. **Kebab-case**: Siempre usar guiones medios
   - ✅ `/selfie-distrital`
   - ❌ `/selfie_distrital` o `/selfieDistrital`

2. **Minúsculas**: Todo en minúsculas
   - ✅ `/observatorio/datos`
   - ❌ `/Observatorio/Datos`

3. **Sin trailing slash**: No incluir `/` al final
   - ✅ `/herramientas/calculadoras`
   - ❌ `/herramientas/calculadoras/`

4. **IDs legibles**: Usar slugs descriptivos
   - ✅ `/publicaciones/informe-mipyme-2024`
   - ❌ `/publicaciones/12345`

5. **Parámetros de query**: Para filtros y opciones
   - ✅ `/buscar?q=emprendimiento&pilar=formacion`
   - ❌ `/buscar/emprendimiento/formacion`

---

## 🎯 Prioridades de Implementación

### Fase 1 (MVP)
- [x] Página de inicio
- [x] Navegación principal con 5 pilares
- [ ] Landing pages de cada pilar
- [ ] Búsqueda básica
- [ ] Páginas institucionales

### Fase 2 (Funcionalidades Core)
- [ ] Selfie Distrital completo
- [ ] Dashboard básico del Observatorio
- [ ] Sistema de publicaciones
- [ ] Calendario de eventos
- [ ] Catálogo de cursos

### Fase 3 (Características Avanzadas)
- [ ] Chatbot OBI funcional
- [ ] Sistema de autenticación
- [ ] Área de usuario personalizada
- [ ] Integraciones completas con R Shiny
- [ ] API pública

---

## 📚 Referencias

- Documento de Arquitectura: `docs/architecture/ARCHITECTURE.md`
- Sistema de Diseño: `docs/design-system/DESIGN_SYSTEM.md`
- API Documentation: `docs/api-docs/API_REFERENCE.md`

---

**Última actualización**: 2024-12-15
**Versión del documento**: 1.0.0
