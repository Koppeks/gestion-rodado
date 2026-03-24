import { Hero } from '#/components/screen/Hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap">
      <Hero/>
    </main>
  )
}
