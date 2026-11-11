# 🧑‍💻 Portafolio de Daniel Muelas

Este repositorio contiene mi **portafolio personal de proyectos** como desarrollador de software. Aquí presento soluciones reales, ideas experimentales y herramientas que he desarrollado usando mi stack favorito: **React, TypeScript, Tailwind CSS, Node.js y Docker**.

Mi objetivo con este portafolio es compartir mi crecimiento, estilo de desarrollo y pasión por crear cosas útiles, limpias y bien pensadas.

---

## 🚀 ¿Cómo levantar este proyecto?

Sigue estos pasos para ejecutar el portafolio en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/danmcode/portfolio.git
cd portfolio
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Levantar el servidor de desarrollo

```bash
npm run dev
```

Luego abre tu navegador en:

```
http://localhost:5173/portfolio/
```

---

## 📦 Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila TypeScript y construye la versión de producción |
| `npm run lint` | Ejecuta ESLint para validar el código |
| `npm run preview` | Previsualiza el build antes de producción |
| `npm run deploy` | Construye y publica `dist/` en la rama `gh-pages` (GitHub Pages) |

---

## 🏗️ Arquitectura

El proyecto sigue **Atomic Design**:

```
src/
├── components/
│   ├── atoms/       → Button, Link, NavItem, Text
│   ├── molecules/   → Navbar, SideBarNavigation, EditorTabs, WorkExperienceStepper
│   └── organisms/   → Header, Footer, HeroSection
├── layouts/         → PageLayout (Header + contenido + Footer)
├── pages/           → About, Projects
├── hooks/           → useTabs, useMediaQuery
├── data/            → Contenido de proyectos y experiencia
├── types/           → Tipos compartidos
└── styles/          → Tailwind + tokens de color
```

Para agregar un proyecto o una experiencia solo hay que editar `src/data/ProjectsData.ts` o `src/data/ExperienceData.ts`.

---

## 🔄 CI / Despliegue

- **CI:** GitHub Actions (`.github/workflows/ci.yml`) ejecuta `lint` y `build` en cada push a `main` y en cada pull request.
- **Despliegue:** manual con `npm run deploy`, que publica en GitHub Pages. `public/404.html` redirige las rutas profundas (ej. `/portfolio/projects`) para que funcionen al recargar.

---

## ✨ ¿Qué encontrarás en este portafolio?

- Proyectos reales desarrollados con React, Node.js y PostgreSQL.
- Automatizaciones útiles y herramientas para el día a día.
- Experimentos personales para aprender nuevas tecnologías.
- Capturas, descripciones y enlaces para ver cada uno en acción.

---

## 🧠 Stack principal

- ⚛️ React + Vite + TypeScript
- 🎨 Tailwind CSS
- 🐘 PostgreSQL
- 🐳 Docker
- 💻 Linux + CLI tools

---

## 📬 Contacto

Si te interesa lo que hago, ¡hablemos!

📧 danmcode@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/danmcode)

---

> “Nunca dejes de aprender, nunca dejes de construir.” 🚀
