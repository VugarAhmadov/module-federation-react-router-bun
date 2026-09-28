import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
}
