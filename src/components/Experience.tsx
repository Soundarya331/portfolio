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
    company: 'GoodWorkLabs Services Pvt. Ltd.',
    role: 'Full Stack Developer',
    location: 'Bengaluru, India',
    period: 'February 2025 – Present',
    product: 'Kriatix CRM (Production Multi-Tenant SaaS Platform)',
    type: 'fulltime',
    points: [
      'Build and ship features across the full stack for Kriatix CRM: backend microservices and REST APIs in TypeScript and PostgreSQL with a modular Controller-Service-Repository architecture, and customer-facing views in React.',
      'Own engineering deliverables end-to-end: clarify requirements, break down technical implementation, author clean testable code, and validate deployments in live production.',
      'Designed REST APIs with advanced filtering, cursor pagination, and date-range queries; engineered lead funnel analytics using PostgreSQL aggregations and Redis caching.',
      'Eliminated performance bottlenecks by optimizing database query execution plans and indexing, slashing response latency by 35%; secured endpoints with JWT and RBAC guards.',
      'Triaged, diagnosed, and resolved a critical production Redis outage by migrating services to a self-hosted Redis instance, successfully restoring 100% platform uptime and data reliability.',
      'Deploy and maintain services on Google Cloud Platform (GCP) with Docker and GitHub Actions CI/CD; monitor live production logs and handle incident triage; integrated the OpenAI API for AI-assisted sales email drafting.',
    ],
    skills: ['TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Redis', 'OpenAI API', 'Docker', 'GCP', 'GitHub Actions', 'React'],
  },
  {
    company: 'Otipy (Crofarm)',
    role: 'Software Engineer',
    location: 'Gurugram, India',
    period: 'February 2024 – February 2025',
    product: 'Enterprise Learning Management System (LMS)',
    type: 'fulltime',
    points: [
      "Built and maintained backend services and REST APIs for the company's enterprise Learning Management System (LMS) on PostgreSQL, handling course management, user enrollment, progress tracking, and role-based access.",
      'Containerized LMS microservices using Docker and supported automated build, test, and deployment through CI/CD pipelines on cloud infrastructure (GCP/AWS).',
      'Monitored application telemetry, error logs, and system health; debugged live production issues and conducted root cause analysis (RCA) to maintain high availability.',
      'Optimized database queries and API performance, collaborating with product and operations teams to ship improvements in bi-weekly release cycles.',
    ],
    skills: ['Python', 'PostgreSQL', 'Docker', 'GCP', 'AWS', 'CI/CD Pipelines', 'REST APIs', 'System Reliability'],
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
