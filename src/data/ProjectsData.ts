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
        description: 'Cómo primer proyecto hemos realizado una página para mostrar nuestro portafolio.',
        githubLink: 'https://github.com/daveinthahood/justeat-clone',
        fullDescription: `Para uno de mis proyectos personales, desarrollé un portafolio web moderno y responsive 
        donde presento mi experiencia, habilidades y proyectos. 
        Este sitio fue construido desde cero con buenas prácticas como:

            - Estructura modular de carpetas,
            - Componentes reutilizables con Atomic Design,
            - Estilos con Tailwind CSS optimizados,
            - Accesibilidad (a11y) básica para navegación con teclado y screen readers,
            - Tipado estricto usando TypeScript y control de rutas con React Router.
    `,
        technologies: ['HTML', 'CSS', 'TaildWind CSS', 'Typescript'],
        screenshots: [],
    }
];