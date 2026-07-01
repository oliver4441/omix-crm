import {
  BarChart3,
  Bell,
  KanbanSquare,
  Users,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type Feature = {
  icon: LucideIcon
  color: string
  bg: string
  border: string
  glow: string
  title: string
  desc: string
}

export const features: Feature[] = [
  {
    icon: KanbanSquare,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
    title: "Sales Pipeline",
    desc: "Drag-and-drop Kanban board to move leads through every stage of your sales cycle.",
  },
  {
    icon: Bell,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    title: "Smart Notifications",
    desc: "Never miss a follow-up. Get overdue task alerts and real-time CRM activity reminders.",
  },
  {
    icon: BarChart3,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
    title: "Analytics Dashboard",
    desc: "Monitor conversion rates, pipeline value, and business growth with live charts.",
  },
  {
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    title: "Client Management",
    desc: "Organise every customer relationship, note, file, and task history in one place.",
  },
  {
    icon: Zap,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
    title: "Fast & Responsive",
    desc: "Built on Next.js 15 and Supabase for a lightning-fast experience on any device.",
  },
  {
    icon: Shield,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    title: "Secure & Private",
    desc: "Row-level security powered by Supabase Auth keeps every account's data isolated.",
  },
]

export const stats = [
  { label: "Leads tracked", value: "10K+" },
  { label: "Pipeline value moved", value: "KES 4.2M" },
  { label: "Active teams", value: "380+" },
  { label: "Uptime", value: "99.9%" },
]

export const audiences = ["Sales Teams", "Agencies", "SACCOs", "Real Estate", "Logistics"]

// Illustrative sample data for the product mockups — not real customers.
export const previewLeads = [
  { name: "James Odhiambo", company: "Two Rivers Holdings", status: "Hot", value: "KES 380K", color: "bg-red-500/15 text-red-400" },
  { name: "Grace Wanjiku", company: "Northbridge Realty", status: "Warm", value: "KES 120K", color: "bg-orange-500/15 text-orange-400" },
  { name: "Susan Waweru", company: "Coastline Retailers", status: "Hot", value: "KES 900K", color: "bg-red-500/15 text-red-400" },
]

// Signature element: a continuous strip of deals moving through the pipeline.
export const tickerDeals = [
  { company: "Two Rivers Holdings", stage: "Proposal Sent", value: "KES 540,000" },
  { company: "Highlands Sacco", stage: "Won", value: "KES 875,000" },
  { company: "Coastline Retailers", stage: "Negotiation", value: "KES 310,000" },
  { company: "Northbridge Realty", stage: "Qualified", value: "KES 1.2M" },
  { company: "Solid Rock Insurance", stage: "New Lead", value: "KES 220,000" },
  { company: "Westfield Logistics", stage: "Proposal Sent", value: "KES 690,000" },
  { company: "Acacia Agro Traders", stage: "Won", value: "KES 415,000" },
  { company: "Riverside Motors", stage: "Negotiation", value: "KES 1.05M" },
]

export const pipelineStages = [
  {
    name: "New Lead",
    accent: "from-zinc-500/40 to-zinc-500/10",
    cards: [
      { name: "Acacia Agro Traders", value: "KES 220K" },
      { name: "Solid Rock Insurance", value: "KES 95K" },
    ],
  },
  {
    name: "Qualified",
    accent: "from-blue-500/40 to-blue-500/10",
    cards: [
      { name: "Northbridge Realty", value: "KES 1.2M" },
      { name: "Westfield Logistics", value: "KES 690K" },
    ],
  },
  {
    name: "Proposal",
    accent: "from-purple-500/40 to-purple-500/10",
    cards: [
      { name: "Two Rivers Holdings", value: "KES 540K" },
    ],
  },
  {
    name: "Won",
    accent: "from-emerald-500/40 to-emerald-500/10",
    cards: [
      { name: "Highlands Sacco", value: "KES 875K" },
      { name: "Riverside Motors", value: "KES 1.05M" },
    ],
  },
]

export type Testimonial = {
  initials: string
  name: string
  role: string
  quote: string
}

// Composite personas reflecting common Omix CRM use cases — not real customer accounts.
export const testimonials: Testimonial[] = [
  {
    initials: "AO",
    name: "Amani Otieno",
    role: "Sales Lead, Northbridge Realty",
    quote:
      "I can finally see every deal at every stage without digging through spreadsheets. The pipeline view alone saves our team hours every week.",
  },
  {
    initials: "FC",
    name: "Faith Chebet",
    role: "Operations Manager, Highlands Sacco",
    quote:
      "Follow-up reminders used to slip through the cracks. Now nothing gets missed, and members notice the difference in how fast we respond.",
  },
  {
    initials: "KM",
    name: "Kevin Mwangi",
    role: "Founder, Westfield Logistics",
    quote:
      "Setup took an afternoon, not a quarter. Our reps adopted it immediately because it just shows them what to do next.",
  },
]

export type PricingTier = {
  name: string
  price: string
  unit: string
  description: string
  highlighted: boolean
  features: string[]
  cta: string
  href: string
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "KES 1,500",
    unit: "per user / month",
    description: "For solo agents and small teams getting their pipeline organised.",
    highlighted: false,
    features: [
      "Up to 3 team members",
      "500 active leads",
      "Drag-and-drop pipeline",
      "Task & follow-up reminders",
      "Email support",
    ],
    cta: "Start free trial",
    href: "/signup",
  },
  {
    name: "Professional",
    price: "KES 4,500",
    unit: "per user / month",
    description: "For growing sales teams that need visibility across every deal.",
    highlighted: true,
    features: [
      "Unlimited team members",
      "Unlimited leads",
      "Analytics dashboard",
      "File uploads & client storage",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "talk to our team",
    description: "For larger organisations with custom workflows or compliance needs.",
    highlighted: false,
    features: [
      "Everything in Professional",
      "Dedicated onboarding",
      "Custom roles & permissions",
      "Service-level agreement",
      "Priority phone support",
    ],
    cta: "Talk to sales",
    href: "mailto:hello@omixcrm.com",
  },
]

export const faqs = [
  {
    q: "Is my data secure?",
    a: "Yes. Every account is protected by Supabase Auth, and row-level security policies make sure one account can never see another account's leads, notes, or files.",
  },
  {
    q: "Can I try Omix CRM before paying?",
    a: "Yes. Every plan starts with a free trial, so your team can run real leads through the pipeline before committing to a subscription.",
  },
  {
    q: "How many people can use one account?",
    a: "Starter supports up to 3 team members. Professional and Enterprise plans support unlimited team members with role-based access.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Omix CRM runs entirely in the browser, so it works on any laptop, desktop, or mobile device without an install.",
  },
  {
    q: "What happens to my data if I downgrade or cancel?",
    a: "Your records stay safely stored. Nothing is deleted when you change plans — you simply regain full access the moment you resubscribe.",
  },
  {
    q: "Who is Omix CRM built for?",
    a: "Sales teams, agencies, SACCOs, real estate firms, and logistics businesses across Africa that need one place to track leads from first contact to closed deal.",
  },
]
