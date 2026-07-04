import { SiteNav }                 from "@/components/layout/SiteNav"
import { SiteFooter }              from "@/components/layout/SiteFooter"
import { HomeHero }                from "@/components/home/HomeHero"
import { HomeLogos }               from "@/components/home/HomeLogos"
import { HomeFeatures }            from "@/components/home/HomeFeatures"
import { HomeTestimonialsPreview } from "@/components/home/HomeTestimonialsPreview"
import { HomePricingPreview }      from "@/components/home/HomePricingPreview"
import { HomeCTA }                 from "@/components/home/HomeCTA"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <SiteNav />
      <HomeHero />
      <HomeLogos />
      <HomeFeatures />
      <HomeTestimonialsPreview />
      <HomePricingPreview />
      <HomeCTA />
      <SiteFooter />
    </main>
  )
}
