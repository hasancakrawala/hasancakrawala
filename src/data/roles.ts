import { CV_BRAND_URL, CV_CRO_URL, CV_PAID_SOCIAL_URL, CV_TRACKING_URL } from "./cv-links";

export type RolePath = "/brand-marketing" | "/paid-social" | "/tracking-analytics" | "/cro";

export interface Role {
  path: RolePath;
  name: string;
  /** Heading on the role page: plain part + italic accent part (same pattern as other section headings). */
  heading: [string, string];
  intro: string;
  /** Case slugs in display order. A case belongs to exactly one role. */
  cases: string[];
  cvUrl: string;
  metaTitle: string;
  metaDescription: string;
}

// Single source for the homepage role cards, the role pages, each case's
// back link and each case's number (its position on its role page).
export const ROLES: Role[] = [
  {
    path: "/brand-marketing",
    name: "Brand & Marketing",
    heading: ["Brand &", "Marketing."],
    intro: "Membangun positioning emosional dan brand multi-unit yang menggerakkan revenue.",
    cases: ["rawdee-glamping", "multi-brand-repositioning", "customer-loop-strategy"],
    cvUrl: CV_BRAND_URL,
    metaTitle: "Brand & Marketing — Muhammad Hasan Fikri",
    metaDescription:
      "Case Brand & Marketing: positioning emosional Rawdee Glamping, repositioning 3 unit bisnis, dan customer loop strategy.",
  },
  {
    path: "/paid-social",
    name: "Paid Social / Meta Ads",
    heading: ["Paid Social /", "Meta Ads."],
    intro: "Membangun ulang akun iklan dari sinyal, struktur, sampai sistem testing kreatif.",
    cases: ["meta-ads-performance"],
    cvUrl: CV_PAID_SOCIAL_URL,
    metaTitle: "Paid Social / Meta Ads — Muhammad Hasan Fikri",
    metaDescription:
      "Case Paid Social: rebuild akun Meta Ads dari sinyal Pixel + CAPI, struktur akun, sampai sistem testing kreatif.",
  },
  {
    path: "/tracking-analytics",
    name: "Tracking & Analytics",
    heading: ["Tracking &", "Analytics."],
    intro:
      "Audit dan build measurement stack (GTM, GA4, Meta Pixel + CAPI) supaya setiap lead terhitung sekali.",
    cases: ["tracking-analytics", "work-from-kebun"],
    cvUrl: CV_TRACKING_URL,
    metaTitle: "Tracking & Analytics — Muhammad Hasan Fikri",
    metaDescription:
      "Case Tracking & Analytics: audit dan build GTM, GA4, Meta Pixel + Conversions API, dan Looker Studio supaya setiap lead terhitung sekali.",
  },
  {
    path: "/cro",
    name: "CRO",
    heading: ["Conversion rate", "optimization."],
    intro: "Menurunkan cost per lead lewat landing page, bukan tambahan budget.",
    cases: ["cro-landing-page"],
    cvUrl: CV_CRO_URL,
    metaTitle: "CRO — Muhammad Hasan Fikri",
    metaDescription:
      "Case CRO: rebuild landing page iklan Meta menurunkan cost per lead 38% dengan budget harian yang sama.",
  },
];

export function getRole(path: RolePath): Role {
  const role = ROLES.find((r) => r.path === path);
  if (!role) throw new Error(`Unknown role path: ${path}`);
  return role;
}

export function getRoleForCase(slug: string): Role | undefined {
  return ROLES.find((r) => r.cases.includes(slug));
}

/** Case number shown in the case header: its position on its role page ("01", "02", …). */
export function getCaseNumber(slug: string): string {
  const role = getRoleForCase(slug);
  const i = role ? role.cases.indexOf(slug) : -1;
  return String(i + 1).padStart(2, "0");
}
