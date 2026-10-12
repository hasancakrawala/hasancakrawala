import { Eyebrow, SectionShell } from "../primitives";
import { BackToWork, CaseHeader, Insight } from "../case-kit";

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
      <BackToWork />
      <SectionShell bg="cream" className="!pt-10 md:!pt-14">
        <CaseHeader
          num="03"
          title="Multi-Brand Repositioning"
          sub="Tiga brand, satu ekosistem yang saling menguatkan."
          meta="Multi-Brand / 2023 — Now"
        />

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
