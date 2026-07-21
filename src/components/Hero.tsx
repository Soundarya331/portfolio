import { useRef, type MouseEvent } from 'react'
import QueryConsole from './QueryConsole'
import SplitReveal from './SplitReveal'

// Profile photo — update this path if you replace the file in /public.
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
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center overflow-hidden px-6 py-24"
    >
      <div className="hero-spotlight" />
      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow fade-up" style={{ animationDelay: '80ms' }}>
            soundarya.dev · full_stack_developer
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-text sm:text-5xl lg:text-6xl">
            <SplitReveal text="I build the backend" startDelay={120} />
            <br />
            <SplitReveal text="that keeps the front end" startDelay={380} />
            <br />
            <SplitReveal text="honest." className="text-teal" startDelay={640} />
          </h1>
          <p
            className="mt-6 max-w-lg text-base leading-relaxed text-muted fade-up"
            style={{ animationDelay: '900ms' }}
          >
            Full Stack Developer at GoodWorkLabs, Bengaluru. I work across a
            production multi-tenant SaaS CRM — NestJS and PostgreSQL on the
            backend, React and Redux on the front, shipped through Docker and
            GitHub Actions.
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-4 fade-up"
            style={{ animationDelay: '1020ms' }}
          >
            <a
              href="#projects"
              className="rounded-md bg-teal px-5 py-2.5 font-mono text-sm font-medium text-bg transition hover:bg-teal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              view_projects()
            </a>
            <a
              href="/resume.pdf"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              download_resume.pdf
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="clip-reveal overflow-hidden rounded-lg border border-border bg-surface" style={{ animationDelay: '200ms' }}>
            <img
              src={PROFILE_PHOTO}
              alt="Soundarya P — Full Stack Developer"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="fade-up mt-6" style={{ animationDelay: '1200ms' }}>
            <QueryConsole />
          </div>
        </div>
      </div>
    </section>
  )
}
