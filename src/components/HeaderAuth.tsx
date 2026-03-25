import { ArrowLeft } from 'lucide-react'
import { Logo } from './custom/Logo'
import { useRouter } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function HeaderAuth() {
  const router = useRouter()

  return (
    <header className="sticky flex items-center top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg h-16">
      <ArrowLeft className='cursor-pointer' onClick={() => router.history.back()} />
      <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer flex items-center gap-x-2">
        <Logo />
      </div>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}