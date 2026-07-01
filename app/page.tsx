import { Nav } from "@/components/landing/Nav"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { PipelinePreview } from "@/components/landing/PipelinePreview"
import { Testimonials } from "@/components/landing/Testimonials"
import { Pricing } from "@/components/landing/Pricing"
import { FAQ } from "@/components/landing/FAQ"
import { CTASection } from "@/components/landing/CTASection"
import { Footer } from "@/components/landing/Footer"

export default function HomePage() {
  return (
    <main
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#0B1020" }}
    >
      <Nav />
      <Hero />
      <Features />
      <PipelinePreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
