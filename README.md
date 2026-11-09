# EPICO Official Bio-Link & Brand Hub

> **"MAKE IT EPIC"** - Official Digital Hub and Verified Bio-Link for EPICO Athletic Apparel & Community.

Engineered with high-contrast, kinetic editorial aesthetics inspired by Nike, Adidas, and Puma. Built with React (Vite), Tailwind CSS, Framer Motion, and Express/Serverless Node.js backend with Nodemailer.

---

## 1. Project Architecture

```
EPICO/web/
├── api/
│   └── send-comment.js         # Vercel Serverless Function for visitor inquiries
├── backend/
│   ├── .env.example            # Environment template for SMTP email credentials
│   ├── package.json            # Express server dependencies
│   └── server.js               # Standalone Express.js server (local development & container deploys)
├── frontend/
│   ├── public/
│   │   ├── favicon.png         # Cropped high-resolution EPICO wing emblem
│   │   └── assets/             # Brand logos (white, dark, icon, text)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ActionButtons.jsx # 4 dynamic interactive action links with color inversion
│   │   │   ├── BrandFooter.jsx   # Editorial athletic copyright & legal correspondence
│   │   │   ├── BrandIcons.jsx    # Bespoke SVG brand icons (TikTok, Instagram, WhatsApp, Mail)
│   │   │   ├── HeaderHero.jsx    # Staggered entrance animation with white-on-black logo
│   │   │   ├── KineticTicker.jsx # Kinetic athletic marquee accent line
│   │   │   ├── MessageForm.jsx   # Direct inquiry form with idle/loading/success states
│   │   │   └── Watermark.jsx     # Oversized 3% opacity background wing emblem
│   │   ├── config/
│   │   │   └── links.js        # Centralized social links and brand configuration
│   │   ├── App.jsx             # Responsive mobile-app & desktop editorial split layout
│   │   ├── index.css           # Athletic design tokens and kinetic clip-path utilities
│   │   └── main.jsx            # React root mount
│   ├── index.html              # Athletic HTML shell with semantic metadata & Barlow font
│   ├── package.json            # Frontend dependencies
│   ├── tailwind.config.js      # Pitch black, obsidian, stark white & ash color tokens
│   └── vite.config.js          # Vite config with local backend proxy
├── package.json                # Root package orchestration
├── vercel.json                 # Unified Vercel deployment configuration
└── .gitignore                  # Git exclusions
```

---

## 2. Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or newer)
- npm or pnpm

### Step 1: Install Dependencies
```bash
# Install root, frontend, and backend packages
npm run install:all
```

### Step 2: Configure Environment Variables
Inside `/backend`:
```bash
cp backend/.env.example backend/.env
```
Fill in your Gmail or SMTP credentials:
- `SMTP_USER`: Your Gmail address (e.g. `epicosportofficial@gmail.com`)
- `SMTP_PASS`: Your Gmail App Password (generated via Google Account > Security > 2-Step Verification > App passwords)
- `RECIPIENT_EMAIL`: Target recipient (`epicosportofficial@gmail.com`)

*(Note: If left empty, the server automatically runs in safe demo mode, cleanly logging submissions to the terminal without crashing).*

### Step 3: Run Locally
Open two terminal tabs:

**Terminal 1 (Backend API on http://localhost:5000):**
```bash
npm run dev:backend
```

**Terminal 2 (Frontend App on http://localhost:5173):**
```bash
npm run dev:frontend
```

---

## 3. How to Update Social Links (`frontend/src/config/links.js`)

Edit `frontend/src/config/links.js` to update social destinations anytime:

```javascript
export const actionLinks = [
  {
    id: "tiktok",
    title: "TIKTOK EPICO",
    subtitle: "OFFICIAL CONTENT & DROPS",
    icon: "tiktok",
    url: "https://www.tiktok.com/@epicosportofficial",
    isExternal: true,
  },
  {
    id: "instagram",
    title: "INSTAGRAM EPICO",
    subtitle: "EDITORIAL & COMMUNITY",
    icon: "instagram",
    url: "https://www.instagram.com/epicosportofficial",
    isExternal: true,
  },
  {
    id: "whatsapp",
    title: "WHATSAPP EPICO",
    subtitle: "DIRECT VIP CONCIERGE & ORDERS",
    icon: "whatsapp",
    url: "https://wa.me/6281234567890",
    isExternal: true,
  },
  {
    id: "email",
    title: "EMAIL OFFICIAL EPICO",
    subtitle: "COMMERCIAL & PARTNERSHIPS",
    icon: "mail",
    url: "mailto:epicosportofficial@gmail.com",
    isExternal: false,
  },
];
```

---

## 4. Deployment to Vercel

The project includes a root `vercel.json` configured for single-command zero-config deployment.

### Option A: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Via GitHub & Vercel Dashboard
1. Push this repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Keep default root settings (Vercel reads `vercel.json` automatically).
4. In **Project Settings > Environment Variables**, add:
   - `SMTP_HOST`: `smtp.gmail.com`
   - `SMTP_PORT`: `465`
   - `SMTP_SECURE`: `true`
   - `SMTP_USER`: `epicosportofficial@gmail.com`
   - `SMTP_PASS`: Your Gmail App Password
   - `RECIPIENT_EMAIL`: `epicosportofficial@gmail.com`
5. Deploy. Both the frontend and the `/api/send-comment` serverless function deploy together seamlessly.

---

## 5. Visual Identity & Anti-AI-Slop Standard
- **Pure Pitch Black** (`#000000`) & Obsidian surfaces (`#0A0A0A` to `#111111`).
- **Pure Stark White** (`#FFFFFF`) with Metallic Ash accents (`#888888`).
- **No generic AI gradients or floating rounded-3xl cards**: Sharp, angular cuts that echo the geometry of the forward-leaning EPICO wing emblem.
- **Snappy Kinetic Feedback**: Staggered reveals, hover color inversion, and diagonal arrow translation.

