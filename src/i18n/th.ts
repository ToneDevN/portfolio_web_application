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
    'hero.greeting': 'สวัสดีครับ, ผมชื่อ',
    'hero.name': 'นวมินทร์ คำจันทร์',
    'hero.description':
        '<strong>วิศวกรระบบประสิทธิภาพสูงด้วยความแม่นยำด้านอัลกอริทึม</strong> นักศึกษาเทคโนโลยีสารสนเทศที่มุ่งเน้นในโครงสร้างข้อมูล การปรับปรุงประสิทธิภาพ และการสร้างระบบที่มีค่าแฝงต่ำ ทนทาน และใช้ทรัพยากรอย่างมีประสิทธิภาพ',
    'hero.cta.work': 'ดูผลงาน',
    'hero.cta.talk': 'ติดต่อฉัน',
    'hero.findMe': 'ติดตามฉัน →',
    'hero.scroll': 'เลื่อนลง',
    'hero.roles': 'วิศวกรประสิทธิภาพ,นักพัฒนา Full Stack,วิศวกรระบบ,นักวิจัย',

    // ── About ────────────────────────────────────────────────────
    'about.subtitle': 'เกี่ยวกับฉัน',
    'about.title': 'วิศวกรระบบ',
    'about.titleHighlight': 'ประสิทธิภาพสูง',
    'about.titleEnd': '',
    'about.p1':
        "ผมชื่อ <strong>นวมินทร์ คำจันทร์</strong> นักศึกษาเทคโนโลยีสารสนเทศที่ไม่ได้เห็น Data Structures & Algorithms เพียงแค่เตรียมสอบสัมภาษณ์ แต่เป็น<strong>กล่องเครื่องมือสำหรับแก้ปัญหาในความซับซ้อนที่เหมาะสม</strong> ฉันมุ่งเน้นในการเข้าใจซอฟต์แวร์ลึก: เลือกโครงสร้างข้อมูลที่ถูก วัดสิ่งที่ช้าจริงๆ และสร้างระบบที่มีค่าแฝงต่ำ ทนทาน และใช้ทรัพยากรอย่างมีประสิทธิภาพ",
    'about.p2':
        "งานของฉันขยายข้าม<strong>วิศวกรประสิทธิภาพ</strong> (การปรับปรุงที่ขับเคลื่อนด้วยโปรไฟล์ เบนช์มาร์ก) <strong>ความเชี่ยวชาญด้านอัลกอริทึม</strong> (ฐาน DSA) และ<strong>การเรียนรู้ที่เป็นระบบ</strong> (เปลี่ยนข้อมูลดิบเป็นความรู้ที่ใช้ได้) ผมสร้างผลิตภัณฑ์ Full-Stack สำหรับลูกค้า Freelance และดำเนินการวิจัยเกี่ยวกับระบบการเรียนรู้ที่ปรับตัวได้",
    'about.available': '⚡ พร้อมรับงาน',
    'about.location': 'นครพนม, ประเทศไทย 🇹🇭',
    'about.downloadCV': 'ดาวน์โหลด CV',
    'about.letsConnect': 'ติดต่อฉัน',
    'about.stat.years': 'ปีประสบการณ์',
    'about.stat.projects': 'โปรเจกต์สำเร็จ',
    'about.stat.clients': 'ลูกค้าพอใจ',
    'about.stat.contributions': 'การมีส่วนร่วม',

    // ── Skills ───────────────────────────────────────────────────
    'skills.subtitle': 'ความเชี่ยวชาญหลัก',
    'skills.title': 'ทักษะ &',
    'skills.titleHighlight': 'ความสามารถ',
    'skills.clickHint': 'คลิกเพื่อดูรายละเอียด',
    'skills.tab.fullstack': 'Full-Stack / Backend',
    'skills.tab.systems': 'ระบบ & ประสิทธิภาพ',
    'skills.tab.ai': 'AI / วิจัย',
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
    'projects.code': 'ซอร์สโค้ด',
    'projects.filter.all': 'ผลงานทั้งหมด',
    'projects.filter.ai': 'AI & GraphRAG',
    'projects.filter.fullstack': 'Full-Stack',
    'projects.filter.systems': 'ระบบ & Rust',
    'projects.cat.ai': 'AI & วิจัย',
    'projects.cat.fullstack': 'Full-Stack & Backend',
    'projects.cat.systems': 'วิศวกรรมระบบ',
    'projects.clickHint': 'คลิกเพื่อดูรายละเอียด',
    'projects.modal.techStack': 'เทคโนโลยีที่ใช้',
    'projects.modal.keyHighlights': 'จุดเด่นสถาปัตยกรรม',

    'projects.learner.title': 'ระบบสนับสนุนผู้เรียน',
    'projects.learner.desc':
        'ระบบทบทวนความรู้ปรับตามตัวผู้เรียน ใช้ GraphRAG และ Knowledge Tracing สกัด Knowledge Graph จากเนื้อหาการสอน สร้างคำถาม Microlearning ตามพระคัมภีร์ Bloom\'s Taxonomy และจัดตารางทบทวน',
    'projects.business.title': 'แพลตฟอร์มจัดการการดำเนินงานธุรกิจ',
    'projects.business.desc':
        'แพลตฟอร์ม Full-Stack สำหรับ SME: Customer Portal สำหรับคำสั่งซื้อ Staff Dashboard สำหรับจัดการ Business Analytics RBAC Filtering & Pagination Order Tracking',
    'projects.martify.title': 'Martify — ระบบ POS',
    'projects.martify.desc':
        'ระบบ POS สำหรับร้านค้าปลีก: จัดการสินค้า ประมวลผลคำสั่งซื้อ การชำระเงิน รายงานยอดขาย พิมพ์ใบเสร็จ สร้างด้วย Laravel และ containerize ด้วย Docker',
    'projects.kvstore.title': 'ระบบเก็บ KV ประสิทธิภาพสูง',
    'projects.kvstore.desc':
        'KV Storage Engine ที่ใช้ LSM-Tree ด้วย Rust โปรเจกต์ Performance Engineering ตามวิธี MIT 6.172 MemTable WAL SSTable Compaction Strategies ที่ optimize ด้วย profiling',
    'projects.columnar.title': 'Columnar File Reader ที่เร็ว',
    'projects.columnar.desc':
        'Parquet/Columnar file reader ที่ optimize ด้วย SIMD และ memory mapping ออกแบบสำหรับ bulk analytics workloads ที่ต้องการ maximum throughput',

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
    'footer.tagline': 'วิศวกรประสิทธิภาพระบบด้วยความแม่นยำด้านอัลกอริทึม — ที่ซึ่งโครงสร้างข้อมูลพบปะกับการปรับปรุงประสิทธิภาพในโลกจริง',
    'footer.navigation': 'ลิงก์',
    'footer.connect': 'ช่องทางติดต่อ',
    'footer.rights': '© 2026 นวมินทร์ คำจันทร์ สงวนลิขสิทธิ์',
    'footer.madeWith': 'สร้างด้วย Astro',
    'footer.backToTop': 'กลับขึ้นด้านบน',
};
