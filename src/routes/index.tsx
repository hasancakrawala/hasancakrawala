import { createFileRoute } from "@tanstack/react-router";
import { Nav, ScrollProgress, useReveal } from "@/components/portfolio/primitives";
import {
  Hero,
  Toc,
  Manifesto,
  About,
  Framework,
  Expertise,
  SelectedWork,
  Case1,
  Case2,
  Case3,
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
      <Toc />
      <Manifesto />
      <About />
      <Framework />
      <Expertise />
      <SelectedWork />
      <Case1 />
      <Case2 />
      <Case3 />
      <Numbers />
      <Process />
      <Tools />
      <Faq />
      <Contact />
    </main>
  );
}
