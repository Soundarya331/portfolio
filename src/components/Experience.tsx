const entries = [
  {
    range: '2023 — present',
    org: 'GoodWorkLabs Services Pvt. Ltd.',
    role: 'Full Stack Developer',
    note: 'Kriatix CRM — NestJS, React, PostgreSQL, TypeORM, Docker',
  },
  {
    range: 'internship',
    org: 'JSpiders',
    role: 'Java / Spring Boot Trainee',
    note: 'Student Management System — Spring Boot, JSP',
  },
  {
    range: 'education',
    org: 'AIEMS College of Engineering, Bangalore',
    role: 'B.E. Computer Science & Engineering',
    note: 'CGPA 8.3',
  },
]

import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl border-t border-border px-6 py-20">
      <Reveal>
        <p className="eyebrow">experience · timeline</p>
        <h2 className="mt-6 font-display text-3xl font-semibold text-text sm:text-4xl">
          Where I've worked.
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {entries.map((entry, i) => (
          <Reveal
            key={entry.org}
            delay={i * 90}
            className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="w-40 shrink-0 font-mono text-xs text-teal">{entry.range}</span>
            <div>
              <p className="font-display text-lg font-semibold text-text">
                {entry.role} <span className="text-muted">· {entry.org}</span>
              </p>
              <p className="mt-1 font-mono text-xs text-muted">{entry.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
