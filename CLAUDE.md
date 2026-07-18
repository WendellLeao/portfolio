# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page portfolio site (Create React App + TypeScript), deployed to GitHub Pages at wendellleao.com. No backend/API — everything is static, client-side rendered.

## Commands

```bash
npm start      # dev server (react-scripts start)
npm test       # jest via react-scripts, watch mode
npm run build  # production build to build/
npm run deploy # build + publish build/ to gh-pages
```

To run a single test file: `npm test -- App.test.tsx` (react-scripts test wraps Jest's CLI, so Jest flags/patterns pass through after `--`).

## Architecture

**Page composition**: `src/App.tsx` lazy-loads and stacks the top-level sections in fixed order inside one `Suspense`: `BackgroundParticles` → `Header` → `Home` → `Games` → `Footer`. There is no router — the whole site is one scrolling page, and nav links (`Header`/`Navbar`) scroll to section anchors rather than changing routes.

**Games section (the bulk of the content)**: Each portfolio game is its own thin wrapper component in `src/components/games/` (e.g. `RogueGameItem.tsx`, `ThePlatform.tsx`) that just supplies props (id, title, synopses/description translation keys, store type, store url, video path, left/right side) to the shared `GameItem` component. `Games.tsx` lazily imports and renders one wrapper per game, in the order they should appear on the page. **To add a new game**: create a new `<Name>GameItem.tsx` following the existing wrapper pattern, add its synopsis/description strings to both locale files, drop its clip in `public/videos/`, then add the lazy import + JSX line to `Games.tsx`.
  - `GameItem` handles the responsive layout switch itself: at ≥45em it shows `GameDescription` (full text) via a `matchMedia` listener, otherwise `GameSideMenu` (compact, opens description on info-icon click). It also gates video mounting on `useOnScreen` (IntersectionObserver via the `Utils.tsx` hook) so off-screen game videos aren't loaded/played.
  - `store` prop is a union: `"steam" | "itch" | "google-play" | "app-store"` — drives which store badge/icon `GameDescription` renders.

**i18n**: All user-facing copy lives in `src/localization/english/english.json` and `src/localization/portuguese/portuguese.json` as matching flat key sets, wired up in `src/i18n.tsx` (i18next + browser language detection, English fallback). Components consume strings via translation keys (e.g. `rogueSynopsis`), never hardcoded text — when adding copy, add the key to **both** locale files.

**Analytics**: `src/analytics.ts` wraps `react-ga4`. `initAnalytics()` is called once from `index.tsx`. Use `trackButtonClick`/`trackGameButtonClick`/`trackEvent` rather than calling `ReactGA` directly, so tracking stays consistent (e.g. game names get lowercased/underscored automatically).

**Animation**: `Reveal.tsx` is the shared scroll-reveal wrapper (`framer-motion`, animates once when scrolled into view). Reused across sections instead of each component reimplementing the fade/slide-in.

**Styling**: One CSS file per component, colocated and imported directly in the `.tsx` file (no CSS-in-JS, no shared design-token file) — e.g. `GameItem.tsx` imports `./GameItem.css`.

## Conventions specific to this repo

- Component-local helper functions inside a component body are named PascalCase (e.g. `GetElement()`, `ShowGameDescription()`, `SetDisplay()` inside `GameItem`) — this differs from typical React convention and should be matched, not "fixed", in existing files.
- Video assets referenced by game items live in `public/videos/` and are referenced by relative path string (e.g. `"videos/rogue.webm"`), not imported.

## Owner / résumé context

This is Wendell Leão's professional portfolio. He's a Senior Unity Developer (5 years experience) — this is the primary source of truth for anything requiring career facts, project descriptions, or copy accuracy (about-me text, synopses/descriptions in the locale JSONs, resume-adjacent claims). Ask before inventing/guessing details not covered here; the full résumé PDF is at `.claude/docs/Wendell Leao - Resume.pdf` if more detail is needed.

**Summary**: Builds gameplay systems, multiplayer features, rendering solutions, and scalable gameplay architecture for AA PC/mobile titles. Focus areas: performance optimization, technical problem-solving, legacy system stabilization.

**Core skills**: C#, SOLID, Dependency Injection, State Machines, Factory/Command/Observer patterns, Scriptable Objects, UniTask/async, Addressables/Asset Bundles, Object Pooling, CPU/GPU profiling, UI Toolkit, uGUI, virtualized/data-driven UI, Steamworks API, REST APIs, Git/Git Flow, CI/CD. Multiplayer stacks: FishNet, Mirror, Photon Fusion/Quantum, Netcode for GameObjects, UGS, PlayFab, PlayFlow.

**Work history** (matches games shown in `src/components/games/`):
- **BGNS Studios** (Serbia), Senior Unity Developer, May 2024–present — *Draft Fever Bowl* (`DraftGameItem`): frontend technical rep, led onboarding of 4 programmers, architected scouting/drafting systems (2,000+ synced entities, 40→80-100 FPS), led HDRP→URP migration, rebuilt character-generation pipeline (4min→~50s loads), fixed async texture-gen frame drops. *The Platform* (`ThePlatform`): FishNet multiplayer sync for a UGC platform (Roblox/Rec Room-style), cross-platform PC/Mobile/VR. *PIX Football Manager* (`PixGameItem`): Swagger-mapped REST integration, UI Toolkit diegetic interfaces.
- **Triplano Games** (Brazil), Mid-Level, Jan–Jul 2024 — *Amazon Warriors* (`AmazonGameItem`): reusable data-driven UI framework adopted studio-wide, object pooling for procedural terrain, stable 30 FPS mobile.
- **Advance Garde** (Brazil), Mid-Level, Dec 2021–Dec 2023 — *Rogue Masters* (`RogueGameItem`): Mirror P2P multiplayer for 6-player Steam title, Steamworks integration (room browser, invites), fixed a critical Mirror memory leak, async bootstrap (~60% faster startup), network state machines synced with Mecanim.
- **Main Leaf Games** (Brazil), Junior/Contractor, Aug–Dec 2021 — *UniqKiller* (`UniqKillerGameItem`): Photon Fusion weapon systems for 12-player dedicated servers, PlayFab build deployment, non-alloc physics optimization. *Pet Shop Fever* (`PetShopGameItem`): additive-scene UI framework, Addressables/Asset Bundles asset optimization.

**Other portfolio projects** (personal/academic, not in work history above): Origens (`OrigensGameItem`, FMU degree capstone), Arrow, Top Down Shooter, Plane, Overthrow, Fruits, Bloodlust, Funkin Fighter, Jump, Horror/"Where Are You" (`HorrorGameItem`) — treat these as personal projects, not employer-attributed work, when writing copy.

**Education**: Technology Degree in Digital Game Development — FMU, Brazil (Feb 2019–Jul 2021).
**Languages**: Portuguese (native), English (professional/advanced).
