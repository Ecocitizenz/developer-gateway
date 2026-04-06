# ECZ-ID Developer Gateway

The official developer discovery and onboarding gateway for ECZ-ID — trust infrastructure for the machine economy.

## Overview

This is a static website built with Next.js, designed for deployment to GitHub Pages. It serves as the primary discovery, education, and onboarding entry point for developers building with ECZ-ID.

**Important:** This site is a gateway only. All provisioning, sales, pricing, and credential management happens through [TrustOps](https://trustops.ecocitizenz.com/start). All verification and proof happens through [Resolver](https://resolver.ecocitizenz.org).

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Output:** Static export (no server required)
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
developer-gateway/
├── src/
│   ├── app/          # Pages (19 total)
│   ├── components/   # Reusable UI components
│   ├── data/         # JSON data files
│   └── styles/       # Global CSS
├── public/           # Static assets
├── docs/             # Documentation
└── .github/workflows/ # CI/CD
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone <repository-url>
cd ecz-id-developer-gateway
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

The static site is output to the `out/` directory.

### Preview Production Build

```bash
npx serve out
```

## Deployment

### GitHub Pages (Automated)

Push to the `main` branch triggers automatic deployment via GitHub Actions:

1. The workflow installs dependencies
2. Builds the static site
3. Deploys to GitHub Pages

### Manual Deployment

1. Run `npm run build`
2. Deploy the `out/` directory to any static hosting provider

### GitHub Pages Setup

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to `main` to trigger deployment

## Pages (19 Total)

| Page | Path |
|------|------|
| Homepage | `/` |
| Start with Agents | `/start-with-agents` |
| Agent Starter Kits | `/agent-starter-kits` |
| Build Your Own Agent | `/build-your-own-agent` |
| Agent Directory | `/agent-directory` |
| Domains Index | `/domains` |
| APIs, AI, Data & Software | `/domains/apis-ai-data-software` |
| IoT & Connected Systems | `/domains/iot-connected-systems` |
| Products, Custody & Risk | `/domains/products-custody-risk` |
| Robotics & Humanoids | `/domains/robotics-humanoids` |
| Vehicles & Mobility | `/domains/vehicles-mobility` |
| Drones & Aerial Systems | `/domains/drones-aerial-systems` |
| Trade, Shipping & Infrastructure | `/domains/trade-shipping-infrastructure` |
| Platforms, Marketplaces & Control Overlays | `/domains/platforms-marketplaces-control-overlays` |
| Passport Families & Packages | `/domains/passport-families-packages` |
| Developer Onboarding | `/developer-onboarding` |
| Verification Model | `/verification-model` |
| Why Serious Buyers Care | `/why-serious-buyers-care` |
| Trust Gallery | `/trust-gallery` |
| FAQ | `/faq` |

## Data Files

- `src/data/agents.json` — Agent archetypes and capabilities
- `src/data/starter-kits.json` — 10 starter kit definitions
- `src/data/domains.json` — 9 domain categories with entities
- `src/data/passports.json` — 7 canonical passport families, 33 child passports, parent passport, and derived add-on definitions
- `src/data/packages.json` — 25 packages (17 core + 1 KYA Ready Pack™ + 7 advanced infrastructure services)

## Domain Rules (Locked)

| Domain | Purpose |
|--------|---------|
| `developers.ecocitizenz.com` | ECZ-ID Developer Gateway (this site) |
| `trustops.ecocitizenz.com` | Provisioning, sales, pricing, checkout, onboarding |
| `trustops.ecocitizenz.com/start` | Direct onboarding entry point |
| `resolver.ecocitizenz.org` | Authoritative proof/verification |
| `ecocitizenz.org` | Governance, specifications, formal public definitions ONLY |

- Use `.com` for commercial/developer/onboarding surfaces
- Use `.org` ONLY for governance/specification/formal definition references

## Key Business Rules

1. **This site is a gateway, not an authority plane.** No provisioning, pricing, checkout, or verification happens here.
2. **All CTAs route to TrustOps** (for sales/provisioning) or **Resolver** (for verification).
3. **No hardcoded prices.** Pricing is handled by TrustOps.
4. **No fake verification.** Verification is handled by Resolver.
5. **Agents-first.** The homepage and primary navigation prioritise agents.
6. **Full domain breadth visible.** All 9 domains are discoverable from day one.
7. **Cross-linking throughout.** Domain pages link to related domains, passport families, starter kits, and onboarding paths.
8. **Infrastructure-grade tone.** Safe, calm, precise, premium, corporate, durable, inevitable, trustworthy.

## Documentation

See the `docs/` directory for:

- [Owner Setup Checklist](docs/owner-setup-checklist.md)
- [Publishing Checklist](docs/publishing-checklist.md)
- [Content Governance](docs/content-governance.md)
- [Trust Language Rules](docs/trust-language-rules.md)

## Contributing

Content changes should follow the [Content Governance](docs/content-governance.md) and [Trust Language Rules](docs/trust-language-rules.md) documents.

## License

Proprietary. © EcoCitizenz. All rights reserved.
