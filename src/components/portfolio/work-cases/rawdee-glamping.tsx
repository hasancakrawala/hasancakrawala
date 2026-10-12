import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, BeforeAfter, MetricCard, Insight, Tags } from "../case-kit";

export function RawdeeGlampingCase() {
  return (
    <>
      <BackToWork />
      <SectionShell bg="cream" className="!pt-10 md:!pt-14">
        <CaseHeader
          num="01"
          title="Rawdee Glamping"
          sub="Membangun brand dari nol di industri hospitality."
          meta="Hospitality / 2023 — 2024"
        />

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
              Brand glamping baru di pasar yang sudah penuh — campsite tradisional, resort, hingga
              villa. Tanpa diferensiasi yang jelas, harga jadi satu-satunya pembeda. Dan itu jalan
              menuju red ocean.
            </p>
          </div>
          <div>
            <Eyebrow>Keputusan krusial</Eyebrow>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              Berhenti menjual fasilitas. Mulai menjual <em>perasaan</em>. Tagline "Feel More Alive"
              bukan slogan iklan — tapi janji emosional yang konsisten dijaga di setiap touchpoint:
              dari foto, copy, hingga pengalaman menginap.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Insight>
            "Feel More Alive" bukan slogan — itu adalah janji emosional. Rawdee Glamping menjadi
            brand pertama di perusahaan yang memiliki tagline, dan hingga kini menjadi kontributor
            pendapatan tertinggi di seluruh lini bisnis.
          </Insight>
        </div>

        <div className="mt-8">
          <Tags
            tags={[
              "Emotional Branding",
              "Brand Positioning",
              "Experience Design",
              "Digital Marketing",
            ]}
          />
        </div>
      </SectionShell>
    </>
  );
}
