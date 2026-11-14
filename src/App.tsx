import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const update = () => {
      const el = barRef.current
      if (!el) return
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      el.style.transform = `scaleX(${Math.min(pct, 1)})`
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div className="progress-track fixed top-0 left-0 right-0 z-[100]">
      <div ref={barRef} className="progress-fill origin-left" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
