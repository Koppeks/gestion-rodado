import { FormLogin } from '#/components/custom/FormLogin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout/login')({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100svh-(var(--header-height)+var(--footer-height)))]'>
      <FormLogin/>
    </div>
  )
}
