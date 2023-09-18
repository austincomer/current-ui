'use client'

import { Badge } from '../ui/Badge'

export default function BadgeDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <Badge shape='pill'>Label</Badge>
      <Badge coloring='gray' shape='pill'>
        Badge
      </Badge>
      <Badge coloring='yellow' shape='pill'>
        Badge
      </Badge>
      <Badge coloring='green' shape='pill'>
        Badge
      </Badge>
      <Badge coloring='blue' shape='pill'>
        Badge
      </Badge>
      <Badge coloring='purple' shape='pill'>
        Badge
      </Badge>
      <Badge coloring='red' shape='pill'>
        Badge
      </Badge>
      <Badge coloring='destructive' shape='pill'>
        Badge
      </Badge>
    </div>
  )
}
