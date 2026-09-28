import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}
