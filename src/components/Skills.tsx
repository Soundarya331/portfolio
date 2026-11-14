import { useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { Monitor, Server, Database, Cloud, ShieldCheck, Sparkles } from 'lucide-react'

interface SkillCategory {
  id: string
  name: string
  tag: string
  icon: any
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    tag: 'ui.tsx',
    icon: Monitor,
    color: 'text-violet',
    skills: [
      'React.js & Next.js (App Router)',
      'TypeScript & JavaScript (ES6+)',
      'Tailwind CSS & Responsive Design',
      'Redux (State Management)',
      'HTML5 & CSS3',
      'REST API Integration',
      'React Hooks & Custom Hooks',
      'Component-Driven Architecture',
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    tag: 'api_service.ts',
    icon: Server,
    color: 'text-teal',
    skills: [
      'Node.js & NestJS (TypeScript)',
      'Python — FastAPI & Django REST',
      'Java — Core Java & Spring Boot',
      'REST API Design & Versioning',
      'Background Jobs — Celery & BullMQ',
      'Controller-Service-Repository Pattern',
      'Data Ingestion Pipelines',
      'Modular Microservice Architecture',
    ],
  },
  {
    id: 'database',
    name: 'Databases & Caching',
    tag: 'schema.sql',
    icon: Database,
    color: 'text-cyan',
    skills: [
      'PostgreSQL (Aggregations, Query Plans)',
      'Query Optimization & Indexing (−35% latency)',
      'Redis — Caching & Queue Management',
      'PostgreSQL JSONB Storage',
      'TypeORM & SQLAlchemy',
      'MongoDB & MySQL',
      'Relational Database Modeling',
      'Self-Hosted Redis Clustering',
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    tag: 'infra.yaml',
    icon: Cloud,
    color: 'text-emerald',
    skills: [
      'Google Cloud Platform (GCP)',
      'AWS (RDS, EC2)',
      'Docker & Docker Compose',
      'Kubernetes',
      'GitHub Actions CI/CD',
      'Vercel & Render Deployments',
      'Containerization & Autoscaling',
      'Production Incident Triage & RCA',
    ],
  },
  {
    id: 'ai_security',
    name: 'AI & Security',
    tag: 'agent.py',
    icon: ShieldCheck,
    color: 'text-amber',
    skills: [
      'OpenAI API Integration',
      'LangChain AI Agent Workflows',
      'RAG & Vector Search',
      'Prompt Engineering',
      'JWT Authentication & OAuth 2.0',
      'Role-Based Access Control (RBAC)',
      'Fernet Symmetric Encryption',
      'Stripe Checkout & Webhooks',
    ],
  },
]

const currentlyLearning = [
  'Terraform (IaC)',
  'Prometheus & Grafana',
  'Advanced Kubernetes',
  'Kafka & RabbitMQ',
  'AWS SQS / SNS',
  'Go',
]

const colorMap: Record<string, string> = {
  'text-violet': 'bg-violet/10 text-violet',
  'text-teal':   'bg-teal/10 text-teal',
  'text-cyan':   'bg-cyan/10 text-cyan',
  'text-emerald':'bg-emerald/10 text-emerald',
  'text-amber':  'bg-amber/10 text-amber',
}

const dotMap: Record<string, string> = {
  'text-violet': 'text-violet',
  'text-teal':   'text-teal',
  'text-cyan':   'text-cyan',
  'text-emerald':'text-emerald',
  'text-amber':  'text-amber',
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="mx-auto max-w-6xl border-t border-border/80 px-4 sm:px-6 py-16 sm:py-24">
      <Reveal>
        <p className="eyebrow">skills · technical_matrix</p>
        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text sm:text-4xl">
              Full Stack Technical Arsenal.
            </h2>
            <p className="mt-2 text-sm text-muted">
              End-to-end stack — from pixel-perfect UIs to production backend APIs, cloud infra & AI integrations.
            </p>
          </div>

          {/* Category Filter Pills — scrollable on mobile */}
          <div className="flex flex-wrap gap-1.5 rounded-lg border border-border/80 bg-surface/80 p-1 font-mono text-xs overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`whitespace-nowrap rounded px-2.5 py-1 transition ${
                activeCategory === 'all' ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
              }`}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap rounded px-2.5 py-1 transition ${
                  activeCategory === cat.id ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Grid of Skill Categories */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((cat, i) => {
          const Icon = cat.icon
          const iconClass = colorMap[cat.color] ?? 'bg-teal/10 text-teal'
          const dotClass = dotMap[cat.color] ?? 'text-teal'
          return (
            <Reveal key={cat.id} delay={i * 80}>
              <TiltCard className="card h-full p-4 sm:p-5 border-border/80 bg-surface/70 hover:border-teal/40 hover:bg-surface transition-all">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-md ${iconClass}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-display text-sm font-semibold text-text">{cat.name}</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted hidden sm:block">{cat.tag}</span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-mutedLight leading-relaxed">
                      <span className={`mt-1 text-[10px] ${dotClass}`}>▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>

      {/* Currently Learning Bar */}
      <Reveal delay={200} className="mt-6 sm:mt-8 rounded-lg border border-border/80 bg-surface2/60 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <Sparkles className="h-4 w-4 text-amber shrink-0" />
            <span className="font-semibold text-text">Currently Expanding:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.map((topic, idx) => (
              <span
                key={idx}
                className="rounded border border-border/70 bg-surface px-2.5 py-1 font-mono text-[11px] text-muted hover:border-teal/40 hover:text-teal transition"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
