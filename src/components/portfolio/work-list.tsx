import { Link } from "@tanstack/react-router";
import { Eyebrow, SectionShell } from "./primitives";
import { WORK_ITEMS } from "@/data/work";

export function WorkListPage() {
  return (
    <SectionShell className="!pt-28 md:!pt-36">
      <div className="reveal">
        <Eyebrow>Selected work</Eyebrow>
        <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.04] tracking-tight">
          Project, <span className="italic text-accent">hasil yang berbicara.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Daftar ini terus bertambah seiring project baru selesai. Bukan portfolio dekoratif — tiap
          entry bisa dilacak angkanya.
        </p>
      </div>

      <ul className="mt-14 border-t border-hairline">
        {WORK_ITEMS.map((w) => (
          <li key={w.slug} className="border-b border-hairline">
            <Link
              to="/work/$slug"
              params={{ slug: w.slug }}
              className="group grid md:grid-cols-12 gap-3 md:gap-6 items-baseline py-8 transition-colors hover:bg-accent-soft px-3 -mx-3 rounded-md"
            >
              <div className="md:col-span-5">
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
                <h2 className="mt-3 font-display text-2xl md:text-3xl leading-tight">{w.title}</h2>
                <p className="mt-1 font-display italic text-accent">{w.tagline}</p>
              </div>
              <p className="md:col-span-4 text-sm text-muted-foreground">{w.excerpt}</p>
              <div className="md:col-span-2 font-display text-lg md:text-xl">{w.stat}</div>
              <div className="md:col-span-1 md:text-right text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </Link>
            {w.pdf && (
              <div className="px-3 -mx-3 pb-6 flex justify-end">
                <a
                  href={w.pdf}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-colors"
                >
                  Download PDF ↓
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
