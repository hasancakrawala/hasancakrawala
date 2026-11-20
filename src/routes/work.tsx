import { createFileRoute, Outlet, useParams } from "@tanstack/react-router";
import { Nav, ScrollProgress, useReveal } from "@/components/portfolio/primitives";
import { Contact } from "@/components/portfolio/sections";

// Layout for everything under /work — the list (work.index.tsx) and each
// detail page (work.$slug.tsx) render into the <Outlet/> below, sharing one
// Nav + Contact footer instead of each page repeating its own.
// Case detail pages are "isolated" like the role pages: no links out except
// the back link to their role page and one footer button to the homepage.
// The /work archive itself keeps the regular nav and footer.
export const Route = createFileRoute("/work")({
  component: WorkLayout,
});

function WorkLayout() {
  useReveal();
  const { slug } = useParams({ strict: false });
  const isCase = Boolean(slug);
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Nav isolated={isCase} />
      <Outlet />
      <Contact isolated={isCase} />
    </main>
  );
}
