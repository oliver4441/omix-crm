import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Zap } from "lucide-react"

const cols = [
  {
    heading:"Product",
    links:[
      {l:"Features",   h:"#features" },
      {l:"Pipeline",   h:"#workflow"  },
      {l:"Analytics",  h:"#analytics" },
      {l:"Pricing",    h:"#pricing"   },
      {l:"FAQ",        h:"#faq"       },
    ],
  },
  {
    heading:"Company",
    links:[
      {l:"About",      h:"#" },
      {l:"Blog",       h:"#" },
      {l:"Careers",    h:"#" },
      {l:"Contact",    h:"mailto:hello@omixcrm.com" },
    ],
  },
  {
    heading:"Account",
    links:[
      {l:"Sign up free", h:"/signup" },
      {l:"Log in",       h:"/login"  },
    ],
  },
]

const socials = [
  { icon:Github,   href:"https://github.com/Manu-del-source/omix-crm", label:"GitHub"  },
  { icon:Twitter,  href:"#",                                             label:"Twitter" },
  { icon:Linkedin, href:"#",                                             label:"LinkedIn"},
  { icon:Mail,     href:"mailto:hello@omixcrm.com",                     label:"Email"   },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* brand */}
          <div className="lg:col-span-2">
            <Link href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FACC15]">
                <Zap size={15} className="text-black" fill="black"/>
              </span>
              <span className="text-base font-extrabold text-white" style={{fontFamily:"'Space Grotesk',sans-serif"}}>
                Omix <span className="text-[#FACC15]">CRM</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Lead tracking and client management for sales teams, agencies, and
              SACCOs across Africa.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-zinc-500 transition-all hover:border-[#FACC15]/20 hover:bg-[#FACC15]/[0.07] hover:text-[#FACC15]">
                  <s.icon size={15}/>
                </a>
              ))}
            </div>
          </div>

          {/* link cols */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-600 mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.l}>
                    <Link href={link.h}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-200">
                      {link.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-7 sm:flex-row">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Omix CRM. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-zinc-700">
            Made with{" "}
            <span className="text-[#FACC15]">♥</span>
            {" "}in Kenya 🇰🇪 · Built on Next.js &amp; Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}
