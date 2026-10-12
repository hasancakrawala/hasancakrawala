import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav, ScrollProgress, useReveal } from "@/components/portfolio/primitives";
import { Contact } from "@/components/portfolio/sections";

// Layout for everything under /work — the list (work.index.tsx) and each
// detail page (work.$slug.tsx) render into the <Outlet/> below, sharing one
// Nav + Contact footer instead of each page repeating its own.
export const Route = createFileRoute("/work")({
  component: WorkLayout,
});

function WorkLayout() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <Outlet />
      <Contact />
    </main>
  );
}
