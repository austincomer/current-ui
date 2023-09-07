'use client'

import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/Button'
import { createZip } from '@/lib/createZip'

type DownloadUiBUttonClientProps = {
  fileData: string
  children: string
}

export default function DownloadUiBUttonClient({
  fileData,
  children,
}: DownloadUiBUttonClientProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant: 'default',
          size: 'sm',
          shape: 'rounded',
        }),
        'w-fit'
      )}
      onClick={() => createZip(fileData)}
    >
      {children}
    </button>
  )
}
