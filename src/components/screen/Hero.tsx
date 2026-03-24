import { Button } from '#/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 px-6 min-h-[calc(100svh-var(--header-height))]'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-primary text-center text-5xl font-bold'>Gestionar tus ventas nunca fue tan fácil</h1>
                <p className='text-center'>Olvidate de las planillas de papel. Administrá órdenes de trabajo y stock desde un solo lugar</p>
            </div>
            <Button variant={'default'} size={'lg'} >Prueba gratis <ArrowRight /></Button>
        </div>
    )
}