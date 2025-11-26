# Birthday Website 🎂

A React + Vite + Tailwind celebration site with sections for a landing message, memories gallery, reasons we love the birthday human, and a heartfelt letter.

## Getting Started

```bash
cd /Users/tarunmalviya/Desktop/WEBSITE
npm install
npm run dev
```

> If you prefer Yarn or pnpm, update the commands accordingly.

## Populate the Gallery

1. Place your photos inside `public/images`.
2. Update the `memories` array in `src/App.jsx` with the filenames and details.

## Tech Stack

- Vite + React 18
- Tailwind CSS
- lucide-react icon set

Enjoy celebrating! 🎉

## Deploying to Vercel

Two quick ways to deploy this site to Vercel (choose one):

- **Via Vercel Dashboard (recommended)**: connect your Git repository to Vercel, set the **Build Command** to `npm run build` and **Output Directory** to `dist`. Vercel will build and deploy on push.

- **Via CLI (fast, requires login)**:

	1. Install or use the CLI: `npm i -g vercel` or run with `npx`.
	2. Build locally (optional): `npm run build`.
	3. Deploy to production: `npx vercel --prod --confirm` or `npm run deploy`.

Notes & troubleshooting:

- The project is configured for static deployment; the build output is `dist`.
- If you see routing issues for a single-page app, `vercel.json` is included and will rewrite routes to `index.html`.
- If you prefer automatic deployments, connect the repo to Vercel and enable the Git integration.

If you want, I can try running `npx vercel --prod` from here — I will need you to either log in on this machine or provide a Vercel token. Tell me which you'd prefer.

