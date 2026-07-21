import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl border-t border-border px-6 py-24">
      <Reveal>
        <p className="eyebrow">contact · endpoint</p>
        <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold text-text sm:text-4xl">
          Open to full stack roles — let's talk.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          The fastest way to reach me is email or LinkedIn. I usually reply
          within a day.
        </p>
      </Reveal>

      <Reveal delay={120} className="card mt-8 max-w-xl overflow-hidden">
        <div className="border-b border-border px-4 py-2.5">
          <span className="field-label">terminal</span>
        </div>
        <div className="px-4 py-4 font-mono text-sm leading-relaxed">
          <p className="text-muted">
            <span className="text-teal">$</span> curl -X POST /contact \
          </p>
          <p className="pl-4 text-muted">-d "email=soundarya.p182@gmail.com" \</p>
          <p className="pl-4 text-muted">
            -d "linkedin=linkedin.com/in/soundarya-p-26b683217" \
          </p>
          <p className="pl-4 text-muted">-d "github=github.com/Soundarya331" \</p>
          <p className="pl-4 text-muted">-d "phone=+91-7892132560"</p>
        </div>
      </Reveal>

      <Reveal delay={200} className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:soundarya.p182@gmail.com"
          className="rounded-md bg-teal px-5 py-2.5 font-mono text-sm font-medium text-bg transition hover:bg-teal/90"
        >
          email_me
        </a>
        <a
          href="https://linkedin.com/in/soundarya-p-26b683217"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition hover:border-teal hover:text-teal"
        >
          linkedin →
        </a>
        <a
          href="https://github.com/Soundarya331"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition hover:border-teal hover:text-teal"
        >
          github →
        </a>
      </Reveal>
    </section>
  )
}
