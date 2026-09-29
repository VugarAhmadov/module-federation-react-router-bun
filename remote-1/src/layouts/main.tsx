import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <h2>Remote 1 layout</h2>
      <Link to="">Home</Link>
      <Link to="about">About</Link>
      <div>
        <ErrorBoundary fallback="error happend in remote-1">
          <Suspense fallback="loading...">
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
