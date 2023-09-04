'use client'

import { use, useState } from 'react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../ui/Collapsible'
import { ChevronRight, ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

export default function CollapsibleDemo() {
  return (
    <div className='flex w-[400px] flex-col gap-3 rounded-lg border border-border bg-background p-5'>
      <h3 className='text-base font-semibold'>Create Team</h3>
      <div className='flex flex-col gap-5'>
        <TeamName />
        <Plans />
        <CollapsibleComponent />
      </div>
    </div>
  )
}

export function TeamName() {
  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor='team-name' className=''>
        Team Name
      </label>
      <input
        className='rounded-md border border-border bg-background px-2 py-1.5 placeholder:text-muted-foreground'
        type='text'
        id='team-name'
        name='team-name'
        placeholder='Current UI'
      />
    </div>
  )
}

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState('trial')

  return (
    <div className='flex justify-between gap-6'>
      <button
        className={cn(
          'w-full rounded-lg border border-border p-3 text-left',
          selectedPlan === 'trial' &&
            'border-blue-500 bg-blue-50 dark:border-muted-foreground dark:bg-muted'
        )}
        onClick={() => setSelectedPlan('trial')}
      >
        <h4 className='font-semibold'>Pro Trial</h4>
        <p className='text-muted-foreground'>Free for two weeks</p>
      </button>
      <button
        className={cn(
          'w-full rounded-lg border border-border p-3 text-left',
          selectedPlan === 'pro' &&
            'border-blue-500 bg-blue-50 dark:border-muted-foreground dark:bg-muted'
        )}
        onClick={() => setSelectedPlan('pro')}
      >
        <h4 className='font-semibold'>Pro</h4>
        <p className='text-neutral-500'>Get started now</p>
      </button>
    </div>
  )
}

export function CollapsibleComponent() {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <CollapsibleTrigger>
        <div className='mb-1 flex items-center gap-1'>
          {isOpened ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <h4 className='font-semibold '>
            Continuing will start a 14-day Pro plan trial
          </h4>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent
        forceMount
        className={cn('hidden', isOpened && 'inline-block')}
      >
        <div className='ml-[23px] flex flex-col gap-1.5'>
          <p className='text-muted-foreground'>
            Creating a new team will not affect your Personal Account or any of
            its projects
          </p>
          <p className='font-semibold text-blue-600 dark:text-blue-400'>
            Learn more
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
