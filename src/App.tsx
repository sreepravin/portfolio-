import { useEffect, useState } from 'react'
import ScrollProgressBar from './components/ScrollProgressBar'
import SignalTrace from './components/SignalTrace'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1100)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen show={loading} />
      <CustomCursor />
      <ScrollProgressBar />
      <SignalTrace />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
