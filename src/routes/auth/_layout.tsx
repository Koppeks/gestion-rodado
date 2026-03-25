import FooterAuth from '#/components/FooterAuth'
import HeaderAuth from '#/components/HeaderAuth'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <>
      <HeaderAuth/>
      <Outlet />
      <FooterAuth/>
    </>
  )
}