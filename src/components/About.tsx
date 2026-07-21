import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-border px-6 py-20">
      <Reveal>
        <p className="eyebrow">about · varchar(500)</p>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal delay={80}>
        <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
          Currently shipping
          <br />
          production CRM software.
        </h2>
        </Reveal>
        <Reveal delay={160} className="space-y-4 text-base leading-relaxed text-muted">
          <p>
            I'm a Full Stack Developer at{' '}
            <span className="text-text">GoodWorkLabs Services Pvt. Ltd.</span>{' '}
            in Bengaluru, where my primary project is{' '}
            <span className="text-text">Kriatix CRM</span>, a live
            multi-tenant SaaS platform. My day-to-day sits across the whole
            stack: NestJS services and PostgreSQL schemas on the backend,
            React and Redux interfaces on the front, with BullMQ handling
            background jobs and Redis backing the queues.
          </p>
          <p>
            Recent work has ranged from fixing a stale-timestamp bug in a
            campaign resend flow, to hardening email deliverability
            (sender identity, unsubscribe headers), to building
            cross-organization user registration with alias tracking. I care
            about the kind of bugs that only show up in production — the
            ones with real users and real data behind them.
          </p>
          <p>
            Before this, I built a Deno-based edge functions project
            (Netskill LMS) and interned at JSpiders, where I built a Student
            Management System in Spring Boot. I hold a B.E. in Computer
            Science &amp; Engineering from AIEMS College of Engineering,
            Bangalore.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
