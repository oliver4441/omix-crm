import { SiteNav }             from "@/components/layout/SiteNav"
import { SiteFooter }          from "@/components/layout/SiteFooter"
import { Hero }                from "@/components/home/Hero"
import { TrustStrip }          from "@/components/home/TrustStrip"
import { Features }            from "@/components/home/Features"
import { ProductShowcase }     from "@/components/home/ProductShowcase"
import { PipelineHighlight }   from "@/components/home/PipelineHighlight"
import { AnalyticsHighlight }  from "@/components/home/AnalyticsHighlight"
import { Testimonials }        from "@/components/home/Testimonials"
import { Pricing }             from "@/components/home/Pricing"
import { FAQ }                 from "@/components/home/FAQ"
import { CTA }                 from "@/components/home/CTA"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <SiteNav />
      <Hero />
      <TrustStrip />
      <Features />
      <ProductShowcase />
      <PipelineHighlight />
      <AnalyticsHighlight />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <SiteFooter />
    </main>
  )
}
