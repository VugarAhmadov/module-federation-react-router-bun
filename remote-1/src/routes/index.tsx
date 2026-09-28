import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  return (
    <div>
      <h1>Index page</h1>
    </div>
  );
}
