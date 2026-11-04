import { useEffect, useState } from 'react'
import { Terminal, Database } from 'lucide-react'

type Query = {
  sql: string
  result: string
  type: 'metric' | 'arch' | 'incident' | 'ai'
}

const queries: Query[] = [
  {
    sql: "SELECT role, experience FROM engineers WHERE name = 'Soundarya P';",
    result: '→ Software Engineer (Backend & Cloud/DevOps) · 2.5+ Years Exp',
    type: 'arch',
  },
  {
    sql: "SELECT impact FROM metrics WHERE task = 'database_indexing';",
    result: '→ 35% latency drop across PostgreSQL endpoints',
    type: 'metric',
  },
  {
    sql: "SELECT resolution FROM incident_logs WHERE id = 'REDIS_PROD_OUTAGE';",
    result: '→ Migrated to self-hosted Redis instance; restored 100% uptime',
    type: 'incident',
  },
  {
    sql: "SELECT infra_stack FROM production_deployments;",
    result: '→ Docker, Kubernetes, GCP, AWS (RDS), GitHub Actions CI/CD',
    type: 'arch',
  },
  {
    sql: "SELECT features FROM ai_modules WHERE product = 'Kriatix CRM';",
    result: '→ OpenAI API email auto-drafting + LangChain tool agents',
    type: 'ai',
  },
]

export default function QueryConsole() {
  const [queryIndex, setQueryIndex] = useState(0)
  const [typedSql, setTypedSql] = useState('')
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    setTypedSql('')
    setShowResult(false)
    const current = queries[queryIndex].sql
    let i = 0
    const typeInterval = setInterval(() => {
      i += 1
      setTypedSql(current.slice(0, i))
      if (i >= current.length) {
        clearInterval(typeInterval)
        setTimeout(() => setShowResult(true), 150)
      }
    }, 24)

    return () => clearInterval(typeInterval)
  }, [queryIndex])

  useEffect(() => {
    if (!showResult) return
    const next = setTimeout(() => {
      setQueryIndex((prev) => (prev + 1) % queries.length)
    }, 2800)
    return () => clearTimeout(next)
  }, [showResult])

  return (
    <div className="card w-full overflow-hidden border-border/80 shadow-2xl bg-surface/90 backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-border/80 bg-surface2 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <div className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-muted">
            <Database className="h-3 w-3 text-teal" />
            <span>soundarya_pg=#</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          {queries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setQueryIndex(idx)}
              aria-label={`Switch to query ${idx + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                queryIndex === idx ? 'w-4 bg-teal' : 'bg-border hover:bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="min-h-[140px] px-4 py-3.5 font-mono text-[13px] leading-relaxed">
        <div className="text-text">
          <span className="text-teal font-semibold">{'>'} </span>
          <span>{typedSql}</span>
          {!showResult && <span className="caret text-teal">▍</span>}
        </div>
        {showResult && (
          <div className="mt-3 flex items-start gap-2 rounded bg-surface3/40 p-2.5 text-xs text-mutedLight fade-up border border-border/40">
            <span className="text-teal">✓</span>
            <span className="font-mono">{queries[queryIndex].result}</span>
          </div>
        )}
      </div>
    </div>
  )
}
