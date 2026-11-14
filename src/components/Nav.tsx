import { useEffect, useState } from 'react'
import { Download, FileText, Check, Copy } from 'lucide-react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('soundaryap182@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-4">
          <a href="#top" className="font-mono text-base font-semibold text-text sm:text-lg">
            soundarya<span className="text-teal">.dev</span>
          </a>
          <span className="hidden items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-2.5 py-0.5 font-mono text-[11px] text-teal sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
            </span>
            Open to roles
          </span>
        </div>

        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-xs transition-colors duration-150 ${
                  active === link.href ? 'font-medium text-teal' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            onClick={copyEmail}
            title="Copy email to clipboard"
            className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition hover:border-teal/40 hover:text-text"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-teal" />
                <span className="text-teal">copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>email</span>
              </>
            )}
          </button>

          <a
            href="/resume.pdf"
            download="Soundarya_P_Resume.pdf"
            className="flex items-center gap-1.5 rounded-md bg-teal px-3.5 py-1.5 font-mono text-xs font-semibold text-bg transition hover:bg-teal/90"
          >
            <Download className="h-3.5 w-3.5" />
            <span>resume.pdf</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-border sm:hidden"
        >
          <span
            className={`block h-[1.5px] w-5 bg-text transition-transform duration-200 ${
              menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-text transition-transform duration-200 ${
              menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-surface2/95 px-6 py-4 backdrop-blur-lg sm:hidden">
          <div className="mb-3 flex items-center justify-between pb-3 border-b border-border">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-2.5 py-0.5 font-mono text-[11px] text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse"></span>
              Open to Full Stack Roles
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1.5 font-mono text-sm transition ${
                    active === link.href ? 'text-teal' : 'text-muted hover:text-teal'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3 pt-3 border-t border-border">
            <a
              href="/resume.pdf"
              download="Soundarya_P_Resume.pdf"
              className="flex-1 text-center rounded-md bg-teal py-2 font-mono text-xs font-semibold text-bg"
            >
              Download Resume
            </a>
            <button
              onClick={copyEmail}
              className="rounded-md border border-border px-3 py-2 font-mono text-xs text-text"
            >
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>
      )}

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ transform: `scaleX(${progress})`, width: '100%' }}
        />
      </div>
    </header>
  )
}
