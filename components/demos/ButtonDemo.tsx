'use client'

import { Button } from '../ui/Button'

export default function ButtonDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 lg:flex-row'>
      <Button size='sm' variant='default' shape='rounded'>
        Button
      </Button>
    </div>
  )
}
