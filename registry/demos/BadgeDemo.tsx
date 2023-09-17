'use client'

import { Badge } from '../ui/Badge'

export default function BadgeDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <Badge shape='pill'>Label</Badge>
      <Badge coloring='gray' shape='pill'>
        Label
      </Badge>
      <Badge coloring='yellow' shape='pill'>
        Label
      </Badge>
      <Badge coloring='green' shape='pill'>
        Label
      </Badge>
      <Badge coloring='blue' shape='pill'>
        Label
      </Badge>
      <Badge coloring='purple' shape='pill'>
        Label
      </Badge>
      <Badge coloring='red' shape='pill'>
        Label
      </Badge>
      <Badge coloring='destructive' shape='pill'>
        Label
      </Badge>
    </div>
  )
}
