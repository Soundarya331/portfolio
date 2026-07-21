type Project = {
  id: string
  name: string
  summary: string
  role: string
  stack: string[]
  highlights: string[]
  status: 'production' | 'archived'
}

const projects: Project[] = [
  {
    id: '01',
    name: 'Kriatix CRM',
    summary:
      'Multi-tenant SaaS CRM platform used to manage leads, campaigns, and cross-organization sales workflows.',
    role: 'Full Stack Developer',
    stack: ['NestJS', 'React', 'PostgreSQL', 'TypeORM', 'BullMQ', 'Redis'],
    highlights: [
      'Fixed a stale-timestamp bug in the campaign resend flow that was force-failing re-queued recipients',
      'Hardened email deliverability: corrected sender identity overrides, added List-Unsubscribe headers',
      'Built primary sales user assignment with uniqueness enforcement',
      'Built cross-organization user registration with alias email tracking',
      'Shipped a Campaign Details page and replaced a buggy modal implementation on the frontend',
    ],
    status: 'production',
  },
  {
    id: '02',
    name: 'Netskill LMS',
    summary:
      'Vertical course-template frontend with Deno-based Supabase edge functions on the backend.',
    role: 'Full Stack Developer',
    stack: ['Astro', 'TypeScript', 'Deno', 'Supabase', 'GitHub Actions'],
    highlights: [
      'Built CSS-only hero animations and layout under a strict no-new-dependencies constraint',
      'Implemented a full CI/CD pipeline for Deno edge functions with separate dev/prod workflows',
      'Set up selective function deployment based on git diff',
    ],
    status: 'archived',
  },
  {
    id: '03',
    name: 'Student Management System',
    summary: 'Internship project built during a JSpiders training program.',
    role: 'Intern',
    stack: ['Java', 'Spring Boot', 'JSP'],
    highlights: [
      'Built core CRUD flows for student records with Spring Boot and JSP',
      'First hands-on project applying Java backend fundamentals',
    ],
    status: 'archived',
  },
]

import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl border-t border-border px-6 py-20">
      <Reveal>
        <p className="eyebrow">projects · records</p>
        <h2 className="mt-6 font-display text-3xl font-semibold text-text sm:text-4xl">
          What I've shipped.
        </h2>
      </Reveal>
      <div className="mt-10 space-y-5">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 100}
            className="card block border-l-2 border-l-border p-6 transition hover:border-l-teal"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="field-label">record_{project.id}</span>
                <h3 className="mt-1 font-display text-xl font-semibold text-text">
                  {project.name}
                </h3>
              </div>
              <span
                className={`rounded-full px-3 py-1 font-mono text-xs ${
                  project.status === 'production'
                    ? 'bg-teal/10 text-teal'
                    : 'bg-muted/10 text-muted'
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1 font-mono text-xs sm:grid-cols-[auto_1fr]">
              <span className="field-label">role:</span>
              <span className="text-text">{project.role}</span>
              <span className="field-label">stack:</span>
              <span className="text-text">{project.stack.join(', ')}</span>
            </div>

            <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-1 text-teal">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
