# Tara Flow

Professional adventure tourism website for Bojan and Dalibor, based in Foča, Bosnia and Herzegovina.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **next-intl** (Bosnian + English)
- **Resend** (contact form emails)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` and add:

```
RESEND_API_KEY=re_PRouWTpt_7v4E5TBTaFRV4dwYbMTZdxoR
```

Get your API key at [resend.com](https://resend.com). The contact form sends emails to `taraflow@gmail.com`.

## Brand

- **Primary blue:** #0F4C75  
- **Accent green:** #2D5016  
- **Background cream:** #F5F0E8  

## Logo

Replace `public/logo.svg` with your logo, or add `public/logo.png`. The site uses `logo.svg` as placeholder.

## Pages

- `/` — Homepage
- `/ture` (BS) / `/tours` (EN) — All tours
- `/ture/[slug]` — Tour detail with booking form
- `/galerija` / `/gallery` — Photo gallery
- `/o-nama` / `/about` — About Bojan & Dalibor
- `/kontakt` / `/contact` — Contact form + Google Maps

## Languages

- **Bosnian (BS)** — default
- **English (EN)** — switch via navbar
