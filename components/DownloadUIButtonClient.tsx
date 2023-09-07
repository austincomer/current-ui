'use client'

import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/Button'
import { generateZip } from '@/lib/generateZip'

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
      onClick={() => generateZip(fileData)}
    >
      {children}
    </button>
  )
}
