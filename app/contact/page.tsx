"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { SiteNav }      from "@/components/layout/SiteNav"
import { SiteFooter }   from "@/components/layout/SiteFooter"
import { PageHero }     from "@/components/ui/PageHero"
import { Container }    from "@/components/ui/Container"
import { Mail, MessageSquare, CalendarDays, CheckCircle, ArrowRight, Send } from "lucide-react"

const E=[0.16,1,0.3,1] as const

const OPTIONS=[
  {icon:CalendarDays, title:"Book a Demo",    desc:"30-minute walkthrough with our team. See Omix CRM live with your use case.", cta:"Book now", href:"#form"},
  {icon:MessageSquare,title:"Sales Enquiry",  desc:"Questions about pricing, custom plans, or enterprise features.",             cta:"Write to us",href:"#form"},
  {icon:Mail,         title:"Email Support",  desc:"Already a customer? Reach support directly at support@omixcrm.com.",         cta:"Email us",  href:"mailto:support@omixcrm.com"},
]

export default function ContactPage() {
  const [sent,  setSent]  = useState(false)
  const [busy,  setBusy]  = useState(false)
  const [form,  setForm]  = useState({name:"",email:"",company:"",message:"",intent:"demo"})

  function update(k:string,v:string){ setForm(f=>({...f,[k]:v})) }

  async function submit(e:React.FormEvent){
    e.preventDefault()
    setBusy(true)
    await new Promise(r=>setTimeout(r,900))
    setBusy(false)
    setSent(true)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <SiteNav/>
      <PageHero label="Contact" heading="Let's talk" sub="Book a demo, ask about pricing, or just say hello. We respond to every message within one business day."/>

      {/* Options row */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {OPTIONS.map(o=>(
              <motion.div key={o.title}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:.6,ease:E}}
                className="rounded-[20px] border border-white/[0.06] bg-[#111111] p-7 transition-all hover:border-white/[0.1] hover:bg-[#171717]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#FACC15]/10">
                  <o.icon size={20} className="text-[#FACC15]"/>
                </div>
                <h3 className="text-[17px] font-bold text-white">{o.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-[#737373]">{o.desc}</p>
                <a href={o.href} className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-[#FACC15]">
                  {o.cta} <ArrowRight size={13}/>
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section id="form" className="border-t border-white/[0.06] py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_480px] lg:gap-20">
            {/* Left info */}
            <motion.div initial={{opacity:0,x:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              transition={{duration:.65,ease:E}}>
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Get in Touch</span>
              <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
                Send us a message
              </h2>
              <p className="mt-4 text-[17px] leading-[1.8] text-[#A3A3A3]">
                Fill in the form and we&apos;ll get back to you within one business day. For urgent matters, email us directly at{" "}
                <a href="mailto:hello@omixcrm.com" className="text-white underline underline-offset-4 hover:text-[#FACC15]">
                  hello@omixcrm.com
                </a>
              </p>
              <div className="mt-10 space-y-5">
                {[
                  {t:"Response time",     v:"Within 1 business day"},
                  {t:"Demo duration",     v:"30 minutes"},
                  {t:"Sales enquiries",   v:"hello@omixcrm.com"},
                  {t:"Customer support",  v:"support@omixcrm.com"},
                ].map(r=>(
                  <div key={r.t} className="flex items-center justify-between rounded-[14px] border border-white/[0.06] bg-[#111111] px-5 py-4">
                    <span className="text-[14px] text-[#737373]">{r.t}</span>
                    <span className="text-[14px] font-semibold text-white">{r.v}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form card */}
            <motion.div initial={{opacity:0,x:28}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              transition={{duration:.65,ease:E}}>
              <div className="rounded-[24px] border border-white/[0.08] bg-[#111111] p-8">
                {sent ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <CheckCircle size={48} className="text-[#FACC15]"/>
                    <h3 className="mt-5 text-[22px] font-bold text-white">Message sent!</h3>
                    <p className="mt-3 text-[16px] leading-[1.75] text-[#A3A3A3]">
                      Thanks for reaching out. We&apos;ll get back to you within one business day.
                    </p>
                    <button onClick={()=>{setSent(false);setForm({name:"",email:"",company:"",message:"",intent:"demo"})}}
                      className="mt-7 rounded-full border border-white/[0.1] px-6 py-2.5 text-[14px] font-medium text-[#A3A3A3] hover:text-white">
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    {/* Intent selector */}
                    <div>
                      <label className="mb-2 block text-[13px] font-semibold text-[#A3A3A3]">I want to…</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[{v:"demo",l:"Book a Demo"},{v:"sales",l:"Talk Sales"},{v:"support",l:"Get Support"}].map(opt=>(
                          <button key={opt.v} type="button" onClick={()=>update("intent",opt.v)}
                            className={`rounded-[10px] border py-2.5 text-[12px] font-semibold transition-all ${
                              form.intent===opt.v
                                ?"border-[#FACC15]/30 bg-[#FACC15]/[0.08] text-[#FACC15]"
                                :"border-white/[0.07] text-[#737373] hover:border-white/[0.14] hover:text-white"
                            }`}>{opt.l}</button>
                        ))}
                      </div>
                    </div>

                    {/* Fields */}
                    {[
                      {k:"name",    label:"Full name",     type:"text",  ph:"James Odhiambo",        req:true},
                      {k:"email",   label:"Work email",    type:"email", ph:"james@company.co.ke",    req:true},
                      {k:"company", label:"Company",       type:"text",  ph:"Two Rivers Holdings",    req:false},
                    ].map(f=>(
                      <div key={f.k}>
                        <label htmlFor={f.k} className="mb-2 block text-[13px] font-semibold text-[#A3A3A3]">
                          {f.label}{f.req&&<span className="ml-0.5 text-[#FACC15]">*</span>}
                        </label>
                        <input id={f.k} type={f.type} placeholder={f.ph} required={f.req}
                          value={form[f.k as keyof typeof form]}
                          onChange={ev=>update(f.k,ev.target.value)}
                          className="w-full rounded-[12px] border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-[#404040] outline-none transition-all focus:border-[#FACC15]/30 focus:bg-white/[0.06]"/>
                      </div>
                    ))}
                    <div>
                      <label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-[#A3A3A3]">
                        Message<span className="ml-0.5 text-[#FACC15]">*</span>
                      </label>
                      <textarea id="message" rows={4} required placeholder="Tell us about your team and what you're looking for…"
                        value={form.message} onChange={ev=>update("message",ev.target.value)}
                        className="w-full resize-none rounded-[12px] border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-[#404040] outline-none transition-all focus:border-[#FACC15]/30 focus:bg-white/[0.06]"/>
                    </div>
                    <button type="submit" disabled={busy}
                      className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#FACC15] py-3.5 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20 transition-all hover:bg-[#FDE68A] disabled:opacity-60">
                      {busy ? "Sending…" : <><Send size={16}/> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      <SiteFooter/>
    </main>
  )
}
