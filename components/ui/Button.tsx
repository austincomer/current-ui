import * as React from 'react'
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-md hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline:
          'border border-input shadow-none hover:bg-accent hover:text-accent-foreground',
        ghost: 'shadow-none hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 shadow-none hover:underline',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-sm',
        pill: 'rounded-full',
      },
      size: {
        default: 'px-5 py-2.5 text-sm',
        xs: 'px-3 py-1 text-xs font-semibold',
        sm: 'px-3 py-2 text-sm',
        lg: 'px-5 py-3 text-base',
        xl: 'px-7 py-3 text-lg',
        icon: 'h-8 w-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'square',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean
}

const Button = ({ variant, shape, size, className, ...props }: ButtonProps) => (
  <button
    className={cn(buttonVariants({ variant, size, shape, className }))}
    {...props}
  />
)

export { Button, buttonVariants }
