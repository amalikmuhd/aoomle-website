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
    <div className="font-inter bg-white text-[#111827] min-h-screen">
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
