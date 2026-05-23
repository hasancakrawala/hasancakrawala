import { useEffect, useRef, useState, type ReactNode } from "react";

/* -------- Reveal-on-scroll helper -------- */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* -------- Scroll progress -------- */
export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setW(Math.min(100, Math.max(0, scrolled * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div className="h-full bg-accent transition-[width] duration-75" style={{ width: `${w}%` }} />
    </div>
  );
}

/* -------- Brand dot -------- */
export function Dot({ className = "" }: { className?: string }) {
  return <span className={`inline-block w-1.5 h-1.5 rounded-full bg-accent align-middle ${className}`} />;
}

/* -------- Eyebrow -------- */
export function Eyebrow({ children, withDot = true }: { children: ReactNode; withDot?: boolean }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {withDot && <Dot />}
      <span>{children}</span>
    </div>
  );
}

/* -------- Sticky nav -------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["manifesto", "#manifesto"],
    ["about", "#about"],
    ["framework", "#framework"],
    ["work", "#work"],
    ["process", "#process"],
    ["faq", "#faq"],
  ] as const;
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
      style={{ backgroundColor: "color-mix(in oklab, var(--background) 78%, transparent)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <nav className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Dot />
          <span className="font-display text-[17px] tracking-tight">Hasan Fikri</span>
        </a>
        <div className="hidden md:flex items-center gap-7 font-mono text-[12px] lowercase text-muted-foreground">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-dark text-[var(--primary-foreground)] px-4 py-2 text-[12px] tracking-wide hover:bg-accent transition-colors"
          >
            Hire me →
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-foreground"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-3 h-px bg-current ml-auto" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-hairline bg-background px-6 py-4 flex flex-col gap-3 font-mono text-sm lowercase">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex w-fit rounded-full bg-dark text-[var(--primary-foreground)] px-4 py-2 text-[12px]"
          >
            Hire me →
          </a>
        </div>
      )}
    </header>
  );
}

/* -------- Social icons (outline SVGs) -------- */
const ICONS: Record<string, ReactNode> = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-12.8 7.1L3 21l2.5-5A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4M12 17v-7" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  cv: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6M9 14h6M9 18h4" />
    </svg>
  ),
};

export function SocialIcon({
  kind,
  href,
  label,
  external,
}: {
  kind: keyof typeof ICONS;
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-hairline text-muted-foreground hover:text-accent hover:border-accent transition-colors"
    >
      <span className="w-5 h-5 block">{ICONS[kind]}</span>
      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}

/* -------- Pulsing live dot -------- */
export function LiveDot({ color = "bg-emerald-500" }: { color?: string }) {
  return (
    <span className="relative inline-flex w-2 h-2">
      <span className={`absolute inset-0 rounded-full ${color} opacity-75 animate-ping`} />
      <span className={`relative inline-flex w-2 h-2 rounded-full ${color}`} />
    </span>
  );
}

/* -------- Section heading helper -------- */
export function SectionShell({
  id,
  children,
  className = "",
  bg = "background",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "background" | "cream" | "dark";
}) {
  const bgClass = bg === "cream" ? "bg-cream" : bg === "dark" ? "bg-dark text-[var(--primary-foreground)]" : "bg-background";
  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-36 md:py-48">{children}</div>
    </section>
  );
}

/* -------- Track Record sidebar card -------- */
export function TrackRecord() {
  const rows: [string, ReactNode][] = [
    ["Revenue growth", <>10–15<span className="text-accent">×</span> in 3 mo</>],
    ["Budget efficiency", <span className="text-accent">+70%</span>],
    ["CSAT score", <>4.9 / 5</>],
    ["Brands managed", <>3 in 1 ecosystem</>],
    ["Experience", <>9+ years</>],
  ];
  return (
    <div className="border border-hairline rounded-lg p-5 bg-background/60">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Track Record</div>
      <ul className="space-y-3">
        {rows.map(([k, v], i) => (
          <li key={i} className="flex items-baseline justify-between gap-3 text-sm">
            <span className="text-muted-foreground">{k}</span>
            <span className="font-display italic text-foreground text-right">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------- Marquee -------- */
export function Marquee() {
  const words = [
    "Emotional Branding",
    "Performance Marketing",
    "Customer Loop",
    "Multi-Brand Architecture",
    "AI Marketing",
    "Experience Design",
  ];
  const set = (
    <div className="flex shrink-0 items-center gap-8 px-4">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-display text-2xl md:text-3xl">{w}</span>
          <Dot />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-hairline py-6 bg-background">
      <div className="flex" style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
        {set}
        {set}
      </div>
    </div>
  );
}
