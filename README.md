# Aspiring PMs — Jobs & Internships (Starter)

This is a minimal Next.js 14 + Tailwind starter with mock jobs, ready to deploy on Vercel.
Later, connect Supabase for real data, auth, and storage.

## Quick Start
1. `npm install` (or `pnpm i`)
2. `cp .env.example .env.local` and fill values (you can leave Supabase blank for mock mode)
3. `npm run dev`
4. Visit `http://localhost:3000`

## Deploy to Vercel
- Push to GitHub, import into Vercel, set env vars.
- Add custom domain: `jobs.yourdomain.com`.

## WordPress Embed (Option A)
- Use `<iframe src="https://jobs.yourdomain.com/embed/featured" height="800" style="width:100%;border:0;"></iframe>`
  on a WordPress page to show featured jobs.

## Next steps
- Replace mock data with Supabase queries.
- Implement Auth (Supabase Auth UI).
- Build forms for post-a-job and applications.
- Add JobPosting JSON-LD on job pages (basic example included).
