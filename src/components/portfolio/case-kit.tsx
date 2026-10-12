import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Eyebrow, SectionShell } from "./primitives";

/* -------- Back-to-work link, shown above the case's own CaseHeader.
   The optional PDF download sits on this same top row so it's visible the
   instant the page opens — no scrolling needed on any screen size. -------- */
export function BackToWork({ pdf }: { pdf?: string }) {
  return (
    <div className="pt-28 md:pt-36 px-6 md:px-10 mx-auto max-w-[1400px] flex items-center justify-between gap-4">
      <Link
        to="/work"
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors"
      >
        ← All work
      </Link>
      {pdf && <DownloadPdf href={pdf} />}
    </div>
  );
}

export function CaseHeader({
  num,
  title,
  sub,
  meta,
}: {
  num: string;
  title: string;
  sub: string;
  meta: string;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-6 items-end border-b border-hairline pb-8">
      <div className="md:col-span-2 font-display italic text-7xl md:text-8xl text-accent leading-none">
        {num}
      </div>
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

export function BeforeAfter({
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
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Before
        </div>
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

export function MetricCard({ value, label, tag }: { value: string; label: string; tag?: string }) {
  return (
    <div className="bg-background border border-hairline rounded-md p-5 relative overflow-hidden">
      <span className="absolute top-0 left-0 right-0 h-px bg-accent" />
      {tag && (
        <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
          {tag}
        </span>
      )}
      <div className="font-display text-3xl md:text-4xl leading-none">{value}</div>
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function Insight({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-md p-6 md:p-7 border-l-2 border-accent"
      style={{ background: "var(--accent-soft)" }}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
        Insight
      </div>
      <p className="font-display text-lg md:text-xl leading-snug italic">{children}</p>
    </div>
  );
}

export function DownloadPdf({ href }: { href: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground border border-hairline rounded-full px-3 py-1.5 hover:text-accent hover:border-accent transition-colors"
    >
      Download PDF ↓
    </a>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {tags.map((t) => (
        <span
          key={t}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground border border-hairline rounded-full px-3 py-1"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/* -------- Severity-ranked finding row (audit / diagnosis tables) -------- */
const SEVERITY_STYLES: Record<string, string> = {
  CRITICAL: "bg-accent text-white",
  HIGH: "bg-[color-mix(in_oklab,var(--accent)_55%,#D9A441)] text-white",
  MEDIUM: "bg-muted-foreground/70 text-white",
};

export function Finding({
  severity,
  title,
  children,
}: {
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-4 py-5 border-b border-hairline last:border-0">
      <div className="md:col-span-2">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${SEVERITY_STYLES[severity]}`}
        >
          {severity}
        </span>
      </div>
      <div className="md:col-span-10">
        <p className="text-foreground/90">
          <strong className="font-semibold">{title}</strong>{" "}
          <span className="text-foreground/75">{children}</span>
        </p>
      </div>
    </div>
  );
}

/* -------- Simple key→value stat row table (used for event maps, naming systems, etc.) -------- */
export function DataTable({ columns, rows }: { columns: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="border-b border-hairline">
            {columns.map((c) => (
              <th
                key={c}
                className="text-left font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground py-3 pr-4"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-hairline/60 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-3 pr-4 text-foreground/85 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------- Numbered process step list (reused for the 6-step / F0-F5 style closers) -------- */
export function ProcessSteps({ steps }: { steps: [string, string][] }) {
  return (
    <div className="grid md:grid-cols-2 border-t border-hairline">
      {steps.map(([t, d], i) => (
        <div
          key={t}
          className={`py-6 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"} border-b border-hairline ${i % 2 === 0 ? "md:border-r" : ""}`}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h4 className="font-display text-xl">{t}</h4>
          </div>
          <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{d}</p>
        </div>
      ))}
    </div>
  );
}

/* -------- Closing CTA strip for "what I can do for your business" style offers -------- */
export function ServiceOffers({ offers }: { offers: [string, string][] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 bg-cream rounded-lg p-6 md:p-8">
      {offers.map(([t, d]) => (
        <div key={t}>
          <h4 className="font-display text-lg">{t}</h4>
          <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function PlaceholderMedia({
  from,
  to,
  children,
  ratio = "16 / 9",
}: {
  from: string;
  to: string;
  children: ReactNode;
  ratio?: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-md flex items-center justify-center"
      style={{ aspectRatio: ratio, background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {children}
    </div>
  );
}
