import { BarChart3, Bell, KanbanSquare, Users, Shield, Zap, type LucideIcon } from "lucide-react"

// ─── Features ───────────────────────────────────────────────────────────────
export type Feature = { icon: LucideIcon; title: string; desc: string; span?: string }
export const features: Feature[] = [
  { icon: KanbanSquare, title: "Visual Pipeline",    desc: "Move leads through every stage with a drag-and-drop Kanban board built for speed.",    span: "lg:col-span-2" },
  { icon: Bell,         title: "Smart Reminders",   desc: "Overdue tasks and follow-up alerts surface automatically before they slip."                              },
  { icon: BarChart3,    title: "Live Analytics",    desc: "Conversion rates, pipeline value, and revenue charts update in real time."                              },
  { icon: Users,        title: "Client Records",    desc: "Every note, file, and task lives with the contact — nothing needs a search."                            },
  { icon: Zap,          title: "Instant Updates",   desc: "Next.js 15 and Supabase Realtime push every change to the whole team at once.",           span: "lg:col-span-2" },
  { icon: Shield,       title: "Row-Level Security","desc": "Supabase RLS ensures accounts are perfectly isolated. Your data is yours alone."                      },
]

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: 10000,  suffix: "+",  label: "Leads tracked"   },
  { value: 4.2,    suffix: "M",  prefix: "KES ", label: "Pipeline value" },
  { value: 380,    suffix: "+",  label: "Active teams"    },
  { value: 99.9,   suffix: "%",  label: "Uptime"          },
]

// ─── Audiences ───────────────────────────────────────────────────────────────
export const audiences = ["Sales Teams","Agencies","SACCOs","Real Estate","Logistics","Startups"]

// ─── Dashboard mockup data ────────────────────────────────────────────────────
export const previewLeads = [
  { name: "James Odhiambo",  company: "Two Rivers Holdings", status: "Hot",  value: "KES 380K", initials: "JO" },
  { name: "Grace Wanjiku",   company: "Northbridge Realty",  status: "Warm", value: "KES 120K", initials: "GW" },
  { name: "Susan Waweru",    company: "Coastline Retailers", status: "Hot",  value: "KES 900K", initials: "SW" },
  { name: "David Mwangi",    company: "Highlands Sacco",     status: "New",  value: "KES 55K",  initials: "DM" },
]
export const sidebarItems = [
  { label: "Dashboard",     icon: "LayoutDashboard", active: true  },
  { label: "Leads",         icon: "Users"                          },
  { label: "Pipeline",      icon: "KanbanSquare"                   },
  { label: "Analytics",     icon: "BarChart3"                      },
  { label: "Notifications", icon: "Bell", badge: 3                },
  { label: "Settings",      icon: "Settings"                       },
]
export const dashMetrics = [
  { label: "Total Leads",    value: "2,847",   change: "+8.2%",  bar: 60 },
  { label: "Pipeline Value", value: "KES 4.2M",change: "+14.5%", bar: 75 },
  { label: "Won Deals",      value: "38",       change: "+5.1%",  bar: 45 },
  { label: "Avg. Deal",      value: "KES 110K", change: "+12%",   bar: 55 },
]

// ─── Pipeline ─────────────────────────────────────────────────────────────────
export const pipelineStages = [
  { name:"New",      dot:"bg-zinc-500",   cards:[{n:"Acacia Agro",i:"AA",v:"KES 220K",hot:false},{n:"Solid Rock",i:"SR",v:"KES 95K",hot:false}]  },
  { name:"Qualified",dot:"bg-amber-400",  cards:[{n:"Northbridge",i:"NR",v:"KES 1.2M",hot:true },{n:"Westfield",i:"WL",v:"KES 690K",hot:false}]  },
  { name:"Proposal", dot:"bg-yellow-400", cards:[{n:"Two Rivers",i:"TR",v:"KES 540K",hot:true }]                                                  },
  { name:"Won",      dot:"bg-emerald-400",cards:[{n:"Highlands",i:"HS",v:"KES 875K",hot:false},{n:"Riverside",i:"RM",v:"KES 1.05M",hot:false}]    },
]

// ─── Charts ───────────────────────────────────────────────────────────────────
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
  { label:"Total Revenue",    value:"KES 4.2M", change:"+18.4%" },
  { label:"Conversion Rate",  value:"68%",      change:"+5.2%"  },
  { label:"Avg. Deal Size",   value:"KES 110K", change:"+12.1%" },
  { label:"Avg. Sales Cycle", value:"12 days",  change:"−3 days"},
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export type Testimonial = { initials:string; name:string; role:string; company:string; quote:string }
export const testimonials: Testimonial[] = [
  { initials:"AO", name:"Amani Otieno",  role:"Sales Lead",        company:"Northbridge Realty",  quote:"I can finally see every deal at every stage without digging through spreadsheets. The pipeline view alone saves our team hours every week."     },
  { initials:"FC", name:"Faith Chebet",  role:"Operations Manager", company:"Highlands Sacco",     quote:"Follow-up reminders used to slip through the cracks. Now nothing gets missed — our members notice the difference in how fast we respond."      },
  { initials:"KM", name:"Kevin Mwangi",  role:"Founder",            company:"Westfield Logistics", quote:"Setup took an afternoon, not a quarter. Our reps adopted it immediately because the interface shows them exactly what to do next."               },
]

// ─── Pricing ──────────────────────────────────────────────────────────────────
export type PricingTier = { name:string; price:string; unit:string; desc:string; featured:boolean; features:string[]; cta:string; href:string }
export const pricingTiers: PricingTier[] = [
  { name:"Starter",      price:"KES 1,500", unit:"/ user / month",  desc:"For solo agents and small teams getting organised.",      featured:false, cta:"Start Free Trial", href:"/signup",
    features:["Up to 3 members","500 active leads","Kanban pipeline","Follow-up reminders","Email support"] },
  { name:"Professional", price:"KES 4,500", unit:"/ user / month",  desc:"For growing teams that need complete visibility.",        featured:true,  cta:"Start Free Trial", href:"/signup",
    features:["Unlimited members","Unlimited leads","Live analytics","File uploads & storage","Priority support","Custom pipeline stages"] },
  { name:"Enterprise",   price:"Custom",    unit:"talk to our team", desc:"For organisations with custom workflows or compliance.",  featured:false, cta:"Talk to Sales",    href:"mailto:hello@omixcrm.com",
    features:["Everything in Pro","Dedicated onboarding","Custom roles & permissions","SLA guarantee","Priority phone support","White-label option"] },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqs = [
  { q:"Is my data secure?",                     a:"Yes. Supabase Auth plus row-level security means each account's data is completely isolated — no account can read another's records." },
  { q:"Can I try before paying?",               a:"Every plan starts with a free trial. Run real leads through the pipeline and evaluate the product before committing to any subscription." },
  { q:"How many team members can I add?",       a:"Starter supports up to 3. Professional and Enterprise plans support unlimited team members with role-based permissions." },
  { q:"Does it work on mobile?",                a:"Yes. Omix CRM is fully responsive and works on any device — no app install required. Just open a browser." },
  { q:"What happens to my data if I cancel?",   a:"Your records stay safely stored. Nothing is deleted — you regain full access immediately upon resubscribing." },
  { q:"Who is Omix CRM built for?",             a:"Sales teams, agencies, SACCOs, real estate firms, and logistics businesses across Africa that need one place to manage their entire sales operation." },
]
