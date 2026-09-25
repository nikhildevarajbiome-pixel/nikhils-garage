# Nikhil's Garage

A cinematic, interactive personal site — not a resume, a world. Built with **React + Vite + Three.js (React Three Fiber) + GSAP-ready CSS transitions**.

---

## 1. Run it locally (VS Code)

```bash
# 1. Open this folder in VS Code
# 2. Open a terminal (Terminal → New Terminal) and run:
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

Every time you save a file, the browser updates instantly — no refresh needed.

---

## 2. Edit your personal information

**Almost everything on the site is controlled from one file:**

```
src/data/personalData.js
```

Open it and change:
- Name, nickname, age, location, education, tagline
- About Me paragraphs
- Childhood section text/themes
- F1 & motorsport favorites (driver, teams, car)
- Go-karting venue
- Garage (dream car / bike / racing interest)
- PC setup title
- Future dream text
- Social links: Instagram, email, LinkedIn, GitHub, WhatsApp number

You generally never need to touch component code just to change your info.

---

## 3. Where to put your photos

Put your 3 personal photos here, replacing the placeholders:

```
public/images/profile-1.jpg
public/images/profile-2.jpg
public/images/profile-3.jpg
```

Keep the same file names, or change the `profileImages` array in
`src/data/personalData.js` to point at new file names.

These photos are used in the **About Me** holographic card and the
**My Memories** gallery.

---

## 4. Where to put your PC setup image

```
public/images/pc-setup.jpg
```

Or update `pcSetup.image` in `src/data/personalData.js` to a different path.

---

## 5. Where to put your Go-Karting certificate

```
public/images/go-karting-certificate.jpg
```

Or update `goKarting.certificateImage` in `src/data/personalData.js`.
Clicking "View Certificate" in the F1 & Motorsports section opens it in a modal.

---

## 6. Adding videos

Open `src/data/personalData.js` and add entries to the `videos` array:

```js
videos: [
  // A local video file placed in /public/videos/
  { type: "file", src: "/videos/trackday.mp4", title: "Track Day", poster: "/images/profile-1.jpg" },

  // A YouTube video (use just the video ID from the URL)
  { type: "youtube", id: "dQw4w9WgXcQ", title: "Go-Karting Highlights" },
],
```

Local video files go in:

```
public/videos/
```

The **My Memories** section will automatically render a thumbnail grid;
clicking a card opens the video full-screen in a modal.

---

## 7. Replacing the 3D F1 car with your own model

The current F1 car (`src/components/F1Car.jsx`) is built from primitive
3D shapes — no licensed Ferrari/Mercedes model is embedded, for legal
reasons. To use your own model:

1. Get a `.glb` (glTF binary) 3D model file of a car.
2. Place it at `public/models/f1-car.glb`
3. In `src/sections/Hero.jsx`, replace the `<F1Car hovered={hovered} />` line with:

```jsx
import { useGLTF } from "@react-three/drei";

function MyCarModel(props) {
  const { scene } = useGLTF("/models/f1-car.glb");
  return <primitive object={scene} scale={1} {...props} />;
}

// then inside <Suspense fallback={<F1Car hovered={hovered} />}>
<MyCarModel />
```

Wrapping it in `<Suspense>` with the procedural car as a fallback means
the page still shows something while your model streams in.

---

## 8. Changing colors / fonts

Open `src/styles/tokens.css`. Every color, font, and spacing value used
across the whole site is defined there as a CSS variable — change once,
updates everywhere.

---

## 9. Sound (optional, off by default)

The sound toggle button (bottom-right) is silent until the visitor
clicks it, per browser autoplay rules. To give it something to play,
add an ambient loop at:

```
public/audio/ambience.mp3
```

---

## 10. Production build

```bash
npm run build
```

This creates an optimized static site in the `dist/` folder.
Preview it locally with:

```bash
npm run preview
```

---

## 11. Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Vite from `vercel.json`.

**Option B — GitHub + Vercel dashboard**
```bash
git init
git add .
git commit -m "Initial commit — Nikhil's Garage"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```
Then go to [vercel.com/new](https://vercel.com/new), import the repo,
and click **Deploy**. No extra configuration needed — `vercel.json` and
`vite.config.js` are already set up.

---

## Project structure

```
src/
  components/     Reusable UI: Navigation, LoadingScreen, CustomCursor,
                   SpaceBackground, F1Car, Modal, Reveal, Telemetry, SoundToggle
  sections/       One file per page section (Hero, About, Childhood,
                   Motorsport, Garage, Memories, Future, Contact)
  data/           personalData.js — all your editable content
  hooks/          useReducedMotion, useIsMobile, useScrollReveal
  styles/         tokens.css (design variables), global.css (layout/animation)

public/
  images/         Your photos, PC setup shot, go-karting certificate
  videos/         Local video files
  models/         Optional .glb 3D model to replace the procedural car
  audio/          Optional ambient sound loop
```

---

## Notes on what's built in

- **Performance**: 3D effects automatically scale down on mobile (lower
  pixel ratio, disabled environment reflections). `prefers-reduced-motion`
  is respected everywhere — reveal animations, scroll cues, and sound bars
  all simplify or disable themselves.
- **Accessibility**: semantic HTML, visible keyboard focus states, alt
  text on every image, all interactive elements are real buttons/links,
  and nothing depends on hover alone.
- **No invented biography**: only the information you provided is on the
  site. Anywhere information was missing (PC specs, extra videos, GitHub
  URL, WhatsApp number), it's left as a clearly marked editable placeholder
  in `personalData.js` rather than invented.
