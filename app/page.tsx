import { Nav }               from "@/components/landing/Nav"
import { Hero }              from "@/components/landing/Hero"
import { Features }          from "@/components/landing/Features"
import { PipelineSection }   from "@/components/landing/PipelineSection"
import { AnalyticsSection }  from "@/components/landing/AnalyticsSection"
import { Testimonials }      from "@/components/landing/Testimonials"
import { Pricing }           from "@/components/landing/Pricing"
import { FAQ }               from "@/components/landing/FAQ"
import { CTASection }        from "@/components/landing/CTASection"
import { Footer }            from "@/components/landing/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{backgroundColor:"#0A0A0A",color:"#fff",fontFamily:"'Inter','Segoe UI',sans-serif"}}>
      <Nav />
      <Hero />
      <Features />
      <PipelineSection />
      <AnalyticsSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
