import Reveal from './Reveal'
import { Monitor, Server, Cloud, Database, Cpu } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      icon: Monitor,
      color: 'bg-violet/10 border-violet/20 text-violet',
      title: 'Full Stack UI → API',
      desc: 'React.js & Next.js frontends with TypeScript, Tailwind CSS, Redux — wired to NestJS & FastAPI backends with clean REST APIs.',
    },
    {
      icon: Server,
      color: 'bg-teal/10 border-teal/20 text-teal',
      title: 'High-Throughput Backends',
      desc: 'Modular Controller-Service-Repository architectures in TypeScript (NestJS) and Python (FastAPI, Django REST), with async workers and background job queues.',
    },
    {
      icon: Database,
      color: 'bg-cyan/10 border-cyan/20 text-cyan',
      title: 'Database Mastery & Indexing',
      desc: 'Advanced PostgreSQL schema design, JSONB storage, complex aggregations, and execution plan optimization — driving a proven 35% latency reduction.',
    },
    {
      icon: Cloud,
      color: 'bg-emerald/10 border-emerald/20 text-emerald',
      title: 'Cloud & Containerization',
      desc: 'Hands-on deployments with Docker, Kubernetes, GCP, and AWS, automated through GitHub Actions CI/CD with robust staging/production pipelines.',
    },
    {
      icon: Cpu,
      color: 'bg-amber/10 border-amber/20 text-amber',
      title: 'Applied AI Integration',
      desc: 'Integrating OpenAI API for workflow automation, building LangChain agents with RAG, Stripe Checkout, and debugging live distributed systems.',
    },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-border/80 px-4 sm:px-6 py-16 sm:py-24">
      <Reveal>
        <div className="flex items-center gap-2">
          <p className="eyebrow">about · engineering_background</p>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal delay={80}>
          <h2 className="font-display text-2xl font-semibold leading-tight text-text sm:text-4xl">
            Building full-stack products end to end — from pixel-perfect UIs to production-grade APIs and cloud infra.
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted">
            <p>
              I'm a <strong className="text-text font-medium">Full Stack Developer</strong> based in Bengaluru with <strong className="text-text font-medium">2+ years of experience</strong> building and shipping production web applications from frontend to backend to cloud.
            </p>
            <p>
              At <span className="text-text font-medium">GoodWorkLabs</span>, I own features end to end for <span className="text-teal font-medium">Kriatix CRM</span> — React frontend views, NestJS REST APIs, PostgreSQL data layers, Redis caching, and GCP deployments. My query optimizations achieved a <span className="text-teal font-semibold">35% reduction in API response latency</span>. When our team faced a critical live Redis outage, I resolved it by migrating to a self-hosted Redis cluster, restoring full platform availability.
            </p>

          </div>
        </Reveal>

        <Reveal delay={160} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="card p-4 sm:p-5 border-border/80 bg-surface/60 hover:border-teal/40 hover:bg-surface transition-all duration-200"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg border mb-3.5 ${pillar.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold text-text">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pillar.desc}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
