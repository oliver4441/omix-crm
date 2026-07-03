// content.ts — all landing page data

export const stats = [
  { end:10000, suffix:"+",  prefix:"",      label:"Leads tracked"    },
  { end:4.2,   suffix:"M",  prefix:"KES ",  label:"Pipeline value"   },
  { end:380,   suffix:"+",  prefix:"",      label:"Active teams"     },
  { end:99.9,  suffix:"%",  prefix:"",      label:"Uptime"           },
]

export const logoNames = [
  "Northbridge Realty","Highlands Sacco","Westfield Logistics",
  "Two Rivers Holdings","Coastline Retailers","Riverside Motors",
  "Solid Rock Insurance","Acacia Agro Traders","Apex Agencies","Savanna Fintech",
]

export type FeatureRow = {
  label:   string
  heading: string
  body:    string
  points:  string[]
  visual:  "leads" | "pipeline" | "analytics"
  flip:    boolean
}
export const featureRows: FeatureRow[] = [
  {
    label:   "Lead Management",
    heading: "Every lead, the moment it arrives",
    body:    "Stop losing leads in spreadsheets. Omix captures contact details, source, and timestamp automatically — then puts the right lead in front of the right rep.",
    points:  ["Instant lead capture from any channel","Source and campaign tracking","Auto-assign to sales reps","Overdue follow-up alerts"],
    visual:  "leads",
    flip:    false,
  },
  {
    label:   "Sales Pipeline",
    heading: "Move deals forward with one drag",
    body:    "A Kanban board built for speed. Drag a deal from Qualified to Proposal in a second. Your team sees every move the moment it happens.",
    points:  ["Visual drag-and-drop Kanban","Real-time team sync","Custom stages per workflow","Stage-level probability tracking"],
    visual:  "pipeline",
    flip:    true,
  },
  {
    label:   "Analytics",
    heading: "Data that tells you what to do next",
    body:    "Live conversion rates, revenue by month, and win-rate trends update as deals move. No exports, no manual reports — just clarity.",
    points:  ["Live revenue and lead charts","Win rate by rep and stage","Avg deal size and cycle time","Custom date-range comparisons"],
    visual:  "analytics",
    flip:    false,
  },
]

export const dashMetrics = [
  { label:"Total Leads",    value:"2,847",    delta:"+8.2%",   bar:60 },
  { label:"Pipeline Value", value:"KES 4.2M", delta:"+14.5%",  bar:75 },
  { label:"Won Deals",      value:"38",        delta:"+5.1%",   bar:45 },
  { label:"Avg Deal",       value:"KES 110K",  delta:"+12%",    bar:55 },
]
export const previewLeads = [
  { name:"James Odhiambo",  co:"Two Rivers Holdings",  status:"Hot",  v:"KES 380K", i:"JO" },
  { name:"Grace Wanjiku",   co:"Northbridge Realty",   status:"Warm", v:"KES 120K", i:"GW" },
  { name:"Susan Waweru",    co:"Coastline Retailers",  status:"Hot",  v:"KES 900K", i:"SW" },
]
export const sidebarItems = [
  { label:"Dashboard",     icon:"LayoutDashboard", active:true  },
  { label:"Leads",         icon:"Users"                         },
  { label:"Pipeline",      icon:"KanbanSquare"                  },
  { label:"Analytics",     icon:"BarChart3"                     },
  { label:"Notifications", icon:"Bell", badge:3                 },
]
export const miniKanban = [
  { col:"New",      color:"#71717a", deals:[{n:"Acacia Agro",v:"220K"},{n:"Solid Rock",v:"95K"}]   },
  { col:"Qualified",color:"#f59e0b", deals:[{n:"Northbridge",v:"1.2M"},{n:"Westfield",v:"690K"}]   },
  { col:"Won",      color:"#22c55e", deals:[{n:"Highlands",v:"875K"},{n:"Riverside",v:"1.05M"}]     },
]
export const chartData = [
  { m:"Jan", r:320, l:42 },{ m:"Feb", r:410, l:55 },{ m:"Mar", r:380, l:48 },
  { m:"Apr", r:520, l:67 },{ m:"May", r:490, l:61 },{ m:"Jun", r:680, l:84 },
  { m:"Jul", r:750, l:92 },
]

export type Testimonial = { init:string; name:string; role:string; co:string; quote:string }
export const testimonials: Testimonial[] = [
  { init:"AO", name:"Amani Otieno",  role:"Sales Lead",         co:"Northbridge Realty",  quote:"I can finally see every deal at every stage. The pipeline view alone saves our team hours every week. We closed 40% more deals in the first month." },
  { init:"FC", name:"Faith Chebet",  role:"Operations Manager", co:"Highlands Sacco",     quote:"Follow-up reminders used to fall through the cracks. Now nothing gets missed. Our members notice the difference in how fast we respond."             },
  { init:"KM", name:"Kevin Mwangi",  role:"Founder",            co:"Westfield Logistics", quote:"Setup took an afternoon, not a quarter. Our reps adopted it immediately. It shows them exactly what to do next, so they just do it."                },
]

export type Plan = { name:string; price:string; per:string; desc:string; cta:string; href:string; featured:boolean; perks:string[] }
export const plans: Plan[] = [
  { name:"Starter",      price:"KES 1,500", per:"/ user / mo", desc:"Solo agents and small teams.",     cta:"Start Free Trial",href:"/signup",                    featured:false,
    perks:["Up to 3 members","500 active leads","Kanban pipeline","Follow-up reminders","Email support"] },
  { name:"Professional", price:"KES 4,500", per:"/ user / mo", desc:"Growing teams needing full visibility.", cta:"Start Free Trial",href:"/signup",             featured:true,
    perks:["Unlimited members","Unlimited leads","Live analytics dashboard","File uploads & storage","Priority support","Custom pipeline stages"] },
  { name:"Enterprise",   price:"Custom",    per:"talk to us",  desc:"Large orgs with compliance needs.", cta:"Talk to Sales",  href:"mailto:hello@omixcrm.com", featured:false,
    perks:["Everything in Pro","Dedicated onboarding","Custom roles & RLS","SLA guarantee","Priority phone support","White-label option"] },
]

export const faqs = [
  { q:"Is my data secure?",                    a:"Yes. Supabase Auth combined with row-level security means each account's data is completely isolated — no tenant can ever access another's records." },
  { q:"Can I try before paying?",              a:"Every plan starts with a free trial. Run real leads through the pipeline before committing to any subscription." },
  { q:"How many team members can I add?",      a:"Starter supports up to 3. Professional and Enterprise plans support unlimited members with fine-grained role permissions." },
  { q:"Does it work on mobile?",               a:"Yes. The full web app is responsive. Open it in any mobile browser — no install required." },
  { q:"What happens to my data if I cancel?",  a:"Nothing is deleted. Your records stay stored safely and you regain full access the moment you resubscribe." },
  { q:"Who is Omix CRM built for?",            a:"Sales teams, agencies, SACCOs, real estate firms, and logistics businesses across Africa that need one place to manage the entire sales operation." },
]

export const analyticsMetrics = [
  { label:"Total Revenue",    value:"KES 4.2M", change:"+18.4%" },
  { label:"Conversion Rate",  value:"68%",      change:"+5.2%"  },
  { label:"Avg. Deal Size",   value:"KES 110K", change:"+12.1%" },
  { label:"Avg. Sales Cycle", value:"12 days",  change:"−3 days"},
]
