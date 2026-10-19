# Portfolio Site

A bilingual (Spanish/English) portfolio site for Alexis Castellano, Solutions Architect, built with Next.js 16. It presents case studies, other projects, and a contact section, with an in-browser language toggle (Spanish is the default, statically rendered locale).

## Development

```bash
pnpm install
pnpm dev            # start the dev server at http://localhost:3000
pnpm build          # production build
pnpm lint           # lint with eslint
pnpm test:e2e       # run the Playwright end-to-end suite
```

`pnpm build` produces a Next.js `standalone` output used by the Docker image (see `Dockerfile`).

## Deployment

Deployment is managed in the `homelab-infra` repository under `apps/portfolio-site`. This repo only provides the Docker image, which listens on port `3000` and runs `node server.js`.

## Before going live

- [ ] **Set `BOOKING_URL`.** Configure the real booking link before launch.
- [ ] **Human-review the English translations.** The English copy was AI-drafted from the Spanish originals. Have a human read both side by side and correct anything that reads awkwardly or inaccurately before publishing.

## Known limitation: language toggle is client-side

The ES/EN toggle runs on the client, so the server-rendered HTML, `<title>` and meta description are always Spanish. Search engines index the Spanish version (`<html lang="es">`).

## Known limitation: E2E test does not cover the Docker production entrypoint

The Playwright E2E suite's `webServer` runs `pnpm start` (`next start`) to serve the app under test. This is **not** the same code path as the Docker image's production entrypoint, which runs `node server.js` from the Next.js `standalone` build output (see `Dockerfile`). In fact, `next start` is not officially supported when `output: "standalone"` is configured — Next.js prints a warning to that effect.

The standalone server (`node .next/standalone/server.js`) was manually verified to work correctly via `docker run` during initial development, but there is currently no automated regression test that exercises that exact path — a Next.js patch release could in principle change behavior here without it counting as a breaking change upstream.

A future improvement would be a portable script (Node-based, not `cp -r`, since this project is developed on Windows) that copies `public/` and `.next/static` into `.next/standalone/` and runs the standalone server locally, with Playwright's `webServer` config pointed at that script instead of `next start`. This would make the automated E2E gate exercise the same entrypoint that production actually runs.
