import React, { ReactNode } from 'react'

type FlexGroupProps = {
  children: React.ReactNode
}

export default function FlexGroup({ children }: FlexGroupProps) {
  return <div className='flex flex-col gap-5'>{children}</div>
}
