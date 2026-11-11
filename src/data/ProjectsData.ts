import type { ProjectData } from "../types";

export const projectsData: ProjectData[] = [
    {
        id: 'danmcode-portfolio',
        title: 'Portafolio danmcode - [Proyecto Personal] - 2025',
        description: 'Desarrollé un sitio web moderno y responsivo para presentar mi portafolio profesional.',
        githubLink: 'https://github.com/danmcode/portfolio',
        fullDescription: `Este proyecto representa la primera versión de mi portafolio profesional, diseñado y desarrollado desde cero 
        con un enfoque en escalabilidad, mantenibilidad y experiencia de usuario.
        
🎯 El objetivo principal fue crear una plataforma clara y funcional para mostrar quién soy como desarrollador, 
mis habilidades técnicas, experiencia y proyectos destacados.

✅ Entre las características clave del desarrollo se incluyen:

- Arquitectura modular basada en el patrón Atomic Design,
- Componentes reutilizables para facilitar el mantenimiento y escalado,
- Estilos limpios y eficientes con Tailwind CSS,
- Buenas prácticas de accesibilidad (a11y) para usuarios con tecnologías de asistencia,
- Navegación fluida utilizando React Router,
- Código robusto y bien tipado con TypeScript,
- Integración continua con GitHub Actions (lint y build en cada push) y despliegue en GitHub Pages.

Este portafolio no solo muestra mi trabajo, sino también mi enfoque profesional 
al construir aplicaciones modernas con tecnologías actuales.`,
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
    },
    {
        id: 'pisa-access-control',
        title: 'Control de acceso – [Protécnica Ingeniería] - 2023',
        description: 'Modernicé y mejoré el sistema de control de accesos de Protécnica Ingeniería, automatizando procesos clave como el ingreso con QR y la validación de visitantes.',
        githubLink: '[Clasificado]',
        fullDescription:
            `Este fue el último sistema que desarrollé completamente en PHP y Laravel, 
            donde estuve a cargo de todo el ciclo de vida del producto: desde el levantamiento de requerimientos 
            hasta el despliegue en producción.  

🎯 El objetivo era claro: 
Automatizar el control de accesos, hacer la vida más fácil tanto para los colaboradores 
como para el personal de seguridad, y eliminar la dependencia de registros manuales 
(Aunque aún el programa tiene esa funcionalidad).  

✅ Principales funcionalidades:
- Registro y gestión de colaboradores.
- Ingreso y salida mediante escaneo de códigos QR.
- Registro y control de visitantes (incluyendo a quién visitan).
- Validación de afiliación activa a ARL para visitantes y contratistas.
- Exportación de reportes en Excel con filtros personalizados.

❗ Además de implementar nuevas funcionalidades, también mejoramos el rendimiento general del sistema:
- Refactorizamos el backend usando Eloquent y buenas prácticas de diseño.
- Optimizamos las relaciones entre tablas para mejorar los tiempos de consulta.
- Migramos el flujo de registro de ingresos a un sistema autogestionado vía QR.

Este proyecto le dio un nuevo aire a un sistema heredado que antes dependía 100% del registro manual 
por parte de los guardas de seguridad.`,
        technologies: [
            'PHP 8',
            'Laravel',
            'Blade',
            'Bootstrap',
            'JavaScript',
            'Livewire',
            'MySQL',
            'Apache',
            'Linux',
            'ApiRest'
        ],
        screenshots: []
    },
    {
        id: 'pisa-access-control-mobile',
        title: 'Control de acceso App Móvil – [Protécnica Ingeniería] - 2024',
        description: 'Desarrollé una app móvil en Flutter que permite registrar ingresos y salidas de colaboradores mediante escaneo de códigos QR.',
        githubLink: '[Clasificado]',
        fullDescription: `Como complemento al sistema web de control de accesos, desarrollé 
        desde cero la aplicación móvil y su respectiva API REST en Laravel. 
        El objetivo: permitir que los colaboradores puedan registrar su ingreso y salida escaneando un código QR 
        directamente desde un celular o tablet, 
        especialmente útil para quienes ingresan en vehículos y no pueden usar el lector físico de la portería.

📲 ¿Qué hace esta app?
Con ayuda de librerías externas, la app utiliza la cámara del dispositivo móvil 
para leer los QR generados por la plataforma, registrar automáticamente la entrada o salida 
y sincronizarlo con el backend.

🎯 Objetivo clave:
Evitar congestiones y mejorar la experiencia del ingreso vehicular,
 eliminando la necesidad de bajarse del vehículo o depender de un guarda.

✅ Principales funcionalidades:
- Registro de ingreso/salida mediante escaneo de QR.
- Integración en tiempo real con la plataforma central.
- Manejo de sesiones y respuestas optimizadas vía API REST.

💡 Además, este proyecto marcó el inicio de mi práctica consciente de buenas prácticas de arquitectura:
- Apliqué conceptos de Clean Code y los principios SOLID.
- Comencé a estructurar el código en capas bien definidas, facilitando mantenibilidad y escalabilidad.`,
        technologies: [
            'PHP 8',
            'Laravel',
            'Flutter',
            'Dart'
        ],
        screenshots: []
    },
    {
        id: 'pisa-commision-calculations',
        title: 'Cálculo de comisiones – [Protécnica Ingeniería] – 2024-2025',
        description: 'Automatización del cálculo de comisiones de vendedores conectando el ERP a una app Node.js + React con reportes en Excel.',
        githubLink: '[Clasificado]',
        fullDescription: `
        Desarrollé una solución desde cero que automatiza el proceso de cálculo de comisiones 
        para los equipos de ventas nacionales e internacionales, extrayendo y procesando 
        la data directamente desde el ERP corporativo.

🧠 ¿Cómo lo hice?
Construí un backend en Node.js + TypeScript que se conecta en modo lectura a la base de datos SQL Server del ERP.
 Apliqué un proceso tipo ETL (Extracción, Transformación y Carga) para analizar 
 movimientos de ventas, inventario y recaudos, y generar cálculos precisos y personalizados para cada vendedor.

Inicialmente, el resultado se pensaba mostrar en Power BI, pero debido a requisitos específicos de formato y velocidad,
construimos una app en React + MUI donde el equipo puede generar y descargar los reportes de Excel con un solo clic.

🎯 Objetivo:
Reducir de forma drástica el tiempo y el esfuerzo necesarios para calcular comisiones. 
Pasamos de 5 horas manuales en Excel... ¡a solo 3 a 5 minutos!

✅ Principales funcionalidades:
- Cálculo automático de comisiones según múltiples condiciones como:
  - Ciudad de venta
  - Valor de fletes
  - Tipo de producto y lista de precios
  - Porcentaje asignado
  - Tiempo de recaudo
  - (…y muchas, muchas condiciones más… esto parecía más un sudoku empresarial 😂)
- Descarga directa de reportes en Excel con el formato requerido por contabilidad.
- Interfaz web ligera y práctica, hecha con React y MUI.
- Backend desacoplado con arquitectura modular y enfoque en rendimiento.

💡 Extras técnicos:
- Arquitectura DDD (Domain-Driven Design).
- Aplicación de principios SOLID y Clean Code.
- Contenerización con Docker para facilitar despliegues en producción.`,
        technologies: [
            'NodeJS',
            'Docker',
            'React',
            'TypeScript',
            'MUI'
        ],
        screenshots: []
    },
    {
        id: 'pisa-intranet',
        title: 'Intranet – [Protécnica Ingeniería] - 2025',
        description: 'Rediseñé completamente la intranet de la compañía, migrándola desde tecnologías obsoletas hacia una solución moderna con React, Node.js y Docker.',
        githubLink: '[Clasificado]',
        fullDescription: `Desarrollé desde cero la nueva intranet corporativa de Protécnica Ingeniería, 
        reemplazando una versión antigua construida con PHP 5, jQuery y CentOS 5, 
        que era frágil, difícil de mantener y peligrosa ante cualquier cambio.

La nueva versión fue desarrollada con un stack moderno: React + MUI en el frontend y 
Node.js + Express + TypeScript en el backend, empaquetada con Docker para facilitar su despliegue. 
Participé en todas las fases del proyecto: levantamiento de requerimientos, desarrollo, pruebas, 
puesta en producción y colaboración con el área de marketing para su lanzamiento interno.

🎯 Objetivo:
Actualizar y robustecer la intranet como punto central de acceso a los sistemas internos, 
mejorando la experiencia de los usuarios y facilitando la administración de procesos internos.

✅ Principales funcionalidades:
- Portal centralizado: Enlace hacia todos los sistemas internos de la compañía.
- Directorio de colaboradores: Visualización por área, extensión y contacto.
- Módulo de almuerzos: Solicitud de alimentos con cálculo automático del descuento entre empresa y colaborador,
    generación de reportes planos para nómina.
- Solicitud de permisos laborales: Flujo de aprobación automatizado.
- Reserva de salas: Calendario con disponibilidad y confirmación vía correo.
- Configuraciones personalizadas: Que antes requerían edición manual en el código.
- Blog corporativo: Para publicar anuncios y novedades de la empresa.

💡 Extras técnicos:
- Aplicación de principios SOLID y patrones de diseño para facilitar la escalabilidad.
- Uso de Docker para despliegue y versionado eficiente.
- Modularización del código por dominios, facilitando el mantenimiento.
- Integración con sistemas existentes (nómina, reservas, etc.).

❤️ Es un proyecto al que le he tomado mucho cariño. A la fecha de hoy (30 de julio de 2025), 
estamos trabajando con el área de marketing para preparar la campaña de expectativa y su lanzamiento oficial.`,
        technologies: [
            'React',
            'MUI',
            'Node.js',
            'Express',
            'TypeScript',
            'Docker',
            'Zod',
            'Sequelize',
            'MySql'
        ],
        screenshots: []
    },
    {
        id: 'danmcode-finance',
        title: 'Finanzas Personales – [Proyecto Personal] - 2025',
        description: 'Aplicativo Web y Móvil para gestionar finanzas personales de forma rápida, visual y personalizada.',
        githubLink: 'https://github.com/danmcode/danmcode-finance',
        fullDescription: `
Como intento ser juicioso con mis finanzas, empecé usando una plantilla de Excel 
que poco a poco fui adaptando con fórmulas, cálculos y hojas dinámicas. 
Pero seamos honestos... el Excel ya no daba para más 😅

Así nació este proyecto personal: convertir esa lógica en una app web moderna y eficiente, 
que me permita planificar, registrar y visualizar mis finanzas desde cualquier dispositivo.

🎯 ¿Objetivo?
Crear una solución real para mis finanzas personales, mientras practico y mejoro mis habilidades como desarrollador 
Full Stack.

🛠️ Tecnologías:
TypeScript, Node.js, Express, PostgreSQL, React y Tailwind CSS (sí, esta vez dejé MUI para meterle amor a Tailwind).

✅ Funcionalidades principales:
- Módulo de planeación mensual y seguimiento real.
- Registro y categorización de ingresos, egresos y ahorros.
- Dashboard visual con gráficos personalizados y comparativos.
- Sistema de configuración flexible para metas, categorías y fechas.
- ¡Todo conectado a una base de datos real!

🚀 Plus: Este proyecto marca el inicio de mi camino serio con **TDD**. 
A partir de ahora, *los tests serán mi religión* 🙏.

`,
        technologies: [
            'React',
            'Tailwind CSS',
            'Express',
            'Node.js',
            'TypeScript',
            'PostgreSQL',
        ],
        screenshots: []
    }


];