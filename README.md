# Recipe Wonderlab

A premium, cozy AI-powered recipe app built with React, Tailwind CSS, Framer Motion, and Vite.

## Features

- AI-inspired recipe generator
- Premium curated recipe cards
- Saved recipes with local storage persistence
- Seasonal discovery and community chef sections
- Warm glassmorphism UI with soft gradients and animations
- Dark mode support

## Tech stack

- React
- Tailwind CSS
- Framer Motion
- Vite
- React Router DOM

## Run locally

```bash
cd /workspaces/recipe-maker-
npm install
npm run dev
```

## Firebase setup (optional)

1. Create a Firebase project and web app.
2. Add your web app config values to a local `.env` file.
3. Use `VITE_FIREBASE_*` variables from `.env.example`.

```bash
cp .env.example .env
# then edit .env with your Firebase values
```

## Project structure

- `src/App.jsx` — main application router and state logic
- `src/components` — reusable UI components and page sections
- `src/data/recipes.js` — sample recipe data and discovery collections
- `src/index.css` — Tailwind theme overrides and cozy styling

## Notes

- Saved recipes persist in browser local storage.
- The AI recipe generator is simulated with a creative prompt builder.
- UI is built for responsive mobile-first design and premium visual polish.
