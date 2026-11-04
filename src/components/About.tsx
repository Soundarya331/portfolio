import Reveal from './Reveal'
import { Server, Cloud, Database, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      icon: Server,
      title: 'High-Throughput Backends',
      desc: 'Modular Controller-Service-Repository architectures in Python (FastAPI, Django) and TypeScript (NestJS), with async workers and background job queues.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Containerization',
      desc: 'Hands-on deployments with Docker, Kubernetes, GCP, and AWS (RDS), automated through GitHub Actions CI/CD with robust staging/production pipelines.',
    },
    {
      icon: Database,
      title: 'Database Mastery & Indexing',
      desc: 'Advanced PostgreSQL schema design, JSONB storage, complex aggregations, and execution plan optimization — driving a proven 35% latency reduction.',
    },
    {
      icon: Cpu,
      title: 'Applied AI & Production Triage',
      desc: 'Integrating OpenAI API for workflow automation, building LangChain agents, debugging live distributed systems, and resolving production outages.',
    },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-border/80 px-6 py-24">
      <Reveal>
        <div className="flex items-center gap-2">
          <p className="eyebrow">about · engineering_background</p>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal delay={80}>
          <h2 className="font-display text-3xl font-semibold leading-tight text-text sm:text-4xl">
            Designing resilient backend services and cloud workflows that thrive under production workloads.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              I am a Software Engineer based in Bengaluru with <strong className="text-text font-medium">2.5+ years of experience</strong> architecting, deploying, and maintaining production-grade distributed applications.
            </p>
            <p>
              At <span className="text-text font-medium">GoodWorkLabs</span>, I build and ship features across the stack for <span className="text-teal font-medium">Kriatix CRM</span>, an enterprise multi-tenant SaaS platform. My day-to-day work spans modular backend microservices in NestJS and PostgreSQL, lead funnel analytics, and self-hosted Redis caching — where query optimizations achieved a <span className="text-teal font-semibold">35% reduction in API response latency</span>. When our team faced a critical live Redis outage, I resolved it by architecting and executing a migration to a self-hosted Redis cluster, restoring full platform availability.
            </p>
            <p>
              Previously at <span className="text-text font-medium">Otipy (Crofarm)</span>, I engineered backend REST services and PostgreSQL schemas for the company's enterprise Learning Management System (LMS), containerizing services with Docker and managing automated CI/CD releases on GCP and AWS.
            </p>
            <p>
              Beyond work hours, I develop open-source distributed tooling — including a zero-code-change generic REST data ingestion engine using FastAPI and the Strategy Pattern, and AI-augmented commerce systems.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="card p-5 border-border/80 bg-surface/60 hover:border-teal/50 hover:bg-surface transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 border border-teal/20 text-teal mb-3.5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-text">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pillar.desc}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
