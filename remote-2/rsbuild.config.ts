import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import moduleFederationConfig from "./module-federation.config";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact({ reactCompiler: true }), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3002,
  },
  tools: {
    rspack: {
      plugins: [tanstackRouter({ target: "react", autoCodeSplitting: true })],
    },
  },
});
