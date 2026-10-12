import { createFileRoute } from "@tanstack/react-router";
import { Nav, ScrollProgress, useReveal } from "@/components/portfolio/primitives";
import {
  Hero,
  Manifesto,
  About,
  Framework,
  Expertise,
  SelectedWork,
  Numbers,
  Process,
  Tools,
  Faq,
  Contact,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Manifesto />
      <About />
      <Framework />
      <Expertise />
      <SelectedWork />
      <Numbers />
      <Process />
      <Tools />
      <Faq />
      <Contact />
    </main>
  );
}
