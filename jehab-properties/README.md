# Jehab Properties — landing page

A three.js-animated landing page for the **Jehab Properties** real-estate brand.
White-dominant, breathable layout with an ink-black type system and a single
confident blue. Built greenfield in `KingdomJoe/jehab-properties/`.

## Run it

```bash
cd jehab-properties
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run typecheck  # strict TS check
```

## Stack & open-source ingredients

| Layer | Library |
| --- | --- |
| 3D engine | [three.js](https://threejs.org) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) |
| UI components | [shadcn/ui](https://ui.shadcn.com)-style components on [Radix UI](https://www.radix-ui.com/primitives) primitives (button, card, badge, tabs, accordion, dialog, input) |
| Icons | [Lucide](https://lucide.dev) |
| Animation | [Motion](https://motion.dev) (scroll reveals), [Lenis](https://lenis.dev) (smooth scroll) |
| Carousel | [Embla](https://www.embla-carousel.com) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Type | Self-hosted [Inter](https://rsms.me/inter/) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via `@fontsource` |

## The 3 CC0 3D assets

The hero and commercial scenes use three GLB models by [Kenney](https://kenney.nl),
all **CC0 1.0 (public domain)**, vendored in `public/models/` (see
[`public/models/ATTRIBUTION.md`](public/models/ATTRIBUTION.md)):

- `house-suburban.glb` — City Kit: Suburban (`building-type-b`)
- `tower-commercial.glb` — City Kit: Commercial (`building-skyscraper-a`)
- `tree-detailed.glb` — Nature Kit (`tree-detailed`)

At load time the saturated Kenney palette is remapped to a monochrome
"architectural maquette" (see `src/three/archviz.ts`) so the models sit inside the
black / white / blue brand instead of fighting it.

## Layout

Navbar · Hero (3D maquette + floating info chips) · neighbourhood marquee · animated
stats · featured listings (tabs) · services · commercial showcase (3D tower) · about ·
testimonials (carousel) · FAQ (accordion) · contact (inverted band) · footer ·
"book a viewing" dialog.
