import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Solutions } from './components/Solutions'
import { Process } from './components/Process'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="font-inter bg-[#0D0D0D] text-[#F2F2F2] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Solutions />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
