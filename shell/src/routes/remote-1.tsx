import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/remote-1")({
  component: lazyRouteComponent(() => import("remote1/App")),
  pendingComponent: () => <p>Loading products…</p>,
  errorComponent: () => <p>Remote1 app is unavailable right now.</p>,
});
