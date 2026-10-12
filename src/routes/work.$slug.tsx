import { createFileRoute, notFound } from "@tanstack/react-router";
import { useReveal } from "@/components/portfolio/primitives";
import { getWorkItem } from "@/data/work";
import { WORK_CASE_COMPONENTS } from "@/components/portfolio/work-cases";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = getWorkItem(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.title} — Muhammad Hasan Fikri` }] : [],
  }),
  component: WorkDetailRoute,
});

function WorkDetailRoute() {
  useReveal();
  const { slug } = Route.useParams();
  const CaseComponent = WORK_CASE_COMPONENTS[slug];

  return CaseComponent ? <CaseComponent /> : null;
}
