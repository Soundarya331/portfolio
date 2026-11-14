import Reveal from './Reveal'
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react'

type ExperienceItem = {
  company: string
  role: string
  location: string
  period: string
  product: string
  type: 'fulltime' | 'education'
  points: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'GoodWorkLabs, Bengaluru',
    role: 'Full Stack Developer',
    location: 'Bengaluru, India',
    period: 'February 2025 – Present',
    product: 'Kriatix CRM — Production Multi-Tenant SaaS Platform',
    type: 'fulltime',
    points: [
      'Own backend features end to end for Kriatix CRM, a production multi-tenant SaaS platform: REST APIs, data models and PostgreSQL data access in a modular Controller-Service-Repository architecture, plus React frontend features.',
      'Optimized database indexing and queries, reducing API latency by 35%; built lead funnel analytics using PostgreSQL aggregations and Redis caching.',
      'Diagnosed and resolved a production Redis outage by migrating to self-hosted Redis, improving platform reliability and fault tolerance.',
      'Secured endpoints with JWT and role-based access control; integrated the OpenAI API to auto-draft sales follow-up emails.',
      'Deploy with Docker and GitHub Actions CI/CD on GCP; take part in code reviews and Agile/Scrum sprints, working with product and design.',
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'Redis', 'OpenAI API', 'Docker', 'GCP', 'GitHub Actions', 'JWT / RBAC'],
  },
  {
    company: 'AIEMS College of Engineering',
    role: 'Bachelor of Engineering (B.E.), Computer Science',
    location: 'Bengaluru, India',
    period: 'Dec 2020 – June 2024',
    product: 'CGPA: 8.3 / 10.00',
    type: 'education',
    points: [
      'Graduated with a strong academic foundation in Computer Science & Engineering (8.3/10.00 CGPA).',
      'Coursework: Data Structures & Algorithms, Database Management Systems (RDBMS/SQL), Object-Oriented Programming (OOP), Distributed Systems, Operating Systems, Computer Networks.',
    ],
    skills: ['Data Structures & Algorithms', 'Database Systems', 'Distributed Systems', 'Software Engineering'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl border-t border-border/80 px-6 py-24">
      <Reveal>
        <p className="eyebrow">experience · career_trajectory</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-text sm:text-4xl">
          Where I've Delivered Impact.
        </h2>
        <p className="mt-2 text-sm text-muted">
          Track record of shipping production backend systems, resolving outages, and deploying cloud services.
        </p>
      </Reveal>

      {/* Timeline List */}
      <div className="mt-12 space-y-8">
        {experiences.map((exp, i) => (
          <Reveal
            key={exp.company}
            delay={i * 90}
            className="card relative border-l-4 border-l-teal p-6 sm:p-7 border-border/80 bg-surface/75 hover:bg-surface/95 transition-all"
          >
            {/* Top row */}
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-text">{exp.role}</h3>
                  <span className="text-muted">·</span>
                  <span className="font-display text-lg text-teal font-medium">{exp.company}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-mutedLight">{exp.product}</p>
              </div>

              <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-muted">
                <span className="inline-flex items-center gap-1.5 text-teal">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-4">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 text-xs text-mutedLight leading-relaxed">
                  <span className="mt-1 text-teal text-[10px]">▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Skills chips */}
            <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-surface2 border border-border/70 px-2 py-0.5 font-mono text-[11px] text-muted hover:text-text transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
