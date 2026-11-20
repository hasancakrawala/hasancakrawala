export type WorkCategory =
  | "Brand Strategy"
  | "Performance Marketing"
  | "Tracking & Analytics"
  | "Paid Social"
  | "CRO"
  | "Landing Page"
  | "Tracking"
  | "Paid Acquisition";

export interface WorkItem {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  stat: string;
  category: WorkCategory[];
  meta: string;
  /** Meta description for the case page (Bahasa Indonesia). */
  description: string;
}

// Newest / most measurable work first — this is the order of the /work archive.
// Each entry needs a matching detail component in
// src/components/portfolio/work-cases/ and a role in src/data/roles.ts.
export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "cro-landing-page",
    title: "Meta Ads CRO Optimization",
    tagline: "Cost per lead −38%, budget harian sama",
    excerpt:
      "Rebuild landing page iklan Meta supaya penawaran muncul sebelum 87% pengunjung berhenti membaca.",
    stat: "−38% cost per lead",
    category: ["Paid Social", "CRO"],
    meta: "Hospitality / 2026",
    description:
      "Rebuild landing page iklan menurunkan cost per lead 38% dengan budget harian yang sama: conversion rate LP 2,83% → 5,86%, lead per hari +71%.",
  },
  {
    slug: "work-from-kebun",
    title: "Work From Kebun",
    tagline: "Setiap klik booking terhitung",
    excerpt:
      "Landing page satu campaign, GTM, GA4, Meta Pixel + CAPI, dan visitor ID di setiap chat WhatsApp.",
    stat: "7/7 CTA booking ter-track",
    category: ["Landing Page", "Tracking", "Paid Acquisition"],
    meta: "Hospitality / 2026",
    description:
      "Satu campaign, satu landing page, setiap klik booking terhitung: tag aktif 0 → 7, CTA ter-track 7/7, Pixel + CAPI terdeduplikasi, visitor ID di setiap chat WhatsApp.",
  },
  {
    slug: "meta-ads-performance",
    title: "Meta Ads Performance Rebuild",
    tagline: "Less than half the cost per lead",
    excerpt: "Rebuilt a tangled 34-campaign Meta Ads account into a clean, signal-first setup.",
    stat: "−56% cost per lead",
    category: ["Performance Marketing"],
    meta: "Hospitality / 2026",
    description:
      "Rebuild akun Meta Ads 34 campaign menjadi setup yang bersih: sinyal Pixel + CAPI, struktur & naming akun, KPI, dan sistem testing kreatif.",
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
    description:
      "Audit dan rebuild measurement stack (GTM, GA4, Meta Pixel, CAPI, Looker Studio) supaya setiap lead WhatsApp terhitung sekali dan iklan belajar dari data yang benar.",
  },
  {
    slug: "rawdee-glamping",
    title: "Rawdee Glamping",
    tagline: "Feel More Alive",
    excerpt:
      "Membangun brand dari nol di industri hospitality dengan pendekatan emotional branding.",
    stat: "Sales +100% · occupancy 60%+",
    category: ["Brand Strategy"],
    meta: "Hospitality / Mar 2023 – Jan 2025",
    description:
      "Membangun Rawdee Glamping dengan emotional branding: profit dalam 3 bulan, sales +100%, occupancy ~20% → 60%+, rating Google 4.5 → 4.9.",
  },
  {
    slug: "customer-loop-strategy",
    title: "Customer Loop Strategy",
    tagline: "Konsumen sebagai agen",
    excerpt: "Performance marketing yang efisien dan organik — di 3 brand sekaligus.",
    stat: "Revenue +50% YoY · ROMI +70%",
    category: ["Performance Marketing", "Brand Strategy"],
    meta: "Integrated Campaign / 2025 — Now",
    description:
      "Customer loop sebagai salah satu strategi di balik revenue 3 unit bisnis +50% YoY dan ROMI +70%, bersama brand repositioning, go-to-market, dan paid ads scaling.",
  },
  {
    slug: "multi-brand-repositioning",
    title: "Multi-Brand Repositioning",
    tagline: "Tiga brand, satu ekosistem",
    excerpt: "Menjaga tiga brand di tiga kategori berbeda agar saling menguatkan, bukan kanibal.",
    stat: "3 brands managed simultaneously",
    category: ["Brand Strategy"],
    meta: "Multi-Brand / 2023 — Now",
    description:
      "Repositioning 3 unit bisnis Rawdee (Glamping, Coffee House, Roastery) agar saling menguatkan, dengan ~IDR 100 jt ad spend per bulan lintas channel.",
  },
];

export function getWorkItem(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((w) => w.slug === slug);
}
