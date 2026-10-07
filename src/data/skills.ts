export interface SkillItem {
    name: string;
    slug: string | null;
    level: number; // 0–100
    since: string;
    /** Key for i18n desc lookup */
    descKey: string;
    /** Keys for i18n tags lookup */
    tagKeys: string[];
    /** Categories: which pillars this skill belongs to */
    categories: ('fullstack' | 'systems' | 'ai')[];
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
        category: 'Full-Stack / Backend',
        categoryKey: 'skills.tab.fullstack',
        icon: '◈',
        accent: 'blue',
        skills: [
            { name: 'TypeScript', slug: 'typescript', level: 90, since: '2022', descKey: 'skills.typescript.desc', tagKeys: ['Type System', 'Generics', 'Advanced Types'], categories: ['fullstack', 'systems', 'ai'] },
            { name: 'Next.js', slug: 'nextdotjs', level: 88, since: '2022', descKey: 'skills.nextjs.desc', tagKeys: ['App Router', 'SSR / SSG', 'API Routes'], categories: ['fullstack', 'ai'] },
            { name: 'Astro', slug: 'astro', level: 85, since: '2023', descKey: 'skills.astro.desc', tagKeys: ['Islands', 'Content Collections'], categories: ['fullstack'] },
            { name: 'Go', slug: 'go', level: 80, since: '2023', descKey: 'skills.go.desc', tagKeys: ['Concurrency', 'HTTP', 'CLI'], categories: ['fullstack', 'systems'] },
            { name: 'PHP', slug: 'php', level: 82, since: '2022', descKey: 'skills.php.desc', tagKeys: ['Laravel', 'Backend'], categories: ['fullstack'] },
            { name: 'PostgreSQL', slug: 'postgresql', level: 85, since: '2022', descKey: 'skills.postgresql.desc', tagKeys: ['Prisma', 'Transactions', 'Indexing'], categories: ['fullstack', 'ai'] },
            { name: 'Prisma ORM', slug: null, level: 88, since: '2022', descKey: 'skills.prisma.desc', tagKeys: ['Type Safety', 'Migrations'], categories: ['fullstack'] },
            { name: 'Docker', slug: 'docker', level: 82, since: '2023', descKey: 'skills.docker.desc', tagKeys: ['Containerization', 'Compose'], categories: ['fullstack', 'systems'] },
        ],
    },
    {
        category: 'Systems & Performance',
        categoryKey: 'skills.tab.systems',
        icon: '◉',
        accent: 'pink',
        skills: [
            { name: 'Rust', slug: 'rust', level: 82, since: '2023', descKey: 'skills.rust.desc', tagKeys: ['Memory Safety', 'Performance', 'Systems Prog'], categories: ['systems'] },
            { name: 'C', slug: 'c', level: 75, since: '2023', descKey: 'skills.c.desc', tagKeys: ['Low-level', 'Performance'], categories: ['systems'] },
            { name: 'Data Structures', slug: null, level: 90, since: '2022', descKey: 'skills.dsa.desc', tagKeys: ['Skip List', 'Hash Table', 'Graph', 'LSM-Tree'], categories: ['systems', 'fullstack', 'ai'] },
            { name: 'Algorithms', slug: null, level: 88, since: '2022', descKey: 'skills.algo.desc', tagKeys: ['DP', 'Graph', 'Concurrency', 'Lock-Free'], categories: ['systems', 'fullstack', 'ai'] },
            { name: 'Performance Profiling', slug: null, level: 85, since: '2023', descKey: 'skills.profiling.desc', tagKeys: ['CPU', 'Memory', 'Cache', 'Benchmarking'], categories: ['systems'] },
            { name: 'Memory Management', slug: null, level: 80, since: '2023', descKey: 'skills.memory.desc', tagKeys: ['Allocation', 'Cache Locality', 'SIMD'], categories: ['systems'] },
            { name: 'Concurrent I/O', slug: null, level: 80, since: '2023', descKey: 'skills.concurrency.desc', tagKeys: ['async/await', 'Threads', 'Lock-Free'], categories: ['systems', 'fullstack'] },
            { name: 'MIT 6.172 Methodology', slug: null, level: 85, since: '2023', descKey: 'skills.mit.desc', tagKeys: ['Baseline', 'Profile', 'Optimize'], categories: ['systems'] },
        ],
    },
    {
        category: 'AI / Research',
        categoryKey: 'skills.tab.ai',
        icon: '◆',
        accent: 'mixed',
        skills: [
            { name: 'GraphRAG', slug: null, level: 85, since: '2024', descKey: 'skills.graphrag.desc', tagKeys: ['Knowledge Graph', 'LLM'], categories: ['ai'] },
            { name: 'Knowledge Graphs', slug: null, level: 88, since: '2024', descKey: 'skills.kg.desc', tagKeys: ['Entity Relations', 'Graph Query'], categories: ['ai'] },
            { name: 'LLM Integration', slug: null, level: 82, since: '2024', descKey: 'skills.llm.desc', tagKeys: ['Gemini API', 'Prompt Engineering'], categories: ['ai'] },
            { name: 'Neo4j', slug: 'neo4j', level: 85, since: '2024', descKey: 'skills.neo4j.desc', tagKeys: ['Graph Database', 'Cypher', 'APOC'], categories: ['ai'] },
            { name: 'NLP', slug: null, level: 78, since: '2024', descKey: 'skills.nlp.desc', tagKeys: ['Text Processing', 'Embeddings'], categories: ['ai'] },
            { name: 'Spaced Repetition', slug: null, level: 85, since: '2024', descKey: 'skills.spaced.desc', tagKeys: ['Learning Science', 'Algorithm'], categories: ['ai'] },
            { name: 'Knowledge Tracing', slug: null, level: 80, since: '2024', descKey: 'skills.kt.desc', tagKeys: ['PKT', 'Student Modeling'], categories: ['ai'] },
            { name: 'Git / GitHub', slug: 'github', level: 90, since: '2021', descKey: 'skills.github.desc', tagKeys: ['GitFlow', 'Actions', 'CI/CD'], categories: ['fullstack', 'systems', 'ai'] },
        ],
    },
];

export const skillStats = [
    { value: '3+', labelKey: 'skills.stat.years' },
    { value: '20+', labelKey: 'skills.stat.projects' },
    { value: '15+', labelKey: 'skills.stat.tech' },
    { value: '∞', labelKey: 'skills.stat.learning' },
];
