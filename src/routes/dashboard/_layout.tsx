import HeaderAuth from '#/components/HeaderAuth'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <>
      <HeaderAuth/>
      <Outlet />
    </>
  )
}