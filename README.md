# 🌐 Personal Portfolio — React + Vite

A modern, animated personal portfolio built using **React (JSX)** and **Vite**.
The project focuses on component reusability, smooth UI animations, and centralized content management.

The entire UI is dynamically rendered through React inside a single HTML root.

---

# 🚀 Tech Stack

| Technology       | Purpose                             |
| ---------------- | ----------------------------------- |
| JavaScript + JSX | Core logic, UI, animations          |
| React            | Component-based architecture        |
| Vite             | Fast dev server & build tool        |
| CSS              | Global styles & keyframe animations |
| JSON             | Project configuration               |

> ⚡ ~95% of the project is JavaScript/JSX

---

# 📂 Project Structure

```
my-portfolio/
│
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── data/
    │   └── portfolioData.js
    │
    ├── components/
    │   ├── ParticleCanvas.jsx
    │   ├── Typewriter.jsx
    │   ├── SkillBar.jsx
    │   ├── Card.jsx
    │   ├── Section.jsx
    │   ├── Nav.jsx
    │   └── Footer.jsx
    │
    └── sections/
        ├── Home.jsx
        ├── Skills.jsx
        ├── Achievements.jsx
        ├── Projects.jsx
        └── Contact.jsx
```

---

# 🧠 Architecture Philosophy

### 1️⃣ Component-based design

Reusable UI blocks live inside **components/**
Examples:

* Particle background
* Skill bars
* Cards
* Navbar
* Footer

---

### 2️⃣ Section-driven layout

Full-page sections live inside **sections/**
Each section represents a major page area:

* Hero
* Skills
* Achievements
* Projects
* Contact

---

### 3️⃣ Centralized content system

All portfolio data is stored in:

```
src/data/portfolioData.js
```

This allows editing content without touching UI code.

---

# ✨ Features

✅ Animated particle canvas background
✅ Typewriter hero text animation
✅ Glassmorphism cards with fade effects
✅ Animated skill progress bars
✅ Sticky navigation bar
✅ Responsive section layout
✅ Centralized data-driven portfolio
✅ Inline CSS-in-JS styling for dynamic UI
✅ Smooth UI transitions and hover effects

---

# ⚙️ How the Project Works

### Step 1 — HTML Shell

`index.html` contains a single root div

```
<div id="root"></div>
```

React mounts the entire app here.

---

### Step 2 — React Entry

`main.jsx` renders the App component into the root.

---

### Step 3 — App Composition

`App.jsx` assembles all sections and global layout.

---

### Step 4 — Data Injection

Sections fetch content from:

```
portfolioData.js
```

---

### Step 5 — Styling

* Inline CSS-in-JS for most UI styling
* `index.css` for global styles & animations

---

# ▶️ Run Locally

```bash
# 1. Clone repo
git clone <repo-url>

# 2. Go inside project
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
```

---

# 🏗️ Build for Production

```bash
npm run build
```

---

# 🎯 How to Customize Portfolio Content

Edit only this file:

```
src/data/portfolioData.js
```

You can update:

* Projects
* Skills
* Achievements
* Social links
* Contact info
* Hero text

No UI changes required.

---

# 📦 Deployment (Recommended)
You can deploy using:

* Vercel
* Netlify
* GitHub Pages

After build:

```
dist/ → production output
```

---

# 💡 Key Learning Outcomes

* React component architecture
* JSX and CSS-in-JS styling
* Animation integration in React
* Centralized content pattern
* Vite build configuration
* Modular scalable folder structure

---

# 📜 License

This project is open-source and free to use for personal portfolios.
