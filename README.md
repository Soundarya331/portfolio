# Portfolio — Soundarya P

A React + TypeScript + Tailwind portfolio site, pre-filled with your
experience at GoodWorkLabs (Kriatix CRM), Netskill LMS, and JSpiders.

## Design

- **Palette**: deep navy background (`#0B1220`), teal accent (`#4FD1C5`),
  amber used sparingly (`#F2A65A`).
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels,
  code, the query console).
- **Signature element**: the hero's animated "query console" — it types out
  real SQL-style queries about your experience and stack, echoing your daily
  work with PostgreSQL/TypeORM.
- Sections are styled like database records and schema columns (skills as
  typed columns, projects as records) — a motif grounded in your backend
  work rather than a generic template.

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Before you deploy — things to personalize

1. **Contact links** — `src/components/Contact.tsx`: replace the email and
   LinkedIn/GitHub placeholder URLs with your real ones.
2. **Resume file** — drop your resume PDF at `public/resume.pdf` (create the
   `public/` folder if it doesn't exist) so the "download_resume.pdf" button
   in the hero works.
3. **Project descriptions** — `src/components/Projects.tsx` describes
   Kriatix CRM generically since it's proprietary. Adjust wording if your
   employer has specific guidance on what you can publicly describe.
4. **GitHub links on projects** — if you publish Netskill LMS or any other
   repo publicly, add a repo link per project card.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

