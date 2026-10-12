import { useEffect, useState } from "react";
import { Eyebrow, SectionShell } from "./primitives";
import { CERTIFICATIONS } from "@/data/certifications";

export function CertificationsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = CERTIFICATIONS.find((c) => c.id === openId);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <SectionShell className="!pt-28 md:!pt-36">
      <div className="reveal">
        <Eyebrow>Certifications</Eyebrow>
        <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
          Belajar yang <span className="italic text-accent">terus berjalan.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {CERTIFICATIONS.length} sertifikat dari workshop dan program yang diselesaikan. Klik untuk
          memperbesar.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {CERTIFICATIONS.map((c) => (
          <div
            key={c.id}
            className="group reveal border border-hairline rounded-md overflow-hidden bg-cream hover:-translate-y-0.5 transition-transform duration-300"
          >
            <button onClick={() => setOpenId(c.id)} className="block w-full text-left">
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={c.image}
                  alt={`Sertifikat ${c.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
            </button>
            <div className="p-5">
              <button onClick={() => setOpenId(c.id)} className="block w-full text-left">
                <h3 className="font-display text-lg leading-snug">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.issuer}</p>
              </button>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <span>{c.date}</span>
                <button
                  onClick={() => setOpenId(c.id)}
                  className="text-accent hover:opacity-80 transition-opacity"
                >
                  Perbesar →
                </button>
              </div>
              {c.note && <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>}
              <a
                href={c.pdf}
                download
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-colors"
              >
                Download PDF ↓
              </a>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenId(null)}
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 md:p-10"
        >
          <button
            aria-label="Tutup"
            onClick={() => setOpenId(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-white transition-colors"
          >
            ✕
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={open.image}
              alt={`Sertifikat ${open.title}`}
              className="w-full h-auto rounded-md shadow-2xl"
            />
            <div className="mt-4 text-center text-white/85">
              <h3 className="font-display text-xl">{open.title}</h3>
              <p className="mt-1 text-sm text-white/60">
                {open.issuer} · {open.date}
              </p>
              <a
                href={open.pdf}
                download
                onClick={(e) => e.stopPropagation()}
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-80 transition-opacity"
              >
                Download PDF ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
