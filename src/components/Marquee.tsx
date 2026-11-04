const items = [
  'Python',
  'FastAPI',
  'Django REST',
  'NestJS',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'Google Cloud (GCP)',
  'AWS (RDS)',
  'Redis',
  'Celery & Celery Beat',
  'OpenAI API',
  'LangChain',
  'GitHub Actions CI/CD',
  'Terraform',
]

export default function Marquee() {
  const loop = [...items, ...items]
  return (
    <div className="marquee-row overflow-hidden border-y border-border/80 bg-surface/50 py-3.5 backdrop-blur-sm">
      <div className="marquee-track flex w-max gap-8 items-center">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-xs text-muted hover:text-teal transition-colors duration-150"
          >
            <span className="font-medium text-text/90">{item}</span>
            <span className="text-teal/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
