export interface Project {
    id: string;
    titleKey: string;
    descKey: string;
    category: 'ai' | 'fullstack' | 'systems';
    categoryKey: string;
    tags: string[];
    accent: 'blue' | 'pink' | 'mixed';
    emoji: string;
    live: string;
    repo: string;
    featured: boolean;
    metric?: string;
}

export const projects: Project[] = [
    {
        id: 'learner-support-system',
        titleKey: 'projects.learner.title',
        descKey: 'projects.learner.desc',
        category: 'ai',
        categoryKey: 'projects.cat.ai',
        tags: ['Next.js', 'Neo4j', 'GraphRAG', 'LLM', 'PostgreSQL'],
        accent: 'blue',
        emoji: '🧠',
        live: '#',
        repo: 'https://github.com/ToneDevN/learner-support-system',
        featured: true,
        metric: 'GraphRAG + Knowledge Graph',
    },
    {
        id: 'kv-store',
        titleKey: 'projects.kvstore.title',
        descKey: 'projects.kvstore.desc',
        category: 'systems',
        categoryKey: 'projects.cat.systems',
        tags: ['Rust', 'LSM-Tree', 'Performance', 'MIT 6.172'],
        accent: 'pink',
        emoji: '⚡',
        live: '#',
        repo: 'https://github.com/ToneDevN/high-performance-key-value-storage',
        featured: true,
        metric: 'MIT 6.172 Profile-Driven',
    },
    {
        id: 'business-operations-platform',
        titleKey: 'projects.business.title',
        descKey: 'projects.business.desc',
        category: 'fullstack',
        categoryKey: 'projects.cat.fullstack',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
        accent: 'blue',
        emoji: '📦',
        live: '#',
        repo: 'https://github.com/ToneDevN/business-operations-platform',
        featured: true,
        metric: 'SME Analytics & RBAC',
    },
    {
        id: 'martify-pos',
        titleKey: 'projects.martify.title',
        descKey: 'projects.martify.desc',
        category: 'fullstack',
        categoryKey: 'projects.cat.fullstack',
        tags: ['Laravel', 'PHP', 'PostgreSQL', 'Docker', 'Jenkins'],
        accent: 'mixed',
        emoji: '💳',
        live: '#',
        repo: 'https://github.com/ToneDevN/tonedev_shop',
        featured: false,
        metric: 'Production Retail POS',
    },
    {
        id: 'columnar-reader',
        titleKey: 'projects.columnar.title',
        descKey: 'projects.columnar.desc',
        category: 'systems',
        categoryKey: 'projects.cat.systems',
        tags: ['Rust', 'SIMD', 'Parquet', 'mmap'],
        accent: 'pink',
        emoji: '📊',
        live: '#',
        repo: 'https://github.com/ToneDevN/fast-columnar-file-reader',
        featured: false,
        metric: 'SIMD Accelerated',
    },
];

