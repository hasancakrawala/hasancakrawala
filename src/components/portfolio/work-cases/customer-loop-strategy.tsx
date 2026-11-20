import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, BeforeAfter, MetricCard, Insight, Tags } from "../case-kit";
import { getCaseNumber } from "@/data/roles";

const SLUG = "customer-loop-strategy";

export function CustomerLoopStrategyCase() {
  const steps = [
    "Amati behavior konsumen yang membagikan pengalaman secara organik.",
    "Rancang experience dengan trigger emosional kuat — self reward, kedaerahan.",
    "Konsumen jadi agen marketing organik — menyebarkan brand ke lingkaran sosialnya.",
    "Loop berulang — konten tak terbatas, tanpa biaya produksi tambahan.",
  ];
  return (
    <>
      <BackToWork slug={SLUG} />
      <SectionShell padding="pt-8 md:pt-10 pb-24 md:pb-28">
        <CaseHeader
          num={getCaseNumber(SLUG)}
          title="Customer Loop Strategy"
          sub="Performance marketing yang efisien dan organik — di 3 brand sekaligus."
          meta="Integrated Campaign · In-house (Rawdee Corporation) / 2025 — Now"
        />

        <div className="mt-10 grid grid-cols-3 gap-4 reveal">
          <MetricCard
            value="+50%"
            label="Revenue 3 unit bisnis YoY (4 kuartal vs 4 kuartal sebelumnya)"
          />
          <MetricCard value="+70%" label="ROMI di semua unit" />
          <MetricCard value="1M+" label="Reach gabungan program talent, komunitas & partnership" />
        </div>

        <p className="mt-10 max-w-3xl text-foreground/85 leading-relaxed reveal">
          Revenue 3 unit bisnis tumbuh +50% YoY dan ROMI naik +70% lewat brand repositioning,
          go-to-market strategy, dan paid ads scaling. Customer loop adalah salah satu strategi di
          dalamnya: membuat konsumen ikut menyebarkan brand, sehingga setiap rupiah iklan mendapat
          dorongan organik.
        </p>

        <div className="mt-12 reveal">
          <BeforeAfter
            before="Budget marketing besar tapi hasil flat. Konten harus terus diproduksi, biaya membengkak."
            beforeMeta="Ketergantungan pada paid traffic"
            after="Konsumen menyebarkan brand sendiri lewat experience yang dirancang. Loop berulang otomatis."
            afterMeta="Salah satu strategi di balik revenue +50% YoY · ROMI +70%"
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

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Contoh: experience</Eyebrow>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              Women's Wellness Day Retreat × Ritual (2025) — semua sesi penuh.
            </p>
          </div>
          <div>
            <Eyebrow>Contoh: talent, komunitas & partnership</Eyebrow>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              Program talent, komunitas, dan partnership dengan reach gabungan 1M+.
            </p>
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
