# I Automate Shit — Portfolio Site

Next.js 14 static-export site for the IAS build portfolio. Config-driven so it
scales to 100+ builds by editing one file per build. Replaces the Wix/Velo MVP.

## Stack

- **Next.js 14** (App Router, `output: "export"` — pure static output)
- **TypeScript** (strict; build fails on schema violations — Article VIII)
- **Tailwind CSS 3.4** (preflight disabled; tokens traced to `ias_color_system.csv`)
- **Self-hosted fonts** (Space Grotesk / DM Sans / Space Mono, woff2 in `app/fonts`)
- Deploys to **Vercel** or any static host.

## Commands

```bash
npm install
npm run dev        # local dev at http://localhost:3000
npm run build      # static export to ./out
npm run typecheck  # tsc --noEmit
```

The `out/` folder is the deployable artifact. On Vercel, no config is needed —
it detects the Next.js static export automatically.

## Project structure

```
app/
  layout.tsx              root layout, fonts, header/footer
  page.tsx                Home
  demos/                  Demos (server page + client sector filter)
  contact/                Contact (persona-routed form)
  thankyou/               post-submit confirmation
  builds/[slug]/          the reusable build template (1 static page per build)
  fonts/                  self-hosted woff2
components/               shared UI (StatusChip, TodoChip, BuildCard, ...)
lib/
  types.ts                Build schema — single source of truth
  site.config.ts          site-wide strings, nav, personas
data/
  builds.ts               the build registry + helpers
  build-001-claims-intake.ts   fully-authored flagship (copy this as template)
  build-002-doc-intake.ts      fully-authored
  generated-builds.ts     builds 003–019 (grounded in projects CSV)
styles/globals.css        base resets + CSS variables
```

## Governance baked into code

These are structural, not conventions — they hold up under scrutiny.

- **`StatusChip.tsx`** is the single source of truth for status display.
  `BuildStatus` is defined once in `lib/types.ts`.
- **Article VI** — Kinetic Emerald (`#00E5A3`) renders only for `status: "live"`.
  Every other status uses neutral/seafoam tones.
- **Article VIII** — the `Build` type is enforced at build time; an incomplete
  config fails `next build` rather than shipping broken.
- **Article IX** — `TodoChip.tsx` renders a visible red TODO wherever a value is
  genuinely unresolved (undecided architecture layer, un-authored payload,
  undeployed demo). No fabricated internals, no invented metrics. All mock data
  is labeled as mock.

## Adding a build

1. Copy `data/build-001-claims-intake.ts` to `data/build-NNN-slug.ts`.
2. Fill in the config. Leave any genuinely-undecided value with
   `unresolved: true` (architecture layers) or empty payload objects — the UI
   renders an honest TODO instead of a fake value.
3. Import it in `data/builds.ts` and add it to the `builds` array.

That single edit updates the Demos page, the build's own page, the sitemap-style
static params, and the home-page counts. Nothing else to touch.

## Contact form endpoint

The form validates client-side and confirms via `/thankyou`. To transmit
submissions, set `NEXT_PUBLIC_CONTACT_ENDPOINT` (n8n webhook or HubSpot handler)
in `.env.local` — see `.env.example`. Until set, it validates and confirms
without transmitting.

## Open items (carried as visible TODOs)

- `NEXT_PUBLIC_CONTACT_ENDPOINT` not yet wired to the live intake webhook.
- YouTube handle unconfirmed (`site.youtubeHandle` is `null`).
- Builds 001/002 architecture data layers pending deep-build (storage + queues).
- Builds 003–019 are `planned` — replace each with a full config as it ships.
