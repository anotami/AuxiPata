import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ReferralBanner from '@/components/ReferralBanner'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import ProductLines from '@/components/ProductLines'
import Configurator from '@/components/Configurator'
import VideoDemo from '@/components/VideoDemo'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import Talleres from '@/components/Talleres'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ReferralBanner />
      <Problem />
      <HowItWorks />
      <Features />
      <ProductLines />
      <Configurator />
      <VideoDemo />
      <Testimonials />
      <Gallery />
      <Pricing />
      <Talleres />
      <FAQ />
      <Footer />
    </main>
  )
}
