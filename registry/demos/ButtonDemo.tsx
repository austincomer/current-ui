'use client'

import { Button } from '../ui/Button'

export default function ButtonDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 lg:flex-row'>
      <Button size='sm' variant='default' shape='rounded'>
        default
      </Button>
      <Button size='sm' variant='secondary' shape='rounded'>
        secondary
      </Button>
      <Button size='sm' variant='outline' shape='rounded'>
        outline
      </Button>
      <Button size='sm' variant='ghost' shape='rounded'>
        ghost
      </Button>
      <Button size='sm' variant='link' shape='rounded'>
        link
      </Button>
      <Button size='sm' variant='destructive' shape='rounded'>
        destructive
      </Button>
    </div>
  )
}
