import { useState } from 'react'
import Reveal from './Reveal'
import { Mail, Phone, MapPin, Copy, Check, Terminal, ExternalLink } from 'lucide-react'

function GithubIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [curlCopied, setCurlCopied] = useState(false)

  const email = 'soundaryap182@gmail.com'
  const linkedin = 'https://linkedin.com/in/soundarya-p-26b683217'
  const github = 'https://github.com/Soundarya331'
  const phone = '+91-7892132560'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyCurl = () => {
    const curlCmd = `curl -X POST https://portfolio-azure-eta-13.vercel.app/api/contact -d '{"name": "Recruiter", "email": "${email}"}'`
    navigator.clipboard.writeText(curlCmd)
    setCurlCopied(true)
    setTimeout(() => setCurlCopied(false), 2000)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl border-t border-border/80 px-6 py-24">
      <Reveal>
        <p className="eyebrow">contact · connection_endpoint</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-text sm:text-4xl">
          Open to Backend & Cloud/DevOps Roles.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Whether you're looking to scale high-concurrency microservices, optimize database performance, or build robust cloud deployments, I'd love to connect.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Terminal Card */}
        <Reveal delay={120} className="card overflow-hidden border-border/80 bg-surface/90 shadow-2xl">
          <div className="flex items-center justify-between border-b border-border/70 bg-surface2 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-muted">bash — contact.sh</span>
            </div>

            <button
              onClick={handleCopyCurl}
              className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-teal transition"
              title="Copy curl command"
            >
              {curlCopied ? <Check className="h-3 w-3 text-teal" /> : <Copy className="h-3 w-3" />}
              <span>{curlCopied ? 'copied!' : 'copy'}</span>
            </button>
          </div>

          <div className="p-5 font-mono text-[13px] leading-relaxed">
            <p className="text-muted">
              <span className="text-teal font-semibold">$</span> curl -X POST /contact \
            </p>
            <p className="pl-4 text-mutedLight">
              -d <span className="text-teal">"engineer=Soundarya P"</span> \
            </p>
            <p className="pl-4 text-mutedLight">
              -d <span className="text-teal">"email={email}"</span> \
            </p>
            <p className="pl-4 text-mutedLight">
              -d <span className="text-teal">"phone={phone}"</span> \
            </p>
            <p className="pl-4 text-mutedLight">
              -d <span className="text-teal">"location=Bengaluru, India"</span> \
            </p>
            <p className="pl-4 text-mutedLight">
              -d <span className="text-teal">"status=Open for Software Engineer (Backend/Cloud)"</span>
            </p>
            <div className="mt-4 pt-4 border-t border-border/40 text-xs text-muted flex items-center justify-between">
              <span>Response: HTTP 200 OK</span>
              <span className="text-emerald-400">● 100% Availability</span>
            </div>
          </div>
        </Reveal>

        {/* Contact Quick Channels Card */}
        <Reveal delay={180} className="card p-6 border-border/80 bg-surface/75 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-text">Direct Channels</h3>
            <p className="mt-1 text-xs text-muted">Feel free to reach out directly via email or LinkedIn.</p>

            <div className="mt-5 space-y-3">
              {/* Email row */}
              <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface2/60 p-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-teal" />
                  <span className="font-mono text-xs text-text">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 rounded bg-surface px-2.5 py-1 font-mono text-[11px] text-muted hover:text-teal hover:border-teal transition border border-border"
                >
                  {copied ? <Check className="h-3 w-3 text-teal" /> : <Copy className="h-3 w-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone row */}
              <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface2/60 p-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan" />
                  <span className="font-mono text-xs text-text">{phone}</span>
                </div>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="rounded bg-surface px-2.5 py-1 font-mono text-[11px] text-muted hover:text-cyan transition border border-border"
                >
                  Call
                </a>
              </div>

              {/* Location row */}
              <div className="flex items-center gap-3 rounded-md border border-border/60 bg-surface2/60 p-3 font-mono text-xs text-mutedLight">
                <MapPin className="h-4 w-4 text-amber" />
                <span>Bengaluru, Karnataka, India (Open to Relocation / Remote)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-border/60">
            <a
              href={`mailto:${email}`}
              className="flex-1 text-center rounded-md bg-teal py-2.5 font-mono text-xs font-semibold text-bg hover:bg-teal/90 transition shadow-glow-teal"
            >
              Send an Email →
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-xs text-text hover:border-teal hover:text-teal transition"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-xs text-text hover:border-teal hover:text-teal transition"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Footer bar */}
      <div className="mt-20 border-t border-border/70 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
        <div>
          <span>© {new Date().getFullYear()} Soundarya P. Crafted with React, Vite & Tailwind.</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#top" className="hover:text-teal transition">back_to_top ↑</a>
          <a href="/resume.pdf" download="Soundarya_P_Resume.pdf" className="hover:text-teal transition">resume.pdf</a>
          <a href={github} target="_blank" rel="noreferrer" className="hover:text-teal transition">github</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-teal transition">linkedin</a>
        </div>
      </div>
    </section>
  )
}
