const items = [
  'NestJS',
  'TypeScript',
  'React',
  'PostgreSQL',
  'TypeORM',
  'BullMQ',
  'Redis',
  'Docker',
  'GitHub Actions',
  'Google Cloud',
]

export default function Marquee() {
  const loop = [...items, ...items]
  return (
    <div className="marquee-row overflow-hidden border-y border-border bg-surface py-4">
      <div className="marquee-track flex w-max gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm text-muted"
          >
            {item}
            <span className="text-teal">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
