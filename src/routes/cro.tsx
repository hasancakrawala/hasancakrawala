import { createFileRoute } from "@tanstack/react-router";
import { RolePage, roleHead } from "@/components/portfolio/role-page";

export const Route = createFileRoute("/cro")({
  head: () => roleHead("/cro"),
  component: CroRoute,
});

function CroRoute() {
  return <RolePage path="/cro" />;
}
