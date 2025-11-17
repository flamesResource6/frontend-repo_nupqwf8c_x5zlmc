import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Workshops from './components/Workshops'
import Experience from './components/Experience'
import Logos from './components/Logos'
import ParallaxSection from './components/ParallaxSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ParallaxSection strength={80} className="bg-white/0">
          <Logos />
        </ParallaxSection>
        <ParallaxSection strength={100} className="bg-white/0">
          <Workshops />
        </ParallaxSection>
        <ParallaxSection strength={120} className="bg-white/0">
          <Experience />
        </ParallaxSection>
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Ben Rotenberg — Generative AI Consultant
      </footer>
    </div>
  )
}

export default App
