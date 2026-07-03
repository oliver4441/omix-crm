import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Zap } from "lucide-react"

const cols = [
  {
    heading: "Product",
    links: [
      { l: "Features",  h: "#features"  },
      { l: "Pipeline",  h: "#pipeline"  },
      { l: "Analytics", h: "#analytics" },
      { l: "Pricing",   h: "#pricing"   },
      { l: "FAQ",       h: "#faq"       },
    ],
  },
  {
    heading: "Company",
    links: [
      { l: "About",    h: "#"                          },
      { l: "Blog",     h: "#"                          },
      { l: "Careers",  h: "#"                          },
      { l: "Contact",  h: "mailto:hello@omixcrm.com"  },
    ],
  },
  {
    heading: "Account",
    links: [
      { l: "Sign up free", h: "/signup" },
      { l: "Sign in",      h: "/login"  },
    ],
  },
]

const socials = [
  { icon: Github,   href: "https://github.com/Manu-del-source/omix-crm", label: "GitHub"   },
  { icon: Twitter,  href: "#",                                             label: "Twitter"  },
  { icon: Linkedin, href: "#",                                             label: "LinkedIn" },
  { icon: Mail,     href: "mailto:hello@omixcrm.com",                     label: "Email"    },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#FACC15]">
                <Zap size={14} className="text-black" fill="black" />
              </span>
              <span className="text-[15px] font-bold tracking-[-0.025em] text-white">Omix CRM</span>
            </Link>
            <p className="mt-5 max-w-[240px] text-[15px] leading-[1.75] text-[#525252]">
              Lead management and sales pipeline for growing businesses across Africa.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.07] bg-white/[0.03] text-[#525252] transition-all hover:border-white/[0.14] hover:text-white">
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#404040] mb-5">{col.heading}</p>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link.l}>
                    <Link href={link.h}
                      className="text-[14px] text-[#525252] transition-colors hover:text-zinc-200">
                      {link.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[#404040]">
            © {new Date().getFullYear()} Omix CRM. All rights reserved.
          </p>
          <p className="text-[13px] text-[#404040]">
            Made in Kenya 🇰🇪 · Built on Next.js &amp; Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}
