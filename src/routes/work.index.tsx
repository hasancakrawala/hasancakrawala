import { createFileRoute } from "@tanstack/react-router";
import { WorkListPage } from "@/components/portfolio/work-list";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [{ title: "Selected Work — Muhammad Hasan Fikri" }],
  }),
  component: WorkListPage,
});
