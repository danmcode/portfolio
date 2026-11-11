import type { EducationEntry, Language, SkillGroup } from '../types';

export const profile = {
    name: 'Daniel Alexander Muelas Rivera',
    role: 'Backend Engineer',
    headline: 'Backend Engineer | Node.js · TypeScript · NestJS · PostgreSQL · AWS | APIs, automatización e integraciones',
    location: 'Valle del Cauca, Colombia',
    availability: 'Disponible para trabajo remoto',
    about: [
        'Desarrollador backend con más de 3 años construyendo APIs REST y sistemas empresariales con Node.js y TypeScript.',
        'Integré un backend con un ERP corporativo y reduje el cálculo de comisiones de 1 día a ~5 minutos.',
        'Hoy lidero el desarrollo de un sistema que digitaliza de punta a punta la gestión de infraestructura vial, y construyo Secuara, un SaaS multi-tenant de control de accesos en producción.',
    ],
    contact: {
        email: 'danmcode@gmail.com',
        linkedin: 'https://www.linkedin.com/in/danmcode',
        github: 'https://github.com/danmcode',
    },
};

export const education: EducationEntry[] = [
    {
        title: 'Ingeniero Informático',
        institution: 'Universidad Autónoma de Occidente',
        period: '2017 – 2023',
    },
    {
        title: 'Tecnólogo en Gestión de Redes de Datos',
        institution: 'SENA',
        period: '2015 – 2017',
    },
    {
        title: 'Campeón SENASOFT Quindío 2016',
        institution: 'SENA',
        note: 'Competencia nacional de software del SENA',
    },
];

export const skillGroups: SkillGroup[] = [
    { title: 'Backend', skills: ['nodejs', 'typescript', 'nestjs', 'express', 'typeorm', 'rest', 'fastapi', 'php'] },
    { title: 'Datos', skills: ['postgresql', 'schemaDesign', 'migrations'] },
    { title: 'Cloud y DevOps', skills: ['aws', 'docker', 'dockerCompose', 'traefik', 'linux', 'git'] },
    { title: 'Seguridad', skills: ['jwt', 'rbac', 'multitenant', 'audit'] },
    { title: 'Calidad', skills: ['jest', 'vitest', 'pytest', 'prodDebugging'] },
    { title: 'Integraciones', skills: ['erp', 'whatsapp', 'bulkProcesses', 'legacyMigration'] },
    { title: 'Frontend y móvil', skills: ['nextjs', 'react', 'tanstackQuery', 'tailwind', 'flutter'] },
    { title: 'IA', skills: ['claude'] },
];

export const aiUsageNote = 'Uso diario de asistentes de IA (Claude) para generar y refactorizar código, crear pruebas y documentar APIs.';

export const certifications: string[] = [
    'Backend con NestJS',
    'Backend con Express.js',
    'Fundamentos de Node.js',
    'TypeScript',
    'Flutter para iOS y Android',
];

export const languages: Language[] = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Lectura de documentación técnica (A2, EF SET)' },
];
