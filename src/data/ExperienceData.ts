import type { ExperienceEntry } from "../types";

export const experienceData: ExperienceEntry[] = [
    {
        id: 'gsc-director',
        title: 'Director de Tecnología',
        company: 'Gestión y Servicios Corporativos EST S.A.S.',
        location: 'Cali, Colombia',
        duration: 'jun 2026 – actual',
        highlights: [
            'Lidero un equipo de 4 personas (desarrollo, datos, soporte e infraestructura) y defino las decisiones técnicas del área.',
            'Lidero el desarrollo del sistema de gestión de infraestructura vial, que reemplaza un flujo 100% manual (NestJS, TypeScript, PostgreSQL, Next.js y Docker).',
            'Con el equipo, construí integraciones para enviar contrataciones y terminaciones de contrato de forma masiva.',
            'Integré la API oficial de WhatsApp Business con Chatwoot para centralizar la atención de Gestión Humana.',
            'Despliego y mantengo servicios en Docker sobre Linux: intranet corporativa y mesa de ayuda GLPI 11.',
            'Automaticé el informe mensual de impresión con una web app en Google Apps Script y tableros en Power BI.',
        ],
    },
    {
        id: 'protecnica-dev',
        title: 'Desarrollador de Software / Coordinador de TI',
        company: 'Protécnica Ingeniería',
        location: 'Yumbo, Colombia',
        duration: 'ene 2024 – mar 2026',
        highlights: [
            'Sistema de comisiones en Node.js y TypeScript integrado con el ERP: de 1 día a ~5 minutos.',
            'API REST de control de accesos con QR, con app web y móvil y reportes automáticos.',
            'Intranet en Node.js y React para vacaciones, permisos y pedidos.',
            'Mantuve y evolucioné sistemas legacy en PHP que soportan áreas críticas de producción.',
        ],
    },
    {
        id: 'konecta',
        title: 'Analista de Desarrollo',
        company: 'Konecta',
        location: 'Colombia',
        duration: 'jul – dic 2023',
        highlights: [
            'CRM corporativo en PHP (Yii2) con PostgreSQL y Docker.',
            'Landing para gestión de PQRs con Laravel y Tailwind.',
            'Soporte de nivel 3: incidencias en producción, debugging y análisis de causa.',
        ],
    },
    {
        id: 'protecnica-ti',
        title: 'Coordinador de TI',
        company: 'Protécnica Ingeniería',
        location: 'Yumbo, Colombia',
        duration: 'ene – jun 2023',
        highlights: [
            'Administré infraestructura Linux (virtualización KVM, correo Postfix/Dovecot) y sistemas internos.',
        ],
    },
    {
        id: 'seguridad-omega',
        title: 'Asistente Técnico',
        company: 'Seguridad Omega',
        location: 'Cali, Colombia',
        duration: 'feb 2020 – ene 2023',
        highlights: [
            'App móvil corporativa en Flutter publicada en las tiendas de aplicaciones.',
            'MVPs de control de accesos con reconocimiento facial y huellero digital (Arduino).',
            'Automaticé procesos internos (cartas laborales, gestión de empleados) e implementé la mesa de ayuda GLPI.',
        ],
    },
];
