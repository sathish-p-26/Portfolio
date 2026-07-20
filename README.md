# Sathish P — Personal Portfolio

A production-ready personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React + React Icons |
| Email | EmailJS |
| Fonts | Google Fonts (Poppins + Inter) |

---

## 📁 Project Structure

```
sathish-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.png            ← Your professional photo
│   │   ├── email-automation.png   ← Project screenshot
│   │   ├── telegram-assistant.png ← Project screenshot
│   │   ├── news-automation.png    ← Project screenshot
│   │   └── soundtrack-app.png     ← Project screenshot
│   ├── resume/
│   │   └── Sathish-P-Resume.pdf   ← Your resume PDF
│   └── favicon.svg
├── src/
│   ├── components/                ← Reusable UI components
│   ├── sections/                  ← Full-page sections
│   ├── data/
│   │   └── portfolioData.js       ← ALL editable content here
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                           ← EmailJS credentials (create from .env.example)
└── ...
```

---

## ⚙️ Setup & Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Configure EmailJS

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Edit `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [https://www.emailjs.com/](https://www.emailjs.com/).

### 3. Add your assets

| File | Location |
|------|----------|
| Profile photo | `public/images/profile.png` |
| Resume PDF | `public/resume/Sathish-P-Resume.pdf` |
| Project screenshot 1 | `public/images/email-automation.png` |
| Project screenshot 2 | `public/images/telegram-assistant.png` |
| Project screenshot 3 | `public/images/news-automation.png` |
| Project screenshot 4 | `public/images/soundtrack-app.png` |

### 4. Update content

All personal content is in one file:

```
src/data/portfolioData.js
```

Update:
- `personal.social.linkedin` — your LinkedIn URL
- `personal.social.github` — your GitHub URL
- `projects[*].liveUrl` — live demo links
- `projects[*].githubUrl` — GitHub repo links

---

## 🖥️ Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
```

Output in `dist/`

## 🔍 Preview Build

```bash
npm run preview
```

---

## 📧 EmailJS Template Variables

Your EmailJS email template should include these variables:

- `{{from_name}}` — sender name
- `{{from_email}}` — sender email
- `{{subject}}` — message subject
- `{{message}}` — message body

---

## 🎨 Color System

| Token | Value |
|-------|-------|
| Main Background | `#020617` |
| Section Background | `#0F172A` |
| Card Background | `#111827` |
| Secondary Card | `#1E293B` |
| Primary Blue | `#2563EB` |
| Bright Blue | `#3B82F6` |
| Main Text | `#F8FAFC` |
| Secondary Text | `#CBD5E1` |
| Muted Text | `#94A3B8` |

---

## ✅ Features

- [x] Fixed responsive navbar with active section indicator
- [x] Hero section with profile photo and CTA buttons
- [x] About Me section
- [x] Work Experience cards
- [x] Technical Skills with categorized pill tags
- [x] Featured Projects grid with image fallback
- [x] Education vertical timeline
- [x] Certifications grid
- [x] Contact form with EmailJS, validation, and loading states
- [x] Footer with quick navigation
- [x] Framer Motion animations throughout
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Accessible (ARIA labels, semantic HTML, keyboard navigation)
- [x] SEO meta tags + Open Graph
- [x] Reduced-motion support
- [x] Custom scrollbar

---

© 2026 Sathish P. All rights reserved.
