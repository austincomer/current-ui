import type { MDXComponents } from 'mdx/types'
import PreviewComponent from '@/components/PreviewComponent'
import SelectDemo from '@/components/demos/SelectDemo'
import PreviewCodeBlock from '@/components/PreviewCodeBlock'
import ComponentSource from '@/components/ComponentSource'
import CodeBlock from '@/components/CodeBlock'
import BadgeDemo from '@/components/demos/BadgeDemo'
import { Button } from '@/components/ui/Button'
import Description from '@/components/Description'
import ButtonDemo from '@/components/demos/ButtonDemo'
import TabsDemo from '@/components/demos/TabsDemo'
import CollapsibleDemo from '@/components/demos/CollapsibleDemo'
import FlexGroup from '@/components/ui/FlexGroup'
import DownloadUiBUtton from '@/components/DownloadUiButton'
import NextImage from '@/components/NextImage'
import Step from '@/components/Step'
import NextLink from '@/components/NextLink'
import ExternalLink from '@/components/ExternalLink'
import Community from '@/components/Community'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    Wrapper: ({ children }) => (
      <div className='flex flex-col gap-12'>{children}</div>
    ),
    h1: ({ children }) => <h1 className='text-4xl font-bold'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-2xl font-bold'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-xl font-semibold'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-lg font-medium'>{children}</h4>,
    p: ({ children }) => <p className='text-base'>{children}</p>,
    ol: ({ children }) => (
      <ol className='list-inside list-decimal'>{children}</ol>
    ),
    ul: ({ children }) => <ul className='ml-10 list-disc'>{children}</ul>,
    code: ({ children }) => (
      <code className='rounded-sm bg-muted p-1 text-[14px] shadow-sm'>
        {children}
      </code>
    ),
    strong: ({ children }) => (
      <strong className='font-semibold'>{children}</strong>
    ),
    Description,
    PreviewComponent,
    SelectDemo,
    PreviewCodeBlock,
    CodeBlock,
    ComponentSource,
    BadgeDemo,
    ButtonDemo,
    TabsDemo,
    Button,
    CollapsibleDemo,
    FlexGroup,
    DownloadUiBUtton,
    NextImage,
    Step,
    NextLink,
    ExternalLink,
    Community,
    ...components,
  }
}
