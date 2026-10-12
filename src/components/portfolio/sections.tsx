import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Dot,
  Eyebrow,
  LiveDot,
  SectionShell,
  SocialIcon,
  TrackRecord,
  Marquee,
} from "./primitives";
import { WORK_ITEMS } from "@/data/work";
import hasanProfile from "@/assets/hasan-profile.webp";

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
              className="block group relative overflow-hidden rounded-md border border-hairline bg-cream transition-transform duration-300 hover:-translate-y-0.5"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={hasanProfile}
                alt="Muhammad Hasan Fikri portrait"
                width={1000}
                height={1414}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain object-bottom"
              />
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
            <h1 className="font-display leading-[0.9] tracking-[-0.035em] text-foreground break-words font-black">
              <span className="block text-[13vw] sm:text-6xl md:text-[72px] lg:text-[88px] xl:text-[112px]">
                Muhammad
              </span>
              <span className="block text-[13vw] sm:text-6xl md:text-[72px] lg:text-[88px] xl:text-[112px] italic text-accent">
                Hasan Fikri<span className="text-accent">.</span>
              </span>
            </h1>
            <div className="mt-8 flex items-center gap-3 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              <span>Brand &amp; Marketing Strategist</span>
            </div>
            <p className="mt-5 max-w-xl text-lg md:text-xl font-display italic text-foreground/85 leading-snug">
              I help brands grow revenue and build loyal customers — through emotional branding and
              performance marketing.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <SocialIcon kind="whatsapp" href={CONTACT.wa} label="WhatsApp" external />
              <SocialIcon kind="linkedin" href={CONTACT.linkedin} label="LinkedIn" external />
              <SocialIcon kind="instagram" href={CONTACT.instagram} label="Instagram" external />
              <SocialIcon kind="cv" href={CONTACT.cv} label="View CV" external />
            </div>

            <nav aria-label="Quick links" className="mt-8 flex flex-wrap items-center gap-2.5">
              <Link
                to="/work"
                className="inline-flex items-center rounded-full border border-hairline px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                Selected Work
              </Link>
              <Link
                to="/certifications"
                className="inline-flex items-center rounded-full border border-hairline px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                Certifications
              </Link>
              <Link
                to="/"
                hash="about"
                className="inline-flex items-center rounded-full border border-hairline px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center rounded-full bg-dark text-[var(--primary-foreground)] px-4 py-2 text-sm hover:bg-accent transition-colors"
              >
                Let's Talk →
              </Link>
            </nav>
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
            Karena saya tidak menjual desain. Saya menjual{" "}
            <em className="font-display not-italic">posisi</em>. Brand yang kuat tidak butuh banyak
            ornamen — yang dibutuhkan adalah pesan dan posisi yang tepat di benak konsumen.
          </p>
          <p>
            Setiap elemen di halaman ini dipilih karena alasan strategis, bukan karena terlihat
            menarik. Jika Anda mencari portofolio yang ramai, ini bukan tempatnya. Jika Anda mencari
            pemikir strategis yang mampu menggerakkan revenue lewat brand thinking — silakan lanjut
            membaca.
          </p>
          <div className="mt-8 bg-background border-l-2 border-accent rounded-r-md p-6 md:p-8 shadow-sm">
            <div className="font-display italic text-accent text-5xl leading-none mb-2">“</div>
            <p className="font-display text-xl md:text-2xl leading-snug">
              Diam di tempat yang tepat.{" "}
              <span className="italic">Berisik di tempat yang tepat.</span>
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              — Prinsip kerja, sejak 2016
            </p>
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
                Sejak 2016 mengamati perilaku konsumen dan bagaimana emosi mendasari setiap
                keputusan beli. Lulusan Pendidikan Olahraga yang masuk dunia marketing. Memimpin
                event besar di kampus yang mengundang Kemenpora, Wakil Walikota, dan KONI.
              </p>
            </div>
            <div>
              <Eyebrow>Turning point</Eyebrow>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground/85">
                Memimpin divisi glamping dari nol. Menemukan bahwa positioning bukan tentang produk,
                tapi posisi emosional di benak konsumen. Bedanya bukan di produk — tapi di bagaimana
                produk dipersepsikan dan disuarakan.
              </p>
            </div>
            <div>
              <Eyebrow>Insight inti</Eyebrow>
              <p className="mt-4 font-display italic text-2xl md:text-3xl leading-snug max-w-3xl">
                “Produk yang menyentuh emosi tidak perlu bersaing soal harga — karena ia sudah
                berdiri di dimensi yang berbeda.”
              </p>
            </div>
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="md:sticky md:top-24 border border-hairline rounded-lg p-6 bg-background">
            <Eyebrow>Profile at a glance</Eyebrow>
            <dl className="mt-5 space-y-3 text-sm">
              {profile.map(([k, v]) => {
                const isCert = k === "Certifications";
                return (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b border-hairline/60 pb-2 last:border-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd
                      className={
                        k === "Specialty" || k === "Status"
                          ? "font-display italic text-accent text-right"
                          : "text-foreground text-right"
                      }
                    >
                      {isCert ? (
                        <Link
                          to="/certifications"
                          className="hover:text-accent transition-colors underline-offset-4 hover:underline"
                        >
                          {v}
                        </Link>
                      ) : (
                        v
                      )}
                    </dd>
                  </div>
                );
              })}
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
          <Link
            to="/certifications"
            className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-80 transition-opacity"
          >
            View Certificates <span aria-hidden>→</span>
          </Link>
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
          <circle
            cx="40"
            cy="40"
            r="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
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
          <path
            d="M10 40 C 22 22, 58 22, 70 40 C 58 58, 22 58, 10 40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
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
          <path
            d="M40 28 A 14 14 0 0 1 40 52"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M48 22 A 22 22 0 0 1 48 58"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M56 16 A 30 30 0 0 1 56 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];
  return (
    <SectionShell id="framework" bg="dark" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 65%)",
        }}
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
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-8 font-display italic text-5xl md:text-6xl text-[var(--primary-foreground)]">
                {s.word}
              </h3>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {s.sub}
              </div>
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
        style={{
          background:
            "linear-gradient(90deg, var(--accent-soft), color-mix(in oklab, var(--accent-soft) 30%, transparent))",
        }}
      >
        <p className="text-base md:text-lg max-w-3xl">
          <strong className="font-semibold">Keunggulan utama</strong> — Satu dari sedikit
          profesional yang menguasai <em className="font-display italic">brand strategy</em>{" "}
          sekaligus <em className="font-display italic">performance marketing</em> secara teknikal —
          bukan hanya strategis.
        </p>
        <span className="shrink-0 inline-flex items-center rounded-full border border-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent bg-background/60">
          Rare combo
        </span>
      </div>

      <div className="mt-14 grid md:grid-cols-3 border-t border-hairline">
        {pillars.map((p, i) => (
          <div
            key={p.n}
            className={`py-10 md:py-12 ${i > 0 ? "md:border-l md:pl-10" : "md:pr-10"} ${i < 2 ? "md:pr-10 border-b md:border-b-0 border-hairline" : ""} reveal`}
          >
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
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
          Also strong in
        </div>
        <p className="text-[15px] md:text-base text-foreground/85">
          Problem Solving · Team Leadership · Consumer Behavior Research · Event Management ·
          Cross-functional Collaboration
        </p>
      </div>
    </SectionShell>
  );
}

/* ==================== SELECTED WORK (homepage teaser) ==================== */
export function SelectedWork() {
  const featured = WORK_ITEMS.slice(0, 3);
  return (
    <SectionShell id="work">
      <div className="reveal">
        <Eyebrow>05 Selected work</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
          Project, <span className="italic text-accent">hasil yang berbicara.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Bukan portfolio dekoratif — ini hasil kerja nyata yang bisa dilacak angkanya. Daftar
          lengkap terus bertambah.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
        {featured.map((w) => (
          <div
            key={w.slug}
            className="group reveal transition-transform duration-300 hover:-translate-y-0.5 border border-hairline rounded-md p-6 bg-background"
          >
            <Link to="/work/$slug" params={{ slug: w.slug }} className="block">
              <div className="flex flex-wrap gap-2">
                {w.category.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground border border-hairline rounded-full px-2.5 py-0.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-2xl">{w.title}</h3>
              <p className="font-display italic text-accent text-lg">{w.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground">{w.stat}</p>
              <span className="mt-3 inline-block text-sm text-foreground group-hover:text-accent transition-colors">
                Read case →
              </span>
            </Link>
            {w.pdf && (
              <a
                href={w.pdf}
                download
                className="mt-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-colors"
              >
                Download PDF ↓
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 reveal">
        <Link
          to="/work"
          className="inline-flex items-center justify-center rounded-full bg-dark text-[var(--primary-foreground)] px-6 py-3 text-sm hover:bg-accent transition-colors"
        >
          Lihat Semua Project →
        </Link>
      </div>
    </SectionShell>
  );
}

/* ==================== NUMBERS ==================== */
export function Numbers() {
  const hero = [
    {
      value: "10–15×",
      desc: "Revenue growth Rawdee Glamping dalam 3 bulan pertama.",
      tag: "3-month growth",
    },
    {
      value: "+70%",
      desc: "Efisiensi budget marketing melalui customer loop strategy.",
      tag: "Budget",
    },
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
          <div
            key={h.value}
            className="relative p-7 border border-white/10 rounded-md bg-white/[0.02] reveal"
          >
            <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
              {h.tag}
            </span>
            <div className="font-display text-6xl md:text-7xl text-[var(--primary-foreground)] leading-none">
              {h.value}
            </div>
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
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
          — Working principle
        </span>
        <p className="font-display italic text-xl md:text-2xl text-[var(--primary-foreground)] text-center max-w-2xl">
          “Produk yang menyentuh emosi tidak perlu bersaing soal harga.”
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
          M.H.F. / 2026
        </span>
      </div>
    </SectionShell>
  );
}

/* ==================== PROCESS ==================== */
export function Process() {
  const steps = [
    [
      "Listen & Map",
      "Dengarkan kondisi brand saat ini, pain points pemilik, dan apa yang sudah dicoba. Map situasi: produk, konsumen, kompetitor, dan resource yang tersedia.",
    ],
    [
      "Find the Gap",
      "Riset celah emosional konsumen yang belum disentuh kompetitor. Ini bukan tentang fitur produk — tapi tentang posisi yang belum diambil siapapun.",
    ],
    [
      "Define Positioning",
      "Tetapkan positioning yang tajam, tagline yang menjawab, dan brand voice yang konsisten. Tidak hanya kalimat — tapi janji emosional yang bisa dijaga.",
    ],
    [
      "Build the System",
      "Susun integrated marketing system: campaign, customer journey, customer loop, dashboard analytics — semuanya saling terhubung dalam satu workflow.",
    ],
    [
      "Execute & Scale",
      "Eksekusi performance marketing dengan hands-on. Bukan delegasi murni — saya turun langsung ke ads manager, GTM, dan analytics untuk memastikan strategi terimplementasi.",
    ],
    [
      "Measure & Iterate",
      "Track hasil tiap minggu, identifikasi apa yang bekerja, dan iterate. Hasil signifikan biasanya muncul di bulan ke-3 — bukan instant, tapi konsisten.",
    ],
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
              Proses ini konsisten di setiap engagement — terlepas dari ukuran brand atau
              industrinya. Yang berubah hanya konteks; struktur kerjanya tetap.
            </p>
          </div>
        </div>
        <ol className="md:col-span-7">
          {steps.map(([t, d], i) => (
            <li
              key={t}
              className={`grid grid-cols-12 gap-4 py-8 reveal ${i > 0 ? "border-t border-hairline" : ""}`}
            >
              <div className="col-span-2 font-display italic text-5xl text-accent leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
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
    {
      n: "02",
      t: "Analytics & Reporting",
      items: ["Google Analytics", "Google Tag Manager", "Google Sheets"],
    },
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
          AI bukan sekadar tools tambahan — seluruh workflow brand &amp; marketing saya integrasikan
          dengan AI untuk meningkatkan kecepatan eksekusi, kualitas output, dan efisiensi
          operasional secara keseluruhan.
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
                <span className="col-span-2 md:col-span-1 font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-9 md:col-span-10 font-display text-xl md:text-[22px] leading-snug">
                  {q}
                </span>
                <span
                  className={`col-span-1 text-right text-2xl text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-45 text-accent" : ""}`}
                >
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
                    <p className="col-span-10 md:col-span-10 text-foreground/80 leading-relaxed max-w-3xl">
                      {a}
                    </p>
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
    { label: "View Certificates →", href: "/certifications", primary: false, internal: true },
    { label: "LinkedIn →", href: CONTACT.linkedin, primary: false, external: true },
    { label: "Instagram →", href: CONTACT.instagram, primary: false, external: true },
  ];
  const grid: [string, string, string, boolean, boolean?][] = [
    ["Email", "Hasan.cakrawala@gmail.com", "mailto:Hasan.cakrawala@gmail.com", false],
    ["WhatsApp", "0895 3303 05975", CONTACT.wa, true],
    ["LinkedIn", "muhammad-hasan-fikri", CONTACT.linkedin, true],
    ["Certificates", "View files →", "/certifications", false, true],
    ["Instagram", "@hasan.cakrawala", CONTACT.instagram, true],
    ["Response time", "Within 24 hours", "", false],
  ];
  return (
    <section
      id="contact"
      className="relative bg-dark text-[var(--primary-foreground)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 28%, transparent), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 reveal">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
              <LiveDot />
              <span>10 LET'S TALK</span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-[96px] leading-[1] tracking-tight text-[var(--primary-foreground)]">
              Mari bangun brand{" "}
              <span className="italic text-accent">yang benar-benar dirasakan.</span>
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
                Terbuka untuk role Brand Manager, Marketing Manager, atau peran strategis di
                industri apapun.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {ctas.map((c) =>
            c.internal ? (
              <Link
                key={c.label}
                to={c.href as "/certifications"}
                className="inline-flex items-center rounded-full border border-white/25 hover:border-white text-white/85 hover:text-white px-5 py-3 text-sm transition-colors"
              >
                {c.label}
              </Link>
            ) : (
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
            ),
          )}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-y border-white/10 py-8">
          {grid.map(([k, v, href, ext, internal]) => (
            <div key={k}>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                {k}
              </div>
              {internal ? (
                <Link
                  to={href as "/certifications"}
                  className="mt-2 block text-sm text-white/85 hover:text-accent transition-colors break-words"
                >
                  {v}
                </Link>
              ) : href ? (
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
