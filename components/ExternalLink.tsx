import { ExternalLink as ExternalLinkIcon } from 'lucide-react'

interface ExternalLink {
  href: string
  title: string
}

export default function ExternalLink({ href, title }: ExternalLink) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400'
    >
      {title}
      <ExternalLinkIcon size={13} strokeWidth={2} />
    </a>
  )
}
