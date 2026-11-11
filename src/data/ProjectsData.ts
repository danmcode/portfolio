import type { Project } from "../types";

const PRIVATE = 'Proyecto empresarial — código privado';
const CONFIDENTIAL = 'Proyecto empresarial — confidencial';

/**
 * Proyectos en orden de prioridad. El primero se muestra como destacado.
 * Regla: solo datos reales. Si falta un dato, se deja un TODO y la tarjeta omite esa sección.
 */
export const projectsData: Project[] = [
    {
        id: 'secuara',
        title: 'Secuara',
        context: 'Fundador y desarrollador backend · 2026 – actual',
        summary: 'SaaS multi-tenant de control de accesos: visitas, novedades, reservas y notificaciones.',
        solution: [
            'Un módulo por dominio en NestJS, con migraciones automáticas e interceptor global de auditoría.',
            'Aislamiento de datos por cliente y permisos por ruta (RBAC).',
        ],
        stack: ['nestjs', 'typescript', 'typeorm', 'postgresql', 'aws', 'docker', 'traefik', 'nextjs', 'react', 'tanstackQuery', 'tailwind', 'jest', 'vitest'],
        result: 'En producción en secuara.com.co, con una infraestructura en AWS de ~22 USD al mes.',
        link: { href: 'https://secuara.com.co', label: 'secuara.com.co' },
        details: [
            {
                title: 'Backend',
                items: [
                    'NestJS 11, TypeScript, TypeORM y PostgreSQL 15.',
                    'ltree para la jerarquía de unidades y unaccent para las búsquedas.',
                    'Un módulo por dominio y migraciones automáticas al desplegar.',
                    'Cola de envío de correos procesada en segundo plano y reportes en Excel.',
                ],
            },
            {
                title: 'Seguridad',
                items: [
                    'JWT y permisos por ruta (RBAC).',
                    'Aislamiento de datos por cliente e interceptor global de auditoría.',
                    'Los archivos se sirven solo a través de la API, después de validar permisos.',
                ],
            },
            {
                title: 'AWS',
                items: [
                    'EC2 y S3 privado, con versionado y cifrado, para fotos y respaldos.',
                    'Rol IAM: sin llaves de acceso en el servidor.',
                    'Respaldos diarios automatizados a S3.',
                    'Costo de ~22 USD al mes.',
                ],
            },
            {
                title: 'Infraestructura',
                items: [
                    'Docker multi-stage y Docker Compose.',
                    'Traefik con HTTPS (Let\'s Encrypt).',
                    'Almacenamiento abstraído: disco local en desarrollo y S3 en producción.',
                ],
            },
            {
                title: 'Frontend y pruebas',
                items: [
                    'Next.js 16, React 19, TanStack Query y Tailwind CSS 4.',
                    'Pruebas con Jest (API) y Vitest (frontend).',
                ],
            },
        ],
        nextSteps: [
            'Sacar la cola de correos a un worker o a SQS, con idempotencia.',
            'Migrar la base de datos a RDS.',
            'Agregar monitoreo con CloudWatch.',
            'Agregar CI/CD con GitHub Actions.',
        ],
    },
    {
        id: 'infraestructura-vial',
        title: 'Sistema de gestión de infraestructura vial',
        context: 'Gestión y Servicios Corporativos · Empresa actual',
        badge: PRIVATE,
        summary: 'Plataforma que digitaliza el proceso completo, desde la operación hasta el control financiero.',
        problem: 'El proceso se gestionaba con un flujo 100% manual.',
        solution: [
            'Plataforma que cubre de punta a punta la operación y el control financiero.',
            'Con el equipo, integraciones para enviar contrataciones y terminaciones de contrato de forma masiva.',
            'Arquitectura similar a la de Secuara.',
        ],
        stack: ['nestjs', 'typescript', 'postgresql', 'nextjs', 'docker'],
        // TODO: agregar resultado con cifras (tiempos, volumen procesado, usuarios).
    },
    {
        id: 'comisiones',
        title: 'Sistema de comisiones automatizado',
        context: 'Protécnica Ingeniería',
        badge: PRIVATE,
        summary: 'Backend que calcula las comisiones a partir de los datos del ERP corporativo.',
        problem: 'El cálculo de comisiones tomaba 1 día.',
        solution: [
            'Backend en Node.js y TypeScript integrado con el ERP corporativo.',
            'Despliegue con Docker.',
        ],
        stack: ['nodejs', 'typescript', 'docker'],
        result: 'El procesamiento pasó de 1 día a ~5 minutos.',
    },
    {
        id: 'control-accesos-qr',
        title: 'Control de accesos con QR',
        context: 'Protécnica Ingeniería',
        badge: PRIVATE,
        summary: 'API REST con app web y móvil para registrar ingresos por código QR.',
        // TODO: agregar el problema que resolvía.
        solution: [
            'API REST que registra los ingresos por QR.',
            'App web y app móvil conectadas a la API.',
            'Reportes operativos automáticos.',
        ],
        // TODO: confirmar stack (lenguaje y framework de la API, tecnología de las apps).
        stack: ['rest'],
        // TODO: agregar resultado con cifras.
    },
    {
        id: 'intranet',
        title: 'Intranet corporativa',
        context: 'Protécnica Ingeniería',
        badge: PRIVATE,
        summary: 'Aplicación full stack que centraliza vacaciones, permisos y pedidos.',
        // TODO: agregar el problema que resolvía.
        solution: [
            'Backend en Node.js y frontend en React.',
            'Un solo lugar para solicitudes de vacaciones, permisos y pedidos.',
        ],
        stack: ['nodejs', 'react'],
        // TODO: agregar resultado con cifras.
    },
    {
        id: 'app-flutter',
        title: 'App móvil corporativa en Flutter',
        context: 'Seguridad Omega',
        badge: CONFIDENTIAL,
        summary: 'App publicada en las tiendas de aplicaciones.',
        // TODO: agregar el problema que resolvía y qué hace la app (sin revelar el nombre).
        solution: [
            'App móvil en Flutter publicada en las tiendas de aplicaciones.',
        ],
        stack: ['flutter'],
        // TODO: agregar resultado con cifras.
    },
];
