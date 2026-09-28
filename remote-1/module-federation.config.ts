import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "remote1",
  exposes: {
    "./App": "./src/routes/__root.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "@tanstack/react-router": { singleton: true },
  },
});
