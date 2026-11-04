import { useRef, type MouseEvent } from 'react'
import QueryConsole from './QueryConsole'
import SplitReveal from './SplitReveal'
import { Download, ArrowRight } from 'lucide-react'

const PROFILE_PHOTO = '/profile.png'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const node = sectionRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    node.style.setProperty('--spot-x', `${x}%`)
    node.style.setProperty('--spot-y', `${y}%`)
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-14 sm:pb-20"
    >
      <div className="hero-spotlight" />

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {/* Eyebrow / Role Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 font-mono text-xs text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            <span>Software Engineer (Backend & Cloud/DevOps)</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] text-text sm:text-5xl lg:text-[3.5rem]">
            <SplitReveal text="Engineering resilient backends" />
            <br />
            <SplitReveal text="& cloud systems at scale" />
            <br />
            <SplitReveal text="that stay fast in production." className="text-teal" />
          </h1>

          {/* Intro Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Software Engineer with <strong className="text-text font-medium">2.5+ years of professional experience</strong> architecting, containerizing, and running production microservices — from multi-tenant SaaS CRMs to high-scale Learning Management Systems. Focused on <span className="text-teal font-mono text-sm">Python</span>, <span className="text-teal font-mono text-sm">Node.js/TypeScript</span>, <span className="text-teal font-mono text-sm">PostgreSQL</span>, <span className="text-teal font-mono text-sm">Docker</span>, and <span className="text-teal font-mono text-sm">GCP/AWS</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-md bg-teal px-5 py-2.5 font-mono text-sm font-semibold text-bg transition hover:bg-teal/90 shadow-glow-teal"
            >
              <span>view_projects()</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              download="Soundarya_P_Resume.pdf"
              className="flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 font-mono text-sm text-text transition hover:border-teal/50 hover:text-teal"
            >
              <Download className="h-4 w-4" />
              <span>resume.pdf</span>
            </a>

            <a
              href="#contact"
              className="font-mono text-sm text-muted hover:text-text transition px-2 py-2"
            >
              contact_me()
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-bold text-text">2.5+ <span className="text-teal text-lg">yrs</span></p>
              <p className="mt-0.5 font-mono text-[11px] text-muted uppercase">Production Exp</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-teal">-35%</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted uppercase">DB Query Latency</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-text">5+</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted uppercase">Shipped Systems</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-cyan">100%</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted uppercase">Containerized CI/CD</p>
            </div>
          </div>
        </div>

        {/* Profile Card & Terminal Column */}
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <div className="relative">
            {/* Tech chips floating around photo */}
            <div className="relative overflow-hidden rounded-xl border border-border/90 bg-surface shadow-2xl">
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-surface2/90 border border-border/80 px-2.5 py-1 backdrop-blur font-mono text-[11px] text-mutedLight">
                <span className="h-2 w-2 rounded-full bg-teal animate-ping" />
                <span>GoodWorkLabs · Bengaluru</span>
              </div>
              <img
                src={PROFILE_PHOTO}
                alt="Soundarya P — Software Engineer"
                className="aspect-[4/4.5] w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-xs text-mutedLight">
                <span>Soundarya P</span>
                <span className="text-teal">B.E. CSE (CGPA 8.3)</span>
              </div>
            </div>

            {/* Live Query Console */}
            <div className="mt-5">
              <QueryConsole />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
