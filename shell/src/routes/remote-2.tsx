import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/remote-2")({
  component: lazyRouteComponent(() => import("remote2/App")),
  pendingComponent: () => <p>Loading products…</p>,
  errorComponent: () => <p>Remote2 app is unavailable right now.</p>,
});
