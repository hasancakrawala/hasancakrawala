import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, BeforeAfter, MetricCard, Insight, Tags } from "../case-kit";
import { getCaseNumber } from "@/data/roles";

const SLUG = "rawdee-glamping";

export function RawdeeGlampingCase() {
  const work = [
    'Positioning & tagline "Feel More Alive".',
    "Go-to-market strategy.",
    "Paid ads.",
    "Sistem reservasi & CRM sendiri (Notion, Google Sheets).",
    "Ekspansi distribusi ke Traveloka, Airbnb, Klook, TripAdvisor, dan Tiket.com.",
    "Perbaikan guest experience & standar layanan.",
    "Kolaborasi Adinda Thomas × Rawdee Glamping (2024) untuk awareness & trust.",
    "Project Director Barista Campfire × Poros Kopi (2024): kualifikasi kejuaraan barista nasional, kuota peserta penuh.",
    "Employee of the Year 2024.",
  ];
  return (
    <>
      <BackToWork slug={SLUG} bg="cream" />
      <SectionShell bg="cream" padding="pt-8 md:pt-10 pb-24 md:pb-28">
        <CaseHeader
          num={getCaseNumber(SLUG)}
          title="Rawdee Glamping"
          sub="Membangun brand dari nol di industri hospitality."
          meta="Hospitality / Mar 2023 – Jan 2025 · Head of Trip & Glamping Division · Tim 11 orang"
        />

        <div className="mt-10 reveal">
          <BeforeAfter
            before="Campsite tanpa brand, pemasaran digital belum berjalan, occupancy ~20%."
            beforeMeta="Mar 2023 · awal memegang divisi"
            after="Brand berbasis emotional experience, sales +100%, occupancy 60%+."
            afterMeta="Profit dalam 3 bulan"
          />
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-4 reveal [&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
          <MetricCard value="3 bln" label="Profit dalam 3 bulan sejak memegang divisi" />
          <MetricCard value="+100%" label="Sales (4 kuartal vs 4 kuartal sebelumnya)" />
          <MetricCard value="~20% → 60%+" label="Occupancy" />
          <MetricCard value="4.5 → 4.9" label="Rating Google dalam 4 kuartal" />
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

        <div className="mt-12">
          <Eyebrow>Apa yang saya kerjakan</Eyebrow>
          <ol className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-2">
            {work.map((s, i) => (
              <li key={s} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
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
