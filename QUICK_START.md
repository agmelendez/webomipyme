# Guía de Inicio Rápido - OMiPYME

Esta guía te ayudará a levantar el proyecto OMiPYME en tu entorno local en menos de 10 minutos.

## 📋 Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** >= 18.0.0 ([Descargar](https://nodejs.org/))
- **Python** >= 3.11 ([Descargar](https://www.python.org/))
- **Docker** >= 24.0 ([Descargar](https://www.docker.com/)) (Opcional pero recomendado)
- **Git** ([Descargar](https://git-scm.com/))

## 🚀 Opción 1: Inicio Rápido con Docker (Recomendado)

### 1. Clonar el repositorio

```bash
git clone https://github.com/uned-cr/omipyme-web.git
cd omipyme-web
```

### 2. Levantar todos los servicios

```bash
docker-compose up -d
```

### 3. Acceder a los servicios

Una vez que todos los contenedores estén corriendo:

- **Frontend**: http://localhost:3000
- **API**: http://localhost:8000
- **Documentación API**: http://localhost:8000/docs
- **WordPress**: http://localhost:8080
- **Dashboards R Shiny**: http://localhost:3838
- **Adminer (BD)**: http://localhost:8081

### 4. Ver logs

```bash
docker-compose logs -f
```

### 5. Detener los servicios

```bash
docker-compose down
```

---

## 🛠️ Opción 2: Instalación Manual

### 1. Clonar el repositorio

```bash
git clone https://github.com/uned-cr/omipyme-web.git
cd omipyme-web
```

### 2. Instalar dependencias

```bash
# Instalar dependencias del proyecto completo
npm run setup

# O instalar manualmente cada parte:

# Frontend
cd frontend
npm install
cd ..

# API
cd api
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

### 3. Configurar variables de entorno

```bash
# Frontend
cd frontend
cp .env.example .env.local
# Editar .env.local con tus configuraciones
cd ..

# API
cd api
cp .env.example .env
# Editar .env con tus configuraciones
cd ..
```

### 4. Levantar bases de datos

Necesitas PostgreSQL y MySQL/MariaDB corriendo. Puedes usar Docker solo para las bases de datos:

```bash
# PostgreSQL
docker run -d \
  --name omipyme-postgres \
  -e POSTGRES_USER=omipyme \
  -e POSTGRES_PASSWORD=omipyme123 \
  -e POSTGRES_DB=omipyme \
  -p 5432:5432 \
  postgres:15-alpine

# MySQL (para WordPress)
docker run -d \
  --name omipyme-mysql \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  -e MYSQL_DATABASE=omipyme_wp \
  -e MYSQL_USER=wordpress \
  -e MYSQL_PASSWORD=wordpress123 \
  -p 3306:3306 \
  mysql:8.0

# Redis (cache)
docker run -d \
  --name omipyme-redis \
  -p 6379:6379 \
  redis:7-alpine
```

### 5. Ejecutar migraciones de base de datos

```bash
cd api
source venv/bin/activate
alembic upgrade head
cd ..
```

### 6. Iniciar los servicios

En terminales separadas:

```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - API
cd api
source venv/bin/activate
uvicorn app.main:app --reload

# Terminal 3 - WordPress (si no usas Docker)
# Configurar según tu servidor local (XAMPP, MAMP, etc.)
```

### 7. Acceder a los servicios

- **Frontend**: http://localhost:3000
- **API**: http://localhost:8000
- **Documentación API**: http://localhost:8000/docs

---

## 🎨 Desarrollo

### Frontend (Next.js)

```bash
cd frontend

# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm run start

# Linting
npm run lint

# Formateo
npm run format

# Tests
npm run test
```

### API (Python FastAPI)

```bash
cd api
source venv/bin/activate

# Desarrollo
uvicorn app.main:app --reload

# Tests
pytest

# Formateo
black app/

# Linting
flake8 app/

# Type checking
mypy app/
```

### Comandos Útiles del Monorepo (desde raíz)

```bash
# Levantar todo en modo desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar tests
npm run test

# Linting y formateo
npm run lint
npm run format

# Docker
npm run docker:up      # Levantar servicios
npm run docker:down    # Detener servicios
npm run docker:logs    # Ver logs
npm run docker:clean   # Limpiar todo
```

---

## 📊 Dashboards R Shiny

Los dashboards de R Shiny requieren R instalado:

```bash
cd dashboards

# Instalar dependencias R (primera vez)
Rscript -e "install.packages(c('shiny', 'shinydashboard', 'tidyverse', 'plotly'))"

# Ejecutar dashboard específico
Rscript -e "shiny::runApp('observatorio/app.R', port=3838)"
```

---

## 🗄️ Base de Datos

### Acceder a PostgreSQL

```bash
# Con Docker
docker exec -it omipyme-postgres psql -U omipyme -d omipyme

# Sin Docker
psql -U omipyme -d omipyme
```

### Acceder a MySQL (WordPress)

```bash
# Con Docker
docker exec -it omipyme-mysql mysql -u wordpress -p

# O usar Adminer
# http://localhost:8081
```

---

## 🐛 Solución de Problemas

### Puerto ya en uso

Si algún puerto está ocupado, puedes cambiarlos en `docker-compose.yml` o en los comandos de inicio.

### Error de permisos en Docker

```bash
sudo usermod -aG docker $USER
# Luego cerrar sesión e iniciar sesión nuevamente
```

### Error de instalación de dependencias Node

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Error de instalación de dependencias Python

```bash
cd api
rm -rf venv
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

---

## 📚 Recursos Adicionales

- **Documentación Completa**: [README.md](./README.md)
- **Arquitectura**: [docs/architecture/ARCHITECTURE.md](./docs/architecture/ARCHITECTURE.md)
- **Sistema de Diseño**: [docs/design-system/DESIGN_SYSTEM.md](./docs/design-system/DESIGN_SYSTEM.md)
- **Mapa del Sitio**: [docs/architecture/SITEMAP.md](./docs/architecture/SITEMAP.md)
- **API Reference**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🤝 ¿Necesitas Ayuda?

- **Issues**: [GitHub Issues](https://github.com/uned-cr/omipyme-web/issues)
- **Email**: observatorio@uned.ac.cr
- **Documentación**: [Wiki del proyecto](https://github.com/uned-cr/omipyme-web/wiki)

---

## ✅ Checklist de Verificación

Después de la instalación, verifica que todo funciona:

- [ ] Frontend carga en http://localhost:3000
- [ ] API responde en http://localhost:8000/health
- [ ] Documentación API visible en http://localhost:8000/docs
- [ ] Puedes ver los 5 pilares en la página de inicio
- [ ] La navegación principal funciona correctamente
- [ ] El buscador es visible (aunque no funcional aún)
- [ ] Los estilos de Tailwind CSS se aplican correctamente

---

**¡Listo! Ahora puedes empezar a desarrollar en OMiPYME.** 🎉

Para desarrollo continuo, consulta la [documentación completa](./README.md) y las guías en `docs/`.
