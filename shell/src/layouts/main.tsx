import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 16 }}>
      <header style={{ marginBottom: 16 }}>
        <strong style={{ marginRight: 24 }}>Shell</strong>
        <Link to="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to="/remote-1" style={{ marginRight: 12 }}>
          Remote 1
        </Link>
        <Link to="/remote-2" style={{ marginRight: 12 }}>
          Remote 2
        </Link>
      </header>
      <Outlet />
    </div>
  );
}
