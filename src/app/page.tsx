import Image from 'next/image'
import CaseStudies from "@/components/ui/CaseStudies"
import CTA from "@/components/ui/cta"
import FAQAccordion from "@/components/ui/faq"
import Features from "@/components/ui/features"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import Hero from "@/components/ui/hero"
import HowItWorks from "@/components/ui/HowItWorks"
import Tutorial from "@/components/ui/tutorial"
import TrustedCompanies from '@/components/ui/trustedCompanies'


export default function Home() {
  return (
    <main className="font-lexend bg-white" >
      <Header />
      <section className="relative flex flex-col items-center justify-center">
        <Hero />
        <TrustedCompanies/>
        <HowItWorks />
        <Features/>
        <CaseStudies/>
        <FAQAccordion />
        <CTA />
      </section>
      <Footer />
    </main>
  )
}
