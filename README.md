# Portafolio de Daniel Muelas — Backend Engineer

Portafolio personal publicado en https://danmcode.github.io/portfolio/. Presenta mi perfil como Backend Engineer (Node.js, TypeScript, NestJS, PostgreSQL y AWS), mis proyectos y mi experiencia.

Hecho con React, Vite, TypeScript y Tailwind CSS.

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
│   ├── atoms/       → Button, Link, SectionTitle, TechBadge, Text
│   ├── molecules/   → ArchitectureDiagram, ContactLinks, Navbar, ProjectCard, WorkExperienceStepper
│   └── organisms/   → FeaturedProject, Footer, Header, HeroSection
├── layouts/         → PageLayout (Header + contenido + Footer)
├── pages/           → About, Projects
├── hooks/           → useMediaQuery, usePageTitle
├── data/            → Perfil, proyectos, experiencia, habilidades y catálogo de tecnologías
├── types/           → Tipos compartidos
└── styles/          → Tailwind + tokens de color
```

Todo el contenido está en `src/data/`:

- `profile.ts`: datos personales, sobre mí, educación y habilidades.
- `ProjectsData.ts`: proyectos. El primero se muestra como destacado.
- `ExperienceData.ts`: experiencia laboral.
- `tech.ts`: nombre, icono y color de cada tecnología.

La imagen Open Graph está en `public/og-image.png` (1200×630) y las etiquetas SEO en `index.html`.

---

## 🔄 CI / Despliegue

- **CI:** GitHub Actions (`.github/workflows/ci.yml`) ejecuta `lint` y `build` en cada push a `main` y en cada pull request.
- **Despliegue:** manual con `npm run deploy`, que publica en GitHub Pages. `public/404.html` redirige las rutas profundas (ej. `/portfolio/projects`) para que funcionen al recargar.

---

## 📬 Contacto

📧 danmcode@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/danmcode)  
🐙 [GitHub](https://github.com/danmcode)
