'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = React.useTransition()

  return (
    <button
      className='p-1 hover:rounded-sm hover:bg-muted'
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        })
      }}
    >
      {theme === 'dark' ? (
        <Moon strokeWidth={1.5} size={18} className='text-foreground' />
      ) : (
        <Sun strokeWidth={1.5} size={18} />
      )}
    </button>
  )
}
