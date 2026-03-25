import { FormSignup } from '#/components/custom/FormSignup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className='flex flex-col items-center justify-center min-h-[calc(100svh-(var(--header-height)+var(--footer-height)))]'>
        <FormSignup/>
      </div>
    )   
}
