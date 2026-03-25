import { NAV_LINKS } from "libs/navigation"

export default function FooterAuth() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex footer-auth items-center justify-center gap-2 border-y border-(--line) px-4 text-(--sea-ink-soft)">
      <p className="m-0 text-sm">
        &copy; {year} GestionRodado. Todos los derechos reservados.
      </p>
    </footer>
  )
}
