import { NAV_LINKS } from "libs/navigation"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 flex flex-col gap-4 border-y border-(--line) px-4 pb-14 pt-10 text-(--sea-ink-soft)">
      <div className="page-wrap flex justify-start gap-4">
        <nav>
          {NAV_LINKS.filter((l) => l.sectionId).map((link) => (
            <a
              key={link.sectionId}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} GestionRodado. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
