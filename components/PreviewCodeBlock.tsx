'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import CodeBlock from './CodeBlock'
import { Button } from './ui/Button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './ui/Collapsible'

type PreviewCodeBlockProps = {
  demoCode: string
  demoGlobals: string
  demoTailwind: string
}

export default function PreviewCodeBlock({
  demoCode,
  demoGlobals,
  demoTailwind,
}: PreviewCodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  function expandCode() {
    // console.log(isExpanded)
    setIsExpanded((prevState) => !prevState)
    if (isExpanded) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <Tabs
        defaultValue='tab1'
        orientation='vertical'
        className='border-t border-t-border'
      >
        <TabsList aria-label='tabs example'>
          <TabsTrigger value='tab1'>index.tsx</TabsTrigger>
          <TabsTrigger value='tab2'>global.css</TabsTrigger>
          <TabsTrigger value='tab3'>tailwind.config.js</TabsTrigger>
        </TabsList>

        <div className='relative overflow-hidden'>
          <CollapsibleContent
            forceMount
            className={cn('overflow-hidden', !isOpened && 'max-h-36')}
          >
            <TabsContent value='tab1'>
              <CodeBlock code={demoCode} />
            </TabsContent>

            <TabsContent value='tab2'>
              <CodeBlock code={demoGlobals} />
            </TabsContent>

            <TabsContent value='tab3'>
              <CodeBlock code={demoTailwind} />
            </TabsContent>
          </CollapsibleContent>
          <div
            className={cn(
              'absolute flex items-end justify-center bg-gradient-to-b from-primary-foreground/50 to-primary-foreground py-3',
              isOpened
                ? 'inset-x-0 bottom-0 h-12 from-0%'
                : 'bottom-0 left-0 right-0'
            )}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant='default'
                size='xs'
                shape='rounded'
                onClick={expandCode}
              >
                {isOpened ? 'Collapse' : 'Expand'}
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
      </Tabs>
    </Collapsible>
  )
}
