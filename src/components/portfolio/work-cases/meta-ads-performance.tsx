import { Eyebrow, SectionShell } from "../primitives";
import {
  BackToWork,
  CaseHeader,
  BeforeAfter,
  MetricCard,
  Insight,
  Tags,
  Finding,
  DataTable,
  ProcessSteps,
  ServiceOffers,
} from "../case-kit";
import metaAdsPdf from "@/assets/case-studies/meta-ads-performance.pdf?url";

export function MetaAdsPerformanceCase() {
  return (
    <>
      <BackToWork pdf={metaAdsPdf} />
      <SectionShell className="!pt-10 md:!pt-14">
        <CaseHeader
          num="04"
          title="Meta Ads Performance Rebuild"
          sub="Budget sama. Cost per lead turun lebih dari separuh."
          meta="Rawdee Glamping · Hospitality / 2026"
        />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          <MetricCard value="−56%" label="Cost per lead vs 30 hari sebelumnya" />
          <MetricCard value="3.7×" label="Link click yang jadi chat WhatsApp" />
          <MetricCard value="40%" label="Di bawah target CPL klien" />
          <MetricCard value="34→3" label="Campaign: dua tema + satu test lab" />
        </div>

        <p className="mt-10 max-w-3xl text-foreground/85 leading-relaxed reveal">
          Dari akun dengan 34 campaign yang saling tumpang tindih dan sinyal data yang rusak,
          menjadi setup full-stack yang bersih: tracking, struktur akun, sistem testing, dan
          peluncuran ulang. Saya memegang penuh pixel + Conversions API, struktur & naming akun,
          perhitungan budget & KPI, serta strategi & testing kreatif.
        </p>

        {/* 01 The brief */}
        <div className="mt-16">
          <Eyebrow>01 Brief</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            "Kami terus spending di Meta, tapi lead mahal dan tidak jelas kreatif mana yang
            benar-benar bekerja."
          </h3>
          <p className="mt-4 text-foreground/80 leading-relaxed max-w-3xl">
            Rawdee Glamping menjual stay lewat WhatsApp. Setiap campaign Meta mengarahkan orang ke
            landing page yang tugasnya satu: memicu klik untuk membuka chat. Akun ini tumbuh
            campaign demi campaign sejak Mei, dengan struktur baru setiap bulan. Target sederhana
            diucapkan, sulit dicapai: lebih banyak lead WhatsApp di harga ≤ Rp20.000 per lead,
            dengan budget harian tetap.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value="Rp27,5k" label="Cost per lead (30 hari sebelum)" />
            <MetricCard value="1,25%" label="Link click → WhatsApp" />
            <MetricCard value="44%" label="Spend di ~Rp52,5k CPL" />
            <MetricCard value="0" label="Ad set yang delivering" />
          </div>

          <div className="mt-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Diagnosis — kenapa nambah budget tidak akan menyelesaikan masalah
            </div>
            <Finding severity="CRITICAL" title="Optimisasi di sinyal yang salah.">
              Pixel mengirim klik WhatsApp sebagai event Purchase, jadi Meta belajar dari penjualan
              yang tidak pernah terjadi.
            </Finding>
            <Finding severity="CRITICAL" title="Delivery berhenti total.">
              Error pembayaran menghentikan semua ad set. Tujuh hari mati mereset ulang learning
              phase.
            </Finding>
            <Finding severity="HIGH" title="Empat dimensi dicampur di satu level.">
              Tema, angle kreatif, format, dan sumber konten semuanya dipakai untuk memecah campaign
              & ad set, sehingga tidak ada yang bisa dibandingkan apple-to-apple.
            </Finding>
            <Finding severity="HIGH" title="Budget terlalu tersebar.">
              Enam ad set berbagi Rp250rb/hari; tidak satu pun bisa keluar dari learning phase. Ad
              set kreator baru nyaris tidak dapat spend.
            </Finding>
            <Finding severity="MEDIUM" title="Tidak ada cara belajar dari kreatif.">
              Ad yang menang dan kalah berjalan berdampingan tanpa aturan kapan harus scale, kill,
              atau retest.
            </Finding>
          </div>
        </div>

        {/* 02 Fix the signal */}
        <div className="mt-16">
          <Eyebrow>02 Perbaiki sinyal lebih dulu</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Akun ads sepintar sinyal yang dipelajarinya.
          </h3>
          <p className="mt-4 text-foreground/80 leading-relaxed max-w-3xl">
            Sebelum menyentuh satu pun campaign, saya bangun ulang tracking di bawahnya.
          </p>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              [
                "01 Audit",
                "Temukan yang palsu",
                "Klik WhatsApp yang salah label jadi Purchase; domain asing di dalam dataset.",
              ],
              [
                "02 Pixel",
                "Rebuild di GTM",
                "Native template, standard events, unique event ID di setiap hit.",
              ],
              [
                "03 CAPI",
                "Tambahkan server",
                "Meta-enabled CAPI, baru dinyalakan setelah hygiene beres.",
              ],
              [
                "04 Optimise",
                "Arahkan ads ke Lead",
                "Campaign baru optimasi ke event Lead yang sudah bersih.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t-2 border-accent pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {n}
                </div>
                <h4 className="mt-2 font-display text-xl">{t}</h4>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <DataTable
              columns={["User action", "Before", "After", "Dipakai untuk"]}
              rows={[
                [
                  "Klik WhatsApp",
                  "Purchase ✕",
                  <strong className="text-accent">Lead</strong>,
                  "Optimisasi campaign",
                ],
                [
                  "Buka kalender booking",
                  "ViewContent",
                  <strong className="text-accent">Schedule</strong>,
                  "Audience high-intent",
                ],
                ["Buka pricelist", "ViewContent", "ViewContent", "Retargeting"],
              ]}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard value="+12,5%" label="Event Lead yang dipulihkan oleh server" />
            <MetricCard value="100%" label="Browser + server terdeduplikasi" />
            <MetricCard value="94,6%" label="Event membawa ad click ID — dari 45,5%" />
          </div>
        </div>

        {/* 03 Plan with numbers */}
        <div className="mt-16">
          <Eyebrow>03 Rencana berbasis angka, bukan harapan</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Hitung mundur dari revenue, baru tentukan jumlah ad set.
          </h3>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value="Rp300k" label="Budget per hari, 30 hari" />
            <MetricCard value="450" label="Lead @ CPL ≤ Rp20k" />
            <MetricCard value="63" label="Booking @ closing 14%" />
            <MetricCard value="13,3×" label="Planned ROAS (ad cost = 7,5% revenue)" />
          </div>

          <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
            <strong>Constraint yang membentuk akun:</strong> tiap ad set butuh ±Rp143rb/hari untuk
            keluar dari learning phase, jadi budget yang ada hanya cukup untuk dua ad set utama —
            bukan enam.
          </p>

          <div className="mt-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Sistem naming — satu level, satu variabel
            </div>
            <DataTable
              columns={["Level", "Formula", "Dipecah berdasarkan"]}
              rows={[
                [
                  "Campaign",
                  <code className="text-xs">GLAMPING_[THEME]_[OBJ-DEST]_[YYMM]</code>,
                  "Tema promo",
                ],
                [
                  "Ad set",
                  <code className="text-xs">[ANGLE]_[FUNNEL]_[LOCATION]</code>,
                  "Angle kreatif",
                ],
                [
                  "Ad",
                  <code className="text-xs">[CODE]_[FORMAT]-[TITLE]_[SOURCE]_[VERSION]</code>,
                  "Format & sumber konten",
                ],
              ]}
            />
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="border border-hairline rounded-md p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Campaign · CBO · Rp150k/hari
              </div>
              <h4 className="mt-2 font-display text-lg">WEEKEND-STAY_LEADS-LPWA</h4>
              <p className="mt-1 text-sm text-foreground/70">
                Ad set: PROOF-OF-FEELING_COLD — 3 ad teruji (UGC, kreator, in-house)
              </p>
            </div>
            <div className="border border-hairline rounded-md p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Campaign · CBO · Rp150k/hari
              </div>
              <h4 className="mt-2 font-display text-lg">WEEKDAY-STAY_LEADS-LPWA</h4>
              <p className="mt-1 text-sm text-foreground/70">
                Ad set: WFC_COLD (work from camp) — 5 ad teruji (storytelling, problem-solution)
              </p>
            </div>
            <div className="border border-dashed border-accent/50 rounded-md p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Test Lab · ABO · Rp40k/hari
              </div>
              <h4 className="mt-2 font-display text-lg">TEST-CREATIVE_LEADS-LPWA</h4>
              <p className="mt-1 text-sm text-foreground/70">
                Mulai hari ke-15. Batch 1: test angle → Batch 2: test source. Satu variabel per
                batch 14 hari.
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="border border-hairline rounded-md p-5">
              <span className="inline-flex items-center rounded-full bg-accent-soft text-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">
                Graduate
              </span>
              <p className="mt-3 text-sm text-foreground/80">
                ≥3 lead di CPL ≤ Rp20k → pindah ke ad set utama, di-batch sekali tiap 14 hari.
              </p>
            </div>
            <div className="border border-hairline rounded-md p-5">
              <span className="inline-flex items-center rounded-full bg-accent text-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">
                Kill
              </span>
              <p className="mt-3 text-sm text-foreground/80">
                0 lead setelah spend Rp40k → dimatikan, kodenya tidak pernah dipakai ulang.
              </p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              ["Hari 1–14", "Jalankan yang teruji", "Dua tema, tanpa edit hari 1–7"],
              ["Hari 15–28", "Test angle", "3 angle, satu source"],
              ["Hari 29–42", "Test source", "Angle pemenang × UGC, kreator, in-house"],
            ].map(([d, t, s]) => (
              <div key={d} className="border-t-2 border-accent pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {d}
                </div>
                <h4 className="mt-2 font-display text-lg">{t}</h4>
                <p className="mt-2 text-sm text-foreground/75">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 04 Launch */}
        <div className="mt-16">
          <Eyebrow>04 Luncurkan tanpa kehilangan riwayat</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Ad yang sudah teruji dibawa, bukan dibangun ulang dari nol.
          </h3>
          <ol className="mt-6 space-y-2 max-w-2xl">
            {[
              "Selesaikan error pembayaran",
              "Konfirmasi event Lead sebagai optimisation goal",
              "Cek copy & URL di 9 ad yang dibawa",
              "Duplikasi ad set pemenang, lalu rename",
              "Tambahkan UTM parameter di setiap ad",
              "Matikan yang lama, nyalakan yang baru di hari yang sama",
              "Tanpa edit di hari 1–7",
            ].map((s, i) => (
              <li key={s} className="flex items-baseline gap-3 text-sm text-foreground/85">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 05 First results */}
        <div className="mt-16">
          <Eyebrow>05 Hasil pertama</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Dibaca dari Meta Ads Manager setelah 72 jam pertama live, 6–8 Oktober 2026.
          </h3>

          <div className="mt-8 reveal">
            <BeforeAfter
              before="Rp27.545 cost per lead, link click → WhatsApp 1,25%."
              beforeMeta="30 hari sebelum"
              after="Rp11.974 cost per lead (blended) — turun 56%. Link click → WhatsApp 4,65%."
              afterMeta="Campaign baru, 72 jam pertama"
            />
          </div>

          <div className="mt-8">
            <DataTable
              columns={["Metrik", "Before", "After"]}
              rows={[
                [
                  "Cost per lead",
                  "Rp27.545",
                  <strong className="text-accent">Rp11.974 · −56%</strong>,
                ],
                [
                  "Link click → WhatsApp",
                  "1,25%",
                  <strong className="text-accent">4,65% · 3,7×</strong>,
                ],
                [
                  "CPL per campaign",
                  "Rp15,6k – Rp41,0k",
                  <strong className="text-accent">Rp11,2k weekday · Rp12,9k weekend</strong>,
                ],
                [
                  "Ad terbaik",
                  "—",
                  <strong className="text-accent">WFC_02_STORYTELLING · Rp9,5k CPL</strong>,
                ],
                [
                  "Sinyal optimisasi",
                  "Fake Purchase",
                  <strong className="text-accent">Lead, browser + server</strong>,
                ],
              ]}
            />
          </div>

          <p className="mt-6 text-sm text-muted-foreground max-w-2xl">
            Tiga hari masih terlalu dini dan kedua campaign masih dalam learning phase. Test lab
            dibuka di hari ke-15 untuk menjaga pipeline tetap terisi.
          </p>
        </div>

        {/* 06 Full stack */}
        <div className="mt-16">
          <Eyebrow>06 Full stack, dalam satu engagement</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Kebanyakan akun ads gagal di bawah level campaign. Saya kerja dari sinyal ke atas.
          </h3>
          <div className="mt-8">
            <ProcessSteps
              steps={[
                [
                  "Brief & diagnosis",
                  "Audit akun 30 hari, root cause diranking berdasarkan severity.",
                ],
                ["Pixel + CAPI", "Standard event yang bersih, jalur server, 100% dedup."],
                ["KPI math", "Revenue → booking → lead → CPL ceiling → jumlah ad set."],
                ["Struktur & naming", "Satu variabel per level, bisa dibaca siapa pun di tim."],
                [
                  "Strategi kreatif",
                  "Pilih, test, dan baca kreatif klien; brief apa yang perlu dibuat selanjutnya.",
                ],
                [
                  "Launch & reporting",
                  "Switchover di hari yang sama, UTM, no-edit window, weekly read.",
                ],
              ]}
            />
          </div>
        </div>

        <div className="mt-16">
          <Eyebrow>Yang bisa saya kerjakan untuk bisnis Anda</Eyebrow>
          <div className="mt-6">
            <ServiceOffers
              offers={[
                ["Ad account audit", "Temukan di mana budget bocor sebelum Anda scale."],
                ["Pixel + CAPI setup", "Beri algoritma sinyal yang bisa dipercaya."],
                [
                  "Account rebuild",
                  "Struktur, naming, dan budget yang hasilnya bisa dibandingkan.",
                ],
                [
                  "Creative strategy",
                  "Anda bawa kreatifnya; saya pastikan ia menghasilkan dan brief pemenang berikutnya.",
                ],
              ]}
            />
          </div>
        </div>

        <div className="mt-10">
          <Tags
            tags={[
              "Meta Ads",
              "Meta Pixel",
              "Conversions API",
              "Account Structure",
              "Creative Strategy",
            ]}
          />
        </div>
      </SectionShell>
    </>
  );
}
