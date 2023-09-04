'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomeLogo() {
  return (
    <Link
      href='/docs/overview/introduction'
      className='flex items-center justify-between gap-1'
    >
      <Image
        className='relative top-[2px]'
        src='/images/logo.png'
        width={25}
        height={25}
        alt='UI Logo'
      />

      <h1 className='font-benzin text-xl font-semibold'>Current UI</h1>
    </Link>
  )
}
