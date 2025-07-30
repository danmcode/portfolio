export interface ProjectData {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    fullDescription: string;
    technologies: string[];
    screenshots: string[];
}

export const projectsData: ProjectData[] = [
    {
        id: 'danmcode-portfolio',
        title: 'Project 1 // danmcode-portfolio',
        description: 'Desarrollé un sitio web moderno y responsivo para presentar mi portafolio profesional.',
        githubLink: 'https://github.com/danmcode/portfolio',
        fullDescription: `Este proyecto representa la primera versión de mi portafolio profesional, diseñado y desarrollado desde cero con un enfoque en escalabilidad, mantenibilidad y experiencia de usuario. 

El objetivo principal fue crear una plataforma clara y funcional para mostrar quién soy como desarrollador, mis habilidades técnicas, experiencia y proyectos destacados.

Entre las características clave del desarrollo se incluyen:

- Arquitectura modular basada en el patrón Atomic Design,
- Componentes reutilizables para facilitar el mantenimiento y escalado,
- Estilos limpios y eficientes con Tailwind CSS,
- Buenas prácticas de accesibilidad (a11y) para usuarios con tecnologías de asistencia,
- Navegación fluida utilizando React Router,
- Código robusto y bien tipado con TypeScript,
- Integración continua con GitHub Actions para despliegues automáticos.

Este portafolio no solo muestra mi trabajo, sino también mi enfoque profesional al construir aplicaciones modernas con tecnologías actuales.`,
        technologies: [
            'HTML',
            'CSS',
            'Tailwind CSS',
            'TypeScript',
            'React',
            'React Router',
            'Git',
            'GitHub Actions'
        ],
        screenshots: [],
    }
];