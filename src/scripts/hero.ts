// ── Typing animation ──────────────────────────────────
const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "DevOps Engineer",
    "Problem Solver",
];
const el = document.getElementById("typed-text")!;
let roleIdx = 0,
    charIdx = 0,
    deleting = false;
function type() {
    const cur = roles[roleIdx];
    el.textContent = deleting
        ? cur.slice(0, --charIdx)
        : cur.slice(0, ++charIdx);
    if (!deleting && charIdx === cur.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
    }
    if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
    }
    setTimeout(type, deleting ? 42 : 88);
}
setTimeout(type, 800);

// ── 3D Wireframe Globe with Skill Icon Orbiters ───────
(() => {
    const canvas = document.getElementById(
        "hero-3d",
    ) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    // Canvas is 560×560 (CSS scales it responsively)
    const S = 560,
        CX = 280,
        CY = 280,
        R = 115;
    const TAU = Math.PI * 2;

    // ── Wireframe geometry ─────────────────────────────
    const MERID = 10,
        PAR = 10,
        SEG = 64;
    type Pt3 = [number, number, number];

    const meridLines: Pt3[][] = [];
    for (let m = 0; m < MERID; m++) {
        const lng = (m / MERID) * TAU;
        const pts: Pt3[] = [];
        for (let s = 0; s <= SEG; s++) {
            const lat = (s / SEG) * Math.PI - Math.PI / 2;
            pts.push([
                Math.cos(lat) * Math.cos(lng),
                Math.sin(lat),
                Math.cos(lat) * Math.sin(lng),
            ]);
        }
        meridLines.push(pts);
    }

    const paraLines: Pt3[][] = [];
    for (let p = 1; p < PAR; p++) {
        const lat = (p / PAR) * Math.PI - Math.PI / 2;
        const yr = Math.sin(lat),
            cr = Math.cos(lat);
        const pts: Pt3[] = [];
        for (let s = 0; s <= SEG; s++) {
            const lng = (s / SEG) * TAU;
            pts.push([cr * Math.cos(lng), yr, cr * Math.sin(lng)]);
        }
        paraLines.push(pts);
    }
    const equatorIdx = PAR / 2 - 1; // p=5 → lat=0°

    // ── Skill definitions ──────────────────────────────
    interface SkillDef {
        slug: string;
        name: string;
        color: [number, number, number];
        orbitIdx: number;
        phase: number;
        img?: HTMLImageElement;
    }

    const skills: SkillDef[] = [
        // ── Inner orbit (6 skills, evenly spaced) ────────
        { slug: "react", name: "React", color: [97, 218, 251], orbitIdx: 0, phase: 0 },
        { slug: "typescript", name: "TypeScript", color: [49, 120, 198], orbitIdx: 0, phase: TAU / 6 },
        { slug: "nodedotjs", name: "Node.js", color: [83, 170, 83], orbitIdx: 0, phase: (TAU / 6) * 2 },
        { slug: "tailwindcss", name: "Tailwind", color: [6, 182, 212], orbitIdx: 0, phase: (TAU / 6) * 3 },
        { slug: "nextdotjs", name: "Next.js", color: [200, 200, 220], orbitIdx: 0, phase: (TAU / 6) * 4 },
        { slug: "python", name: "Python", color: [70, 130, 180], orbitIdx: 0, phase: (TAU / 6) * 5 },
        // ── Outer orbit (6 skills, offset by half-step) ──
        { slug: "docker", name: "Docker", color: [36, 150, 237], orbitIdx: 1, phase: TAU / 12 },
        { slug: "postgresql", name: "PostgreSQL", color: [65, 105, 225], orbitIdx: 1, phase: TAU / 12 + TAU / 6 },
        { slug: "mongodb", name: "MongoDB", color: [71, 162, 72], orbitIdx: 1, phase: TAU / 12 + (TAU / 6) * 2 },
        { slug: "figma", name: "Figma", color: [242, 78, 30], orbitIdx: 1, phase: TAU / 12 + (TAU / 6) * 3 },
        { slug: "github", name: "GitHub", color: [140, 140, 200], orbitIdx: 1, phase: TAU / 12 + (TAU / 6) * 4 },
        { slug: "vuedotjs", name: "Vue.js", color: [79, 192, 141], orbitIdx: 1, phase: TAU / 12 + (TAU / 6) * 5 },
    ];

    const orbits = [
        { rm: 1.72, tilt: 0.3, spd: 0.0055, angle: 0 },
        { rm: 2.18, tilt: 0.9, spd: -0.0038, angle: 0 },
    ];

    for (const sk of skills) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => { sk.img = img; };
        img.src = `https://cdn.simpleicons.org/${sk.slug}/ffffff`;
    }

    let ry = 0;
    const rx = 0.28;
    let canvasMX = -9999, canvasMY = -9999;

    canvas.addEventListener("mousemove", (e: MouseEvent) => {
        const rc = canvas.getBoundingClientRect();
        canvasMX = (e.clientX - rc.left) * (S / rc.width);
        canvasMY = (e.clientY - rc.top) * (S / rc.height);
    }, { passive: true });
    canvas.addEventListener("mouseleave", () => {
        canvasMX = -9999;
        canvasMY = -9999;
    });

    function rot(px: number, py: number, pz: number, rxA: number, ryA: number): Pt3 {
        const cY = Math.cos(ryA), sY = Math.sin(ryA);
        const x = px * cY + pz * sY;
        const z0 = -px * sY + pz * cY;
        const cX = Math.cos(rxA), sX = Math.sin(rxA);
        const y = py * cX - z0 * sX;
        const z = py * sX + z0 * cX;
        return [x, y, z];
    }

    function lerpRGB(a: number[], b: number[], t: number) {
        return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
    }

    function rgba(c: number[], a: number) {
        return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${Math.min(1, a).toFixed(3)})`;
    }

    type BadgeInfo = { sk: SkillDef; depth: number; sx: number; sy: number; badgeR: number; };

    function draw() {
        ctx.clearRect(0, 0, S, S);

        const isLight = document.documentElement.classList.contains("light");
        const BLU = isLight ? [26, 79, 214] : [0, 180, 255];
        const PNK = isLight ? [181, 0, 74] : [255, 26, 110];
        const BGa = isLight ? 0.05 : 0.07;

        ry += 0.0035;
        for (const orb of orbits) orb.angle += orb.spd;

        const ryF = ry, rxF = rx;

        const grd = ctx.createRadialGradient(CX, CY, R * 0.5, CX, CY, R * 1.75);
        grd.addColorStop(0, rgba(BLU, BGa));
        grd.addColorStop(0.5, rgba(BLU, BGa * 0.3));
        grd.addColorStop(1, rgba(BLU, 0));
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, S, S);

        for (const pts of meridLines) {
            for (let i = 0; i < pts.length - 1; i++) {
                const [ax, ay, az] = rot(pts[i][0], pts[i][1], pts[i][2], rxF, ryF);
                const [bx, by, bz] = rot(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2], rxF, ryF);
                const depth = ((az + bz) * 0.5 + 1) * 0.5;
                ctx.beginPath();
                ctx.moveTo(CX + ax * R, CY - ay * R);
                ctx.lineTo(CX + bx * R, CY - by * R);
                ctx.strokeStyle = rgba(lerpRGB(BLU, PNK, depth * 0.35), 0.05 + depth * 0.28);
                ctx.lineWidth = 0.75;
                ctx.stroke();
            }
        }

        for (let pi = 0; pi < paraLines.length; pi++) {
            const pts = paraLines[pi];
            const isEq = pi === equatorIdx;
            for (let i = 0; i < pts.length - 1; i++) {
                const [ax, ay, az] = rot(pts[i][0], pts[i][1], pts[i][2], rxF, ryF);
                const [bx, by, bz] = rot(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2], rxF, ryF);
                const depth = ((az + bz) * 0.5 + 1) * 0.5;
                ctx.beginPath();
                ctx.moveTo(CX + ax * R, CY - ay * R);
                ctx.lineTo(CX + bx * R, CY - by * R);
                ctx.strokeStyle = rgba(lerpRGB(BLU, PNK, depth * 0.45), isEq ? 0.12 + depth * 0.52 : 0.04 + depth * 0.27);
                ctx.lineWidth = isEq ? 1.4 : 0.75;
                ctx.stroke();
            }
        }

        for (let m = 0; m < MERID; m++) {
            const lng = (m / MERID) * TAU;
            for (let p = 1; p < PAR; p++) {
                const lat = (p / PAR) * Math.PI - Math.PI / 2;
                const ox = Math.cos(lat) * Math.cos(lng);
                const oy = Math.sin(lat);
                const oz = Math.cos(lat) * Math.sin(lng);
                const [rx3, ry3, rz3] = rot(ox, oy, oz, rxF, ryF);
                const depth = (rz3 + 1) * 0.5;
                if (depth < 0.08) continue;
                ctx.beginPath();
                ctx.arc(CX + rx3 * R, CY - ry3 * R, 1.1 + depth * 1.1, 0, TAU);
                ctx.fillStyle = rgba(lerpRGB(BLU, PNK, depth * 0.5), 0.22 + depth * 0.58);
                ctx.fill();
            }
        }

        for (const [px, py, pz] of [[0, 1, 0], [0, -1, 0]] as Pt3[]) {
            const [rx3, ry3, rz3] = rot(px, py, pz, rxF, ryF);
            const depth = (rz3 + 1) * 0.5;
            if (depth < 0.1) continue;
            const sx = CX + rx3 * R, sy = CY - ry3 * R;
            const col = lerpRGB(BLU, PNK, depth);
            const glowG = ctx.createRadialGradient(sx, sy, 0, sx, sy, 18 * depth);
            glowG.addColorStop(0, rgba(col, 0.45 * depth));
            glowG.addColorStop(1, rgba(col, 0));
            ctx.fillStyle = glowG;
            ctx.beginPath();
            ctx.arc(sx, sy, 18 * depth, 0, TAU);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(sx, sy, 2.8 * depth, 0, TAU);
            ctx.fillStyle = rgba(col, 0.9);
            ctx.fill();
        }

        const badges: BadgeInfo[] = skills.map((sk) => {
            const orb = orbits[sk.orbitIdx];
            const a = orb.angle + sk.phase;
            const rm = orb.rm;
            const ox = Math.cos(a) * rm;
            const oy = Math.sin(a) * Math.sin(orb.tilt) * rm;
            const oz = Math.sin(a) * Math.cos(orb.tilt) * rm;
            const [rx3, ry3, rz3] = rot(ox, oy, oz, rxF, ryF);
            const depth = (rz3 / rm + 1) * 0.5;
            const badgeR = 20 + depth * 12;
            return { sk, depth, sx: CX + rx3 * R, sy: CY - ry3 * R, badgeR };
        });

        badges.sort((a, b) => a.depth - b.depth);

        let hovered: BadgeInfo | null = null;
        for (const b of badges) {
            const dx = canvasMX - b.sx, dy = canvasMY - b.sy;
            if (dx * dx + dy * dy < (b.badgeR + 4) ** 2) hovered = b;
        }

        for (const { sk, depth, sx, sy, badgeR } of badges) {
            if (depth < 0.06) continue;
            const alpha = 0.5 + depth * 0.5;
            const col = sk.color;
            const glowR = badgeR * 2.5;
            const glowG = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR);
            glowG.addColorStop(0, rgba(col, 0.38 * depth));
            glowG.addColorStop(1, rgba(col, 0));
            ctx.fillStyle = glowG;
            ctx.beginPath();
            ctx.arc(sx, sy, glowR, 0, TAU);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(sx, sy, badgeR, 0, TAU);
            ctx.fillStyle = `rgba(10,10,22,${(0.78 + depth * 0.18).toFixed(3)})`;
            ctx.fill();
            ctx.strokeStyle = rgba(col, 0.72 * alpha);
            ctx.lineWidth = 1.5;
            ctx.stroke();
            if (sk.img) {
                const iconSize = badgeR * 1.1;
                ctx.globalAlpha = alpha;
                ctx.drawImage(sk.img, sx - iconSize / 2, sy - iconSize / 2, iconSize, iconSize);
                ctx.globalAlpha = 1;
            } else {
                ctx.beginPath();
                ctx.arc(sx, sy, badgeR * 0.4, 0, TAU);
                ctx.fillStyle = rgba(col, alpha);
                ctx.fill();
            }
        }

        if (hovered) {
            const { sk, sx, sy, badgeR } = hovered;
            ctx.font = '500 11px "JetBrains Mono", monospace';
            const tw = ctx.measureText(sk.name).width;
            const pw = tw + 18, ph = 22;
            let tx = sx - pw / 2;
            let ty = sy - badgeR - 10 - ph;
            if (ty < 4) ty = sy + badgeR + 10;
            tx = Math.max(4, Math.min(S - pw - 4, tx));
            ctx.fillStyle = "rgba(7,7,14,0.92)";
            ctx.beginPath();
            if (typeof (ctx as any).roundRect === "function") {
                (ctx as any).roundRect(tx, ty, pw, ph, 5);
            } else {
                ctx.rect(tx, ty, pw, ph);
            }
            ctx.fill();
            ctx.fillStyle = rgba(sk.color, 1);
            ctx.textBaseline = "middle";
            ctx.textAlign = "left";
            ctx.fillText(sk.name, tx + 9, ty + ph / 2);
            ctx.textAlign = "start";
        }

        requestAnimationFrame(draw);
    }

    draw();
})();
