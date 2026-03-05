export interface Project {
    id: string;
    titleKey: string;
    descKey: string;
    tags: string[];
    accent: 'blue' | 'pink' | 'mixed';
    emoji: string;
    live: string;
    repo: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'nexui-dashboard',
        titleKey: 'projects.nexui.title',
        descKey: 'projects.nexui.desc',
        tags: ['React', 'TypeScript', 'D3.js', 'TailwindCSS'],
        accent: 'blue',
        emoji: '📊',
        live: '#',
        repo: '#',
        featured: true,
    },
    {
        id: 'astroshop',
        titleKey: 'projects.astroshop.title',
        descKey: 'projects.astroshop.desc',
        tags: ['Astro', 'Node.js', 'PostgreSQL', 'Stripe'],
        accent: 'pink',
        emoji: '🛍️',
        live: '#',
        repo: '#',
        featured: false,
    },
    {
        id: 'devsync-api',
        titleKey: 'projects.devsync.title',
        descKey: 'projects.devsync.desc',
        tags: ['Fastify', 'GraphQL', 'Docker', 'Redis'],
        accent: 'mixed',
        emoji: '⚡',
        live: '#',
        repo: '#',
        featured: false,
    },
    {
        id: 'portfolio-ai',
        titleKey: 'projects.portfolioai.title',
        descKey: 'projects.portfolioai.desc',
        tags: ['Next.js', 'OpenAI', 'Vercel', 'Prisma'],
        accent: 'blue',
        emoji: '🤖',
        live: '#',
        repo: '#',
        featured: false,
    },
    {
        id: 'tonechat',
        titleKey: 'projects.tonechat.title',
        descKey: 'projects.tonechat.desc',
        tags: ['Vue.js', 'Socket.io', 'WebRTC', 'MongoDB'],
        accent: 'pink',
        emoji: '💬',
        live: '#',
        repo: '#',
        featured: false,
    },
    {
        id: 'cloudnotes',
        titleKey: 'projects.cloudnotes.title',
        descKey: 'projects.cloudnotes.desc',
        tags: ['React', 'IndexedDB', 'Yjs', 'Supabase'],
        accent: 'mixed',
        emoji: '📝',
        live: '#',
        repo: '#',
        featured: false,
    },
];
