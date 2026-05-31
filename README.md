# NexLearn — Next-Gen Student Dashboard

A futuristic, highly animated education platform dashboard built with Next.js 14, Supabase, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Dark-mode Bento Grid** layout with deep backgrounds and glowing cyan/purple accents
- **Staggered entrance animations** via Framer Motion spring physics
- **Real-time course data** fetched from Supabase using Next.js Server Components
- **Animated progress bars** that count up on scroll into view
- **Activity contribution graph** (GitHub-style, last 6 months)
- **Collapsible sidebar** with `layoutId` highlight animations
- **Skeleton loaders** with shimmer animation while data loads
- **Fully responsive**: sidebar collapses to icons on tablet, moves to bottom nav on mobile

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework & Server Components |
| **Supabase** | PostgreSQL database & BaaS |
| **Framer Motion** | All animations (spring physics, stagger, layoutId) |
| **Tailwind CSS** | Styling |
| **Lucide React** | Icons (dynamic rendering from DB string) |
| **TypeScript** | Full type safety |

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/your-username/learning-dashboard.git
cd learning-dashboard
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Open the **SQL Editor** and run the contents of `supabase-setup.sql`
3. Copy your project URL and anon key from **Settings → API**

### 3. Configure environment

```bash
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **No Supabase?** The dashboard auto-falls back to mock data if env vars are missing, so it works out of the box for demos.

---

## 🏗 Architecture

### Server / Client Split

| Component | Type | Reason |
|-----------|------|--------|
| `app/page.tsx` | Server | Composes layout, no client state needed |
| `CourseGrid` | Server | Fetches Supabase data on the server (zero client waterfall) |
| `Sidebar` | Client | Needs `useState` for collapse/active state |
| `HeroTile`, `StatsTile`, `ActivityTile` | Client | Framer Motion animations require browser |
| `CourseCard` | Client | Framer Motion hover/entrance animations |
| `ProgressBar` | Client | Uses `useInView` to trigger count-up on scroll |

### Data Fetching Strategy

`CourseGrid` is an `async` Server Component wrapped in a `<Suspense>` boundary in `page.tsx`. This means:

1. The page shell (sidebar, hero, stats) renders immediately
2. A skeleton loader shows while courses are fetched
3. Once resolved, course cards stream in with staggered animations

If Supabase is unavailable or env vars are missing, `CourseGrid` gracefully falls back to `mockCourses` — no error state shown to the user.

### Animation Principles

- All hover effects use `transform` and `opacity` only — zero layout shifts
- Spring physics: `stiffness: 300, damping: 20` throughout for natural feel
- Sidebar active indicator uses `layoutId="sidebar-active"` for smooth transitions
- Progress bars use `useInView` so they only animate when visible

---

## 📦 Deployment (Vercel)

```bash
# Push to GitHub, then import in Vercel
# Add env vars in Vercel project settings:
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Fonts, CSS vars, keyframes
│   ├── layout.tsx        # Root layout
│   ├── loading.tsx       # Route-level skeleton
│   └── page.tsx          # Dashboard page (Server Component)
├── components/
│   ├── sidebar/
│   │   └── Sidebar.tsx   # Collapsible nav (Client)
│   ├── dashboard/
│   │   ├── HeroTile.tsx      # Greeting + streak
│   │   ├── StatsTile.tsx     # XP, rank, streak stats
│   │   ├── CourseGrid.tsx    # Server Component — Supabase fetch
│   │   ├── CourseCard.tsx    # Individual course card (Client)
│   │   └── ActivityTile.tsx  # Contribution graph (Client)
│   └── ui/
│       ├── BentoCard.tsx     # Base animated card wrapper
│       ├── ProgressBar.tsx   # Animated progress bar
│       ├── DynamicIcon.tsx   # Renders Lucide icons by string name
│       └── Skeletons.tsx     # Loading skeleton components
├── lib/
│   ├── supabase.ts       # Supabase client + getCourses()
│   ├── mock-data.ts      # Fallback data for demo/dev
│   └── utils.ts          # cn() utility
└── types/
    └── index.ts          # TypeScript interfaces
```
