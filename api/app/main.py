"""
OMiPYME API - FastAPI Application
API REST para el Observatorio de MiPYMEs de la UNED Costa Rica
"""

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import JSONResponse
import time
from typing import Dict

# Importar routers (a implementar)
# from app.routers import (
#     observatorio,
#     herramientas,
#     investigacion,
#     formacion,
#     ecosistema,
#     auth,
#     buscar,
# )

# ==================================================
# CONFIGURACIÓN DE LA APLICACIÓN
# ==================================================

app = FastAPI(
    title="OMiPYME API",
    description="API REST para el Observatorio de Micro, Pequeñas y Medianas Empresas - UNED Costa Rica",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

# ==================================================
# MIDDLEWARE
# ==================================================

# CORS - Permitir requests desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Frontend local
        "https://omipyme.uned.ac.cr",  # Producción
        "https://www.omipyme.uned.ac.cr",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Compresión GZip
app.add_middleware(GZipMiddleware, minimum_size=1000)


# Middleware para logging de requests
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response


# ==================================================
# RUTAS PRINCIPALES
# ==================================================


@app.get("/", tags=["Root"])
async def root() -> Dict[str, str]:
    """
    Endpoint raíz de la API
    """
    return {
        "message": "OMiPYME API - Observatorio MIPYME UNED Costa Rica",
        "version": "1.0.0",
        "docs": "/docs",
        "status": "active",
    }


@app.get("/health", tags=["Health"])
async def health_check() -> Dict[str, str]:
    """
    Health check endpoint para monitoreo
    """
    return {
        "status": "healthy",
        "service": "omipyme-api",
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
    }


@app.get("/api/v1/pilares", tags=["Pilares"])
async def get_pilares():
    """
    Obtener información de los 5 pilares del modelo OMiPYME
    """
    return {
        "pilares": [
            {
                "id": "observatorio",
                "nombre": "Observatorio",
                "descripcion": "Datos, encuestas y dashboards interactivos del sector MIPYME",
                "color": "#003366",
                "orden": 1,
            },
            {
                "id": "herramientas",
                "nombre": "Herramientas",
                "descripcion": "Selfie Distrital, Chatbot OBI, Calculadoras y recursos",
                "color": "#FF6B35",
                "orden": 2,
            },
            {
                "id": "investigacion",
                "nombre": "Investigación",
                "descripcion": "Publicaciones, proyectos y equipo investigador",
                "color": "#006633",
                "orden": 3,
            },
            {
                "id": "formacion",
                "nombre": "Formación",
                "descripcion": "Cursos, toolkits, podcast y certificaciones",
                "color": "#7B2CBF",
                "orden": 4,
            },
            {
                "id": "ecosistema",
                "nombre": "Ecosistema",
                "descripcion": "Ferias, eventos, aliados y comunidad MIPYME",
                "color": "#00A8A8",
                "orden": 5,
            },
        ]
    }


@app.get("/api/v1/estadisticas/generales", tags=["Estadísticas"])
async def get_estadisticas_generales():
    """
    Obtener estadísticas generales del observatorio
    """
    return {
        "empresas_registradas": 12458,
        "cantones_cubiertos": 82,
        "publicaciones": 156,
        "datos_analizados": 2500000,
        "ultima_actualizacion": "2024-12-15T10:30:00Z",
    }


# ==================================================
# MANEJO DE ERRORES
# ==================================================


@app.exception_handler(404)
async def not_found_handler(request: Request, exc):
    return JSONResponse(
        status_code=404,
        content={
            "error": "Not Found",
            "message": "El recurso solicitado no existe",
            "path": str(request.url),
        },
    )


@app.exception_handler(500)
async def internal_error_handler(request: Request, exc):
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal Server Error",
            "message": "Ha ocurrido un error interno en el servidor",
        },
    )


# ==================================================
# REGISTRO DE ROUTERS (A implementar)
# ==================================================

# app.include_router(observatorio.router, prefix="/api/v1/observatorio", tags=["Observatorio"])
# app.include_router(herramientas.router, prefix="/api/v1/herramientas", tags=["Herramientas"])
# app.include_router(investigacion.router, prefix="/api/v1/investigacion", tags=["Investigación"])
# app.include_router(formacion.router, prefix="/api/v1/formacion", tags=["Formación"])
# app.include_router(ecosistema.router, prefix="/api/v1/ecosistema", tags=["Ecosistema"])
# app.include_router(buscar.router, prefix="/api/v1/buscar", tags=["Búsqueda"])
# app.include_router(auth.router, prefix="/api/v1/auth", tags=["Autenticación"])


# ==================================================
# STARTUP Y SHUTDOWN EVENTS
# ==================================================


@app.on_event("startup")
async def startup_event():
    """
    Eventos al iniciar la aplicación
    """
    print("🚀 OMiPYME API iniciada correctamente")
    print("📚 Documentación disponible en: /docs")


@app.on_event("shutdown")
async def shutdown_event():
    """
    Eventos al cerrar la aplicación
    """
    print("👋 OMiPYME API detenida")


# ==================================================
# EJECUCIÓN LOCAL
# ==================================================

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info",
    )
