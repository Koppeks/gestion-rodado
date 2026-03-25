import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Route = createFileRoute('/_public')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}