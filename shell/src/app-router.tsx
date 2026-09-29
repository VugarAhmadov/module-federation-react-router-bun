import MainLayout from "@/layouts/main";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router";

const Home = lazy(() => import("@/pages/home"));
const Remote1 = lazy(() => import("remote1/app"));
const Remote2 = lazy(() => import("remote2/app"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary fallback="Error hapend in remote-1">
            <Suspense fallback="loading home page....">
              <Home />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/remote-1/*",
        element: (
          <ErrorBoundary fallback="Error hapend in remote-1">
            <Suspense fallback="loading remote-1....">
              <Remote1 />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/remote-2/*",
        element: (
          <ErrorBoundary fallback="Error hapend in remote-2">
            <Suspense fallback="loading remote-2....">
              <Remote2 />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<>loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
