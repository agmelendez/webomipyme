# Guía de Contribución - OMiPYME

¡Gracias por tu interés en contribuir al proyecto OMiPYME! Esta guía te ayudará a entender cómo colaborar de manera efectiva.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Estándares de Código](#estándares-de-código)
- [Mensajes de Commit](#mensajes-de-commit)
- [Pull Requests](#pull-requests)
- [Reporte de Bugs](#reporte-de-bugs)
- [Solicitud de Features](#solicitud-de-features)

---

## 🤝 Código de Conducta

Este proyecto adhiere a un código de conducta profesional. Al participar, te comprometes a:

- Ser respetuoso y constructivo
- Aceptar críticas constructivas
- Enfocarte en lo mejor para la comunidad
- Mostrar empatía hacia otros miembros

---

## 🚀 Cómo Contribuir

Hay muchas formas de contribuir a OMiPYME:

1. **Reportar bugs** 🐛
2. **Sugerir nuevas funcionalidades** 💡
3. **Mejorar la documentación** 📚
4. **Escribir código** 💻
5. **Revisar Pull Requests** 👀
6. **Diseñar componentes UI** 🎨

---

## 🛠️ Configuración del Entorno

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/omipyme-web.git
cd omipyme-web

# Agrega el repositorio original como upstream
git remote add upstream https://github.com/uned-cr/omipyme-web.git
```

### 2. Instalación

Sigue la [Guía de Inicio Rápido](./QUICK_START.md) para configurar el proyecto.

### 3. Crear una Rama

```bash
# Actualiza tu main
git checkout main
git pull upstream main

# Crea una nueva rama
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/nombre-del-bug
```

---

## 🔄 Flujo de Trabajo

### 1. Sincronización

Mantén tu fork actualizado:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### 2. Desarrollo

```bash
# Trabaja en tu rama
git checkout feature/tu-feature

# Haz commits frecuentes
git add .
git commit -m "feat: descripción clara del cambio"

# Push a tu fork
git push origin feature/tu-feature
```

### 3. Pull Request

1. Ve a tu fork en GitHub
2. Click en "Pull Request"
3. Selecciona tu rama
4. Completa la plantilla de PR
5. Solicita revisión

---

## 📝 Estándares de Código

### Frontend (TypeScript/React)

```typescript
// Usa TypeScript estricto
interface Props {
  title: string;
  isActive?: boolean;
}

// Componentes funcionales con tipos
export default function Component({ title, isActive = false }: Props) {
  return <div>{title}</div>;
}

// Hooks personalizados
export function useCustomHook() {
  // lógica
}
```

**Reglas**:
- Usar TypeScript en todos los archivos
- Componentes funcionales con hooks
- Props tipadas con interfaces
- Nombres en PascalCase para componentes
- Nombres en camelCase para funciones

### Backend (Python)

```python
# Type hints en todas las funciones
from typing import List, Optional
from pydantic import BaseModel

class User(BaseModel):
    """Modelo de usuario."""
    id: int
    name: str
    email: str

def get_user(user_id: int) -> Optional[User]:
    """
    Obtiene un usuario por ID.

    Args:
        user_id: ID del usuario

    Returns:
        Usuario si existe, None en caso contrario
    """
    # implementación
    pass
```

**Reglas**:
- PEP 8 para estilo de código
- Type hints en todas las funciones
- Docstrings en formato Google
- Black para formateo automático
- Nombres en snake_case

### Estilos (CSS/Tailwind)

```jsx
// Usa clases de Tailwind primero
<div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
  {/* contenido */}
</div>

// CSS custom solo cuando sea necesario
// Y usa las variables del sistema de diseño
<style jsx>{`
  .custom-class {
    color: var(--color-uned-blue);
  }
`}</style>
```

---

## 💬 Mensajes de Commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

### Formato

```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos

```bash
feat(observatorio): agregar dashboard de empresas por sector

fix(api): corregir error en endpoint de estadísticas

docs(readme): actualizar instrucciones de instalación

style(pilares): mejorar espaciado en tarjetas

refactor(auth): simplificar lógica de autenticación

test(herramientas): agregar tests para Selfie Distrital

chore(deps): actualizar dependencias de Next.js
```

---

## 🔍 Pull Requests

### Antes de Enviar

✅ **Checklist**:
- [ ] El código sigue los estándares del proyecto
- [ ] Todos los tests pasan
- [ ] Se agregaron tests para nueva funcionalidad
- [ ] La documentación está actualizada
- [ ] Los commits siguen Conventional Commits
- [ ] No hay conflictos con main
- [ ] El código está formateado correctamente

### Plantilla de PR

```markdown
## Descripción
Breve descripción de los cambios

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## Cómo Probar
Pasos para probar los cambios

## Screenshots (si aplica)
Capturas de pantalla

## Checklist
- [ ] Tests pasan
- [ ] Documentación actualizada
- [ ] Código revisado
```

---

## 🐛 Reporte de Bugs

### Plantilla de Issue

```markdown
**Descripción del Bug**
Descripción clara y concisa

**Pasos para Reproducir**
1. Ir a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento Esperado**
Qué debería suceder

**Comportamiento Actual**
Qué sucede actualmente

**Screenshots**
Si aplica

**Entorno**
- OS: [e.g. macOS]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.0.0]

**Información Adicional**
Cualquier otro contexto
```

---

## 💡 Solicitud de Features

### Plantilla de Issue

```markdown
**Descripción del Feature**
Descripción clara de la funcionalidad

**Problema que Resuelve**
¿Qué problema resuelve?

**Solución Propuesta**
¿Cómo debería funcionar?

**Alternativas Consideradas**
Otras soluciones posibles

**Contexto Adicional**
Screenshots, mockups, etc.
```

---

## 🧪 Testing

### Frontend

```bash
# Ejecutar tests
cd frontend
npm run test

# Tests con coverage
npm run test:coverage

# Tests de accesibilidad
npm run test:a11y
```

### Backend

```bash
# Ejecutar tests
cd api
pytest

# Tests con coverage
pytest --cov=app

# Tests específicos
pytest tests/test_observatorio.py
```

---

## 📚 Documentación

Cuando agregues nuevas funcionalidades:

1. **Actualiza el README** si cambia la configuración
2. **Documenta el código** con comentarios claros
3. **Agrega ejemplos** de uso
4. **Actualiza el SITEMAP** si agregas rutas
5. **Actualiza el DESIGN_SYSTEM** si agregas componentes

---

## 🎨 Diseño

Si contribuyes con diseño:

1. Sigue el **Sistema de Diseño** existente
2. Usa los **colores de los pilares** apropiadamente
3. Mantén **accesibilidad WCAG 2.1 AA**
4. Proporciona **assets en múltiples formatos**
5. Incluye **mockups y prototipos** cuando sea posible

---

## 🔒 Seguridad

Si encuentras una vulnerabilidad de seguridad:

**NO** abras un issue público. Contacta a:
- Email: observatorio@uned.ac.cr
- Asunto: [SEGURIDAD] Descripción breve

---

## ⚡ Optimización

### Performance

- Optimiza imágenes antes de subirlas
- Usa lazy loading cuando sea apropiado
- Minimiza las dependencias
- Revisa el bundle size

### Accesibilidad

- Prueba con lectores de pantalla
- Verifica contraste de colores
- Asegura navegación por teclado
- Incluye texto alternativo

---

## 🎯 Prioridades del Proyecto

### Alta Prioridad
- Funcionalidades core de los 5 pilares
- Bugs críticos
- Problemas de accesibilidad
- Problemas de seguridad

### Media Prioridad
- Mejoras de UX
- Optimizaciones de performance
- Nuevas funcionalidades menores

### Baja Prioridad
- Refactorizaciones no críticas
- Mejoras estéticas
- Documentación adicional

---

## 🏆 Reconocimiento

Todos los contribuidores son reconocidos en:
- [CONTRIBUTORS.md](./CONTRIBUTORS.md)
- Release notes
- Documentación del proyecto

---

## 📞 Ayuda

¿Tienes preguntas? Contacta:

- **Email**: observatorio@uned.ac.cr
- **Issues**: [GitHub Issues](https://github.com/uned-cr/omipyme-web/issues)
- **Discussions**: [GitHub Discussions](https://github.com/uned-cr/omipyme-web/discussions)

---

## 📜 Licencia

Al contribuir a este proyecto, aceptas que tus contribuciones sean licenciadas bajo los mismos términos que el proyecto.

---

**¡Gracias por contribuir a OMiPYME!** 🎉

Tu trabajo ayuda a fortalecer el ecosistema MIPYME de Costa Rica.
