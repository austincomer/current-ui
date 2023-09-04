'use client'

import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/Button'

export default function DownloadUiBUtton() {
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
    >
      Download Components
    </button>
  )
}
