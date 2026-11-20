export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  note?: string;
  image: string;
}

import bisaBikinBrand from "@/assets/certifications/bisa-bikin-brand.webp";
import fsdmBelajarlagi from "@/assets/certifications/fsdm-belajarlagi.webp";
import mekariBasicMarketing from "@/assets/certifications/mekari-basic-marketing.webp";
import mekariSocialMedia from "@/assets/certifications/mekari-social-media.webp";
import sbdmFullstack from "@/assets/certifications/sbdm-fullstack.webp";

export const CERTIFICATIONS: Certification[] = [
  {
    id: "fsdm-belajarlagi",
    title: "Full Stack Digital Marketing Bootcamp",
    issuer: "BelajarlagiHQ",
    date: "23 Mei 2026",
    note: "Cohort 23 · 8-week course · Cert. BL-DGMC23-20260053",
    image: fsdmBelajarlagi,
  },
  {
    id: "mekari-social-media",
    title: "Social Media Marketing: Data-Driven Strategy, Content & Performance Metrics",
    issuer: "Mekari University",
    date: "24 Mei 2026",
    image: mekariSocialMedia,
  },
  {
    id: "mekari-basic-marketing",
    title: "Basic Concept of Marketing Management",
    issuer: "Mekari University",
    date: "24 Mei 2026",
    image: mekariBasicMarketing,
  },
  {
    id: "sbdm-fullstack",
    title: "Full Stack Digital Marketing — SBDM CAMP",
    issuer: "SBDM (Sekolah Bisnis Digital Marketing)",
    date: "4–5 April 2026",
    note: "Batch #116 · Bogor",
    image: sbdmFullstack,
  },
  {
    id: "bisa-bikin-brand",
    title: "Bisa Bikin Brand — Workshop",
    issuer: "Rumah UKM, bersama Subiakto Priosoedarsono",
    date: "22 Januari 2026",
    note: "Offline workshop · Bandung",
    image: bisaBikinBrand,
  },
];
