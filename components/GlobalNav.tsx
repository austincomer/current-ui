'use client'

import Sidebar from './Sidebar'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { Github, Twitter, Menu, X } from 'lucide-react'

type GlobalNavProps = {
  mobileNavOpen: boolean
  setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GlobalNav({
  mobileNavOpen,
  setMobileNavOpen,
}: GlobalNavProps) {
  return (
    <div className='fixed top-0 z-10 flex w-full flex-col lg:bottom-0 lg:w-72 '>
      <header className='fixed left-0 top-0 z-30 flex w-full items-center justify-between border-b border-border bg-background px-6 py-5'>
        <Logo />
        <div className='flex items-center justify-center gap-4'>
          <Twitter strokeWidth={1.5} size={18} />
          <Github strokeWidth={1.5} size={18} />
          <ThemeToggle />
          <button
            className='p-1 hover:rounded-sm hover:bg-muted lg:hidden'
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? (
              <X strokeWidth={1.5} size={18} />
            ) : (
              <Menu strokeWidth={1.5} size={18} />
            )}
          </button>
        </div>
      </header>

      <Sidebar mobileNavOpen={mobileNavOpen} />
    </div>
  )
}
