export interface SkillItem {
    name: string;
    slug: string | null;
    level: number; // 0–100
    since: string;
    /** Key for i18n desc lookup */
    descKey: string;
    /** Keys for i18n tags lookup */
    tagKeys: string[];
}

export interface SkillGroup {
    category: string;
    /** Key for i18n category label */
    categoryKey: string;
    icon: string;
    accent: 'blue' | 'pink' | 'mixed';
    skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
    {
        category: 'Frontend',
        categoryKey: 'skills.tab.frontend',
        icon: '◈',
        accent: 'blue',
        skills: [
            { name: 'React', slug: 'react', level: 90, since: '2022', descKey: 'skills.react.desc', tagKeys: ['Hooks', 'Context API', 'React Query', 'Suspense'] },
            { name: 'Next.js', slug: 'nextdotjs', level: 85, since: '2022', descKey: 'skills.nextjs.desc', tagKeys: ['App Router', 'SSR / SSG', 'API Routes', 'Edge'] },
            { name: 'Astro', slug: 'astro', level: 80, since: '2023', descKey: 'skills.astro.desc', tagKeys: ['Islands', 'MDX', 'View Transitions', 'Collections'] },
            { name: 'Vue.js', slug: 'vuedotjs', level: 70, since: '2023', descKey: 'skills.vuejs.desc', tagKeys: ['Composition API', 'Pinia', 'Vue Router', 'Vite'] },
            { name: 'TypeScript', slug: 'typescript', level: 88, since: '2022', descKey: 'skills.typescript.desc', tagKeys: ['Generics', 'Utility Types', 'Zod', 'tRPC'] },
            { name: 'TailwindCSS', slug: 'tailwindcss', level: 92, since: '2022', descKey: 'skills.tailwind.desc', tagKeys: ['Design Tokens', 'Plugins', 'JIT', 'Animations'] },
            { name: 'Framer Motion', slug: 'framer', level: 72, since: '2023', descKey: 'skills.framer.desc', tagKeys: ['Variants', 'Gestures', 'Layout', 'Spring'] },
            { name: 'HTML / CSS', slug: 'html5', level: 95, since: '2021', descKey: 'skills.htmlcss.desc', tagKeys: ['Grid', 'Flexbox', 'CSS Variables', 'Accessibility'] },
        ],
    },
    {
        category: 'Backend',
        categoryKey: 'skills.tab.backend',
        icon: '◉',
        accent: 'pink',
        skills: [
            { name: 'Node.js', slug: 'nodedotjs', level: 85, since: '2022', descKey: 'skills.nodejs.desc', tagKeys: ['Event Loop', 'Streams', 'Clusters', 'npm'] },
            { name: 'Express', slug: 'express', level: 82, since: '2022', descKey: 'skills.express.desc', tagKeys: ['REST', 'Middleware', 'JWT', 'Rate Limiting'] },
            { name: 'Fastify', slug: 'fastify', level: 70, since: '2023', descKey: 'skills.fastify.desc', tagKeys: ['Plugins', 'Schema Validation', 'Hooks', 'DI'] },
            { name: 'Python', slug: 'python', level: 75, since: '2022', descKey: 'skills.python.desc', tagKeys: ['FastAPI', 'Pandas', 'Automation', 'Poetry'] },
            { name: 'REST APIs', slug: null, level: 90, since: '2022', descKey: 'skills.rest.desc', tagKeys: ['OpenAPI', 'Swagger', 'Postman', 'Versioning'] },
            { name: 'GraphQL', slug: 'graphql', level: 68, since: '2023', descKey: 'skills.graphql.desc', tagKeys: ['Apollo', 'Resolvers', 'Schema', 'Subscriptions'] },
            { name: 'PostgreSQL', slug: 'postgresql', level: 78, since: '2022', descKey: 'skills.postgresql.desc', tagKeys: ['Prisma', 'Migrations', 'Indexing', 'Transactions'] },
            { name: 'MongoDB', slug: 'mongodb', level: 72, since: '2022', descKey: 'skills.mongodb.desc', tagKeys: ['Mongoose', 'Aggregations', 'Atlas', 'Indexes'] },
        ],
    },
    {
        category: 'Tools & DevOps',
        categoryKey: 'skills.tab.devops',
        icon: '◆',
        accent: 'mixed',
        skills: [
            { name: 'Git / GitHub', slug: 'github', level: 90, since: '2021', descKey: 'skills.github.desc', tagKeys: ['GitFlow', 'PR Reviews', 'Actions', 'Hooks'] },
            { name: 'Docker', slug: 'docker', level: 78, since: '2023', descKey: 'skills.docker.desc', tagKeys: ['Dockerfile', 'Compose', 'Registry', 'Volumes'] },
            { name: 'CI/CD', slug: null, level: 72, since: '2023', descKey: 'skills.cicd.desc', tagKeys: ['GitHub Actions', 'Caching', 'Secrets', 'Matrix'] },
            { name: 'Linux', slug: 'linux', level: 80, since: '2022', descKey: 'skills.linux.desc', tagKeys: ['Bash', 'systemd', 'cron', 'SSH'] },
            { name: 'Figma', slug: 'figma', level: 75, since: '2022', descKey: 'skills.figma.desc', tagKeys: ['Components', 'Prototyping', 'Auto-layout', 'Dev Mode'] },
            { name: 'Vercel', slug: 'vercel', level: 88, since: '2022', descKey: 'skills.vercel.desc', tagKeys: ['Edge Functions', 'Analytics', 'Preview', 'KV'] },
            { name: 'AWS', slug: 'amazonaws', level: 65, since: '2023', descKey: 'skills.aws.desc', tagKeys: ['EC2', 'S3', 'Lambda', 'CloudFront'] },
            { name: 'Bun', slug: 'bun', level: 70, since: '2023', descKey: 'skills.bun.desc', tagKeys: ['Runtime', 'Bundler', 'Test Runner', 'SQLite'] },
        ],
    },
];

export const skillStats = [
    { value: '3+', labelKey: 'skills.stat.years' },
    { value: '20+', labelKey: 'skills.stat.projects' },
    { value: '15+', labelKey: 'skills.stat.tech' },
    { value: '∞', labelKey: 'skills.stat.learning' },
];
