# Module Federation + React Router

A shell app and two remote apps, built with Rsbuild, Module Federation 2 and React Router 8. Each remote also runs on its own. The shell mounts them under `/remote-1` and `/remote-2`, with one router and one history, and deep links and back/forward work.

**Compare with:** the same three apps built with TanStack Router, and the workarounds that needs: [module-federation-tanstack-react-router](https://github.com/VugarAhmadov/module-federation-tanstack-react-router).

## Run it

Needs [Bun](https://bun.sh). Run this in each of `remote-1`, `remote-2` and `shell`:

```bash
bun install
bun run dev
```

Then open http://localhost:3000. The remotes run on ports 3001 and 3002.

For a production build, run `bun run build` and then `bun run preview` in each app.

Tested with `react-router` 8.4.0, `@module-federation/rsbuild-plugin` 2.9.2, `@rsbuild/core` 2.2.11, React 19.3 and Bun 1.4.

## How it works

- Each remote exposes a plain component, `./app` → [remote-1/src/app.tsx](remote-1/src/app.tsx), which renders `<Routes>`. It doesn't create a router. When the remote runs on its own, [remote-1/src/bootstrap.tsx](remote-1/src/bootstrap.tsx) wraps it in `<BrowserRouter>`.
- The shell renders that component under `/remote-1/*` ([shell/src/app-router.tsx](shell/src/app-router.tsx)). React Router matches the remote's routes relative to that parent route, so there's only the shell's router.
- The remote's links are relative, such as `<Link to="about">` in [remote-1/src/layouts/main.tsx](remote-1/src/layouts/main.tsx). The same code works at `/` on its own and at `/remote-1` inside the shell.
- `react`, `react-dom`, `react-router` and `react-error-boundary` are shared as singletons.
- `shell/@mf-types` holds the remotes' types. The Module Federation plugin downloads them while the shell runs in dev.

That's the whole integration. The only setting beyond the defaults is each remote's `output.assetPrefix` ([remote-1/rsbuild.config.ts](remote-1/rsbuild.config.ts)), so production builds load remote files from the remote's own origin.
