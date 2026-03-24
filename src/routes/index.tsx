import { Button } from '#/components/ui/Button'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex flex-col items-center gap-6 page-wrap px-4 pb-8 pt-14">
      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-primary text-5xl font-bold'>Gestionar tu taller nunca fue tan fácil</h1>
        <p>Olvidate de las planillas de papel. Administrá órdenes de trabajo y stock desde un solo lugar</p>
      </div>
      <Button variant={'default'} size={'lg'} >Prueba gratis <ArrowRight/></Button>
    </main>
  )
}
