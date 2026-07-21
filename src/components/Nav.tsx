import { useEffect, useState } from 'react'

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
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-base font-medium text-text sm:text-lg">
          soundarya<span className="text-teal">.</span>dev
        </a>
        <ul className="hidden gap-7 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-xs transition ${
                  active === link.href ? 'text-teal' : 'text-muted hover:text-teal'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
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
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 font-mono text-sm transition ${
                  active === link.href ? 'text-teal' : 'text-muted hover:text-teal'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
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
