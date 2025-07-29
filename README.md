# 🎮 Bingo Jeux Vidéo

This project is a local-first web application that aims to improve and modernize an existing video game bingo platform. It serves as a testbed for new features, UI/UX improvements, and gameplay modes — all accessible via a welcoming home screen.

## 🚀 Features

- ✅ React + TypeScript
- ✅ Vite for fast development
- ✅ Tailwind CSS for styling
- ✅ React Router for multipage navigation
- 🧪 Local development environment
- 🌐 Ready for GitHub Pages deployment

---

## 📁 Project structure

```txt
/src
├─ /pages
│ ├─ Home.tsx
│ ├─ Player.tsx
│ ├─ Spectator.tsx
│ └─ Developer.tsx
├─ main.tsx
└─ index.css
```

---

## 💻 Getting started

### 1. Clone the repository

```bash
git clone https://github.com/Nat004499/bingo_jeux_video.git
cd bingo_jeux_video
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open <http://localhost:5173> in your browser.

## 📦 Build for production

```bash
npm run build
```

Then preview the production build with:

```bash
npm run preview
```

## 🚀 Deploy to GitHub Pages (optional)

To deploy this project under a subpath (e.g. `/bingo_jeux_video/` on GitHub Pages), set:

### `vite.config.ts`

```ts
base: '/bingo_jeux_video/',
```

### `src/main.tsx`

```ts
<BrowserRouter basename="/bingo_jeux_video">
```

### Add and run deploy script

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

Make sure your repository is public and the `homepage` field is set in `package.json`:

```json
"homepage": "https://YOUR_USERNAME.github.io/bingo_jeux_video/"
```

## 🧱 Roadmap

- Add bingo grid system (dynamic & editable)
- Enable multiplayer synchronization
- Add invisible interaction for spectators
- Developer mode with editor + live preview
- Final visual polish and animations

## 🛠️ Tech stack

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router

## 📄 License

This project is under the MIT License — feel free to reuse and contribute!
