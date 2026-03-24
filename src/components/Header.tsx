import { MenuIcon, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import { NAV_LINKS } from 'libs/navigation'
import { Button } from './ui/Button'
import { Logo } from './custom/Logo'

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  useEffect(() => {
    const sections = NAV_LINKS.filter((l) => l.sectionId)
      .map((l) => document.getElementById(l.sectionId))
      .filter(Boolean) as HTMLElement[]

    const visibleSections = new Set<string>()

    const pickActive = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
      if (nearBottom) {
        const last = sections[sections.length - 1]
        setActiveSection(last.id)
        return
      }
      const topmost = sections.find((s) => visibleSections.has(s.id))
      setActiveSection(topmost?.id ?? null)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target.id)
          else visibleSections.delete(entry.target.id)
        })
        pickActive()
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    window.addEventListener('scroll', pickActive)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', pickActive)
    }
  }, [])

  return (
    <header className="sticky flex top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center gap-x-2 shrink-0">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-x-4 text-sm font-semibold absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.filter((l) => l.sectionId).map((link) => (
            <a
              key={link.sectionId}
              href={link.href}
              className={`nav-link ${activeSection === link.sectionId ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Button className='hidden md:flex' variant="ghost">Ingresar</Button>
          <Button className='hidden md:flex' variant="default">Crear Cuenta</Button>
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-(--line) py-3 flex flex-col gap-1 text-sm font-semibold">
          {NAV_LINKS.filter((l) => l.sectionId).map((link) => (
            <a
              key={link.sectionId}
              href={link.href}
              className={`nav-link px-1 py-2 ${activeSection === link.sectionId ? 'is-active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="default">Crear Cuenta</Button>
          <Button variant="ghost">Ingresar</Button>
        </div>
      )}
    </header>
  )
}