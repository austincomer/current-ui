'use client'

import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'app/Prism.css'
import 'prismjs/components/prism-typescript'
import CopyToClipboard from './ui/CopyToClipboard'

interface CodeBlockProps {
  code: string
}

export default function CodeBlock({ code }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className='relative'>
      <div className='scrollbar-light max-h-[500px] overflow-y-auto rounded-lg bg-primary-foreground'>
        <pre>
          <code className='language-typescript'>{code}</code>
        </pre>
        <CopyToClipboard value={code} coloring='dark' />
      </div>
    </div>
  )
}
