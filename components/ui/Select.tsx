'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronDown, Check } from 'lucide-react'

import { cn } from '@/lib/utils'

const Select = SelectPrimitive.Root

const SelectValue = SelectPrimitive.Value

const selectTriggerVariants = cva(
  'flex w-full items-center justify-between gap-3 rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-background data-[placeholder]:text-muted-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'border-none shadow-none hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  hasIcon?: boolean | undefined
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, variant, hasIcon, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ variant }), className)}
    {...props}
  >
    {children}
    {hasIcon && (
      <SelectPrimitive.Icon asChild>
        <ChevronDown strokeWidth='1.5' className='h-5 w-5 opacity-75' />
      </SelectPrimitive.Icon>
    )}
  </SelectPrimitive.Trigger>
))

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position='popper'
      {...props}
    >
      <SelectPrimitive.Viewport className='h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] p-1'>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-xs font-semibold', className)}
    {...props}
  >
    {children}
  </SelectPrimitive.Label>
))

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    hasIndicator?: boolean | undefined
  }
>(({ className, children, hasIndicator, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center gap-5 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[state=checked]:font-bold data-[disabled]:opacity-50',
        hasIndicator && 'data-[state=checked]:font-normal',
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      {hasIndicator && (
        <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
          <SelectPrimitive.ItemIndicator>
            <Check className='h-4 w-4' />
          </SelectPrimitive.ItemIndicator>
        </span>
      )}
    </SelectPrimitive.Item>
  )
})

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Group ref={ref} className={cn('py-1', className)} {...props}>
    {children}
  </SelectPrimitive.Group>
))

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('my-1 h-px bg-muted', className)}
    {...props}
  />
))

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
