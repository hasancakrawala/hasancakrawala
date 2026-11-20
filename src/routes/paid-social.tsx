import { createFileRoute } from "@tanstack/react-router";
import { RolePage, roleHead } from "@/components/portfolio/role-page";

export const Route = createFileRoute("/paid-social")({
  head: () => roleHead("/paid-social"),
  component: PaidSocialRoute,
});

function PaidSocialRoute() {
  return <RolePage path="/paid-social" />;
}
