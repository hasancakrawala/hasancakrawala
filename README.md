# Hasan's Strategic Portfolio

Build a single-page personal portfolio website for **Muhammad Hasan Fikri**, a Brand & Marketing Strategist. The target audience is HR managers and recruiters from companies looking to hire a senior brand/marketing role.

The website's job is to make HR recruiters confident enough to reach out for an interview. Every design decision should serve that goal.

---

## DESIGN DIRECTION

**Aesthetic:** Editorial Strategist — like a high-end strategy magazine (think Pentagram case studies, Monocle magazine, or Stripe's blog). Intentionally minimalist, NOT decorative. The simplicity itself should communicate that this person is a strategic thinker who values substance over ornament.

**Visual principle:** "Strategic Minimalism" — generous whitespace, single accent color used precisely, editorial typography, asymmetric grid layouts. Avoid generic AI aesthetic (no gradient meshes, no glassmorphism, no purple gradients).

**Color palette:**
- Background: `#FAF8F4` (warm off-white)
- Secondary background: `#F0EBE2` (warm cream)
- Dark background: `#131312` (near black)
- Primary ink: `#161513`
- Muted: `#6E6962`
- Accent: `#B8442F` (terracotta — warm, hospitality-feel)
- Accent dark: `#8A2F1F`
- Accent soft: `#F2E3DC`
- Hairline borders: `#E5DFD3`

**Typography:**
- Display font: **Fraunces** (Google Fonts) — use italic variant heavily for accent words
- Body font: **Geist** (Google Fonts)
- Monospace: **Geist Mono** (Google Fonts) — for labels, eyebrows, and metadata
- Heading sizes should be LARGE and editorial (60-120px+ for hero)
- Use italic accent words in different color for visual interest

**Visual motif:** A small terracotta dot (●) used as a brand mark throughout — next to the logo, before eyebrow labels, as separators. This is the one repeated detail.

---

## CONTACT LINKS (use exactly these)

- **WhatsApp:** `https://wa.me/62895330305975` (with prefilled text: "Halo Hasan, saya tertarik untuk berdiskusi lebih lanjut mengenai portofolio Anda.")
- **Email:** `Hasan.cakrawala@gmail.com` (use `mailto:` link)
- **LinkedIn:** `https://www.linkedin.com/in/muhammad-hasan-fikri` (open in new tab)
- **Instagram:** `https://www.instagram.com/hasan.cakrawala/` (open in new tab)
- **CV (Google Drive folder):** `https://drive.google.com/drive/folders/1r935KxGMRj77fKvCHW2tVp-kU4Qx8xQ5?usp=sharing` (open in new tab — label as "View CV" so users know it opens a folder where they can access the latest CV)

---

## PROFILE PHOTO

Add a profile photo placeholder in the hero section, positioned to the LEFT of the headline (or above on mobile). Use a placeholder image (gray square 480×600px aspect ratio 4:5 portrait orientation) with the label "Profile photo placeholder — to be replaced".

The photo should:
- Be in 4:5 portrait aspect ratio
- Have a subtle terracotta-tinted overlay (very low opacity) or a thin terracotta border accent
- Be positioned with intention — not centered, not just dropped in. Use it as a compositional anchor.
- On hover, slightly lift (translateY -2px)

Make sure the placeholder is clearly labeled with `alt="Muhammad Hasan Fikri portrait"` and a comment/data attribute marking it as "REPLACE-ME-WITH-PROFILE-PHOTO" so it's easy to swap later.

---

## SECTIONS REQUIRED (in order)

### 1. Sticky Navigation
Fixed top nav with blur backdrop (`backdrop-filter: blur(20px)`):
- Left: "● Hasan Fikri" (brand mark + name, the dot in terracotta)
- Right: text links in lowercase mono font (manifesto, about, framework, work, process, faq) + a pill-shaped "Hire me" CTA button (dark background) that links to #contact
- Add a thin terracotta scroll progress indicator at the very top of the page

### 2. Hero Section
**Three-column or asymmetric layout:**
- **Left (40%):** Profile photo placeholder (4:5 portrait, see PROFILE PHOTO section above)
- **Middle (40%):** Main content
- **Right (20%):** Track Record sidebar

**Middle content:**
- Eyebrow with green pulsing dot: `● PORTFOLIO · OPEN TO OPPORTUNITIES · TANGERANG SELATAN, ID`
- Massive heading: "Muhammad" (regular) on first line, "Hasan Fikri" (italic terracotta) on second line — font-size around 96-120px desktop
- Add a small terracotta dot decoration after the last letter
- Role line: "Brand & Marketing Strategist" with a small horizontal line before it
- Tagline (italic, smaller): "I help brands grow revenue and build loyal customers — through emotional branding and performance marketing."
- Below tagline: row of 4 small social icons linking to WhatsApp, LinkedIn, Instagram, and CV (Google Drive). Each icon should be a subtle outlined SVG, sized about 20px, with hover state turning terracotta. Add hover labels.

**Right sidebar — Track Record card (bordered):**
- Label: TRACK RECORD
- Rows (key on left, italic value on right):
  - Revenue growth → 10–15× in 3 mo (× in accent color)
  - Budget efficiency → +70% (in accent)
  - CSAT score → 4.9 / 5
  - Brands managed → 3 in 1 ecosystem
  - Experience → 9+ years

**Below the 3 columns:** Horizontal scrolling marquee with keywords separated by terracotta dots: "Emotional Branding ● Performance Marketing ● Customer Loop ● Multi-Brand Architecture ● AI Marketing ● Experience Design" (animate infinitely, slow speed)

**Mobile layout:** Stack vertically — photo on top, then heading, then track record.

### 3. Table of Contents (Magazine-style Index)
Numbered list 01–10 with section names as clickable anchors. Each row: number (mono, terracotta) | title (Fraunces serif) | description + arrow on hover. Bordered rows with hover state (accent-soft background).

Sections:
- 01 A note before you scroll → Strategic Minimalism
- 02 About → Marketing yang menemukan saya
- 03 Framework → Diam · Amati · Berisik
- 04 Core Expertise → Tiga pilar, satu cara kerja
- 05 Selected Work → Tiga case study dengan hasil terukur
- 06 Numbers → Bukan klaim, hasil nyata
- 07 How I Work → Proses dari pertemuan pertama sampai hasil
- 08 Tools & AI → Strategis sekaligus hands-on teknikal
- 09 FAQ → Yang sering ditanyakan recruiter
- 10 Contact → Mari bicara

### 4. Manifesto Section (Strategic Minimalism)
Background: cream `#F0EBE2`. Two-column layout.

**This section is the most important strategic move — it positions the simplicity of the portfolio as INTENTIONAL.**

- Left: Huge headline "Portofolio ini *sengaja sederhana.*" (last 2 words in italic terracotta)
- Right: Two paragraphs explaining "Karena saya tidak menjual desain. Saya menjual posisi. Brand yang kuat tidak butuh banyak ornamen — yang dibutuhkan adalah pesan dan posisi yang tepat di benak konsumen."
- Add a quote card (white bg, terracotta left border, large opening quote mark): "Diam di tempat yang tepat. Berisik di tempat yang tepat." with sub-note below.
- Add a giant italic "M" letter as background watermark (very low opacity, ~6%, positioned bottom-right) for visual depth

### 5. About Section
Two-column layout: prose on left, sticky "Profile at a glance" sidebar on right.

**Left content:**
- Section eyebrow: "02 About"
- Heading: "Marketing yang *menemukan saya.*"
- Sub: "Sebuah perjalanan yang dimulai dari rasa ingin tahu — bukan dari rencana karier."
- Three blocks with small accent labels:
  - LATAR BELAKANG — Sejak 2016 mengamati perilaku konsumen dan bagaimana emosi mendasari setiap keputusan beli. Lulusan Pendidikan Olahraga yang masuk dunia marketing. Memimpin event besar di kampus yang mengundang Kemenpora, Wakil Walikota, KONI.
  - TURNING POINT — Memimpin divisi glamping dari nol. Menemukan bahwa positioning bukan tentang produk, tapi posisi emosional di benak konsumen. Bedanya bukan di produk — tapi di bagaimana produk dipersepsikan dan disuarakan.
  - INSIGHT INTI (in italic display font): "Produk yang menyentuh emosi tidak perlu bersaing soal harga — karena ia sudah berdiri di dimensi yang berbeda."

**Right sidebar (Profile at a Glance):**
- Role: Brand & Marketing Strategist
- Experience: 9+ years
- Industries: Hospitality · F&B · Lifestyle
- Location: Tangerang Selatan, ID
- Languages: Indonesian · English
- Specialty: Emotional positioning (in italic terracotta)
- Education: S1 — Univ. Muhammadiyah Jakarta
- Certifications: Bisa Bikin Brand · SBDM · BelajarlagiHQ
- Status: Open to opportunities (in italic terracotta)

Add a small "Download CV" button below the sidebar that links to the CV Google Drive folder (open in new tab).

### 6. Framework Section — DIAM · AMATI · BERISIK
**This must look dramatic.** Dark background (`#131312`), with a subtle radial gradient in terracotta in one corner.

- Section eyebrow: "03 Signature framework"
- Big white heading: "Cara saya *bekerja.*"
- Sub: "Sebuah framework yang lahir dari lapangan — diuji di 3 brand, di 3 industri berbeda."

Three columns side by side (no gaps between, just thin vertical dividers):
Each column:
- Top: circle with number + STAGE ONE/TWO/THREE label
- Massive italic Fraunces word (DIAM, AMATI, or BERISIK) — ~64px
- Subtitle line
- Body paragraph explaining the stage
- Small SVG icon at bottom (a dashed circle for Diam, an eye shape for Amati, broadcasting arcs for Berisik) — all in terracotta with subtle styling

Content per stage:
- **Diam** — Temukan pijakan & posisi — "Brand yang tergesa-gesa riding the wave tanpa posisi hanya akan terombang-ambing. Diam berarti brand harus punya pijakan yang jelas sebelum bersuara."
- **Amati** — Baca celah emosional — "Lihat celah yang orang lain lewatkan. Bukan hanya data dan tren — tapi titik-titik lemah di emosi konsumen yang belum disentuh siapapun."
- **Berisik** — Masuki setiap touchpoint — "Ketika posisi sudah ditemukan, masuki setiap momen, tren, dan event sebagai kesempatan brand untuk dikenali dan dipercaya sebagai solusi."

Bottom footer: "Berlaku untuk brand apapun di industri manapun." | "— Framework, tested in 3 brands"

### 7. Core Expertise Section
- Eyebrow: "04 Core expertise"
- Heading: "Tiga pilar, *satu cara kerja.*"
- Differentiator banner (accent-soft gradient background, terracotta left border): "**Keunggulan utama** — Satu dari sedikit profesional yang menguasai *brand strategy* sekaligus *performance marketing* secara teknikal — bukan hanya strategis." with a small "Rare combo" badge on the right.

Three columns with thin grid lines, each with:
- Number (01, 02, 03)
- Italic Fraunces heading
- Short horizontal line
- Bulleted list (terracotta dots as bullets)

Columns:
- **01 Brand Strategy:** Emotional branding · Brand positioning · Multi-brand architecture · Brand canvas · Customer journey mapping
- **02 Performance Marketing:** Meta Ads — hands-on · Campaign optimization · Google Analytics & GTM · Dashboard & reporting · Budget management
- **03 Campaign & Experience:** Campaign strategy · Experience-based campaign · Customer loop strategy · CRM & loyalty building · Integrated marketing

Bottom strip (cream background): "ALSO STRONG IN — Problem Solving · Team Leadership · Consumer Behavior Research · Event Management · Cross-functional Collaboration"

### 8. Selected Work Intro
- Eyebrow: "05 Selected work"
- Heading: "Tiga case study, *hasil yang berbicara.*"
- Sub: "Bukan portfolio dekoratif — ini hasil kerja nyata yang bisa dilacak angkanya."

3 thumbnail cards (each with hover lift effect). Each card has a media placeholder area on top (gradient background as fallback, but mark it as ready to be replaced with a real brand photo):

**Card 1 — Rawdee Glamping**
- Media placeholder (16:9 ratio, marked "REPLACE-ME-WITH-GLAMPING-PHOTO"). Fallback: gradient from forest green `#2C3A2C` to `#4F6242` with a white tent/triangle SVG icon centered
- Case 01 label
- "Rawdee Glamping"
- "Feel More Alive" (italic terracotta)
- Stat: 10–15× revenue · 4.9 rating
- Link to #case-1

**Card 2 — Customer Loop Strategy**
- Media placeholder (16:9, marked "REPLACE-ME-WITH-LOOP-VISUAL"). Fallback: gradient from terracotta `#B8442F` to `#D86E4F` with a white target/loop SVG icon
- Case 02 label
- "Customer Loop Strategy"
- "Konsumen sebagai agen" (italic)
- Stat: +50% revenue · +70% efficiency
- Link to #case-2

**Card 3 — Multi-Brand Repositioning**
- Media placeholder (16:9, marked "REPLACE-ME-WITH-MULTIBRAND-PHOTO"). Fallback: gradient from brown `#6B4A2E` to `#9A6D44` with a 3-circle network SVG icon
- Case 03 label
- "Multi-Brand Repositioning"
- "Tiga brand, satu ekosistem" (italic)
- Stat: 3 brands managed simultaneously
- Link to #case-3

### 9. Case Studies (3 detailed)
Each case study should be a long section with all of these components:

**Case Header:** Big italic Fraunces number (01/02/03) | Title + sub | Right-aligned meta tag (Industry / Year)

**Case 1 — Rawdee Glamping** (id: case-1)
- Title: "Rawdee Glamping"
- Sub: "Membangun brand dari nol di industri hospitality."
- Meta: Hospitality / 2023 — 2024
- Add a wide media placeholder at the top (16:9 or 2:1, marked "REPLACE-ME-WITH-GLAMPING-HERO-PHOTO") — fallback: solid forest green block with brand mark "G"
- Before/After 2-column block:
  - Before (cream bg, muted label): "Campsite biasa, tanpa brand. Pemasaran digital tidak berjalan." — "Rp 4–5 jt / bulan"
  - After (white bg, terracotta left border, terracotta label): "Brand berbasis emotional experience. Pendekatan positioning penuh." — "10–15× growth dalam 3 bulan"
- 4 metrics grid (white cards with terracotta line on top):
  - 10–15× — Revenue growth dalam 3 bulan
  - 54% — Occupancy rate
  - 4.9 / 5 — Google Reviews rating
  - #1 — Revenue contributor di perusahaan
- 2-column Tantangan/Keputusan Krusial paragraph
- Insight callout box (accent-soft bg, terracotta left border): "Tagline 'Feel More Alive' bukan slogan — itu adalah janji emosional. Rawdee Glamping menjadi brand pertama di perusahaan yang memiliki tagline, dan hingga kini menjadi kontributor pendapatan tertinggi di seluruh lini bisnis."
- Tags: Emotional Branding · Brand Positioning · Experience Design · Digital Marketing

**Case 2 — Customer Loop Strategy** (id: case-2)
- Title: "Customer Loop Strategy"
- Sub: "Performance marketing yang efisien dan organik — di 3 brand sekaligus."
- Meta: Integrated Campaign / 2025 — Now
- 3 metrics row: +50% revenue / +70% budget efficiency / 3 bulan
- Before/After block (kondisi awal vs setelah transformasi)
- **Customer Loop Diagram** — horizontal flow with 4 steps and a loop indicator at the end:
  - Step 1 → Step 2 → Step 3 → Step 4 → [Loop icon]
  - Each step: small numbered circle (01/02/03/04 in terracotta) + arrow + body text
  - Final cell is accent-soft colored with a circular arrow SVG and "LOOP" label
  - Steps:
    1. Amati behavior konsumen yang membagikan pengalaman secara organik
    2. Rancang experience dengan trigger emosional kuat — self reward, kedaerahan
    3. Konsumen jadi agen marketing organik — menyebarkan brand ke lingkaran sosialnya
    4. Loop berulang — konten tak terbatas, tanpa biaya produksi tambahan
- Insight callout: "Coffee House: experience bar diposisikan sebagai 'self reward' — mendorong orang berbagi reward-nya. Roastery: rasa kedaerahan jadi simbol kebanggaan yang membuat orang ingin membuktikan dan bercerita."
- Tags: Performance Marketing · Customer Loop · UGC Strategy · Consumer Behavior · Campaign Optimization

**Case 3 — Multi-Brand Repositioning** (id: case-3)
- Title: "Multi-Brand Repositioning"
- Sub: "Tiga brand, satu ekosistem yang saling menguatkan."
- Meta: Multi-Brand / 2023 — Now

3 brand showcase cards side by side. Each has:
- Top half: media placeholder (4:5 or 1:1, marked with replacement label). Fallback: gradient color block with HUGE italic letter (G, C, R) as the brand mark, plus a small lowercase label at bottom-left of the visual

**Brand 1 — Rawdee Glamping**
- Media placeholder: "REPLACE-ME-WITH-GLAMPING-BRAND-PHOTO" — fallback gradient: forest green (#2C3A2C → #4F6242), mark: "G" (italic Fraunces), label: Hospitality
- Name: Rawdee Glamping
- Tagline (italic terracotta): "Manis Dikenang, Ingin Diulang"
- Desc: Experience alam + emosi. Kontributor pendapatan tertinggi di perusahaan.

**Brand 2 — Rawdee Coffee House**
- Media placeholder: "REPLACE-ME-WITH-COFFEEHOUSE-BRAND-PHOTO" — fallback gradient: terracotta (#B8442F → #D86E4F), mark: "C", label: F&B / Coffeeshop
- Name: Rawdee Coffee House
- Tagline: "Kopi Buatan Sendiri"
- Desc: Self reward via experience bar. Keluar dari red ocean coffeeshop.

**Brand 3 — Rawdee Roastery**
- Media placeholder: "REPLACE-ME-WITH-ROASTERY-BRAND-PHOTO" — fallback gradient: brown (#6B4A2E → #9A6D44), mark: "R", label: F&B / Roastery
- Name: Rawdee Roastery
- Tagline: "Maharasa Kopi Nusantara"
- Desc: Kebanggaan kedaerahan. Bukan bersaing rasa — bersaing emosi.

Plus: 2-column Tantangan terbesar / Hasil konkret + Insight callout "Orang tidak ke coffeeshop untuk kafein — mereka ke sana untuk self reward. Dari insight ini lahir positioning yang tidak menjual produk, tapi mengambil posisi emosional yang belum dimiliki siapapun di pasar."

### 10. Numbers Section
Dark background. Big heading: "Bukan klaim. *Hasil nyata.*"

3 hero metric cards (dark cards in a row, each with terracotta tag in top-right corner):
- **10–15×** — Revenue growth Rawdee Glamping dalam 3 bulan pertama. (Tag: 3-MONTH GROWTH)
- **+70%** — Efisiensi budget marketing melalui customer loop strategy. (Tag: BUDGET)
- **+50%** — Pertumbuhan omzet rata-rata seluruh lini bisnis. (Tag: REVENUE)

Below: 4 supporting metrics (smaller italic numbers with small terracotta line and label):
- 4.9 / 5 — Customer satisfaction score
- 54% — Occupancy rate
- 3 — Brands managed simultaneously
- 9+ thn — Years in marketing & branding

Closing quote with mono labels on left/right: "— Working principle" | *"Produk yang menyentuh emosi tidak perlu bersaing soal harga."* | "M.H.F. / 2026"

### 11. How I Work (Process)
Two-column layout: sticky intro left, numbered list right.

Left intro (sticky):
- Eyebrow: "07 How I work"
- Heading: "Dari pertemuan pertama *sampai hasil.*"
- Paragraph explaining the process is consistent across engagements

Right — numbered process list (each item: huge italic number on left, title + description on right, divider lines between):
1. **Listen & Map** — Dengarkan kondisi brand saat ini, pain points pemilik, dan apa yang sudah dicoba. Map situasi: produk, konsumen, kompetitor, dan resource yang tersedia.
2. **Find the Gap** — Riset celah emosional konsumen yang belum disentuh kompetitor. Ini bukan tentang fitur produk — tapi tentang posisi yang belum diambil siapapun.
3. **Define Positioning** — Tetapkan positioning yang tajam, tagline yang menjawab, dan brand voice yang konsisten. Tidak hanya kalimat — tapi janji emosional yang bisa dijaga.
4. **Build the System** — Susun integrated marketing system: campaign, customer journey, customer loop, dashboard analytics — semuanya saling terhubung dalam satu workflow.
5. **Execute & Scale** — Eksekusi performance marketing dengan hands-on. Bukan delegasi murni — saya turun langsung ke ads manager, GTM, dan analytics untuk memastikan strategi terimplementasi.
6. **Measure & Iterate** — Track hasil tiap minggu, identifikasi apa yang bekerja, dan iterate. Hasil signifikan biasanya muncul di bulan ke-3 — bukan instant, tapi konsisten.

### 12. Tools & AI Integration
Background: cream.
- Eyebrow: "08 Tools & AI integration"
- Heading: "Strategis sekaligus *hands-on teknikal.*"

3 columns (white cards with small terracotta circle bullets):
- **01 Ads & Campaign:** Meta Ads Manager · Meta Business Suite
- **02 Analytics & Reporting:** Google Analytics · Google Tag Manager · Google Sheets
- **03 Ops & Productivity:** Notion · Google Workspace

Below — AI Integration band (dark background, 2-column inside):
- Left: AI INTEGRATION — ACTIVE label + Big italic line "ChatGPT · Claude · ElevenLabs · Lovable"
- Right: "AI bukan sekadar tools tambahan — seluruh workflow brand & marketing saya integrasikan dengan AI untuk meningkatkan kecepatan eksekusi, kualitas output, dan efisiensi operasional secara keseluruhan."

### 13. FAQ Section
6 expandable accordion items (HTML `<details>` style), each showing:
- Small number (01–06 in mono terracotta) | Question (Fraunces, 22px) | "+" icon that rotates to × when open

Q1: **Kenapa portofolio ini begitu sederhana?**
A: Karena saya tidak menjual desain — saya menjual posisi. Portofolio ini dirancang dengan prinsip yang sama seperti brand yang saya bangun: fokus pada substansi, bukan ornamen. Kalau yang dicari adalah designer, saya bukan orangnya. Kalau yang dicari adalah strategist yang bisa menggerakkan revenue lewat brand thinking dan performance marketing, itu kekuatan saya.

Q2: **Bisakah strategi yang sama diterapkan di industri kami?**
A: Bisa. Framework "Diam–Amati–Berisik" berlaku untuk brand apapun karena pada dasarnya semua manusia di industri manapun bergerak atas dasar emosi dan persepsi yang sama. Yang berubah hanya konteks dan touchpoint-nya. Saya sudah membuktikan ini di hospitality (glamping), F&B (coffeeshop), dan retail (roastery) — tiga industri yang sangat berbeda karakter.

Q3: **Apa yang membedakan dari brand strategist lain?**
A: Kombinasi yang jarang ditemukan: **brand strategy + performance marketing** di satu profesional. Kebanyakan brand strategist tidak menguasai Meta Ads, GTM, atau analytics secara teknikal. Kebanyakan performance marketer tidak punya pemikiran brand yang dalam. Saya bisa duduk dengan founder membahas positioning emosional, lalu langsung set up campaign di ads manager dan baca dashboard hasilnya — tanpa hand-off ke tim lain.

Q4: **Seberapa cepat hasilnya bisa terlihat?**
A: Berdasarkan track record, hasil signifikan biasanya muncul di **bulan ke-3**. Bulan 1–2 adalah fase membangun positioning, customer loop, dan sistem analytics. Bulan 3 mulai compound — itu pola yang konsisten di 3 brand yang saya bangun. Tapi ini bukan jaminan instant. Brand butuh waktu untuk benar-benar terbentuk di benak konsumen. Yang saya jamin: proses dan struktur kerja yang jelas dari hari pertama.

Q5: **Status saat ini — masih bekerja atau sudah free?**
A: Saat ini masih aktif sebagai Brand & Marketing Manager di Rawdee Corporation. Terbuka untuk diskusi peluang baru — terutama untuk role Brand Manager, Marketing Manager, atau peran strategis serupa di perusahaan yang membutuhkan pertumbuhan brand berbasis emotional positioning. Untuk diskusi lebih lanjut, paling enak via WhatsApp atau email.

Q6: **Apa expectation di role berikutnya?**
A: Perusahaan yang serius dengan brand thinking — bukan perusahaan yang hanya butuh "tambahan tim marketing". Saya cari peran di mana saya bisa berkontribusi langsung ke strategy, bukan hanya eksekusi. Industri terbuka. Yang lebih penting adalah **ada ruang untuk membangun**: brand baru, repositioning, atau scaling brand existing yang sedang plateau.

### 14. Contact / Footer
Dark background with subtle terracotta radial glow in top-right corner.

Top:
- Eyebrow with green pulsing dot: "10 LET'S TALK"
- Massive headline (Fraunces, ~96px): "Mari bangun brand *yang benar-benar dirasakan.*"
- Framework line tag: "— DIAM · AMATI · BERISIK"
- Right side: "Currently available" card with green dot + "Terbuka untuk role Brand Manager, Marketing Manager, atau peran strategis di industri apapun."

**CTA buttons row (5 buttons, primary first):**
- Primary (terracotta pill): "Chat WhatsApp →" → `https://wa.me/62895330305975?text=Halo%20Hasan%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.`
- Secondary (transparent border): "Kirim email →" → `mailto:Hasan.cakrawala@gmail.com`
- Secondary: "View CV →" → `https://drive.google.com/drive/folders/1r935KxGMRj77fKvCHW2tVp-kU4Qx8xQ5?usp=sharing` (open new tab)
- Secondary: "LinkedIn →" → `https://www.linkedin.com/in/muhammad-hasan-fikri` (open new tab)
- Secondary: "Instagram →" → `https://www.instagram.com/hasan.cakrawala/` (open new tab)

**Info grid (5 columns, bordered top/bottom):**
- EMAIL: Hasan.cakrawala@gmail.com (clickable mailto)
- WHATSAPP: 0895 3303 05975 (clickable wa.me)
- LINKEDIN: muhammad-hasan-fikri (clickable)
- INSTAGRAM: @hasan.cakrawala (clickable)
- RESPONSE TIME: Within 24 hours (italic terracotta)

Bottom colophon line (mono, muted): "MUHAMMAD HASAN FIKRI · BRAND & MARKETING STRATEGIST" | "© 2026 · DIAM · AMATI · BERISIK"

---

## TECHNICAL REQUIREMENTS

- **Fully responsive** — mobile-first layouts. On mobile, collapse multi-column sections to single column, scale heading sizes down appropriately.
- **Smooth scroll** for anchor links
- **Fade-up reveal animations** on scroll using IntersectionObserver (subtle 24px translate + opacity transition over 0.9s)
- **Sticky nav** with backdrop blur, adds border-bottom when scrolled
- **Scroll progress bar** at top (terracotta, 2px high)
- **Hover effects:** subtle transform on cards (translateY -2px), color shift on links
- **Accessible:** semantic HTML, alt text on icons and images, sufficient color contrast, `prefers-reduced-motion` support
- **SEO meta tags:** title "Muhammad Hasan Fikri — Brand & Marketing Strategist", description matching the tagline, Open Graph tags
- **Performance:** preload Google Fonts, use system font fallback chain, lazy-load images below the fold
- **All media placeholders** must be clearly marked with a data attribute like `data-replace="profile-photo"`, `data-replace="glamping-hero"`, etc., so they're easy to find and swap.

## TONE & COPY

- All copy is in **Indonesian** unless specified otherwise (some accent words can stay English: "Open to opportunities", "Track record", section eyebrows in mono)
- Voice: confident but not arrogant. Reflective. Strategic. Italic phrases hint at personality without being playful.
- The Strategic Minimalism positioning is the **anchoring narrative** — every section should feel like it serves substance over decoration.

---

## IMPORTANT: AFTER BUILDING, OUTPUT A MEDIA BRIEF

At the end of your response, please output a clear **Media Upload Checklist** in this exact format so the user knows what media to prepare:

```
═══════════════════════════════════════════
📸 MEDIA UPLOAD CHECKLIST
═══════════════════════════════════════════

The following media slots are placeholder-ready. Replace each one with your actual file:

1. [HERO] Profile Photo
   - Slot ID: profile-photo
   - Format: JPG or PNG
   - Aspect ratio: 4:5 (portrait)
   - Recommended size: 800×1000px minimum
   - Style guide: Professional, natural light, confident but approachable expression. Plain or softly blurred background. Avoid formal corporate ID-style photos.

2. [CASE 1 — Glamping] Hero photo
   - Slot ID: glamping-hero-photo
   - Format: JPG
   - Aspect ratio: 16:9 or 2:1
   - Recommended size: 1600×900px minimum
   - Style guide: Photo of the glamping location, ideally golden hour or moody atmosphere — should communicate "Feel More Alive" emotion.

3. [CASE 1 — Glamping] Thumbnail
   - Slot ID: glamping-thumbnail
   - Format: JPG
   - Aspect ratio: 16:9
   - Recommended size: 800×450px
   - Style guide: Wide shot of glamping experience or signature visual.

4. [CASE 2 — Customer Loop] Visual
   - Slot ID: loop-visual
   - Format: JPG or PNG
   - Aspect ratio: 16:9
   - Recommended size: 800×450px
   - Style guide: Could be a UGC compilation, dashboard screenshot, or campaign visual.

5. [CASE 3 — Multi-Brand] Glamping brand visual
   - Slot ID: glamping-brand-photo
   - Format: JPG
   - Aspect ratio: 4:5 or 1:1
   - Style guide: Iconic shot from glamping that reflects "Manis Dikenang, Ingin Diulang"

6. [CASE 3 — Multi-Brand] Coffee House visual
   - Slot ID: coffeehouse-brand-photo
   - Format: JPG
   - Aspect ratio: 4:5 or 1:1
   - Style guide: Experience bar shot, or self-reward moment.

7. [CASE 3 — Multi-Brand] Roastery visual
   - Slot ID: roastery-brand-photo
   - Format: JPG
   - Aspect ratio: 4:5 or 1:1
   - Style guide: Coffee beans, brewing, or regional Indonesian theme.

8. [CASE 3 — Selected Work] Multi-brand thumbnail
   - Slot ID: multibrand-thumbnail
   - Format: JPG
   - Aspect ratio: 16:9
   - Style guide: Composite of all 3 brands, or hero shot of the ecosystem.

═══════════════════════════════════════════

OPTIONAL but recommended additions:
- OG image (1200×630px) for social sharing
- Favicon (512×512px) — could be the terracotta dot or "H" italic mark

═══════════════════════════════════════════
```

Build this as a polished, single-page React or HTML site. Pay extreme attention to typography hierarchy, spacing rhythm, and the use of italic Fraunces serif as the signature visual element.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://portfolio-hasan-cakrawala.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7948b7b3-d000-4d29-8fdf-1f5cbe09f55f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
