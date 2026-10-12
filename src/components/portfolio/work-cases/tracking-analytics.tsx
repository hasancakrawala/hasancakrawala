import { Eyebrow, SectionShell } from "../primitives";
import {
  BackToWork,
  CaseHeader,
  MetricCard,
  Insight,
  Tags,
  Finding,
  DataTable,
  ServiceOffers,
} from "../case-kit";
import trackingPdf from "@/assets/case-studies/tracking-analytics.pdf?url";

export function TrackingAnalyticsCase() {
  return (
    <>
      <BackToWork pdf={trackingPdf} />
      <SectionShell bg="cream" className="!pt-10 md:!pt-14">
        <CaseHeader
          num="05"
          title="Full-Stack Tracking Rebuild"
          sub="Iklan mereka sedang belajar dari penjualan yang tidak pernah terjadi."
          meta="Rawdee Glamping · Hospitality / 2026"
        />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          <MetricCard value="5 → 0" label="Ad set yang optimasi ke fake purchase" />
          <MetricCard value="2.1×" label="Ad click matched (45,5% → 94,6%)" />
          <MetricCard value="+12,5%" label="Lead dipulihkan oleh server events" />
          <MetricCard value="100%" label="Browser + server events dedup" />
        </div>

        <p className="mt-10 max-w-3xl text-foreground/85 leading-relaxed reveal">
          Saya audit dan bangun ulang seluruh measurement stack, dari tag sampai dashboard, supaya
          setiap lead WhatsApp terhitung sekali, dengan nama yang benar, dan dibaca di satu tempat.
        </p>

        {/* 01 The challenge */}
        <div className="mt-16">
          <Eyebrow>01 Tantangan</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            "Kami spending di Meta ads, tapi tidak tahu paket mana yang diminati, dari site mana
            trafiknya datang, atau apakah algoritma belajar dari hal yang benar."
          </h3>
          <p className="mt-4 text-foreground/80 leading-relaxed max-w-3xl">
            Rawdee Glamping menjual setiap stay lewat percakapan WhatsApp — tanpa checkout, tanpa
            form booking. Pengunjung mendarat di dua site: landing page untuk Meta ads, dan
            link-in-bio untuk Instagram. Iklan sudah jalan dan spending. Measurement di baliknya
            ditambal sulam seiring waktu, dan belum pernah dicek apakah masih mencerminkan
            kebenaran.
          </p>

          <div className="mt-8 bg-dark text-[var(--primary-foreground)] rounded-md p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
              Pertanyaan bisnisnya
            </div>
            <p className="font-display italic text-xl md:text-2xl leading-snug">
              Interaksi mana yang paling dekat dengan booking WhatsApp, dan bisakah setiap sinyal
              berasal dari tepat satu sumber?
            </p>
          </div>

          <div className="mt-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Audit — temuan sebelum apa pun disentuh (2 GTM container · Meta dataset · GA4)
            </div>
            <Finding severity="CRITICAL" title="Klik WhatsApp dilaporkan sebagai Purchase.">
              Lima ad set sedang optimasi ke penjualan yang tidak pernah terjadi.
            </Finding>
            <Finding severity="CRITICAL" title="Domain asing menulis ke data live.">
              Tiga domain preview, plus site sister brand, berbagi dataset produksi yang sama.
            </Finding>
            <Finding severity="HIGH" title="Pixel hand-coded, trigger duplikat.">
              Empat tag Custom HTML dengan ID ditulis manual dan nol variable; satu klik bisa fire
              dua kali.
            </Finding>
            <Finding severity="HIGH" title="Sumber server yang tidak dikenal.">
              Token API lama mengirim event yang tidak bisa diidentifikasi siapa pun. Menyalakan
              CAPI secara buta akan menggandakan data.
            </Finding>
            <Finding severity="HIGH" title="Sinyal intent tercampur atau hilang.">
              Pricelist dan kalender sama-sama ViewContent; toggle kalender sama sekali tidak
              ter-track.
            </Finding>
            <Finding severity="MEDIUM" title="Match quality mentok di 6.1/10.">
              Click ID ada di kurang dari separuh event; site Instagram sama sekali belum punya GA4.
            </Finding>
          </div>

          <div className="mt-8 bg-background border-l-2 border-accent rounded-r-md p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
              Judgment call
            </div>
            <p className="text-foreground/85">
              Meta menandai "set up advanced matching". Tanpa form, tidak ada email atau nomor
              telepon untuk dikirim, jadi saya lewati itu dan perbaiki gap yang sesungguhnya: jalur
              server.
            </p>
          </div>
        </div>

        {/* 02 Before -> after */}
        <div className="mt-16">
          <Eyebrow>02 Before → after</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">Tiga perubahan inti</h3>

          <div className="mt-8 space-y-10">
            <div>
              <h4 className="font-display text-xl">
                1 · Meta berhenti belajar dari penjualan palsu
              </h4>
              <p className="mt-2 text-foreground/80 leading-relaxed">
                Klik WhatsApp sekarang jadi Lead, kalender jadi Schedule, pricelist jadi
                ViewContent. Purchase sepi sejak tag lama dilepas.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl">
                2 · Container yang bisa di-maintain siapa saja
              </h4>
              <p className="mt-2 text-foreground/80 leading-relaxed">
                Di-backup, lalu dibangun ulang dari clean slate: native template, 11 variable, satu
                naming convention, dicerminkan di kedua site.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl">3 · Dua kali lipat ad click yang matched</h4>
              <p className="mt-2 text-foreground/80 leading-relaxed">
                Lacak dulu sumber server lama, baru nyalakan Conversions API dengan event-ID
                deduplication. Click ID: <strong className="text-accent">45,52% → 94,59%</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 03 One clean path */}
        <div className="mt-16">
          <Eyebrow>03 Satu jalur bersih, dari klik ke dashboard</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Setiap sinyal punya satu trigger, satu nama, satu tujuan — identik di kedua site.
          </h3>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              ["01 Source", "2 sites", "Ads landing page, Instagram bio"],
              [
                "02 Collect",
                "2 GTM containers",
                "11 variable · 8 trigger · 10 tag, nol ID hard-coded",
              ],
              ["03 Send", "GA4 · Pixel · CAPI", "Browser + server dengan event ID yang sama"],
              ["04 Read", "Looker Studio", "4 halaman, dikirim email tiap Senin"],
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
              columns={["User action", "GA4 event", "Meta event", "Peran"]}
              rows={[
                [
                  "Klik WhatsApp",
                  <code className="text-xs text-accent">wa_click ★</code>,
                  <strong className="text-accent">Lead</strong>,
                  "Primary conversion",
                ],
                [
                  "Buka kalender booking",
                  <code className="text-xs text-accent">jadwal_toggle ★</code>,
                  <strong className="text-accent">Schedule</strong>,
                  "High intent",
                ],
                [
                  "Buka pricelist",
                  <code className="text-xs">pricelist_click</code>,
                  "ViewContent",
                  "Retargeting",
                ],
                [
                  "Buka sheet jadwal",
                  <code className="text-xs">jadwal_click</code>,
                  "—",
                  "Medium, GA4 only",
                ],
                [
                  "Scroll 25/50/75%",
                  <code className="text-xs">scroll_depth</code>,
                  "—",
                  "Engagement",
                ],
                ["Page load", <code className="text-xs">page_view</code>, "PageView", "Baseline"],
              ]}
            />
            <p className="mt-3 text-xs text-muted-foreground">
              ★ GA4 key event. Hanya dua yang ditandai, supaya laporan konversi tidak inflated.
            </p>
          </div>
        </div>

        {/* 04 Pixel + CAPI */}
        <div className="mt-16">
          <Eyebrow>04 Meta Pixel & Conversions API</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Empat standard event dari browser, masing-masing disalin ke server oleh Meta-enabled
            CAPI.
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard value="+12,5%" label="Event Lead tambahan dari server vs pixel saja" />
            <MetricCard value="+33,3%" label="Event Schedule tambahan dari server" />
            <MetricCard value="100%" label="Pasangan browser/server terdeduplikasi by event ID" />
          </div>
          <div className="mt-8">
            <Insight>
              CAPI menyalin setiap event pixel. Menyalakannya sebelum pixel dibersihkan akan ikut
              menyalin fake purchase dan traffic dari domain asing. Urutannya: hygiene dulu, lacak
              sumber server lama, baru nyalakan.
            </Insight>
          </div>
        </div>

        {/* 05 Reporting */}
        <div className="mt-16">
          <Eyebrow>05 Reporting, dibangun dari nol</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Tidak ada dashboard sebelumnya. Sekarang 4 halaman dengan insight tertulis.
          </h3>
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              [
                "P1",
                "Performance summary",
                "No specialist needed — dikirim tiap Senin, dengan alert untuk penurunan mendadak.",
              ],
              [
                "P2",
                "WhatsApp clicks per package",
                "Setiap klik WhatsApp membawa paketnya, dipecah per site.",
              ],
              [
                "P3",
                "Funnel & traffic sources",
                "Funnel dari visit sampai WhatsApp, per source dan campaign.",
              ],
              [
                "P4",
                "Visitor behaviour",
                "Scroll depth, device, browser — perilaku pengunjung per site.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-background border border-hairline rounded-md p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {n}
                </div>
                <h4 className="mt-2 font-display text-lg">{t}</h4>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 06 Results */}
        <div className="mt-16">
          <Eyebrow>06 Hasil</Eyebrow>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            Dibaca dari Meta Events Manager dan GTM, awal Oktober 2026, beberapa minggu setelah
            go-live.
          </h3>
          <div className="mt-8">
            <DataTable
              columns={["Metrik", "Before", "After"]}
              rows={[
                [
                  "Ad set di fake Purchase",
                  "5",
                  <strong className="text-accent">0 · semua di Lead</strong>,
                ],
                [
                  "Click ID (fbc) coverage",
                  "45,52%",
                  <strong className="text-accent">94,59%</strong>,
                ],
                [
                  "Konversi tambahan dari CAPI",
                  "—",
                  <strong className="text-accent">+12,5% Lead · +33,3% Schedule</strong>,
                ],
                [
                  "Dedup browser/server",
                  "Sumber tak terlacak",
                  <strong className="text-accent">100% by event ID</strong>,
                ],
                [
                  "Tag/variable Custom HTML",
                  "4 / 0",
                  <strong className="text-accent">0 / 11</strong>,
                ],
                [
                  "Domain asing di data",
                  "3",
                  <strong className="text-accent">Diblokir allow list</strong>,
                ],
                [
                  "Reporting",
                  "Tidak ada",
                  <strong className="text-accent">Dashboard 4 halaman, email mingguan</strong>,
                ],
              ]}
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Event match quality masih 6.1 selagi Meta mengumpulkan window penuh data server;
              target 8+. Click ID coverage adalah indikator utamanya.
            </p>
          </div>

          <div className="mt-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Cara kerja — setiap fase berakhir dengan dokumen yang di-sign-off
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                ["F0", "Intake", "Goals & conversions"],
                ["F1", "Audit", "Findings by severity"],
                ["F2", "Architecture", "Measurement plan"],
                ["F3", "Build", "27-step guide"],
                ["F4", "QA", "80 checks, 8 sign-offs"],
                ["F5", "Report", "Dashboard & handover"],
              ].map(([n, t, d]) => (
                <div key={n} className="border-t-2 border-accent pt-3">
                  <div className="font-mono text-xs text-accent">{n}</div>
                  <h5 className="mt-1 font-display text-base">{t}</h5>
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Eyebrow>Yang bisa saya kerjakan untuk bisnis Anda</Eyebrow>
          <div className="mt-6">
            <ServiceOffers
              offers={[
                ["Tracking audit", "Temukan yang rusak sebelum spend dolar berikutnya untuk ads."],
                [
                  "GTM + GA4 rebuild",
                  "Bersih, terdokumentasi, variable-driven. Mudah di-handover.",
                ],
                ["Meta Pixel + CAPI", "Sinyal terdeduplikasi yang bisa dipelajari algoritma."],
                ["Looker Studio", "Dashboard yang menjawab satu pertanyaan bisnis."],
              ]}
            />
          </div>
        </div>

        <div className="mt-10">
          <Tags
            tags={["Google Tag Manager", "GA4", "Meta Pixel", "Conversions API", "Looker Studio"]}
          />
        </div>
      </SectionShell>
    </>
  );
}
