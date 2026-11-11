import type { ExperienceEntry } from "../types";

export const experienceData: ExperienceEntry[] = [
    {
        id: 'gsc-director',
        title: 'Director de Tecnología',
        company: 'Gestión y Servicios Corporativos',
        duration: 'jun 2026 – actual',
        highlights: [
            'Lidero el desarrollo del sistema de gestión de infraestructura vial, que reemplaza un flujo 100% manual.',
        ],
    },
    {
        id: 'protecnica-dev',
        title: 'Desarrollador de Software / Coordinador de TI',
        company: 'Protécnica Ingeniería',
        duration: 'ene 2024 – mar 2026',
        highlights: [
            'Sistema de comisiones en Node.js y TypeScript integrado con el ERP: de 1 día a ~5 minutos.',
            'API REST de control de accesos con QR, con app web y móvil y reportes automáticos.',
            'Intranet en Node.js y React para vacaciones, permisos y pedidos.',
        ],
    },
    {
        id: 'konecta',
        title: 'Analista de Desarrollo',
        company: 'Konecta',
        duration: 'jul – dic 2023',
        highlights: [
            'CRM en PHP Yii2, PostgreSQL y Docker.',
            'Landing de PQRs con Laravel.',
        ],
    },
    {
        id: 'protecnica-ti',
        title: 'Coordinador de TI',
        company: 'Protécnica Ingeniería',
        duration: 'ene – jun 2023',
        // TODO: agregar logros de este cargo (no hay datos en el prompt).
        highlights: [],
    },
    {
        id: 'seguridad-omega',
        title: 'Asistente Técnico',
        company: 'Seguridad Omega',
        duration: 'feb 2020 – ene 2023',
        highlights: [
            'App móvil corporativa en Flutter publicada en las tiendas de aplicaciones.',
        ],
    },
];
