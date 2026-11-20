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
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Muhammad Hasan Fikri` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} — Muhammad Hasan Fikri` },
          { property: "og:description", content: loaderData.description },
          { name: "twitter:title", content: `${loaderData.title} — Muhammad Hasan Fikri` },
          { name: "twitter:description", content: loaderData.description },
        ]
      : [],
  }),
  component: WorkDetailRoute,
});

function WorkDetailRoute() {
  useReveal();
  const { slug } = Route.useParams();
  const CaseComponent = WORK_CASE_COMPONENTS[slug];

  return CaseComponent ? <CaseComponent /> : null;
}
