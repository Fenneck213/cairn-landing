import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Simulator from './components/Simulator'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Cairn — Business Plan IA France &amp; Algérie</title>
        <meta
          name="description"
          content="Générez des business plans conformes aux réglementations françaises et algériennes avec l'intelligence artificielle. Pilotage PMBOK intégré."
        />
        <meta property="og:title" content="Cairn — Business Plan IA France & Algérie" />
        <meta
          property="og:description"
          content="Générez des business plans conformes aux réglementations françaises et algériennes avec l'intelligence artificielle."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Simulator />
          <Testimonials />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
