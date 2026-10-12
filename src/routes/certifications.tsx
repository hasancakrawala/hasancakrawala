import { createFileRoute } from "@tanstack/react-router";
import { Nav, ScrollProgress, useReveal } from "@/components/portfolio/primitives";
import { CertificationsPage } from "@/components/portfolio/certifications-page";
import { Contact } from "@/components/portfolio/sections";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [{ title: "Certifications — Muhammad Hasan Fikri" }],
  }),
  component: CertificationsRoute,
});

function CertificationsRoute() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <CertificationsPage />
      <Contact />
    </main>
  );
}
