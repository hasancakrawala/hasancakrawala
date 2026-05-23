import { useState } from "react";
import { Dot, Eyebrow, LiveDot, SectionShell, SocialIcon, TrackRecord, Marquee } from "./primitives";

const CONTACT = {
  wa: "https://wa.me/62895330305975?text=Halo%20Hasan%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20portofolio%20Anda.",
  email: "mailto:Hasan.cakrawala@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-hasan-fikri",
  instagram: "https://www.instagram.com/hasan.cakrawala/",
  cv: "https://drive.google.com/drive/folders/1r935KxGMRj77fKvCHW2tVp-kU4Qx8xQ5?usp=sharing",
};

/* ==================== HERO ==================== */
export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-12 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
          {/* Left column: photo + track record stacked */}
          <div className="md:col-span-4 order-1 flex flex-col gap-8">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-md border border-hairline transition-transform duration-300 hover:-translate-y-0.5"
              data-replace="profile-photo"
              style={{ aspectRatio: "4 / 5" }}
            >
              {/* REPLACE-ME-WITH-PROFILE-PHOTO */}
              <img
                src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23ddd6c8'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='14' fill='%236E6962' text-anchor='middle'%3EProfile photo placeholder%3C/text%3E%3Ctext x='50%25' y='56%25' font-family='monospace' font-size='11' fill='%238a8378' text-anchor='middle'%3Eto be replaced%3C/text%3E%3C/svg%3E"
                alt="Muhammad Hasan Fikri portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "color-mix(in oklab, var(--accent) 8%, transparent)" }} />
              <div className="absolute inset-0 pointer-events-none border-2 border-accent/0 group-hover:border-accent/30 transition-colors" />
            </a>
            <div className="hidden md:block">
              <TrackRecord />
            </div>
          </div>

          {/* Right column: content */}
          <div className="md:col-span-8 order-2 flex flex-col justify-end min-w-0">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              <LiveDot />
              <span>PORTFOLIO · OPEN TO OPPORTUNITIES · TANGERANG SELATAN, ID</span>
            </div>
            <h1 className="font-display leading-[0.9] tracking-[-0.03em] text-foreground break-words">
              <span className="block text-[15vw] sm:text-7xl md:text-[88px] lg:text-[112px] xl:text-[140px]">Muhammad</span>
              <span className="block text-[15vw] sm:text-7xl md:text-[88px] lg:text-[112px] xl:text-[140px] italic text-accent">
                Hasan Fikri<span className="text-accent">.</span>
              </span>
            </h1>
            <div className="mt-8 flex items-center gap-3 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              <span>Brand &amp; Marketing Strategist</span>
            </div>
            <p className="mt-5 max-w-xl text-lg md:text-xl font-display italic text-foreground/85 leading-snug">
              I help brands grow revenue and build loyal customers — through emotional branding and performance marketing.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <SocialIcon kind="whatsapp" href={CONTACT.wa} label="WhatsApp" external />
              <SocialIcon kind="linkedin" href={CONTACT.linkedin} label="LinkedIn" external />
              <SocialIcon kind="instagram" href={CONTACT.instagram} label="Instagram" external />
              <SocialIcon kind="cv" href={CONTACT.cv} label="View CV" external />
            </div>
          </div>

          {/* Track record on mobile only (shown below content) */}
          <aside className="md:hidden order-3">
            <TrackRecord />
          </aside>
        </div>
      </div>
      <div className="mt-20">
        <Marquee />
      </div>
    </section>
  );
}

