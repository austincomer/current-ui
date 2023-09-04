'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const tabsTriggerVariants = cva(
  'inline-flex items-start justify-center whitespace-nowrap text-sm font-medium text-muted-foreground ring-offset-background',
  {
    variants: {
      variant: {
        underline:
          'px-5 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:text-foreground',
        button:
          'my-2 ml-2 rounded-md px-4 py-2 data-[state=active]:bg-muted data-[state=active]:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  }
)

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Root
      ref={ref}
      className={cn('bg-primary-foreground', className)}
      {...props}
    />
  )
})

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.List ref={ref} className={cn('border-b border-b-border', className)} {...props} />
  )
})

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ variant, className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants({ variant, className }))}
      {...props}
    />
  )
})

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn('h-fit', className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  )
})

export { Tabs, TabsList, TabsTrigger, TabsContent }
