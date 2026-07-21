import { useEffect, useState } from 'react'

type Query = {
  sql: string
  result: string
}

const queries: Query[] = [
  {
    sql: "SELECT stack FROM experience WHERE company = 'GoodWorkLabs';",
    result: '→ NestJS, React, PostgreSQL, TypeORM, BullMQ, Redis',
  },
  {
    sql: "SELECT status FROM deployment WHERE product = 'Kriatix CRM';",
    result: '→ live in production, multi-tenant SaaS',
  },
  {
    sql: "SELECT title FROM education WHERE field = 'Computer Science';",
    result: '→ B.E. CSE, CGPA 8.3',
  },
  {
    sql: "SELECT COUNT(*) FROM bugs WHERE status = 'fixed' AND author = 'soundarya';",
    result: '→ campaign resend timestamp bug, sender identity, more',
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
        setTimeout(() => setShowResult(true), 200)
      }
    }, 28)

    return () => clearInterval(typeInterval)
  }, [queryIndex])

  useEffect(() => {
    if (!showResult) return
    const next = setTimeout(() => {
      setQueryIndex((prev) => (prev + 1) % queries.length)
    }, 2600)
    return () => clearTimeout(next)
  }, [showResult])

  return (
    <div className="card w-full max-w-md overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F2A65A]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4FD1C5]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
        <span className="field-label ml-2">soundarya_db=#</span>
      </div>
      <div className="min-h-[140px] px-4 py-4 font-mono text-[13px] leading-relaxed">
        <div className="text-text">
          <span className="text-teal">{'>'} </span>
          {typedSql}
          {!showResult && <span className="caret text-teal">▍</span>}
        </div>
        {showResult && (
          <div className="mt-2 text-muted fade-up">{queries[queryIndex].result}</div>
        )}
      </div>
    </div>
  )
}
