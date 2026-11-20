import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, MetricCard, Insight, Tags, DataTable } from "../case-kit";
import { getCaseNumber } from "@/data/roles";

const SLUG = "work-from-kebun";

// TODO(hasan): hasil masih tahap QA, tambahkan hasil campaign setelah data tersedia
export function WorkFromKebunCase() {
  const objective = [
    'Landing page khusus untuk penawaran weekday "Work From Kebun".',
    "Track setiap klik booking WhatsApp di halaman itu.",
    "Pisahkan lead campaign ini dari pixel yang dipakai bersama situs utama.",
    "Hubungkan setiap chat WhatsApp ke klik iklannya untuk offline conversion.",
    "Jalankan Meta Ads yang optimasi ke data lead yang bersih.",
  ];
  const startingPoint: [string, string][] = [
    ["GTM tidak terpasang dengan benar", "tanpa snippet resmi, tidak ada tag yang bisa fire."],
    ["CTA booking tidak terdeteksi", "tombol memakai window.open(), bukan link."],
    ["Belum ada pengukuran", "belum ada GA4 maupun Meta Pixel."],
    [
      "Dataset Meta dipakai bersama",
      "dataset dipakai 4 domain, dan event Lead sudah dipakai LP utama.",
    ],
  ];
  const work: [string, string][] = [
    ["Landing page", "LP 9 section dengan 7 CTA booking ke WhatsApp."],
    ["Audit", "Halaman live: DOM, script, dataLayer, network."],
    ["GTM", "Container baru: 7 tag · 5 trigger · 11 variable, hostname-locked."],
    ["GA4", "Key event generate_lead, 5 custom dimension, unwanted referrals."],
    ["Meta Pixel + Conversions API", "Event ID bersama untuk deduplikasi."],
    [
      "Visitor ID",
      "Cookie first-party, ditempel ke setiap pesan WA dan dikirim sebagai external_id.",
    ],
    ["Isolasi lead", 'Custom conversion "Lead – LP WFC" (berbasis URL).'],
    ["Meta Ads", '1 campaign · 1 ad set · 8 kreatif, optimasi ke "Lead – LP WFC".'],
  ];
  return (
    <>
      <BackToWork slug={SLUG} />
      <SectionShell padding="pt-8 md:pt-10 pb-24 md:pb-28">
        <CaseHeader
          num={getCaseNumber(SLUG)}
          title="Work From Kebun"
          sub="Satu campaign, satu landing page, setiap klik booking terhitung."
          meta="Rawdee Glamping · In-house (Rawdee Corporation) · 2026"
        />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          <MetricCard value="0 → 7" label="Tag aktif" />
          <MetricCard value="7/7" label="CTA booking ter-track" />
          <MetricCard value="3/3" label="Event Pixel + CAPI terdeduplikasi" />
          <MetricCard value="100%" label="Chat WhatsApp membawa visitor ID" />
        </div>

        <p className="mt-10 max-w-3xl text-foreground/85 leading-relaxed reveal">
          Landing page khusus campaign, full-stack tracking (GTM, GA4, Meta Pixel + CAPI), dan setup
          Meta Ads. Saya memegang landing page, tracking, dan Meta Ads.
        </p>

        {/* 01 Objective */}
        <div className="mt-16">
          <Eyebrow>01 Objective</Eyebrow>
          <ol className="mt-6 space-y-2 max-w-2xl">
            {objective.map((s, i) => (
              <li key={s} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 02 Starting point */}
        <div className="mt-16">
          <Eyebrow>02 Kondisi awal</Eyebrow>
          <ol className="mt-6 space-y-2 max-w-3xl">
            {startingPoint.map(([t, d], i) => (
              <li key={t} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <strong className="font-semibold">{t}</strong> — {d}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* 03 What I did */}
        <div className="mt-16">
          <Eyebrow>03 Yang saya kerjakan</Eyebrow>
          <ol className="mt-6 space-y-2 max-w-3xl">
            {work.map(([t, d], i) => (
              <li key={t} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <strong className="font-semibold">{t}</strong> — {d}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* 04 Event map */}
        <div className="mt-16">
          <Eyebrow>04 Event map</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Lead fire di ketujuh tombol "Booking sekarang" dan menjadi konversi utama campaign.
          </h3>
          <div className="mt-8">
            <DataTable
              columns={["Interaksi", "GA4", "Meta", "Parameter"]}
              rows={[
                [
                  "Page view",
                  <code className="text-xs">page_view</code>,
                  "PageView",
                  "external_id",
                ],
                [
                  '7 × "Booking sekarang"',
                  <code className="text-xs text-accent">generate_lead ★</code>,
                  <strong className="text-accent">Lead ★</strong>,
                  "paket, posisi CTA, event ID",
                ],
                [
                  "Cek ketersediaan",
                  <code className="text-xs">check_availability</code>,
                  "CheckAvailability",
                  "sumber klik",
                ],
                ["Scroll 90%", <code className="text-xs">scroll</code>, "—", "—"],
              ]}
            />
            <p className="mt-3 text-xs text-muted-foreground">
              ★ Konversi utama. check_availability adalah sinyal mikro untuk pengunjung yang masih
              mengecek tanggal.
            </p>
          </div>
        </div>

        {/* 05 Results */}
        <div className="mt-16">
          <Eyebrow>05 Hasil</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Before → after, diverifikasi saat QA.
          </h3>
          <div className="mt-8">
            <DataTable
              columns={["Metrik", "Before", "After"]}
              rows={[
                ["Tag aktif", "0", <strong className="text-accent">7</strong>],
                [
                  "CTA booking ter-track",
                  "0/7",
                  <strong className="text-accent">7/7 · QA: 4 klik = 4 lead</strong>,
                ],
                [
                  "Data lead",
                  "Tidak ada",
                  <strong className="text-accent">paket, posisi, event ID, external_id</strong>,
                ],
                [
                  "Server events (CAPI)",
                  "Tidak ada",
                  <strong className="text-accent">Aktif · 3/3 terdeduplikasi</strong>,
                ],
                [
                  "Isolasi lead campaign",
                  "Tercampur LP utama",
                  <strong className="text-accent">Custom conversion "Lead – LP WFC"</strong>,
                ],
                [
                  "Link chat WA → klik iklan",
                  "Tidak ada",
                  <strong className="text-accent">Visitor ID di setiap pesan</strong>,
                ],
              ]}
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Diverifikasi lewat GTM Preview, hit GA4, dan Meta Test Events.
            </p>
          </div>
        </div>

        {/* 06 Conclusion */}
        <div className="mt-16">
          <Eyebrow>06 Kesimpulan</Eyebrow>
          <ol className="mt-6 space-y-2 max-w-3xl">
            {[
              "Audit halaman live, bukan hanya UI GTM — kedua masalah kritis tidak terlihat dari GTM.",
              "Pisahkan campaign dengan custom conversion, bukan pixel baru.",
              "Visitor ID di chat WhatsApp mengubah klik anonim jadi lead yang bisa di-match.",
            ].map((s, i) => (
              <li key={s} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Insight>
              Kedua masalah kritis — GTM yang tidak bisa fire dan tombol booking yang tidak
              terdeteksi — tidak terlihat dari UI GTM. Keduanya baru ketemu saat halaman live
              diaudit.
            </Insight>
          </div>
        </div>

        <div className="mt-10">
          <Tags
            tags={[
              "Landing Page",
              "Google Tag Manager",
              "GA4",
              "Meta Pixel",
              "Conversions API",
              "Meta Ads",
            ]}
          />
        </div>
      </SectionShell>
    </>
  );
}
