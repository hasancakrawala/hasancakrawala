import { createFileRoute } from "@tanstack/react-router";
import { RolePage, roleHead } from "@/components/portfolio/role-page";

export const Route = createFileRoute("/brand-marketing")({
  head: () => roleHead("/brand-marketing"),
  component: BrandMarketingRoute,
});

function BrandMarketingRoute() {
  return <RolePage path="/brand-marketing" />;
}
