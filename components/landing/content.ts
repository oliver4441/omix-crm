import { BarChart3, Bell, KanbanSquare, Users, Shield, Zap, type LucideIcon } from "lucide-react"

export type Feature = { icon: LucideIcon; title: string; desc: string; span?: string }
export const features: Feature[] = [
  { icon: KanbanSquare, title: "Smart Pipeline",     desc: "Drag-and-drop Kanban that moves leads from first contact to closed deal in seconds.",           span: "lg:col-span-2" },
  { icon: Bell,         title: "Instant Alerts",     desc: "Overdue tasks and smart follow-up reminders surface exactly when you need them."                              },
  { icon: BarChart3,    title: "Live Analytics",     desc: "Real-time conversion rates, pipeline value, and growth charts — no setup, no exports."                        },
  { icon: Users,        title: "Client Hub",         desc: "Every note, file, and task history lives with each contact. Nothing ever falls through."                       },
  { icon: Zap,          title: "Lightning Fast",     desc: "Built on Next.js 15 and Supabase Realtime. Every update hits your team instantly.",           span: "lg:col-span-2" },
  { icon: Shield,       title: "Bank-Grade Security",desc: "Row-Level Security isolates every account. Your data is yours alone."                                         },
]

export const stats = [
  { value: 10000, suffix: "+", label: "Leads tracked" },
  { value: 4.2,   suffix: "M", prefix: "KES ", label: "Pipeline moved" },
  { value: 380,   suffix: "+", label: "Active teams" },
  { value: 99.9,  suffix: "%", label: "Uptime" },
]

export const audiences = ["Sales Teams","Agencies","SACCOs","Real Estate","Logistics","Freelancers"]

export const previewLeads = [
  { name: "James Odhiambo",  company: "Two Rivers Holdings",  status: "Hot",  value: "KES 380K", initials: "JO" },
  { name: "Grace Wanjiku",   company: "Northbridge Realty",   status: "Warm", value: "KES 120K", initials: "GW" },
  { name: "Susan Waweru",    company: "Coastline Retailers",  status: "Hot",  value: "KES 900K", initials: "SW" },
  { name: "David Mwangi",    company: "Highlands Sacco",      status: "New",  value: "KES 55K",  initials: "DM" },
]

export const sidebarItems = [
  { label: "Dashboard", icon: "LayoutDashboard", active: true },
  { label: "Leads",     icon: "Users"           },
  { label: "Pipeline",  icon: "KanbanSquare"    },
  { label: "Clients",   icon: "Briefcase"       },
  { label: "Analytics", icon: "BarChart3"       },
  { label: "Notifications", icon: "Bell", badge: 3 },
  { label: "Settings",  icon: "Settings"        },
]

export const pipelineStages = [
  { name: "New Lead",   color: "bg-zinc-500",    count: 2, cards: [{ name: "Acacia Agro",       value: "KES 220K", initials: "AA", hot: false }, { name: "Solid Rock",         value: "KES 95K",  initials: "SR", hot: false }] },
  { name: "Qualified",  color: "bg-amber-400",   count: 2, cards: [{ name: "Northbridge Realty", value: "KES 1.2M", initials: "NR", hot: true  }, { name: "Westfield Logistics",value: "KES 690K", initials: "WL", hot: false }] },
  { name: "Proposal",   color: "bg-yellow-400",  count: 1, cards: [{ name: "Two Rivers Holdings",value: "KES 540K", initials: "TR", hot: true  }] },
  { name: "Won",        color: "bg-green-400",   count: 2, cards: [{ name: "Highlands Sacco",    value: "KES 875K", initials: "HS", hot: false }, { name: "Riverside Motors",   value: "KES 1.05M",initials: "RM", hot: false }] },
]

export const revenueData = [
  { month:"Jan", revenue:320000, leads:42 },
  { month:"Feb", revenue:410000, leads:55 },
  { month:"Mar", revenue:380000, leads:48 },
  { month:"Apr", revenue:520000, leads:67 },
  { month:"May", revenue:490000, leads:61 },
  { month:"Jun", revenue:680000, leads:84 },
  { month:"Jul", revenue:750000, leads:92 },
]

