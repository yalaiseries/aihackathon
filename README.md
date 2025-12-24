# aihackathon.pro (Netlify)

This repo is a simple multi-page static website designed to deploy on Netlify.

## Deploy (Netlify)

1. In Netlify, connect this GitHub repo.
2. Build settings:
   - **Build command:** (leave blank)
   - **Publish directory:** `.`
   - **Functions directory:** `netlify/functions`
3. Add environment variables:
   - `OPENAI_API_KEY` (required for Q&A)
   - `OPENAI_MODEL` (optional, default: `gpt-4o-mini`)

## Two-tier access (Public + Members)

This site is the **participants learning hub** ("mother" hub). Public pages cover what’s needed to understand and register; learning materials and detailed resources are for registered participants.

It uses **Netlify Identity** for participant sign-in and a protected Netlify Function for participants-only resources.

1. In Netlify: **Site configuration → Identity**
   - Enable Identity
   - Registration preferences: **Invite only** (recommended)
2. Invite members: **Identity → Invite users**
3. Participants sign in at: `/members.html`

Participants-only data is served via `/.netlify/functions/members-resources` and will return `401` unless the user is signed in.

## Local preview

Open `index.html` directly in a browser, or run a static server.

PowerShell (Python installed):

```powershell
cd C:\2026_AI_Collaboration\aihackathon
python -m http.server 5173
```

Then open `http://localhost:5173/`.

## Domain cutover (Blogger → Netlify)

In Netlify: **Site configuration → Domain management**
- Add `aihackathon.pro` and `www.aihackathon.pro`
- Set a primary domain
- Enable HTTPS

Then update DNS at your registrar per Netlify instructions.

Recommended long-term setup:
- Main site: `aihackathon.pro` (Netlify)
- Blogger archive/news: `blog.aihackathon.pro`
