import { useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { Cloud, Server, Database, Activity, ShieldCheck, Sparkles } from 'lucide-react'

interface SkillCategory {
  id: string
  name: string
  tag: string
  icon: any
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    tag: 'infra.yaml',
    icon: Cloud,
    skills: [
      'Google Cloud Platform (GCP)',
      'AWS (RDS, EC2)',
      'Docker & Docker Compose',
      'Kubernetes',
      'GitHub Actions (CI/CD)',
      'Terraform (IaC)',
      'Render & Vercel',
      'Containerization & Autoscaling',
    ],
  },
  {
    id: 'backend',
    name: 'Backend Engineering',
    tag: 'api_service.ts',
    icon: Server,
    skills: [
      'Python (FastAPI, Django REST)',
      'TypeScript & Node.js (NestJS)',
      'REST API Design & Versioning',
      'Asynchronous Programming',
      'Celery & Celery Beat Jobs',
      'BullMQ Background Queues',
      'Data Ingestion Pipelines',
      'Java (Spring Boot)',
    ],
  },
  {
    id: 'database',
    name: 'Databases & Caching',
    tag: 'schema.sql',
    icon: Database,
    skills: [
      'PostgreSQL (Aggregations, Execution Plans)',
      'Query Optimization & Indexing (-35% Latency)',
      'Redis (Caching & Queue Management)',
      'PostgreSQL JSONB Storage',
      'SQLAlchemy & TypeORM',
      'Relational Database Modeling',
      'Self-Hosted Redis Clustering',
    ],
  },
  {
    id: 'reliability',
    name: 'Reliability & Observability',
    tag: 'telemetry.log',
    icon: Activity,
    skills: [
      'Production Troubleshooting',
      'Root Cause Analysis (RCA)',
      'Live Incident Response',
      'Monitoring & Alerting',
      'Bottleneck Analysis & Profiling',
      'Operational Runbooks',
    ],
  },
  {
    id: 'ai_testing',
    name: 'AI, Testing & Security',
    tag: 'security_test.py',
    icon: ShieldCheck,
    skills: [
      'OpenAI API Integration (Email Auto-Drafting)',
      'LangChain Agent Workflows',
      'pytest & Automated Test Suites',
      'Playwright End-to-End Testing',
      'JWT Authentication & OAuth 2.0',
      'Role-Based Access Control (RBAC)',
      'Fernet Symmetric Encryption',
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

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="mx-auto max-w-6xl border-t border-border/80 px-6 py-24">
      <Reveal>
        <p className="eyebrow">skills · technical_matrix</p>
        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
              Technical Stack & Architecture.
            </h2>
            <p className="mt-2 text-sm text-muted">
              Production-hardened technologies across backend, cloud infrastructure, and data systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 rounded-lg border border-border/80 bg-surface/80 p-1 font-mono text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`rounded px-2.5 py-1 transition ${
                activeCategory === 'all' ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
              }`}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded px-2.5 py-1 transition ${
                  activeCategory === cat.id ? 'bg-teal text-bg font-semibold' : 'text-muted hover:text-text'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Grid of Skill Categories */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <Reveal key={cat.id} delay={i * 80}>
              <TiltCard className="card h-full p-5 border-border/80 bg-surface/70 hover:border-teal/50 hover:bg-surface transition-all">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-teal/10 text-teal">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-display text-sm font-semibold text-text">{cat.name}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted">{cat.tag}</span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-mutedLight leading-relaxed">
                      <span className="mt-1 text-teal text-[10px]">▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>

      {/* Currently Learning / Expanding Bar */}
      <Reveal delay={200} className="mt-8 rounded-lg border border-border/80 bg-surface2/60 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <Sparkles className="h-4 w-4 text-amber" />
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