export const analyticsMetrics = [
  { label: "Total Revenue",    value: "KES 4.2M", change: "+18.4%", up: true  },
  { label: "Conversion Rate",  value: "68%",      change: "+5.2%",  up: true  },
  { label: "Avg. Deal Size",   value: "KES 110K", change: "+12.1%", up: true  },
  { label: "Avg. Sales Cycle", value: "12 days",  change: "-3 days",up: true  },
]

export type Testimonial = { initials: string; gradient: string; name: string; role: string; company: string; quote: string }
export const testimonials: Testimonial[] = [
  { initials:"AO", gradient:"from-amber-400 to-yellow-600",   name:"Amani Otieno",  role:"Sales Lead",          company:"Northbridge Realty",   quote:"I can finally see every deal at every stage without digging through spreadsheets. The pipeline view alone saves our team hours every week."   },
  { initials:"FC", gradient:"from-yellow-300 to-amber-500",   name:"Faith Chebet",  role:"Operations Manager",  company:"Highlands Sacco",       quote:"Follow-up reminders used to slip through the cracks. Now nothing gets missed, and our members notice the difference in response speed."        },
  { initials:"KM", gradient:"from-amber-500 to-yellow-700",   name:"Kevin Mwangi",  role:"Founder",             company:"Westfield Logistics",   quote:"Setup took an afternoon, not a quarter. Our reps adopted it immediately because it shows them exactly what to do next."                        },
]

export type PricingTier = { name: string; price: string; unit: string; desc: string; featured: boolean; features: string[]; cta: string; href: string }
export const pricingTiers: PricingTier[] = [
  { name:"Starter",      price:"KES 1,500", unit:"per user/month", desc:"Perfect for solo agents and small teams.",          featured:false, features:["Up to 3 members","500 active leads","Kanban pipeline","Follow-up reminders","Email support"],                                              cta:"Start Free Trial", href:"/signup" },
  { name:"Professional", price:"KES 4,500", unit:"per user/month", desc:"For growing teams that need full visibility.",       featured:true,  features:["Unlimited members","Unlimited leads","Live analytics","File uploads & storage","Priority support","Custom pipeline stages"],             cta:"Start Free Trial", href:"/signup" },
  { name:"Enterprise",   price:"Custom",    unit:"talk to our team",desc:"For large orgs with compliance needs.",             featured:false, features:["Everything in Pro","Dedicated onboarding","Custom roles & permissions","SLA guarantee","Priority phone support","White-label option"],  cta:"Talk to Sales",    href:"mailto:hello@omixcrm.com" },
]

export const faqs = [
  { q:"Is my data secure?",                    a:"Yes. Supabase Auth plus row-level security ensures each account's data is completely isolated — no account can ever read another's records." },
  { q:"Can I try before paying?",              a:"Every plan starts with a free trial. Run real leads through the pipeline and see results before committing to any subscription." },
  { q:"How many team members can I add?",      a:"Starter supports up to 3. Professional and Enterprise plans support unlimited team members with role-based permissions." },
  { q:"Does it work on mobile?",               a:"Yes. Omix CRM is fully responsive and works great on any device — no app install required, just open a browser." },
  { q:"What happens to my data if I cancel?",  a:"Your records stay safely stored. Nothing is deleted — you regain full access immediately upon resubscribing." },
  { q:"Who is Omix CRM built for?",            a:"Sales teams, agencies, SACCOs, real estate firms, and logistics businesses across Africa that need one place to manage their entire sales operation." },
]

export const tickerItems = [
  "Highlands Sacco · Won · KES 875K","Two Rivers Holdings · Proposal · KES 540K",
  "Northbridge Realty · Qualified · KES 1.2M","Westfield Logistics · Proposal · KES 690K",
  "Acacia Agro Traders · Won · KES 415K","Riverside Motors · Negotiation · KES 1.05M",
]
