# Deploying Jehab Properties to Vercel

The repo root already ships a [`vercel.json`](../vercel.json) configured for this
subdirectory, so importing the repo requires **no manual configuration**.

## One-time setup (≈2 minutes)

1. Go to <https://vercel.com/new> and sign in with the GitHub account that owns
   `KingdomJoe/KingdomJoe`.
2. **Import** the `KingdomJoe/KingdomJoe` repository.
3. Vercel reads `vercel.json` and pre-fills:
   - Install: `npm --prefix jehab-properties install`
   - Build: `npm --prefix jehab-properties run build`
   - Output: `jehab-properties/dist`
4. Press **Deploy**. You'll get a free URL like `https://kingdomjoe.vercel.app`
   (and a per-branch preview such as `https://<branch>.<project>.vercel.app`).

From then on, **every push to a branch deploys automatically** — pushes to your
default branch update the production URL; other branches create preview URLs.

> If you'd rather not rely on `vercel.json`, the equivalent manual setting is:
> **Root Directory = `jehab-properties`** in the project settings, leaving the
> detected Vite framework defaults in place.

## Local sanity check (mirrors CI exactly)

```bash
# from the repo root
npm --prefix jehab-properties install --no-audit --no-fund
npm --prefix jehab-properties run build   # outputs jehab-properties/dist
```

## Adding a custom domain later (e.g. jehabproperties.com)

1. In Vercel: project → **Settings → Domains** → add `jehabproperties.com`.
2. At your DNS registrar add:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`
3. Vercel provisions a free TLS certificate automatically (a couple of minutes).

Absolute asset paths (`/models`, `/images`) are served from the site root, so the
same build works on the free subdomain and on a custom domain with no changes.

## Caching

`vercel.json` sets long-lived immutable caching on hashed `/assets`, and 7-day
caching on `/models` and `/images`. `index.html` is never cached so deploys go
live immediately.
