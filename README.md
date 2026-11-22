# Chakka Chinni Krishna — Pokédex Portfolio

A custom, interactive Pokémon / Pokédex-inspired developer portfolio designed and tailored for **Chakka Chinni Krishna**, based on the design language of [thezeroquotient.com/portfolio/details](https://thezeroquotient.com/portfolio/details).

---

## 🌟 Highlights & Features

- **Interactive Meadow & 3D Poké Ball Landing (`#home`)**:
  - Pure CSS 3D floating Poké Ball with heartbeat pulse and glossy highlight reflections.
  - Interactive sequence: on click or "Tap to meet Krishna", the Poké Ball shakes, spins, fires a radiant light beam, and triggers an animated white flash transition into the Pokédex details view.
  - "← Back to Grass" button smoothly navigates back to the interactive meadow.

- **Pokédex Digital Space & Trainer Card (`#info` / `details.html`)**:
  - **Ambient Drifting Clouds**: Continuously drifting sky clouds pinned to the header view.
  - **Trainer Card**:
    - Route landscape badge with hovering Pokédex stats (`HT 5'9"`, `LVL 21`).
    - Framed portrait with animated float and soft ground shadow.
    - Status badge: *"Available for Software & Full-Stack Roles"*.
    - Location, University, and Core Technical Stack pills.
    - Quick links to LinkedIn, GitHub (@GrayViper), Email, Phone, and downloadable Resume PDF.
  - **About Me**: Narrative connecting Krishna's academic studies at LPU, full-stack development, and Agentic AI enthusiasm.
  - **Interactive Experience & Training Switcher**:
    - **Xebia** — Fullstack Trainee (Agentic A.I): Notion, Notebook LLM, Postman, Copilot, Kiro, Antigravity, vibe coding, MongoDB Atlas, and Vercel/Render CI/CD.
    - **Lovely Professional University** — B.Tech Computer Science & Engineering (CGPA: 7.2).
  - **Featured Quests (Projects)**:
    - **No. 01: Career_Genie**: React, FastAPI, MongoDB Atlas, JWT Auth, Vite, Vercel, Render.
    - **No. 02: hi_links**: Next.js, TypeScript, Drizzle ORM, Neon Postgres, Vercel CI/CD.
    - **No. 03: Cura-AI-Health Assistant**: Python, Flask, Google Gemini API, Chart.js, SQLite.
  - **Certifications & Badges (Interactive Gym Badges Gallery)**:
    - 9 verified certifications with click-to-view high-resolution lightbox modals (Python, DBMS, Linux, C, C++, Software Testing, Code A Haunt, CyberSmart, Achievement).
  - **Milestones & Achievements**:
    - Intra-Hostel Speech Competition (5th Place).
    - Inter-Hostel Marathon Finisher.
  - **Education**: Complete timeline (Lovely Professional University, KV Maligaon, St. Basil's Academy).
  - **"Drop a Pokémon" Interactive Crowd Footer**:
    - Live PokéAPI integration fetching official artwork from all 1025 Pokémon species.
    - Click *"＋ Drop a Pokémon"* to drop an animated Pokémon with hover name tags and live visitor counter.
    - Saved locally in browser storage so returning visitors remember their drop!

---

## 🚀 How to Run Locally

### Option 1: Direct in Browser
Simply double-click `index.html` or `details.html` to open it in any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server
Run a local static server with Python:
```bash
python -m http.server 3000
```
Then visit:
- **Meadow & Details App**: `http://localhost:3000`
- **Direct Details View**: `http://localhost:3000/details.html`

---

## 🌐 Deploy to Vercel or GitHub Pages

### To Vercel:
```bash
npx vercel
```

### To GitHub Pages:
1. Push this folder to a GitHub repository (e.g. `GrayViper/portfolio`).
2. Go to **Settings > Pages** and select the `main` branch root.
3. Your portfolio is live!
