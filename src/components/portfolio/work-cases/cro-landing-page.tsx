import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, MetricCard, Insight, Tags, DataTable } from "../case-kit";
import { getCaseNumber } from "@/data/roles";

const SLUG = "cro-landing-page";

export function CroLandingPageCase() {
  const diagnosis = [
    "Layar pertama hanya headline + foto: tanpa harga, tanpa bukti, tanpa langkah berikutnya.",
    "Tombol WhatsApp pertama baru muncul di layar 7 dari 13, harga pertama di layar 8.",
    "Kalender terbuka di tanggal 1, jadi yang pertama terlihat adalah tanggal yang sudah lewat.",
    "Sticky header baru muncul setelah 75% halaman.",
    "Instagram menyumbang 72% sesi iklan, tapi konversinya 1,04% vs Facebook 2,49%.",
    "Kreatif: CPL antar kreatif berbeda 3×; 3 dari 8 ad nyaris tidak delivery karena detik pembukanya lemah.",
  ];
  const approach: [string, string][] = [
    [
      "Landing page v2",
      'Paket → review → kalender langsung setelah layar pembuka. Layar pembuka berisi rating Google, waktu tempuh, dan tombol "Lihat paket & harga". Kalender mulai hari ini; tanggal yang tersedia membuka pesan WA yang sudah terisi.',
    ],
    [
      "Kreatif",
      "5 ad di-pause. 2 ad UGC dipertahankan tanpa perubahan sebagai kontrol. 3 kreatif baru di-brief dari hasil diagnostik.",
    ],
    [
      "Pengukuran",
      "Klik WA sebagai event lead di Pixel, CAPI, dan GA4. Kode ad + sumber tombol di setiap pesan WA. Delay 300 ms agar event terkirim sebelum WhatsApp terbuka di iPhone.",
    ],
  ];
  return (
    <>
      <BackToWork slug={SLUG} bg="cream" />
      <SectionShell bg="cream" padding="pt-8 md:pt-10 pb-24 md:pb-28">
        <CaseHeader
          num={getCaseNumber(SLUG)}
          title="Meta Ads CRO Optimization"
          sub="Rebuild landing page iklan menurunkan cost per lead 38%, dengan budget harian yang sama."
          meta="Rawdee Glamping · In-house (Rawdee Corporation) · 2026"
        />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          <MetricCard value="−38%" label="Cost per lead" />
          <MetricCard value="2,1×" label="Conversion rate LP (2,83% → 5,86%)" />
          <MetricCard value="+71%" label="Lead per hari" />
          <MetricCard value="+6%" label="Spend harian" />
        </div>

        <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
          Ad set weekend stay. Before: 5–30 Okt 2026. After: 1–15 Nov 2026. Lead = klik tombol
          WhatsApp di LP. Nilai uang ditampilkan sebagai index (permintaan perusahaan); rate dan
          persentase adalah nilai asli.
        </p>

        {/* 01 Summary */}
        <div className="mt-16">
          <Eyebrow>01 Ringkasan</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Iklan bukan masalahnya. LP menyembunyikan penawaran di bawah titik tempat 87% pengunjung
            berhenti membaca.
          </h3>
        </div>

        {/* 02 Diagnosis */}
        <div className="mt-16">
          <Eyebrow>02 Diagnosis</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Pengunjung cukup tertarik untuk klik, tapi hampir tidak ada yang scroll sampai harga.
          </h3>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value="100%" label="Kunjungan LP" />
            <MetricCard value="13,0%" label="Baca lewat 50% halaman" />
            <MetricCard value="2,1%" label="Buka kalender" />
            <MetricCard value="1,6%" label="Klik WhatsApp" />
          </div>

          <ol className="mt-10 space-y-2 max-w-3xl">
            {diagnosis.map((s, i) => (
              <li key={s} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 03 Approach */}
        <div className="mt-16">
          <Eyebrow>03 Pendekatan</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Majukan penawaran, tapi chat hanya dimulai setelah pengunjung melihatnya.
          </h3>
          <p className="mt-4 text-foreground/80 leading-relaxed max-w-3xl">
            Tanpa tombol WA di layar pertama, tanpa tombol chat melayang. Tugasnya memperpendek
            jarak ke penawaran, bukan memindahkan tombol.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {approach.map(([t, d], i) => (
              <div key={t} className="border-t-2 border-accent pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-2 font-display text-xl">{t}</h4>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 04 Landing page changes */}
        <div className="mt-16">
          <Eyebrow>04 Perubahan landing page</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Penawaran pindah dari layar 8 ke layar 3, di halaman yang 16% lebih pendek.
          </h3>
          <div className="mt-8">
            <DataTable
              columns={["Elemen", "Before (v1)", "After (v2)"]}
              rows={[
                [
                  "Tombol WA pertama",
                  "±5.600 px (layar 7/13)",
                  <strong className="text-accent">±2.600 px (layar 3/11)</strong>,
                ],
                ["Harga pertama", "±6.100 px", <strong className="text-accent">±2.400 px</strong>],
                [
                  "Panjang halaman",
                  "15 section",
                  <strong className="text-accent">12 section · 16% lebih pendek</strong>,
                ],
                [
                  "Sticky header muncul",
                  "Di 75% halaman",
                  <strong className="text-accent">Di 50% halaman</strong>,
                ],
              ]}
            />
          </div>
        </div>

        {/* 05 Results */}
        <div className="mt-16">
          <Eyebrow>05 Hasil</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Metrik sebelum klik sedikit memburuk. Metrik sesudah klik membaik.
          </h3>
          <div className="mt-8">
            <DataTable
              columns={["Metrik", "Perubahan v1 → v2"]}
              rows={[
                ["CPM", "+25%"],
                ["Cost per LP view", "+28%"],
                ["CTR", "−0,18 poin"],
                ["LP view ÷ link click", <strong className="text-accent">76,1% → 80,6%</strong>],
                ["Konversi LP", <strong className="text-accent">+107%</strong>],
                ["Lead per hari", <strong className="text-accent">+71%</strong>],
                ["Cost per lead", <strong className="text-accent">−38%</strong>],
              ]}
            />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard value="−43%" label="CPL ad kontrol 1 (tidak diubah)" />
            <MetricCard value="−46%" label="CPL ad kontrol 2 (tidak diubah)" />
            <MetricCard value="−38%" label="CPL seluruh ad set" />
          </div>
          <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
            Dua ad kontrol yang tidak diubah turun CPL-nya −43% dan −46%, mendekati −38% untuk
            seluruh ad set. Efek halaman bisa dipisahkan dari efek kreatif baru.
          </p>
        </div>

        {/* 06 Conclusion */}
        <div className="mt-16">
          <Eyebrow>06 Kesimpulan</Eyebrow>
          <ol className="mt-6 space-y-2 max-w-3xl">
            {[
              "Kalau CTR sehat tapi CPL tidak, cek LP sebelum membeli kreatif baru.",
              "Bangun kontrol.",
              "Bereskan pengukuran dulu.",
            ].map((s, i) => (
              <li key={s} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Insight>
              Kalau CTR sehat tapi cost per lead tidak, masalahnya ada sesudah klik. Cek landing
              page sebelum membeli kreatif baru.
            </Insight>
          </div>
        </div>

        <div className="mt-10">
          <Tags
            tags={["Meta Ads", "CRO", "Landing Page", "Meta Pixel", "Conversions API", "GA4"]}
          />
        </div>
      </SectionShell>
    </>
  );
}
