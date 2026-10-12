export type WorkCategory = "Brand Strategy" | "Performance Marketing" | "Tracking & Analytics";

export interface WorkItem {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  stat: string;
  category: WorkCategory[];
  meta: string;
  pdf?: string;
}

import metaAdsPdf from "@/assets/case-studies/meta-ads-performance.pdf?url";
import trackingPdf from "@/assets/case-studies/tracking-analytics.pdf?url";

// Newest / most measurable work first — update this list whenever a new
// project is added. Each entry needs a matching detail component in
// src/components/portfolio/work-cases/ wired up in work.$slug.tsx.
export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "meta-ads-performance",
    title: "Meta Ads Performance Rebuild",
    tagline: "Less than half the cost per lead",
    excerpt: "Rebuilt a tangled 34-campaign Meta Ads account into a clean, signal-first setup.",
    stat: "−56% cost per lead",
    category: ["Performance Marketing"],
    meta: "Hospitality / 2026",
    pdf: metaAdsPdf,
  },
  {
    slug: "tracking-analytics",
    title: "Full-Stack Tracking Rebuild",
    tagline: "Ads were learning from sales that never happened",
    excerpt:
      "Audited and rebuilt the measurement stack — GTM, GA4, Meta Pixel, CAPI, Looker Studio.",
    stat: "94.6% click match",
    category: ["Tracking & Analytics"],
    meta: "Hospitality / 2026",
    pdf: trackingPdf,
  },
  {
    slug: "rawdee-glamping",
    title: "Rawdee Glamping",
    tagline: "Feel More Alive",
    excerpt:
      "Membangun brand dari nol di industri hospitality dengan pendekatan emotional branding.",
    stat: "10–15× revenue · 4.9 rating",
    category: ["Brand Strategy"],
    meta: "Hospitality / 2023 — 2024",
  },
  {
    slug: "customer-loop-strategy",
    title: "Customer Loop Strategy",
    tagline: "Konsumen sebagai agen",
    excerpt: "Performance marketing yang efisien dan organik — di 3 brand sekaligus.",
    stat: "+50% revenue · +70% efficiency",
    category: ["Performance Marketing", "Brand Strategy"],
    meta: "Integrated Campaign / 2025 — Now",
  },
  {
    slug: "multi-brand-repositioning",
    title: "Multi-Brand Repositioning",
    tagline: "Tiga brand, satu ekosistem",
    excerpt: "Menjaga tiga brand di tiga kategori berbeda agar saling menguatkan, bukan kanibal.",
    stat: "3 brands managed simultaneously",
    category: ["Brand Strategy"],
    meta: "Multi-Brand / 2023 — Now",
  },
];

export function getWorkItem(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((w) => w.slug === slug);
}
