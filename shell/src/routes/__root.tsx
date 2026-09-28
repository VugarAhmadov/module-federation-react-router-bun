import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <p>Shell: page not found.</p>,
});

function RootComponent() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 16 }}>
      <header style={{ marginBottom: 16 }}>
        <strong style={{ marginRight: 24 }}>Shell</strong>
        <Link
          to="/"
          style={{ marginRight: 12 }}
          activeProps={{ style: { fontWeight: "bold" } }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link to="/remote-1" style={{ marginRight: 12 }} activeProps={{ style: { fontWeight: "bold" } }}>
          Remote 1
        </Link>
        <Link to="/remote-2" style={{ marginRight: 12 }} activeProps={{ style: { fontWeight: "bold" } }}>
          Remote 2
        </Link>
      </header>
      <Outlet />
    </div>
  );
}
