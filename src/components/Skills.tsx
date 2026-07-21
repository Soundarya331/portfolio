const groups = [
  {
    name: 'backend',
    type: 'text[]',
    items: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'BullMQ', 'Redis'],
  },
  {
    name: 'frontend',
    type: 'text[]',
    items: ['React', 'Redux', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'devops',
    type: 'text[]',
    items: ['Docker', 'GitHub Actions', 'Google Cloud', 'CI/CD'],
  },
  {
    name: 'also_know',
    type: 'text[] nullable',
    items: ['Java', 'Spring Boot', 'Deno', 'Supabase'],
  },
]

import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl border-t border-border px-6 py-20">
      <Reveal>
        <p className="eyebrow">skills · schema</p>
        <h2 className="mt-6 font-display text-3xl font-semibold text-text sm:text-4xl">
          Stack, by column.
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => (
          <Reveal key={group.name} delay={i * 90}>
            <TiltCard className="card p-5 hover:border-teal/40">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-teal">{group.name}</span>
                <span className="field-label">{group.type}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-muted">
                    <span className="text-border">·</span> {item}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
