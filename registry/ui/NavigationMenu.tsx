'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import React from 'react'

const NavRoot = ({ children }: { children: React.ReactNode }) => {
  return <nav className='flex flex-col'>{children}</nav>
}

const NavList = ({ children }: { children: React.ReactNode }) => {
  return <ul className='flex flex-col gap-10'>{children}</ul>
}

const NavGroup = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => {
  return (
    <li className='flex list-none flex-col '>
      <h4 className='mb-1 pl-4 text-sm font-semibold'>{label}</h4>
      <ul className='flex flex-col gap-0.5'>{children}</ul>
    </li>
  )
}

const NavItem = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  const pathname = usePathname()

  return (
    <li className='flex list-none items-center'>
      <Link
        href={href}
        className={cn(
          'h-full w-full rounded-full py-2 pl-4 text-[.8rem] hover:bg-muted/50',
          href === pathname &&
            'bg-violet-100 font-medium hover:bg-violet-100 dark:bg-muted'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export { NavRoot, NavList, NavGroup, NavItem }
