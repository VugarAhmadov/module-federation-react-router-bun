import "./app.css";
import Remote1MF from "remote1/App";
import Remote2MF from "remote2/App";

export default function App() {
  return (
    <div className="content-shell">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with.</p>

      <Remote1MF />
      <Remote2MF />
    </div>
  );
}
