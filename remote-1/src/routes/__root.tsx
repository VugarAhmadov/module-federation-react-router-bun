import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const RootRoute = createRootRoute({
  component: () => (
    <div>
      <p style={{ background: "red", padding: 8, color: "white" }}>Remote1 app — standalone mode</p>
      <Link to="/">Index page</Link>
      <Link to="/about">About page</Link>
      <Outlet />
    </div>
  ),
});

export default RootRoute;
