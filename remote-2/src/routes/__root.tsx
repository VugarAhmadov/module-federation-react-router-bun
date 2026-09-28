import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <p style={{ background: "blue", padding: 8, color: "white" }}>Remote2 app — standalone mode</p>
      <Link to="/">Index page</Link>
      <Link to="/contact">Contact page</Link>
      <Outlet />
    </div>
  ),
});
