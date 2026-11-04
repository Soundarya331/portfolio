import { useState } from 'react'
import Reveal from './Reveal'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

function GithubIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

type ProjectCategory = 'all' | 'production' | 'python' | 'ai'

type Project = {
  id: string
  name: string
  category: ProjectCategory[]
  tagline: string
  role: string
  period: string
  stack: string[]
  metrics: string
  highlights: string[]
  status: 'production' | 'open_source' | 'featured'
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: '01',
    name: 'Kriatix CRM',
    category: ['production'],
    tagline: 'Multi-tenant SaaS CRM platform managing lead pipelines, proposals, and cross-team workflows.',
    role: 'Full Stack Developer @ GoodWorkLabs',
    period: 'Feb 2025 – Present',
    stack: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Redis', 'OpenAI API', 'Docker', 'GCP'],
    metrics: '35% Latency Drop · Redis Outage Resolved',
    highlights: [
      'Architected production backend services and REST APIs with a modular Controller-Service-Repository architecture.',
      'Optimized PostgreSQL query indexing and execution plans, reducing API response latency by 35%.',
      'Diagnosed and resolved a critical production Redis outage by executing a migration to a self-hosted Redis cluster, restoring 100% service availability.',
      'Integrated OpenAI API into the communication module to power AI-assisted sales email auto-drafting, cutting manual sales turnaround.',
      'Engineered lead funnel analytics and reporting (drop-off rates, stage conversions) using PostgreSQL aggregations and Redis caching.',
      'Deployed on Google Cloud Platform (GCP) with Docker and automated GitHub Actions CI/CD pipelines.',
    ],
    status: 'production',
  },
  {
    id: '02',
    name: 'Generic REST Data Ingestion Service',
    category: ['python'],
    tagline: 'Declarative data ingestion framework gathering external REST APIs based purely on YAML configurations.',
    role: 'Creator & Architect',
    period: 'Personal Project',
    stack: ['Python', 'FastAPI', 'PostgreSQL JSONB', 'Docker Compose', 'Strategy Pattern', 'pytest'],
    metrics: 'Zero Code Changes for New Sources',
    highlights: [
      'Engineered a pluggable strategy pattern engine for dynamic authentication (HeaderTokenAuth, QueryParamAuth) and pagination (LinkHeaderPagination, NextUrlInBody).',
      'Adding a new data source requires writing a single YAML config file rather than rewriting or modifying application code.',
      'Implemented idempotent upserts and generator-based streaming for memory-efficient, repeatable data collection into PostgreSQL JSONB.',
      'Validated end-to-end against structurally distinct public APIs (GitHub REST API and PokeAPI) with comprehensive pytest test coverage.',
    ],
    status: 'open_source',
    githubUrl: 'https://github.com/Soundarya331/generic-data-ingestion-service',
  },
  {
    id: '03',
    name: 'InvoiceChaser — Automated Reminder Platform',
    category: ['python'],
    tagline: 'Full-stack automation platform scheduling background transactional invoice reminder cycles.',
    role: 'Creator & Lead Developer',
    period: 'Personal Project',
    stack: ['Python', 'Django REST Framework', 'Celery', 'Celery Beat', 'Redis', 'PostgreSQL', 'React', 'Brevo API', 'Render', 'Vercel'],
    metrics: 'Automated Multi-Stage Reminders',
    highlights: [
      'Built an automation platform that triggers scheduled background tasks via Celery Beat, Redis message broker, and Brevo Transactional Email Gateway.',
      'Designed multi-tier reminder logic with configurable email tones (friendly, firm, final) based on invoice due dates.',
      'Hardened security by implementing Fernet symmetric encryption for sensitive third-party API credentials stored in PostgreSQL.',
      'Deployed production services across Render (Django REST backend) and Vercel (React frontend) with Neon PostgreSQL.',
    ],
    status: 'open_source',
    githubUrl: 'https://github.com/Soundarya331/invoice-chaser',
  },
  {
    id: '04',
    name: 'NovaStore — AI-Powered E-Commerce',
    category: ['ai', 'python'],
    tagline: 'Scalable commerce backend with Stripe idempotent webhooks and an autonomous LangChain customer support agent.',
    role: 'Creator & Developer',
    period: 'Personal Project',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Stripe', 'LangChain', 'Docker', 'pytest', 'Playwright'],
    metrics: 'Idempotent Webhooks · LangChain Agent',
    highlights: [
      'Built a high-performance FastAPI/PostgreSQL REST backend with React/TypeScript frontend, Google OAuth 2.0, and server-side RBAC.',
      'Integrated Stripe Checkout with idempotent webhook verification, guaranteeing safe transaction processing against network retries.',
      'Engineered a LangChain AI support agent equipped with user-isolated tools for order inquiries and catalog lookups.',
      'Authored automated test suites with pytest and Playwright, containerized with Docker, and deployed on cloud staging.',
    ],
    status: 'featured',
  },
  {
    id: '05',
    name: 'Learning Management System (LMS)',
    category: ['production'],
    tagline: 'Enterprise learning platform serving course delivery, progress metrics, and organizational enrollments.',
    role: 'Software Engineer @ Otipy (Crofarm)',
    period: 'Feb 2024 – Feb 2025',
    stack: ['Python', 'PostgreSQL', 'Docker', 'GCP', 'AWS', 'CI/CD', 'REST APIs'],
    metrics: 'Enterprise Multi-Tier Architecture',
    highlights: [
      'Built and maintained backend microservices and REST APIs on PostgreSQL for course management, user enrollment, and progress tracking.',
      'Containerized core services using Docker and maintained automated build and deployment pipelines on GCP/AWS.',
      'Monitored live application health and production logs, debugging production incidents and performing root cause analysis (RCA).',
      'Optimized database queries and API response times in close collaboration with product teams across bi-weekly release cycles.',
    ],
    status: 'production',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all')

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(filter))

  return (
    <section id="projects" className="mx-auto max-w-6xl border-t border-border/80 px-6 py-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">projects · engineering_records</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
              Production Systems & Open Source.
            </h2>
            <p className="mt-2 text-sm text-muted">
              Live enterprise platforms and self-initiated backend architecture engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 rounded-lg border border-border/80 bg-surface/80 p-1 font-mono text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`rounded px-3 py-1 transition ${
                filter === 'all' ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilter('production')}
              className={`rounded px-3 py-1 transition ${
                filter === 'production' ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
              }`}
            >
              Production
            </button>
            <button
              onClick={() => setFilter('python')}
              className={`rounded px-3 py-1 transition ${
                filter === 'python' ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
              }`}
            >
              Python / FastAPI
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`rounded px-3 py-1 transition ${
                filter === 'ai' ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
              }`}
            >
              AI & Agents
            </button>
          </div>
        </div>
      </Reveal>

      {/* Projects List */}
      <div className="mt-10 space-y-6">
        {filteredProjects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 70}
            className="card group relative overflow-hidden border-border/80 bg-surface/75 p-6 hover:border-teal/50 hover:bg-surface/95 transition-all duration-300"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/60 pb-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-teal">
                  <span>record_{project.id}</span>
                  <span className="text-border">·</span>
                  <span className="text-muted">{project.period}</span>
                </div>
                <h3 className="mt-1 font-display text-xl font-bold text-text group-hover:text-teal transition-colors">
                  {project.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded border border-teal/30 bg-teal/5 px-2.5 py-1 font-mono text-xs text-teal">
                  {project.metrics}
                </span>

                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase ${
                    project.status === 'production'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-cyan/10 text-cyan border border-cyan/20'
                  }`}
                >
                  {project.status.replace('_', ' ')}
                </span>
              </div>
            </div>

            {/* Tagline & Role */}
            <p className="mt-4 text-sm font-medium leading-relaxed text-mutedLight">
              {project.tagline}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs">
              <span className="text-muted">
                Role: <span className="text-text">{project.role}</span>
              </span>
            </div>

            {/* Highlights List */}
            <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
              {project.highlights.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                  <span className="mt-1 text-teal text-[10px]">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Badges & Links Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-surface2 border border-border px-2 py-0.5 font-mono text-[11px] text-mutedLight"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded border border-border bg-surface2 px-3 py-1 font-mono text-xs text-text hover:border-teal hover:text-teal transition"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View GitHub Repo</span>
                    <ArrowUpRight className="h-3 w-3 text-muted" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded bg-teal px-3 py-1 font-mono text-xs font-semibold text-bg hover:bg-teal/90 transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
