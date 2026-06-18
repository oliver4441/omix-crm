# Omix CRM

A premium lead tracking & client management CRM built with Next.js 15, Supabase, and Framer Motion.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Supabase** — Auth, PostgreSQL, Storage
- **Tailwind CSS v4**
- **Framer Motion** — Page/card/list animations
- **Recharts** — Dashboard charts
- **@hello-pangea/dnd** — Drag-and-drop pipeline
- **Sonner** — Toast notifications

## Pages

| Route | Description |
|---|---|
| `/` | Animated landing page |
| `/login` | Supabase auth sign-in |
| `/signup` | Supabase auth register |
| `/dashboard` | Stats + pipeline bar chart |
| `/leads` | Lead list with search & status filter |
| `/leads/new` | Add new lead form |
| `/leads/[id]` | Lead detail: edit, notes, tasks, file uploads |
| `/pipeline` | Drag-and-drop Kanban board |
| `/notifications` | Task reminders + overdue alerts |
| `/clients` | Won leads view |
| `/settings` | Account, profile, password |

## Setup

### 1. Clone & install

```bash
git clone https://github.com/Manu-del-source/omix-crm
cd omix-crm
npm install
```

### 2. Environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
DATABASE_URL=postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres
```

### 3. Supabase setup

Run `supabase-setup.sql` in your Supabase SQL Editor. This creates:
- All tables (leads, notes, tasks, files, lead_activities, notifications)
- Row Level Security policies
- Storage bucket for file uploads
- Updated_at trigger

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy

```bash
vercel deploy
```

Add env vars in Vercel dashboard.

## Animations

All animations use **Framer Motion**:
- Page transitions: fade + slide up
- Card entrances: staggered grid
- Sidebar: spring slide
- Modals: scale + fade
- Kanban drag: scale on drag
- Skeleton loaders on all data fetches
- Pulsing live dots on pipeline columns
- Animated background orbs on landing/auth pages
