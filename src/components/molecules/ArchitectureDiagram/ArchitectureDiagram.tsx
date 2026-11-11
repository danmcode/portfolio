interface NodeProps {
    x: number;
    y: number;
    w?: number;
    title: string;
    subtitle: string;
    accent: string;
}

const NODE_H = 54;

const Node = ({ x, y, w = 140, title, subtitle, accent }: NodeProps) => (
    <g>
        <rect x={x} y={y} width={w} height={NODE_H} rx={8} fill="#111827" stroke={accent} strokeWidth={1.5} />
        <text x={x + w / 2} y={y + 23} textAnchor="middle" fill="#F9FAFB" fontSize={15} fontWeight={600}>{title}</text>
        <text x={x + w / 2} y={y + 42} textAnchor="middle" fill="#9CA3AF" fontSize={12}>{subtitle}</text>
    </g>
);

/**
 * ArchitectureDiagram Component (Molecule)
 *
 * Diagrama de la arquitectura de Secuara en SVG inline (sin imágenes externas).
 * Tiene role="img" con título y descripción para lectores de pantalla.
 * En pantallas angostas el contenedor permite scroll horizontal interno para que el texto siga legible.
 */
export const ArchitectureDiagram = () => (
    <figure className="m-0">
        <div className="overflow-x-auto custom-scrollbar rounded-lg bg-gray-900/60 p-3">
            <svg
                viewBox="0 0 520 440"
                role="img"
                aria-labelledby="arch-title arch-desc"
                className="w-full min-w-[460px] sm:min-w-0 h-auto font-inter"
            >
                <title id="arch-title">Arquitectura de Secuara</title>
                <desc id="arch-desc">
                    Los usuarios llegan por HTTPS a Traefik. Traefik enruta el tráfico al frontend en Next.js y a la API en NestJS.
                    La API se conecta a PostgreSQL y a un bucket privado de Amazon S3. Traefik, Next.js, la API y PostgreSQL corren con Docker Compose en una instancia EC2.
                </desc>

                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF" />
                    </marker>
                </defs>

                {/* Límite EC2 */}
                <rect x={10} y={84} width={350} height={346} rx={12} fill="none" stroke="#FF9900" strokeDasharray="6 5" strokeWidth={1.5} />
                <text x={24} y={106} fill="#FFB547" fontSize={12} fontWeight={600}>AWS EC2 · Docker Compose</text>

                {/* Usuarios */}
                <Node x={115} y={10} title="Usuarios" subtitle="navegador · HTTPS" accent="#6B7280" />

                <Node x={105} y={124} w={160} title="Traefik" subtitle="HTTPS · Let's Encrypt" accent="#24A1C1" />
                <Node x={25} y={238} title="Next.js 16" subtitle="frontend" accent="#E5E7EB" />
                <Node x={205} y={238} title="API NestJS" subtitle="JWT · RBAC · auditoría" accent="#E0234E" />
                <Node x={205} y={360} title="PostgreSQL 15" subtitle="ltree · unaccent" accent="#6B8FF0" />
                <Node x={385} y={238} w={125} title="Amazon S3" subtitle="privado · cifrado" accent="#569A31" />

                <g stroke="#9CA3AF" strokeWidth={1.5} fill="none" markerEnd="url(#arrow)">
                    <line x1={185} y1={64} x2={185} y2={122} />
                    <line x1={150} y1={178} x2={100} y2={236} />
                    <line x1={220} y1={178} x2={270} y2={236} />
                    <line x1={275} y1={292} x2={275} y2={358} />
                    <line x1={345} y1={265} x2={383} y2={265} />
                </g>
                <text x={447} y={228} fill="#9CA3AF" fontSize={11} textAnchor="middle">archivos</text>
            </svg>
        </div>
        <p aria-hidden="true" className="sm:hidden mt-1 text-xs text-gray-400 text-center">← desliza para ver el diagrama completo →</p>
        <figcaption className="mt-2 text-xs text-gray-400">
            Traefik enruta a Next.js y a la API. La API usa PostgreSQL y sirve los archivos de S3 solo después de validar permisos.
        </figcaption>
    </figure>
);
