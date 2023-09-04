'use client'

import { Badge } from '../ui/Badge'

export default function BadgeDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <Badge
        className=''
        separation='shadow'
        size='sm'
        coloring='default'
        shape='square'
        fill='muted'
      >
        Label
      </Badge>
      <Badge
        className=''
        separation='shadow'
        size='sm'
        coloring='gray'
        shape='square'
        fill='muted'
      >
        Label
      </Badge>
      <Badge
        className=''
        separation='shadow'
        size='default'
        coloring='yellow'
        shape='rounded'
      >
        Label
      </Badge>
      <Badge className='' shape='pill' coloring='green'>
        Label
      </Badge>
      <Badge
        className=''
        separation='shadow'
        size='lg'
        coloring='blue'
        shape='rounded'
      >
        Label
      </Badge>
      <Badge
        className=''
        separation='shadow'
        size='lg'
        coloring='purple'
        shape='pill'
      >
        Label
      </Badge>
      <Badge
        className=''
        separation='shadow'
        size='xl'
        coloring='red'
        shape='pill'
      >
        Label
      </Badge>
      <Badge
        className=''
        separation='shadow'
        size='xl'
        coloring='destructive'
        shape='pill'
      >
        Label
      </Badge>
    </div>
  )
}
