import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, Insight } from "../case-kit";
import { getCaseNumber } from "@/data/roles";

const SLUG = "multi-brand-repositioning";

export function MultiBrandRepositioningCase() {
  const brands = [
    {
      name: "Rawdee Glamping",
      tagline: "Manis Dikenang, Ingin Diulang",
      desc: "Experience alam + emosi. Kontributor pendapatan tertinggi di perusahaan.",
    },
    {
      name: "Rawdee Coffee House",
      tagline: "Kopi Buatan Sendiri",
      desc: "Self reward via experience bar. Keluar dari red ocean coffeeshop.",
    },
    {
      name: "Rawdee Roastery",
      tagline: "Maharasa Kopi Nusantara",
      desc: "Kebanggaan kedaerahan. Bukan bersaing rasa — bersaing emosi.",
    },
  ];
  return (
    <>
      <BackToWork slug={SLUG} bg="cream" />
      <SectionShell bg="cream" padding="pt-8 md:pt-10 pb-24 md:pb-28">
        <CaseHeader
          num={getCaseNumber(SLUG)}
          title="Multi-Brand Repositioning"
          sub="Tiga brand, satu ekosistem yang saling menguatkan."
          meta="Multi-Brand · In-house (Rawdee Corporation) / 2023 — Now"
        />

        <p className="mt-10 max-w-3xl text-foreground/85 leading-relaxed reveal">
          Brand & Marketing Manager sejak Jan 2025, memimpin tim 5 orang untuk 3 unit bisnis
          (Glamping, Coffee House, Roastery). Mengelola ~IDR 100 jt ad spend per bulan di Meta,
          Google, TikTok, OTA, dan marketplace, dengan tracking lintas divisi (Meta Pixel, GTM, GA4)
          dan dashboard performa sebagai dasar keputusan budget.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {brands.map((b) => (
            <div
              key={b.name}
              className="reveal bg-background rounded-md overflow-hidden border border-hairline"
            >
              <div className="p-6">
                <h4 className="font-display text-2xl">{b.name}</h4>
                <p className="font-display italic text-accent mt-1">{b.tagline}</p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Tantangan terbesar</Eyebrow>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              Menjaga tiga brand di tiga kategori berbeda agar tidak saling mengkanibal, sekaligus
              tetap terasa berasal dari ekosistem yang sama. Setiap brand butuh posisi emosional
              yang unik — bukan sekedar variasi produk.
            </p>
          </div>
          <div>
            <Eyebrow>Hasil konkret</Eyebrow>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              Tiga brand berdiri sendiri dengan positioning emosional yang berbeda — namun saling
              memperkuat di level ekosistem. Cross-selling alami terjadi tanpa promo agresif.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Insight>
            Orang tidak ke coffeeshop untuk kafein — mereka ke sana untuk self reward. Dari insight
            ini lahir positioning yang tidak menjual produk, tapi mengambil posisi emosional yang
            belum dimiliki siapapun di pasar.
          </Insight>
        </div>
      </SectionShell>
    </>
  );
}
