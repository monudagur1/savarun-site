# SAVARUN.com — Official Website

Fashion Intelligence. Launching 2026.

**Live:** [www.savarun.com](https://www.savarun.com)

## Stack

- Next.js 15 (App Router, static export)
- TypeScript + Tailwind CSS
- GitHub Pages deployment via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Static output is written to `out/` for GitHub Pages.

## Waitlist Submissions

By default, signups are stored in the browser's localStorage (demo mode).

For production email delivery, add a free [Web3Forms](https://web3forms.com) key:

```bash
# .env.local
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key
```

Add the same secret in GitHub repo → Settings → Secrets → Actions as `NEXT_PUBLIC_WEB3FORMS_KEY`, and update the deploy workflow to pass it at build time if needed.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages.

### One-time GitHub setup

1. Repo → **Settings → Pages**
2. Source: **GitHub Actions**
3. Ensure custom domain `www.savarun.com` is set (CNAME in `public/CNAME`)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/product/` | Product features |
| `/about/` | Company story |
| `/waitlist/` | Early access signup |
| `/contact/` | Contact info |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |

## License

© SAVARUN™ — All Rights Reserved
