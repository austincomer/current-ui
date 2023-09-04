'use client'

import { useState, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Button } from './Button'
import { Copy, Check } from 'lucide-react'

import { cn } from '@/lib/utils'

const copyToClipboardVariants = cva('absolute px-1.5 py-3 backdrop-blur-lg rounded-sm', {
  variants: {
    placement: {
      topRight: 'right-0 top-0 m-2',
      topLeft: 'left-0 top-0 m-2',
      centerRight:
        'bottom-1/2 right-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
      centerLeft: 'bottom-1/2 left-0 top-1/2 -translate-y-1/2 translate-x-1/2',
    },
    coloring: {
      light: 'text-primary-foreground hover:bg-muted-foreground hover:text-white',
      dark: 'text-primary hover:bg-muted',
    },
  },
  defaultVariants: {
    placement: 'topRight',
    coloring: 'light',
  },
})

interface CopyToClipboardProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof copyToClipboardVariants> {
  value: string
}

const CopyToClipboard = ({
  value,
  placement,
  coloring,
  className,
  ...props
}: CopyToClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }, [isCopied])

  function handleClick() {
    // console.log('clicked')
    navigator.clipboard.writeText(value)
    setIsCopied(true)
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className={cn(
        copyToClipboardVariants({ placement, coloring }),
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {isCopied ? (
        <Check strokeWidth={1.5} size={12} />
      ) : (
        <Copy strokeWidth={1.5} size={12} />
      )}
    </Button>
  )
}

export default CopyToClipboard
