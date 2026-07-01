import {
  BarChart3, Bell, KanbanSquare, Users, Shield, Zap, type LucideIcon,
} from "lucide-react"

export type Feature = {
  icon: LucideIcon; color: string; bg: string; border: string; title: string; desc: string; span?: string
}

export const features: Feature[] = [
  { icon: KanbanSquare, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", title: "Sales Pipeline", desc: "Drag-and-drop Kanban that moves leads from first contact to closed deal.", span: "lg:col-span-2" },
  { icon: Bell, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", title: "Smart Alerts", desc: "Overdue tasks and follow-up reminders surface at the right moment." },
  { icon: BarChart3, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", title: "Analytics", desc: "Live conversion rates, pipeline value, and growth charts — no setup needed." },
  { icon: Users, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", title: "Client Management", desc: "Notes, files, and task history live with each contact. Nothing falls through." },
  { icon: Zap, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", title: "Lightning Fast", desc: "Next.js 15 + Supabase Realtime. Every update is instant.", span: "lg:col-span-2" },
  { icon: Shield, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", title: "Row-Level Security", desc: "Supabase RLS ensures accounts are completely isolated." },
]

export const stats = [
  { value: "10K+", label: "Leads tracked" },
  { value: "KES 4.2M", label: "Pipeline moved" },
  { value: "380+", label: "Active teams" },
  { value: "99.9%", label: "Uptime" },
]

export const audiences = ["Sales Teams", "Agencies", "SACCOs", "Real Estate", "Logistics", "Freelancers"]

export const previewLeads = [
  { name: "James Odhiambo", company: "Two Rivers Holdings", status: "Hot", value: "KES 380K", color: "bg-red-500/15 text-red-400" },
  { name: "Grace Wanjiku", company: "Northbridge Realty", status: "Warm", value: "KES 120K", color: "bg-amber-500/15 text-amber-400" },
  { name: "Susan Waweru", company: "Coastline Retailers", status: "Hot", value: "KES 900K", color: "bg-red-500/15 text-red-400" },
  { name: "David Mwangi", company: "Highlands Sacco", status: "New", value: "KES 55K", color: "bg-blue-500/15 text-blue-400" },
]

export const sidebarItems = [
  { label: "Dashboard", active: true },
  { label: "Leads" },
  { label: "Pipeline" },
  { label: "Clients" },
  { label: "Analytics" },
  { label: "Notifications" },
  { label: "Settings" },
]

export const tickerDeals = [
  { company: "Two Rivers Holdings", stage: "Proposal Sent", value: "KES 540,000" },
  { company: "Highlands Sacco", stage: "Won ✓", value: "KES 875,000" },
  { company: "Coastline Retailers", stage: "Negotiation", value: "KES 310,000" },
  { company: "Northbridge Realty", stage: "Qualified", value: "KES 1.2M" },
  { company: "Solid Rock Insurance", stage: "New Lead", value: "KES 220,000" },
  { company: "Westfield Logistics", stage: "Proposal Sent", value: "KES 690,000" },
  { company: "Acacia Agro Traders", stage: "Won ✓", value: "KES 415,000" },
  { company: "Riverside Motors", stage: "Negotiation", value: "KES 1.05M" },
]

export const pipelineStages = [
  { name: "New Lead", accent: "bg-slate-500", cards: [{ name: "Acacia Agro Traders", value: "KES 220K", avatar: "AA" }, { name: "Solid Rock Insurance", value: "KES 95K", avatar: "SR" }] },
  { name: "Qualified", accent: "bg-blue-500", cards: [{ name: "Northbridge Realty", value: "KES 1.2M", avatar: "NR" }, { name: "Westfield Logistics", value: "KES 690K", avatar: "WL" }] },
  { name: "Proposal", accent: "bg-violet-500", cards: [{ name: "Two Rivers Holdings", value: "KES 540K", avatar: "TR" }] },
  { name: "Won", accent: "bg-emerald-500", cards: [{ name: "Highlands Sacco", value: "KES 875K", avatar: "HS" }, { name: "Riverside Motors", value: "KES 1.05M", avatar: "RM" }] },
]

export const workflowSteps = [
  {
    num: "01",
    label: "Capture",
    heading: "Every lead in one place, the moment it arrives",
    body: "Add leads from any channel — email, WhatsApp, referral, or web form. Omix logs the source, timestamp, and contact details automatically so nothing falls through the cracks.",
    accent: "from-violet-500/20 to-transparent",
    stats: [{ v: "2,847", l: "Active leads" }, { v: "+8.2%", l: "This month" }],
  },
  {
    num: "02",
    label: "Move",
    heading: "Drag deals forward. Your pipeline does the rest.",
    body: "A Kanban board built for speed. Move a lead from Qualified to Proposal with one drag. Every stage change is logged and your team sees it instantly.",
    accent: "from-blue-500/20 to-transparent",
    stats: [{ v: "KES 4.2M", l: "Pipeline value" }, { v: "38", l: "Deals won" }],
  },
  {
    num: "03",
    label: "Close",
    heading: "Analytics that tell you what to do next",
    body: "See conversion by stage, average deal size, and which reps are hitting targets. Live charts update as deals move — no manual exports, no guesswork.",
    accent: "from-emerald-500/20 to-transparent",
    stats: [{ v: "68%", l: "Win rate" }, { v: "12d", l: "Avg. cycle" }],
  },
]

export type Testimonial = { initials: string; name: string; role: string; quote: string }

export const testimonials: Testimonial[] = [
  { initials: "AO", name: "Amani Otieno", role: "Sales Lead, Northbridge Realty", quote: "I can finally see every deal at every stage without digging through spreadsheets. The pipeline view alone saves our team hours every week." },
  { initials: "FC", name: "Faith Chebet", role: "Operations Manager, Highlands Sacco", quote: "Follow-up reminders used to slip through the cracks. Now nothing gets missed, and members notice the difference in how fast we respond." },
  { initials: "KM", name: "Kevin Mwangi", role: "Founder, Westfield Logistics", quote: "Setup took an afternoon, not a quarter. Our reps adopted it immediately because it just shows them what to do next." },
]

export type PricingTier = { name: string; price: string; unit: string; description: string; highlighted: boolean; features: string[]; cta: string; href: string }

export const pricingTiers: PricingTier[] = [
  { name: "Starter", price: "KES 1,500", unit: "per user / month", description: "For solo agents and small teams getting organised.", highlighted: false, features: ["Up to 3 team members", "500 active leads", "Drag-and-drop pipeline", "Task & follow-up reminders", "Email support"], cta: "Start free trial", href: "/signup" },
  { name: "Professional", price: "KES 4,500", unit: "per user / month", description: "For growing sales teams that need full visibility.", highlighted: true, features: ["Unlimited team members", "Unlimited leads", "Analytics dashboard", "File uploads & client storage", "Priority support"], cta: "Start free trial", href: "/signup" },
  { name: "Enterprise", price: "Custom", unit: "talk to our team", description: "For larger organisations with custom needs.", highlighted: false, features: ["Everything in Professional", "Dedicated onboarding", "Custom roles & permissions", "Service-level agreement", "Priority phone support"], cta: "Talk to sales", href: "mailto:hello@omixcrm.com" },
]

export const faqs = [
  { q: "Is my data secure?", a: "Yes. Every account is protected by Supabase Auth and row-level security policies — one account can never see another account's data." },
  { q: "Can I try Omix CRM before paying?", a: "Yes. Every plan starts with a free trial so your team can run real leads through the pipeline before committing." },
  { q: "How many people can use one account?", a: "Starter supports up to 3 team members. Professional and Enterprise plans support unlimited team members." },
  { q: "Do I need to install anything?", a: "No. Omix CRM runs entirely in the browser — laptop, desktop, or mobile, no install required." },
  { q: "What happens if I cancel?", a: "Your records stay safely stored. Nothing is deleted when you change plans — you regain full access the moment you resubscribe." },
  { q: "Who is Omix CRM built for?", a: "Sales teams, agencies, SACCOs, real estate firms, and logistics businesses across Africa that need one place to track leads from first contact to closed deal." },
]
