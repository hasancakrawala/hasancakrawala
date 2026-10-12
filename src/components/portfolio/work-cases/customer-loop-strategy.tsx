import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, BeforeAfter, MetricCard, Insight, Tags } from "../case-kit";

export function CustomerLoopStrategyCase() {
  const steps = [
    "Amati behavior konsumen yang membagikan pengalaman secara organik.",
    "Rancang experience dengan trigger emosional kuat — self reward, kedaerahan.",
    "Konsumen jadi agen marketing organik — menyebarkan brand ke lingkaran sosialnya.",
    "Loop berulang — konten tak terbatas, tanpa biaya produksi tambahan.",
  ];
  return (
    <>
      <BackToWork />
      <SectionShell className="!pt-10 md:!pt-14">
        <CaseHeader
          num="02"
          title="Customer Loop Strategy"
          sub="Performance marketing yang efisien dan organik — di 3 brand sekaligus."
          meta="Integrated Campaign / 2025 — Now"
        />

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

        <div className="mt-14">
          <Eyebrow>The customer loop</Eyebrow>
          <div className="mt-6 grid md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="bg-background border border-hairline rounded-md p-5 relative">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{s}</p>
                {i < 3 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
            <div
              className="rounded-md p-5 flex flex-col items-start justify-between"
              style={{ background: "var(--accent-soft)" }}
            >
              <svg viewBox="0 0 40 40" className="w-9 h-9 text-accent">
                <path
                  d="M30 14 A 12 12 0 1 0 32 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M30 8 L32 14 L26 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mt-3">
                Loop
              </span>
              <p className="mt-2 text-sm text-foreground/80">Self-sustaining brand momentum.</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Insight>
            Coffee House: experience bar diposisikan sebagai "self reward" — mendorong orang berbagi
            reward-nya. Roastery: rasa kedaerahan jadi simbol kebanggaan yang membuat orang ingin
            membuktikan dan bercerita.
          </Insight>
        </div>

        <div className="mt-8">
          <Tags
            tags={[
              "Performance Marketing",
              "Customer Loop",
              "UGC Strategy",
              "Consumer Behavior",
              "Campaign Optimization",
            ]}
          />
        </div>
      </SectionShell>
    </>
  );
}
