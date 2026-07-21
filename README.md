# Ruchika Bangar — 3D Portfolio

A premium, dark-themed 3D portfolio built with React, Vite, Three.js (via React
Three Fiber), and Framer Motion. All content comes from one file —
[`src/data/portfolioData.js`](./src/data/portfolioData.js) — so you can update
your resume details without touching any component code.

---

## 1. Project structure

```
ruchika-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf            ← ADD YOUR RESUME PDF HERE (see step 5)
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── Scene.jsx              # Canvas, lighting, particles
│   │   │   ├── DeveloperWorkspace.jsx # Signature floating "code panel"
│   │   │   ├── FloatingObjects.jsx    # React / JS / HTML / CSS shards
│   │   │   └── SceneErrorBoundary.jsx # WebGL failure fallback
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── data/
│   │   └── portfolioData.js   ← EDIT THIS FILE to update any content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml   # Auto-deploy to GitHub Pages on push
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Move into the project folder
cd ruchika-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.

To build a production bundle and preview it locally:

```bash
npm run build
npm run preview
```

---

## 3. Push the project to GitHub

```bash
# From inside the ruchika-portfolio folder
git init
git add .
git commit -m "Initial commit: 3D portfolio"

# Create an empty repo on GitHub first (e.g. "portfolio"), then:
git branch -M main
git remote add origin https://github.com/ruchikabangar/portfolio.git
git push -u origin main
```

---

## 4. Deploy to GitHub Pages

You have two options — pick one.

### Option A — Automatic, via GitHub Actions (recommended)

This repo already includes `.github/workflows/deploy.yml`, which builds and
deploys the site automatically every time you push to `main`.

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option B — Manual, via the `gh-pages` package

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to a `gh-pages` branch.
Then in your repo → **Settings → Pages**, set the source branch to `gh-pages`.

### ⚠️ Important: set the correct `base` path

Open [`vite.config.js`](./vite.config.js) and make sure `base` matches your
repo name:

```js
base: '/portfolio/', // change 'portfolio' to your actual repo name
```

- Deploying to `https://<username>.github.io/<repo-name>/` → use `/<repo-name>/`
- Deploying to `https://<username>.github.io/` (a user/org page) or a custom
  domain → use `/`

If you skip this, the deployed site will load with broken CSS/JS paths.

---

## 5. Add your resume PDF

The "Download Resume" button links to `/resume.pdf`. Add your actual resume
file at:

```
public/resume.pdf
```

It will then be downloadable at `https://<your-site>/resume.pdf`.

---

## 6. Connect the contact form

The contact form is intentionally **frontend-only** — there's no fake
backend. It validates input (name, email format, message length) but won't
actually send anything until you wire it up. Open
`src/data/portfolioData.js` and fill in **one** of these in `contactConfig`:

**Option A — Formspree (easiest)**
1. Create a form at [formspree.io](https://formspree.io).
2. Copy the endpoint (`https://formspree.io/f/xxxxxxx`).
3. Paste it into `contactConfig.formspreeEndpoint`.

**Option B — EmailJS**
1. Create an account at [emailjs.com](https://www.emailjs.com).
2. Create a service + email template.
3. Fill in `contactConfig.emailjs.serviceId`, `templateId`, and `publicKey`.

**Option C — Your own backend**
Point `contactConfig.customEndpoint` at an API route that accepts a POST
request with `{ name, email, message }`.

Until one of these is set, submitting the form shows a friendly message
telling the visitor the form isn't connected yet (instead of silently
failing).

---

## 7. Update your project links

In `src/data/portfolioData.js`, each project has `liveUrl` and `githubUrl`
placeholders. Fill in real links once you have them — until then, the
"Live link" button is disabled and clearly says "coming soon" rather than
pointing anywhere fake.

---

## 8. Performance notes

- The 3D scene (`Scene.jsx`) is **lazy-loaded** via `React.lazy` + `Suspense`,
  so it never blocks the initial page paint.
- On screens under 768px, particle count and floating shard count are
  automatically reduced.
- If WebGL fails or isn't supported, `SceneErrorBoundary` swaps in a static
  glowing gradient instead of crashing the page.
- `prefers-reduced-motion` is respected globally in `index.css`.

---

## 9. Final checklist before you call it done

- [ ] `npm install` completes with no errors
- [ ] `npm run dev` loads the site at `localhost:5173` with the 3D hero visible
- [ ] `npm run build` completes with no errors
- [ ] `npm run preview` shows the production build correctly
- [ ] `vite.config.js` → `base` matches your GitHub repo name
- [ ] `public/resume.pdf` added and the "Download Resume" button works
- [ ] Contact form backend configured (Formspree/EmailJS/custom) in `portfolioData.js`
- [ ] Project `liveUrl`/`githubUrl` fields updated with real links
- [ ] Site tested on desktop, tablet, and mobile widths
- [ ] Site pushed to GitHub and deployed via GitHub Pages
- [ ] Every nav link scrolls to the correct section

---

## Tech stack

React 18 · Vite 5 · Three.js · @react-three/fiber · @react-three/drei ·
Framer Motion · Tailwind CSS · Lucide React
