import type { TranslationKey } from './en';

/** Thai translations */
export const th: Record<TranslationKey, string> = {
    // ── Navigation ───────────────────────────────────────────────
    'nav.home': 'หน้าแรก',
    'nav.about': 'เกี่ยวกับ',
    'nav.skills': 'ทักษะ',
    'nav.projects': 'ผลงาน',
    'nav.contact': 'ติดต่อ',
    'nav.hireMe': 'จ้างฉัน',

    // ── Hero ─────────────────────────────────────────────────────
    'hero.available': 'พร้อมรับงาน',
    'hero.greeting': 'สวัสดี, ฉันชื่อ',
    'hero.name': 'นวมินทร์ คำจันทร์',
    'hero.description':
        'ฉันสร้าง<strong>ประสบการณ์ดิจิทัลที่สวยงาม</strong>ที่ผสมผสานการออกแบบที่รอบคอบเข้ากับโค้ดที่สะอาดและมีประสิทธิภาพ มาสร้างสิ่งที่ยอดเยี่ยมด้วยกัน',
    'hero.cta.work': 'ดูผลงาน',
    'hero.cta.talk': 'ติดต่อฉัน',
    'hero.findMe': 'ติดตามฉัน →',
    'hero.scroll': 'เลื่อนลง',
    'hero.roles': 'Full Stack Developer,Software Engineer,DevOps Engineer,นักแก้ปัญหา',

    // ── About ────────────────────────────────────────────────────
    'about.subtitle': 'เกี่ยวกับฉัน',
    'about.title': 'สร้างสรรค์',
    'about.titleHighlight': 'ประสบการณ์ดิจิทัล',
    'about.titleEnd': 'ด้วยเป้าหมายและความหลงใหล',
    'about.p1':
        "สวัสดีครับ! ฉันชื่อ <strong>นวมินทร์ คำจันทร์</strong> นักพัฒนา Full-Stack ที่มีความมุ่งมั่นจากกรุงเทพมหานคร ฉันเชี่ยวชาญในการสร้างเว็บแอปพลิเคชันสมัยใหม่ที่มีประสิทธิภาพสูง",
    'about.p2':
        "ในเวลาว่าง ฉันชอบสำรวจเทรนด์การออกแบบใหม่ๆ มีส่วนร่วมในโปรเจกต์โอเพนซอร์ส หรือทดลองกับเทคโนโลยีสร้างสรรค์ ฉันเชื่อว่าซอฟต์แวร์ที่ยอดเยี่ยมอยู่ที่จุดตัดของ<strong>การออกแบบที่สวยงาม</strong>และ<strong>วิศวกรรมที่มั่นคง</strong>",
    'about.available': '⚡ พร้อมรับงาน',
    'about.location': 'กรุงเทพฯ, TH 🇹🇭',
    'about.downloadCV': 'ดาวน์โหลด CV',
    'about.letsConnect': 'ติดต่อฉัน',
    'about.stat.years': 'ปีประสบการณ์',
    'about.stat.projects': 'โปรเจกต์สำเร็จ',
    'about.stat.clients': 'ลูกค้าพอใจ',
    'about.stat.contributions': 'การมีส่วนร่วม',

    // ── Skills ───────────────────────────────────────────────────
    'skills.subtitle': 'เครื่องมือที่ฉันใช้',
    'skills.title': 'ทักษะ &',
    'skills.titleHighlight': 'สแต็ก',
    'skills.clickHint': 'คลิกเพื่อดูรายละเอียด',
    'skills.tab.frontend': 'Frontend',
    'skills.tab.backend': 'Backend',
    'skills.tab.devops': 'เครื่องมือ & DevOps',
    'skills.stat.years': 'ปี',
    'skills.stat.projects': 'โปรเจกต์',
    'skills.stat.tech': 'เทคโนโลยี',
    'skills.stat.learning': 'เรียนรู้',
    'skills.modal.proficiency': 'ระดับความสามารถ',
    'skills.modal.usedSince': 'ใช้งานตั้งแต่',
    'skills.modal.keyConcepts': 'แนวคิดหลัก',

    // Skill descriptions (Thai)
    'skills.react.desc':
        'สร้าง UI แบบไดนามิกด้วย hooks, context และ pattern สมัยใหม่ มีประสบการณ์ในการปรับปรุงประสิทธิภาพและจัดการ state',
    'skills.nextjs.desc':
        'Framework React แบบ Full-Stack สำหรับแอปในระดับ production คล่องในการใช้ App Router, SSR, SSG และ API routes',
    'skills.astro.desc':
        'Framework แบบ Island Architecture สำหรับเว็บไซต์ที่มีเนื้อหาสูงและโหลดเร็วมากโดยไม่ต้องใช้ JS uncessary',
    'skills.vuejs.desc':
        'Framework แบบ progressive สำหรับสร้าง UI ถนัดใช้ Composition API และ Pinia store',
    'skills.typescript.desc':
        'JavaScript แบบ strongly-typed สำหรับ codebase ที่ scale ได้ ใช้ advanced types, generics และ utility types ในงานประจำ',
    'skills.tailwind.desc':
        'CSS Framework แบบ utility-first สำหรับพัฒนา UI ที่รวดเร็วและสม่ำเสมอ สร้าง design system และ theme แบบ custom',
    'skills.framer.desc':
        'Motion library สำหรับ React พร้อม production สร้าง animation และ transition แบบ physics-based ที่ลื่นไหล',
    'skills.htmlcss.desc':
        'รากฐานที่แข็งแกร่งใน semantic HTML และ CSS สมัยใหม่ — grid, flexbox, custom properties, animations',
    'skills.nodejs.desc':
        'JavaScript runtime แบบ server-side สำหรับสร้างแอปพลิเคชัน network และ API ที่ scale ได้',
    'skills.express.desc':
        'Web framework Node.js แบบ minimal และ flexible สร้าง RESTful API ด้วย middleware patterns',
    'skills.fastify.desc':
        'Web framework ประสิทธิภาพสูงพร้อม schema-based validation และ plugin ecosystem ที่หลากหลาย',
    'skills.python.desc':
        'scripting, ประมวลผลข้อมูล และ backend services ใช้ FastAPI และ automation scripts',
    'skills.rest.desc':
        'ออกแบบและใช้งาน RESTful API ตามมาตรฐาน OpenAPI spec พร้อม versioning และ documentation ที่เหมาะสม',
    'skills.graphql.desc':
        'Query language สำหรับ API ที่ช่วยดึงข้อมูลได้แม่นยำ มีประสบการณ์กับ Apollo Server และ resolvers',
    'skills.postgresql.desc':
        'ฐานข้อมูล relational ขั้นสูง เขียน query ซับซ้อน, migrations และทำงานกับ ORM อย่าง Prisma',
    'skills.mongodb.desc':
        'ฐานข้อมูล NoSQL แบบ document-oriented Aggregation pipelines, schema design และ Mongoose ODM',
    'skills.github.desc':
        'Version control และ collaboration GitFlow, code reviews, GitHub Actions และ branch strategies',
    'skills.docker.desc':
        'Containerize แอปพลิเคชันเพื่อ deploy อย่างสม่ำเสมอ ใช้ Docker Compose สำหรับ multi-service environments',
    'skills.cicd.desc':
        'สร้าง pipeline อัตโนมัติสำหรับ testing, building และ deploying แอปพลิเคชันอย่างต่อเนื่อง',
    'skills.linux.desc':
        'คล่องแคล่วกับ CLI, scripting, จัดการ server และ process management บน Linux systems',
    'skills.figma.desc':
        'ออกแบบ UI/UX และสร้าง prototype Component libraries, design tokens และ developer handoff',
    'skills.vercel.desc':
        'Deploy frontend application แบบ zero-config Preview environments และ edge functions',
    'skills.aws.desc':
        'Cloud infrastructure ด้วย EC2, S3, Lambda และ CloudFront สำหรับแอปที่ scale ได้และทนทาน',
    'skills.bun.desc':
        'JavaScript runtime และ toolkit แบบ all-in-one ติดตั้งเร็วมาก, test runner และ bundler',

    // ── Projects ─────────────────────────────────────────────────
    'projects.subtitle': 'ผลงานของฉัน',
    'projects.title': 'โปรเจกต์',
    'projects.titleHighlight': 'เด่น',
    'projects.viewAll': 'ดูทั้งหมด →',
    'projects.featured': '★ เด่น',
    'projects.liveDemo': 'ดูสด',
    'projects.code': 'โค้ด',

    'projects.nexui.title': 'NexUI Dashboard',
    'projects.nexui.desc':
        'Dashboard วิเคราะห์ข้อมูลครบวงจรพร้อม visualization แบบ real-time, dark/light mode และ widget ที่ปรับแต่งได้สำหรับทีม enterprise',
    'projects.astroshop.title': 'AstroShop',
    'projects.astroshop.desc':
        'E-commerce แบบ Full-Stack ด้วย Astro SSG, headless CMS และ checkout serverless ที่ deploy บน edge',
    'projects.devsync.title': 'DevSync API',
    'projects.devsync.desc':
        'API ประสิทธิภาพสูงรองรับ 100k+ req/วัน พร้อม JWT auth, rate limiting และ CI/CD pipeline อัตโนมัติ',
    'projects.portfolioai.title': 'PortfolioAI',
    'projects.portfolioai.desc':
        'Generator portfolio ด้วย AI สร้างเว็บไซต์ส่วนตัวจากข้อมูล resume โดยใช้ GPT-4 และ template อัจฉริยะ',
    'projects.tonechat.title': 'ToneChat',
    'projects.tonechat.desc':
        'แอปส่งข้อความ real-time พร้อมการเข้ารหัส E2E, แชร์ไฟล์ และ voice notes ด้วย WebSocket และ WebRTC',
    'projects.cloudnotes.title': 'CloudNotes',
    'projects.cloudnotes.desc':
        'Note-taking markdown แบบ minimalist พร้อม offline support, cloud sync และ collaborative editing ด้วย CRDTs',

    // ── Contact ──────────────────────────────────────────────────
    'contact.subtitle': 'ติดต่อฉัน',
    'contact.title': 'มาทำงาน',
    'contact.titleHighlight': 'ด้วยกัน',
    'contact.description':
        'มีโปรเจกต์ในใจหรืออยากทักทายเพียงเล็กน้อย? inbox ของฉันเปิดรับเสมอ จะตอบกลับภายใน 24 ชั่วโมง',
    'contact.info.email': 'อีเมล',
    'contact.info.location': 'ที่ตั้ง',
    'contact.info.github': 'GitHub',
    'contact.info.linkedin': 'LinkedIn',

    'contact.form.name': 'ชื่อ',
    'contact.form.namePlaceholder': 'ชื่อของคุณ',
    'contact.form.email': 'อีเมล',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subject': 'หัวข้อ',
    'contact.form.subjectPlaceholder': 'ร่วมมือกันในโปรเจกต์',
    'contact.form.message': 'ข้อความ',
    'contact.form.messagePlaceholder': 'เล่าให้ฉันฟังเกี่ยวกับโปรเจกต์ของคุณ...',
    'contact.form.send': 'ส่งข้อความ',
    'contact.form.sending': 'กำลังส่ง...',
    'contact.form.sent': '✓ ส่งแล้ว!',
    'contact.form.successMsg': 'ขอบคุณ! จะตอบกลับภายใน 24 ชั่วโมง',

    // ── Footer ───────────────────────────────────────────────────
    'footer.tagline': 'สร้างสรรค์ประสบการณ์ดิจิทัลที่สวยงามที่จุดตัดระหว่างการออกแบบและวิศวกรรม',
    'footer.navigation': 'ลิงก์',
    'footer.connect': 'ช่องทางติดต่อ',
    'footer.rights': '© {year} นวมินทร์ คมจัน สงวนลิขสิทธิ์',
    'footer.madeWith': 'สร้างด้วย ♥ โดยใช้ Astro',
    'footer.backToTop': 'กลับขึ้นด้านบน',
};
