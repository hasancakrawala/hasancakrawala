import { createFileRoute } from "@tanstack/react-router";
import { RolePage, roleHead } from "@/components/portfolio/role-page";

export const Route = createFileRoute("/tracking-analytics")({
  head: () => roleHead("/tracking-analytics"),
  component: TrackingAnalyticsRoute,
});

function TrackingAnalyticsRoute() {
  return <RolePage path="/tracking-analytics" />;
}