/* ==================== TOC ==================== */
export function Toc() {
  const items: [string, string, string, string][] = [
    ["01", "A note before you scroll", "Strategic Minimalism", "#manifesto"],
    ["02", "About", "Marketing yang menemukan saya", "#about"],
    ["03", "Framework", "Diam · Amati · Berisik", "#framework"],
    ["04", "Core Expertise", "Tiga pilar, satu cara kerja", "#expertise"],
    ["05", "Selected Work", "Tiga case study dengan hasil terukur", "#work"],
    ["06", "Numbers", "Bukan klaim, hasil nyata", "#numbers"],
    ["07", "How I Work", "Proses dari pertemuan pertama sampai hasil", "#process"],
    ["08", "Tools & AI", "Strategis sekaligus hands-on teknikal", "#tools"],
    ["09", "FAQ", "Yang sering ditanyakan recruiter", "#faq"],
    ["10", "Contact", "Mari bicara", "#contact"],
  ];
  return (
    <SectionShell className="!py-20 md:!py-24">
      <div className="reveal">
        <Eyebrow>Index</Eyebrow>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          Daftar isi — <span className="italic text-accent">sepuluh halaman.</span>
        </h2>
      </div>
      <ul className="mt-10 border-t border-hairline">
        {items.map(([num, title, desc, href]) => (
          <li key={num} className="border-b border-hairline">
            <a href={href} className="group grid grid-cols-12 gap-4 items-baseline px-3 py-5 md:py-6 transition-colors hover:bg-accent-soft">
              <span className="col-span-2 md:col-span-1 font-mono text-sm text-accent">{num}</span>
              <span className="col-span-10 md:col-span-4 font-display text-xl md:text-2xl text-foreground">{title}</span>
              <span className="col-span-12 md:col-span-6 text-sm text-muted-foreground md:text-right md:pr-4">{desc}</span>
              <span className="hidden md:inline-block col-span-1 text-right text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

/* ==================== MANIFESTO ==================== */
export function Manifesto() {
  return (
    <SectionShell id="manifesto" bg="cream" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 bottom-0 font-display italic text-foreground/[0.06] pointer-events-none select-none leading-none"
        style={{ fontSize: "clamp(280px, 50vw, 720px)", transform: "translate(8%, 18%)" }}
      >
        M
      </div>
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 relative">
        <div className="reveal">
          <Eyebrow>01 Manifesto</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Portofolio ini <span className="italic text-accent">sengaja sederhana.</span>
          </h2>
        </div>
        <div className="reveal space-y-6 text-foreground/85 text-base md:text-lg leading-relaxed">
          <p>
            Karena saya tidak menjual desain. Saya menjual <em className="font-display not-italic">posisi</em>. Brand yang kuat tidak butuh banyak ornamen — yang dibutuhkan adalah pesan dan posisi yang tepat di benak konsumen.
          </p>
          <p>
            Setiap elemen di halaman ini dipilih karena alasan strategis, bukan karena terlihat menarik. Jika Anda mencari portofolio yang ramai, ini bukan tempatnya. Jika Anda mencari pemikir strategis yang mampu menggerakkan revenue lewat brand thinking — silakan lanjut membaca.
          </p>
          <div className="mt-8 bg-background border-l-2 border-accent rounded-r-md p-6 md:p-8 shadow-sm">
            <div className="font-display italic text-accent text-5xl leading-none mb-2">“</div>
            <p className="font-display text-xl md:text-2xl leading-snug">
              Diam di tempat yang tepat. <span className="italic">Berisik di tempat yang tepat.</span>
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">— Prinsip kerja, sejak 2016</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ==================== ABOUT ==================== */
export function About() {
  const profile: [string, string][] = [
    ["Role", "Brand & Marketing Strategist"],
    ["Experience", "9+ years"],
    ["Industries", "Hospitality · F&B · Lifestyle"],
    ["Location", "Tangerang Selatan, ID"],
    ["Languages", "Indonesian · English"],
    ["Specialty", "Emotional positioning"],
    ["Education", "S1 — Univ. Muhammadiyah Jakarta"],
    ["Certifications", "Bisa Bikin Brand · SBDM · BelajarlagiHQ"],
    ["Status", "Open to opportunities"],
  ];
  return (
    <SectionShell id="about">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 reveal">
          <Eyebrow>02 About</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Marketing yang <span className="italic text-accent">menemukan saya.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Sebuah perjalanan yang dimulai dari rasa ingin tahu — bukan dari rencana karier.
          </p>

          <div className="mt-12 space-y-12">
            <div>
              <Eyebrow>Latar belakang</Eyebrow>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground/85">
                Sejak 2016 mengamati perilaku konsumen dan bagaimana emosi mendasari setiap keputusan beli. Lulusan Pendidikan Olahraga yang masuk dunia marketing. Memimpin event besar di kampus yang mengundang Kemenpora, Wakil Walikota, dan KONI.
              </p>
            </div>
            <div>
              <Eyebrow>Turning point</Eyebrow>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground/85">
                Memimpin divisi glamping dari nol. Menemukan bahwa positioning bukan tentang produk, tapi posisi emosional di benak konsumen. Bedanya bukan di produk — tapi di bagaimana produk dipersepsikan dan disuarakan.
              </p>
            </div>
            <div>
              <Eyebrow>Insight inti</Eyebrow>
              <p className="mt-4 font-display italic text-2xl md:text-3xl leading-snug max-w-3xl">
                “Produk yang menyentuh emosi tidak perlu bersaing soal harga — karena ia sudah berdiri di dimensi yang berbeda.”
              </p>
            </div>
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="md:sticky md:top-24 border border-hairline rounded-lg p-6 bg-background">
            <Eyebrow>Profile at a glance</Eyebrow>
            <dl className="mt-5 space-y-3 text-sm">
              {profile.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-hairline/60 pb-2 last:border-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{k}</dt>
                  <dd
                    className={
                      k === "Specialty" || k === "Status"
                        ? "font-display italic text-accent text-right"
                        : "text-foreground text-right"
                    }
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={CONTACT.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full rounded-full bg-dark text-[var(--primary-foreground)] px-4 py-2.5 text-sm hover:bg-accent transition-colors"
            >
              Download CV →
            </a>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}

/* ==================== FRAMEWORK ==================== */
export function Framework() {
  const stages = [
    {
      n: "01",
      tag: "Stage one",
      word: "Diam",
      sub: "Temukan pijakan & posisi",
      body: "Brand yang tergesa-gesa riding the wave tanpa posisi hanya akan terombang-ambing. Diam berarti brand harus punya pijakan yang jelas sebelum bersuara.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-12 h-12">
          <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      n: "02",
      tag: "Stage two",
      word: "Amati",
      sub: "Baca celah emosional",
      body: "Lihat celah yang orang lain lewatkan. Bukan hanya data dan tren — tapi titik-titik lemah di emosi konsumen yang belum disentuh siapapun.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-12 h-12">
          <path d="M10 40 C 22 22, 58 22, 70 40 C 58 58, 22 58, 10 40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      n: "03",
      tag: "Stage three",
      word: "Berisik",
      sub: "Masuki setiap touchpoint",
      body: "Ketika posisi sudah ditemukan, masuki setiap momen, tren, dan event sebagai kesempatan brand untuk dikenali dan dipercaya sebagai solusi.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-12 h-12">
          <circle cx="28" cy="40" r="4" fill="currentColor" />
          <path d="M40 28 A 14 14 0 0 1 40 52" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M48 22 A 22 22 0 0 1 48 58" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M56 16 A 30 30 0 0 1 56 64" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];
  return (
    <SectionShell id="framework" bg="dark" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 65%)" }}
      />
      <div className="relative">
        <div className="reveal">
          <Eyebrow>03 Signature framework</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-[var(--primary-foreground)] leading-[1.04] tracking-tight">
            Cara saya <span className="italic text-accent">bekerja.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Sebuah framework yang lahir dari lapangan — diuji di 3 brand, di 3 industri berbeda.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 border-y border-white/10">
          {stages.map((s, i) => (
            <div
              key={s.n}
              className={`p-8 md:p-10 ${i > 0 ? "md:border-l border-white/10" : ""} ${i < stages.length - 1 ? "border-b md:border-b-0 border-white/10" : ""} reveal`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex w-9 h-9 rounded-full border border-white/20 items-center justify-center font-mono text-xs">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">{s.tag}</span>
              </div>
              <h3 className="mt-8 font-display italic text-5xl md:text-6xl text-[var(--primary-foreground)]">{s.word}</h3>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{s.sub}</div>
              <p className="mt-6 text-white/70 leading-relaxed text-[15px]">{s.body}</p>
              <div className="mt-10 text-accent">{s.icon}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
          <span>Berlaku untuk brand apapun di industri manapun.</span>
          <span>— Framework, tested in 3 brands</span>
        </div>
      </div>
    </SectionShell>
  );
}

/* ==================== EXPERTISE ==================== */
export function Expertise() {
  const pillars = [
    {
      n: "01",
      t: "Brand Strategy",
      items: [
        "Emotional branding",
        "Brand positioning",
        "Multi-brand architecture",
        "Brand canvas",
        "Customer journey mapping",
      ],
    },
    {
      n: "02",
      t: "Performance Marketing",
      items: [
        "Meta Ads — hands-on",
        "Campaign optimization",
        "Google Analytics & GTM",
        "Dashboard & reporting",
        "Budget management",
      ],
    },
    {
      n: "03",
      t: "Campaign & Experience",
      items: [
        "Campaign strategy",
        "Experience-based campaign",
        "Customer loop strategy",
        "CRM & loyalty building",
        "Integrated marketing",
      ],
    },
  ];
  return (
    <SectionShell id="expertise">
      <div className="reveal">
        <Eyebrow>04 Core expertise</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
          Tiga pilar, <span className="italic text-accent">satu cara kerja.</span>
        </h2>
      </div>

      <div
        className="reveal mt-10 rounded-lg border-l-2 border-accent flex flex-col md:flex-row md:items-center justify-between gap-4 p-6"
        style={{ background: "linear-gradient(90deg, var(--accent-soft), color-mix(in oklab, var(--accent-soft) 30%, transparent))" }}
      >
        <p className="text-base md:text-lg max-w-3xl">
          <strong className="font-semibold">Keunggulan utama</strong> — Satu dari sedikit profesional yang menguasai{" "}
          <em className="font-display italic">brand strategy</em> sekaligus{" "}
          <em className="font-display italic">performance marketing</em> secara teknikal — bukan hanya strategis.
        </p>
        <span className="shrink-0 inline-flex items-center rounded-full border border-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent bg-background/60">
          Rare combo
        </span>
      </div>

      <div className="mt-14 grid md:grid-cols-3 border-t border-hairline">
        {pillars.map((p, i) => (
          <div key={p.n} className={`py-10 md:py-12 ${i > 0 ? "md:border-l md:pl-10" : "md:pr-10"} ${i < 2 ? "md:pr-10 border-b md:border-b-0 border-hairline" : ""} reveal`}>
            <div className="font-mono text-sm text-accent">{p.n}</div>
            <h3 className="mt-3 font-display italic text-3xl md:text-4xl">{p.t}</h3>
            <div className="mt-4 h-px w-10 bg-accent" />
            <ul className="mt-6 space-y-3">
              {p.items.map((it) => (
                <li key={it} className="flex items-baseline gap-3 text-[15px] text-foreground/85">
                  <Dot className="mt-2 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-cream rounded-md p-6 md:p-7">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Also strong in</div>
        <p className="text-[15px] md:text-base text-foreground/85">
          Problem Solving · Team Leadership · Consumer Behavior Research · Event Management · Cross-functional Collaboration
        </p>
      </div>
    </SectionShell>
  );
}

/* ==================== SELECTED WORK ==================== */
function PlaceholderMedia({
  slot,
  from,
  to,
  children,
  ratio = "16 / 9",
}: {
  slot: string;
  from: string;
  to: string;
  children: React.ReactNode;
  ratio?: string;
}) {
  return (
    <div
      data-replace={slot}
      className="relative overflow-hidden rounded-md flex items-center justify-center"
      style={{ aspectRatio: ratio, background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {children}
      <span className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-wider text-white/60">
        REPLACE · {slot}
      </span>
    </div>
  );
}

export function SelectedWork() {
  const cards = [
    {
      n: "Case 01",
      title: "Rawdee Glamping",
      italic: "Feel More Alive",
      stat: "10–15× revenue · 4.9 rating",
      href: "#case-1",
      media: (
        <PlaceholderMedia slot="glamping-thumbnail" from="#2C3A2C" to="#4F6242">
          <svg viewBox="0 0 100 60" className="w-1/3 opacity-90">
            <path d="M50 8 L88 52 L12 52 Z" fill="none" stroke="white" strokeWidth="1.5" />
            <path d="M50 8 L50 52" stroke="white" strokeWidth="1.5" />
          </svg>
        </PlaceholderMedia>
      ),
    },
    {
      n: "Case 02",
      title: "Customer Loop Strategy",
      italic: "Konsumen sebagai agen",
      stat: "+50% revenue · +70% efficiency",
      href: "#case-2",
      media: (
        <PlaceholderMedia slot="loop-visual" from="#B8442F" to="#D86E4F">
          <svg viewBox="0 0 100 100" className="w-1/3 opacity-90">
            <circle cx="50" cy="50" r="34" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="6" fill="white" />
          </svg>
        </PlaceholderMedia>
      ),
    },
    {
      n: "Case 03",
      title: "Multi-Brand Repositioning",
      italic: "Tiga brand, satu ekosistem",
      stat: "3 brands managed simultaneously",
      href: "#case-3",
      media: (
        <PlaceholderMedia slot="multibrand-thumbnail" from="#6B4A2E" to="#9A6D44">
          <svg viewBox="0 0 100 100" className="w-2/5 opacity-90">
            <circle cx="30" cy="60" r="14" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="70" cy="60" r="14" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="50" cy="30" r="14" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
        </PlaceholderMedia>
      ),
    },
  ];
  return (
    <SectionShell id="work">
      <div className="reveal">
        <Eyebrow>05 Selected work</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
          Tiga case study, <span className="italic text-accent">hasil yang berbicara.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Bukan portfolio dekoratif — ini hasil kerja nyata yang bisa dilacak angkanya.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="group block reveal transition-transform duration-300 hover:-translate-y-0.5"
          >
            {c.media}
            <div className="mt-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{c.n}</div>
              <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
              <p className="font-display italic text-accent text-lg">{c.italic}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.stat}</p>
              <span className="mt-3 inline-block text-sm text-foreground group-hover:text-accent transition-colors">
                Read case →
              </span>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}

/* ==================== CASE STUDIES ==================== */
function CaseHeader({ num, title, sub, meta }: { num: string; title: string; sub: string; meta: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 items-end border-b border-hairline pb-8">
      <div className="md:col-span-2 font-display italic text-7xl md:text-8xl text-accent leading-none">{num}</div>
      <div className="md:col-span-7">
        <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">{title}</h3>
        <p className="mt-3 text-muted-foreground text-lg">{sub}</p>
      </div>
      <div className="md:col-span-3 md:text-right font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {meta}
      </div>
    </div>
  );
}

function BeforeAfter({
  before,
  beforeMeta,
  after,
  afterMeta,
}: {
  before: string;
  beforeMeta: string;
  after: string;
  afterMeta: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-cream rounded-md p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Before</div>
        <p className="mt-3 text-foreground/85">{before}</p>
        <p className="mt-4 font-mono text-sm text-muted-foreground">{beforeMeta}</p>
      </div>
      <div className="bg-background rounded-md p-6 border-l-2 border-accent">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">After</div>
        <p className="mt-3 text-foreground/90">{after}</p>
        <p className="mt-4 font-display italic text-accent">{afterMeta}</p>
      </div>
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-background border border-hairline rounded-md p-5 relative overflow-hidden">
      <span className="absolute top-0 left-0 right-0 h-px bg-accent" />
      <div className="font-display text-3xl md:text-4xl leading-none">{value}</div>
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md p-6 md:p-7 border-l-2 border-accent" style={{ background: "var(--accent-soft)" }}>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2">Insight</div>
      <p className="font-display text-lg md:text-xl leading-snug italic">{children}</p>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {tags.map((t) => (
        <span key={t} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground border border-hairline rounded-full px-3 py-1">
          {t}
        </span>
      ))}
    </div>
  );
}

export function Case1() {
  return (
    <SectionShell id="case-1" bg="cream">
      <CaseHeader num="01" title="Rawdee Glamping" sub="Membangun brand dari nol di industri hospitality." meta="Hospitality / 2023 — 2024" />

      <div className="mt-10">
        <div
          data-replace="glamping-hero-photo"
          className="relative w-full overflow-hidden rounded-md flex items-center justify-center"
          style={{ aspectRatio: "21 / 9", background: "#2C3A2C" }}
        >
          <span className="font-display italic text-white/80 text-9xl">G</span>
          <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-wider text-white/60">
            REPLACE · glamping-hero-photo
          </span>
        </div>
      </div>

      <div className="mt-10 reveal">
        <BeforeAfter
          before="Campsite biasa, tanpa brand. Pemasaran digital tidak berjalan."
          beforeMeta="Rp 4–5 jt / bulan"
          after="Brand berbasis emotional experience. Pendekatan positioning penuh."
          afterMeta="10–15× growth dalam 3 bulan"
        />
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
        <MetricCard value="10–15×" label="Revenue growth dalam 3 bulan" />
        <MetricCard value="54%" label="Occupancy rate" />
        <MetricCard value="4.9 / 5" label="Google Reviews rating" />
        <MetricCard value="#1" label="Revenue contributor di perusahaan" />
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <div>
          <Eyebrow>Tantangan</Eyebrow>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Brand glamping baru di pasar yang sudah penuh — campsite tradisional, resort, hingga villa. Tanpa diferensiasi yang jelas, harga jadi satu-satunya pembeda. Dan itu jalan menuju red ocean.
          </p>
        </div>
        <div>
          <Eyebrow>Keputusan krusial</Eyebrow>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Berhenti menjual fasilitas. Mulai menjual <em>perasaan</em>. Tagline “Feel More Alive” bukan slogan iklan — tapi janji emosional yang konsisten dijaga di setiap touchpoint: dari foto, copy, hingga pengalaman menginap.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Insight>
          “Feel More Alive” bukan slogan — itu adalah janji emosional. Rawdee Glamping menjadi brand pertama di perusahaan yang memiliki tagline, dan hingga kini menjadi kontributor pendapatan tertinggi di seluruh lini bisnis.
        </Insight>
      </div>

      <div className="mt-8">
        <Tags tags={["Emotional Branding", "Brand Positioning", "Experience Design", "Digital Marketing"]} />
      </div>
    </SectionShell>
  );
}

export function Case2() {
  const steps = [
    "Amati behavior konsumen yang membagikan pengalaman secara organik.",
    "Rancang experience dengan trigger emosional kuat — self reward, kedaerahan.",
    "Konsumen jadi agen marketing organik — menyebarkan brand ke lingkaran sosialnya.",
    "Loop berulang — konten tak terbatas, tanpa biaya produksi tambahan.",
  ];
  return (
    <SectionShell id="case-2">
      <CaseHeader num="02" title="Customer Loop Strategy" sub="Performance marketing yang efisien dan organik — di 3 brand sekaligus." meta="Integrated Campaign / 2025 — Now" />

      <div className="mt-10 grid grid-cols-3 gap-4 reveal">
        <MetricCard value="+50%" label="Revenue" />
        <MetricCard value="+70%" label="Budget efficiency" />
        <MetricCard value="3 bln" label="Time to compound" />
      </div>

      <div className="mt-12 reveal">
        <BeforeAfter
          before="Budget marketing besar tapi hasil flat. Konten harus terus diproduksi, biaya membengkak."
          beforeMeta="Ketergantungan pada paid traffic"
          after="Konsumen menyebarkan brand sendiri lewat experience yang dirancang. Loop berulang otomatis."
          afterMeta="+50% revenue · +70% efisiensi"
        />
      </div>

      {/* Customer loop diagram */}
      <div className="mt-14">
        <Eyebrow>The customer loop</Eyebrow>
        <div className="mt-6 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-background border border-hairline rounded-md p-5 relative">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{s}</p>
              {i < 3 && (
                <span aria-hidden className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent">→</span>
              )}
            </div>
          ))}
          <div className="rounded-md p-5 flex flex-col items-start justify-between" style={{ background: "var(--accent-soft)" }}>
            <svg viewBox="0 0 40 40" className="w-9 h-9 text-accent">
              <path d="M30 14 A 12 12 0 1 0 32 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M30 8 L32 14 L26 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mt-3">Loop</span>
            <p className="mt-2 text-sm text-foreground/80">Self-sustaining brand momentum.</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Insight>
          Coffee House: experience bar diposisikan sebagai “self reward” — mendorong orang berbagi reward-nya. Roastery: rasa kedaerahan jadi simbol kebanggaan yang membuat orang ingin membuktikan dan bercerita.
        </Insight>
      </div>

      <div className="mt-8">
        <Tags tags={["Performance Marketing", "Customer Loop", "UGC Strategy", "Consumer Behavior", "Campaign Optimization"]} />
      </div>
    </SectionShell>
  );
}

export function Case3() {
  const brands = [
    {
      slot: "glamping-brand-photo",
      from: "#2C3A2C",
      to: "#4F6242",
      mark: "G",
      label: "Hospitality",
      name: "Rawdee Glamping",
      tagline: "Manis Dikenang, Ingin Diulang",
      desc: "Experience alam + emosi. Kontributor pendapatan tertinggi di perusahaan.",
    },
    {
      slot: "coffeehouse-brand-photo",
      from: "#B8442F",
      to: "#D86E4F",
      mark: "C",
      label: "F&B / Coffeeshop",
      name: "Rawdee Coffee House",
      tagline: "Kopi Buatan Sendiri",
      desc: "Self reward via experience bar. Keluar dari red ocean coffeeshop.",
    },
    {
      slot: "roastery-brand-photo",
      from: "#6B4A2E",
      to: "#9A6D44",
      mark: "R",
      label: "F&B / Roastery",
      name: "Rawdee Roastery",
      tagline: "Maharasa Kopi Nusantara",
      desc: "Kebanggaan kedaerahan. Bukan bersaing rasa — bersaing emosi.",
    },
  ];
  return (
    <SectionShell id="case-3" bg="cream">
      <CaseHeader num="03" title="Multi-Brand Repositioning" sub="Tiga brand, satu ekosistem yang saling menguatkan." meta="Multi-Brand / 2023 — Now" />

      <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
        {brands.map((b) => (
          <div key={b.name} className="reveal bg-background rounded-md overflow-hidden border border-hairline">
            <div
              data-replace={b.slot}
              className="relative flex items-end justify-center"
              style={{ aspectRatio: "4 / 5", background: `linear-gradient(160deg, ${b.from}, ${b.to})` }}
            >
              <span className="font-display italic text-white text-[180px] leading-none -mb-6 opacity-90">{b.mark}</span>
              <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-white/80">{b.label}</span>
              <span className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-wider text-white/60">
                REPLACE · {b.slot}
              </span>
            </div>
            <div className="p-6">
              <h4 className="font-display text-2xl">{b.name}</h4>
              <p className="font-display italic text-accent mt-1">{b.tagline}</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-10">
        <div>
          <Eyebrow>Tantangan terbesar</Eyebrow>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Menjaga tiga brand di tiga kategori berbeda agar tidak saling mengkanibal, sekaligus tetap terasa berasal dari ekosistem yang sama. Setiap brand butuh posisi emosional yang unik — bukan sekedar variasi produk.
          </p>
        </div>
        <div>
          <Eyebrow>Hasil konkret</Eyebrow>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Tiga brand berdiri sendiri dengan positioning emosional yang berbeda — namun saling memperkuat di level ekosistem. Cross-selling alami terjadi tanpa promo agresif.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Insight>
          Orang tidak ke coffeeshop untuk kafein — mereka ke sana untuk self reward. Dari insight ini lahir positioning yang tidak menjual produk, tapi mengambil posisi emosional yang belum dimiliki siapapun di pasar.
        </Insight>
      </div>
    </SectionShell>
  );
}

/* ==================== NUMBERS ==================== */
export function Numbers() {
  const hero = [
    { value: "10–15×", desc: "Revenue growth Rawdee Glamping dalam 3 bulan pertama.", tag: "3-month growth" },
    { value: "+70%", desc: "Efisiensi budget marketing melalui customer loop strategy.", tag: "Budget" },
    { value: "+50%", desc: "Pertumbuhan omzet rata-rata seluruh lini bisnis.", tag: "Revenue" },
  ];
  const small = [
    ["4.9 / 5", "Customer satisfaction score"],
    ["54%", "Occupancy rate"],
    ["3", "Brands managed simultaneously"],
    ["9+ thn", "Years in marketing & branding"],
  ] as const;
  return (
    <SectionShell id="numbers" bg="dark">
      <div className="reveal">
        <Eyebrow>06 Numbers</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl text-[var(--primary-foreground)] leading-[1.04] tracking-tight">
          Bukan klaim. <span className="italic text-accent">Hasil nyata.</span>
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {hero.map((h) => (
          <div key={h.value} className="relative p-7 border border-white/10 rounded-md bg-white/[0.02] reveal">
            <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">{h.tag}</span>
            <div className="font-display text-6xl md:text-7xl text-[var(--primary-foreground)] leading-none">{h.value}</div>
            <p className="mt-6 text-white/65 text-sm leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {small.map(([v, l]) => (
          <div key={l}>
            <div className="h-px w-8 bg-accent mb-3" />
            <div className="font-display italic text-3xl text-[var(--primary-foreground)]">{v}</div>
            <div className="mt-2 text-sm text-white/55">{l}</div>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-baseline justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">— Working principle</span>
        <p className="font-display italic text-xl md:text-2xl text-[var(--primary-foreground)] text-center max-w-2xl">
          “Produk yang menyentuh emosi tidak perlu bersaing soal harga.”
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">M.H.F. / 2026</span>
      </div>
    </SectionShell>
  );
}

/* ==================== PROCESS ==================== */
export function Process() {
  const steps = [
    ["Listen & Map", "Dengarkan kondisi brand saat ini, pain points pemilik, dan apa yang sudah dicoba. Map situasi: produk, konsumen, kompetitor, dan resource yang tersedia."],
    ["Find the Gap", "Riset celah emosional konsumen yang belum disentuh kompetitor. Ini bukan tentang fitur produk — tapi tentang posisi yang belum diambil siapapun."],
    ["Define Positioning", "Tetapkan positioning yang tajam, tagline yang menjawab, dan brand voice yang konsisten. Tidak hanya kalimat — tapi janji emosional yang bisa dijaga."],
    ["Build the System", "Susun integrated marketing system: campaign, customer journey, customer loop, dashboard analytics — semuanya saling terhubung dalam satu workflow."],
    ["Execute & Scale", "Eksekusi performance marketing dengan hands-on. Bukan delegasi murni — saya turun langsung ke ads manager, GTM, dan analytics untuk memastikan strategi terimplementasi."],
    ["Measure & Iterate", "Track hasil tiap minggu, identifikasi apa yang bekerja, dan iterate. Hasil signifikan biasanya muncul di bulan ke-3 — bukan instant, tapi konsisten."],
  ] as const;
  return (
    <SectionShell id="process">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-24 reveal">
            <Eyebrow>07 How I work</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Dari pertemuan pertama <span className="italic text-accent">sampai hasil.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Proses ini konsisten di setiap engagement — terlepas dari ukuran brand atau industrinya. Yang berubah hanya konteks; struktur kerjanya tetap.
            </p>
          </div>
        </div>
        <ol className="md:col-span-7">
          {steps.map(([t, d], i) => (
            <li key={t} className={`grid grid-cols-12 gap-4 py-8 reveal ${i > 0 ? "border-t border-hairline" : ""}`}>
              <div className="col-span-2 font-display italic text-5xl text-accent leading-none">{String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-10">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-2 text-foreground/80 leading-relaxed">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

/* ==================== TOOLS ==================== */
export function Tools() {
  const cols = [
    { n: "01", t: "Ads & Campaign", items: ["Meta Ads Manager", "Meta Business Suite"] },
    { n: "02", t: "Analytics & Reporting", items: ["Google Analytics", "Google Tag Manager", "Google Sheets"] },
    { n: "03", t: "Ops & Productivity", items: ["Notion", "Google Workspace"] },
  ];
  return (
    <SectionShell id="tools" bg="cream">
      <div className="reveal">
        <Eyebrow>08 Tools & AI integration</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
          Strategis sekaligus <span className="italic text-accent">hands-on teknikal.</span>
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {cols.map((c) => (
          <div key={c.n} className="bg-background rounded-md p-6 border border-hairline reveal">
            <div className="font-mono text-sm text-accent">{c.n}</div>
            <h3 className="mt-2 font-display text-2xl">{c.t}</h3>
            <ul className="mt-5 space-y-2.5">
              {c.items.map((it) => (
                <li key={it} className="flex items-baseline gap-3 text-foreground/85">
                  <Dot className="shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-dark text-[var(--primary-foreground)] rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            <LiveDot color="bg-accent" />
            AI Integration — Active
          </div>
          <h3 className="mt-5 font-display italic text-3xl md:text-4xl leading-snug text-[var(--primary-foreground)]">
            ChatGPT · Claude · ElevenLabs · Lovable
          </h3>
        </div>
        <p className="text-white/70 leading-relaxed">
          AI bukan sekadar tools tambahan — seluruh workflow brand &amp; marketing saya integrasikan dengan AI untuk meningkatkan kecepatan eksekusi, kualitas output, dan efisiensi operasional secara keseluruhan.
        </p>
      </div>
    </SectionShell>
  );
}

/* ==================== FAQ ==================== */
const FAQS: [string, string][] = [
  [
    "Kenapa portofolio ini begitu sederhana?",
    "Karena saya tidak menjual desain — saya menjual posisi. Portofolio ini dirancang dengan prinsip yang sama seperti brand yang saya bangun: fokus pada substansi, bukan ornamen. Kalau yang dicari adalah designer, saya bukan orangnya. Kalau yang dicari adalah strategist yang bisa menggerakkan revenue lewat brand thinking dan performance marketing, itu kekuatan saya.",
  ],
  [
    "Bisakah strategi yang sama diterapkan di industri kami?",
    "Bisa. Framework “Diam–Amati–Berisik” berlaku untuk brand apapun karena pada dasarnya semua manusia di industri manapun bergerak atas dasar emosi dan persepsi yang sama. Yang berubah hanya konteks dan touchpoint-nya. Saya sudah membuktikan ini di hospitality (glamping), F&B (coffeeshop), dan retail (roastery) — tiga industri yang sangat berbeda karakter.",
  ],
  [
    "Apa yang membedakan dari brand strategist lain?",
    "Kombinasi yang jarang ditemukan: brand strategy + performance marketing di satu profesional. Kebanyakan brand strategist tidak menguasai Meta Ads, GTM, atau analytics secara teknikal. Kebanyakan performance marketer tidak punya pemikiran brand yang dalam. Saya bisa duduk dengan founder membahas positioning emosional, lalu langsung set up campaign di ads manager dan baca dashboard hasilnya — tanpa hand-off ke tim lain.",
  ],
  [
    "Seberapa cepat hasilnya bisa terlihat?",
    "Berdasarkan track record, hasil signifikan biasanya muncul di bulan ke-3. Bulan 1–2 adalah fase membangun positioning, customer loop, dan sistem analytics. Bulan 3 mulai compound — itu pola yang konsisten di 3 brand yang saya bangun. Tapi ini bukan jaminan instant. Brand butuh waktu untuk benar-benar terbentuk di benak konsumen. Yang saya jamin: proses dan struktur kerja yang jelas dari hari pertama.",
  ],
  [
    "Status saat ini — masih bekerja atau sudah free?",
    "Saat ini masih aktif sebagai Brand & Marketing Manager di Rawdee Corporation. Terbuka untuk diskusi peluang baru — terutama untuk role Brand Manager, Marketing Manager, atau peran strategis serupa di perusahaan yang membutuhkan pertumbuhan brand berbasis emotional positioning. Untuk diskusi lebih lanjut, paling enak via WhatsApp atau email.",
  ],
  [
    "Apa expectation di role berikutnya?",
    "Perusahaan yang serius dengan brand thinking — bukan perusahaan yang hanya butuh “tambahan tim marketing”. Saya cari peran di mana saya bisa berkontribusi langsung ke strategy, bukan hanya eksekusi. Industri terbuka. Yang lebih penting adalah ada ruang untuk membangun: brand baru, repositioning, atau scaling brand existing yang sedang plateau.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SectionShell id="faq">
      <div className="reveal">
        <Eyebrow>09 FAQ</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
          Yang sering ditanyakan <span className="italic text-accent">recruiter.</span>
        </h2>
      </div>
      <ul className="mt-12 border-t border-hairline">
        {FAQS.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <li key={i} className="border-b border-hairline">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full text-left py-6 grid grid-cols-12 gap-4 items-baseline group"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-9 md:col-span-10 font-display text-xl md:text-[22px] leading-snug">{q}</span>
                <span className={`col-span-1 text-right text-2xl text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-45 text-accent" : ""}`}>
                  +
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 pb-6 pr-4">
                    <div className="col-span-2 md:col-span-1" />
                    <p className="col-span-10 md:col-span-10 text-foreground/80 leading-relaxed max-w-3xl">{a}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}

/* ==================== CONTACT ==================== */
export function Contact() {
  const ctas = [
    { label: "Chat WhatsApp →", href: CONTACT.wa, primary: true, external: true },
    { label: "Kirim email →", href: CONTACT.email, primary: false },
    { label: "View CV →", href: CONTACT.cv, primary: false, external: true },
    { label: "LinkedIn →", href: CONTACT.linkedin, primary: false, external: true },
    { label: "Instagram →", href: CONTACT.instagram, primary: false, external: true },
  ];
  const grid: [string, string, string, boolean][] = [
    ["Email", "Hasan.cakrawala@gmail.com", "mailto:Hasan.cakrawala@gmail.com", false],
    ["WhatsApp", "0895 3303 05975", CONTACT.wa, true],
    ["LinkedIn", "muhammad-hasan-fikri", CONTACT.linkedin, true],
    ["Instagram", "@hasan.cakrawala", CONTACT.instagram, true],
    ["Response time", "Within 24 hours", "", false],
  ];
  return (
    <section id="contact" className="relative bg-dark text-[var(--primary-foreground)] overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 28%, transparent), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 reveal">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
              <LiveDot />
              <span>10 LET'S TALK</span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-[96px] leading-[1] tracking-tight text-[var(--primary-foreground)]">
              Mari bangun brand <span className="italic text-accent">yang benar-benar dirasakan.</span>
            </h2>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              — DIAM · AMATI · BERISIK
            </div>
          </div>

          <div className="md:col-span-4 reveal">
            <div className="border border-white/15 rounded-md p-6 bg-white/[0.03]">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                <LiveDot />
                Currently available
              </div>
              <p className="mt-4 text-white/75 text-sm leading-relaxed">
                Terbuka untuk role Brand Manager, Marketing Manager, atau peran strategis di industri apapun.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {ctas.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={
                c.primary
                  ? "inline-flex items-center rounded-full bg-accent hover:bg-[var(--accent-dark)] text-white px-5 py-3 text-sm transition-colors"
                  : "inline-flex items-center rounded-full border border-white/25 hover:border-white text-white/85 hover:text-white px-5 py-3 text-sm transition-colors"
              }
            >
              {c.label}
            </a>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-white/10 py-8">
          {grid.map(([k, v, href, ext]) => (
            <div key={k}>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{k}</div>
              {href ? (
                <a
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-2 block text-sm text-white/85 hover:text-accent transition-colors break-words"
                >
                  {v}
                </a>
              ) : (
                <div className="mt-2 text-sm font-display italic text-accent">{v}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          <span>Muhammad Hasan Fikri · Brand &amp; Marketing Strategist</span>
          <span>© 2026 · Diam · Amati · Berisik</span>
        </div>
      </div>
    </section>
  );
}
