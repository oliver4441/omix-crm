import { Nav } from "@/components/landing/Nav"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { WorkflowSections } from "@/components/landing/WorkflowSections"
import { Testimonials } from "@/components/landing/Testimonials"
import { Pricing } from "@/components/landing/Pricing"
import { FAQ } from "@/components/landing/FAQ"
import { CTASection } from "@/components/landing/CTASection"
import { Footer } from "@/components/landing/Footer"

export default function HomePage() {
  return (
    <main
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#080A12" }}
    >
      <Nav />
      <Hero />
      <Features />
      <section id="workflow" className="border-t border-white/[0.06]">
        <WorkflowSections />
      </section>
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
