import { Link } from '@tanstack/react-router'
import { Button } from '#/components/ui/Button'

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" style={{ minHeight: 'calc(100svh - var(--header-height))' }}>
      <p className="text-8xl font-bold text-(--primary)">404</p>
      <p className="text-xl text-(--primary-soft)">Página no encontrada</p>
      <Link to="/">
        <Button variant="default">Volver al inicio</Button>
      </Link>
    </div>
  )
}