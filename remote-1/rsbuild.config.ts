import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import moduleFederationConfig from "./module-federation.config";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact({ reactCompiler: true }), pluginModuleFederation(moduleFederationConfig)],
  // The shell loads this remote's chunks from the URL in its mf-manifest.json. The default "/" would
  // point at the shell's own origin in production builds, so serve them from this remote's origin.
  output: {
    assetPrefix: "http://localhost:3001",
  },
  server: {
    port: 3001,
  },
});
