import Link from 'next/link'

type NextLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NextLink({ href, children }: NextLinkProps) {
  return (
    <span>
      <Link
        href={href}
        className='text-blue-600 hover:underline dark:text-blue-400'
      >
        {children}
      </Link>
    </span>
  )
}
