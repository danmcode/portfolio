import type { IconType } from 'react-icons';
import {
    SiAmazonwebservices,
    SiClaude,
    SiDocker,
    SiExpress,
    SiFastapi,
    SiFlutter,
    SiGit,
    SiJest,
    SiJsonwebtokens,
    SiLinux,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPytest,
    SiReact,
    SiReactquery,
    SiTailwindcss,
    SiTraefikproxy,
    SiTypeorm,
    SiTypescript,
    SiVitest,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { LuBuilding2, LuClipboardList, LuShieldCheck } from 'react-icons/lu';

export interface TechInfo {
    label: string;
    icon: IconType;
    /** Color del icono. Algunos colores de marca se aclararon para mantener contraste sobre fondo oscuro. */
    color: string;
}

/**
 * Catálogo único de tecnologías. Los proyectos y las habilidades referencian estas claves,
 * así el nombre y el icono de cada tecnología se definen en un solo lugar.
 */
export const tech = {
    nodejs: { label: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    typescript: { label: 'TypeScript', icon: SiTypescript, color: '#4A90E2' },
    nestjs: { label: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    express: { label: 'Express', icon: SiExpress, color: '#E5E7EB' },
    typeorm: { label: 'TypeORM', icon: SiTypeorm, color: '#FE5A3C' },
    rest: { label: 'APIs REST', icon: TbApi, color: '#E5E7EB' },
    fastapi: { label: 'FastAPI', icon: SiFastapi, color: '#14B8A6' },
    php: { label: 'PHP (Laravel, Yii2)', icon: SiPhp, color: '#9B9FD6' },
    postgresql: { label: 'PostgreSQL', icon: SiPostgresql, color: '#6B8FF0' },
    aws: { label: 'AWS (EC2, S3, IAM)', icon: SiAmazonwebservices, color: '#FF9900' },
    docker: { label: 'Docker', icon: SiDocker, color: '#2496ED' },
    dockerCompose: { label: 'Docker Compose', icon: SiDocker, color: '#2496ED' },
    traefik: { label: 'Traefik', icon: SiTraefikproxy, color: '#24A1C1' },
    linux: { label: 'Linux', icon: SiLinux, color: '#FCC624' },
    git: { label: 'Git / GitHub', icon: SiGit, color: '#F05032' },
    jwt: { label: 'JWT', icon: SiJsonwebtokens, color: '#E5E7EB' },
    rbac: { label: 'RBAC', icon: LuShieldCheck, color: '#E5E7EB' },
    multitenant: { label: 'Multi-tenant', icon: LuBuilding2, color: '#E5E7EB' },
    audit: { label: 'Auditoría', icon: LuClipboardList, color: '#E5E7EB' },
    jest: { label: 'Jest', icon: SiJest, color: '#E9435A' },
    vitest: { label: 'Vitest', icon: SiVitest, color: '#8BC34A' },
    pytest: { label: 'Pytest', icon: SiPytest, color: '#2BB3EE' },
    nextjs: { label: 'Next.js', icon: SiNextdotjs, color: '#E5E7EB' },
    react: { label: 'React', icon: SiReact, color: '#61DAFB' },
    tanstackQuery: { label: 'TanStack Query', icon: SiReactquery, color: '#FF4154' },
    tailwind: { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    flutter: { label: 'Flutter', icon: SiFlutter, color: '#42A5F5' },
    claude: { label: 'Asistentes de IA (Claude)', icon: SiClaude, color: '#D97757' },
} satisfies Record<string, TechInfo>;

export type TechId = keyof typeof tech;
