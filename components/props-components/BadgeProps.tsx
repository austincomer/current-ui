'use client'

import { useState } from 'react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'
import CodeBlock from '../CodeBlock'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Expand } from 'lucide-react'

type ExampleComponentProps = {
  variantName: 'size' | 'fill' | 'shape' | 'coloring' | 'separation'
  variantProps: string[]
}

type SizeProps = 'default' | 'sm' | 'lg' | 'xl' | null | undefined

type FillProps = 'solid' | 'muted' | null | undefined

type ShapeProps = 'square' | 'rounded' | 'pill' | null | undefined

type ColoringProps =
  | 'default'
  | 'destructive'
  | 'gray'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'red'
  | null
  | undefined

type SeparationProps = 'none' | 'outline' | 'shadow' | null | undefined

export default function BadgeProps({
  variantName,
  variantProps,
}: ExampleComponentProps) {
  const [activeProp, setActiveProp] = useState(variantProps[0])

  const [activeSizeProp, setActiveSizeProp] = useState<SizeProps>('default')
  const [activeFillProp, setActiveFillProp] = useState<FillProps>('solid')
  const [activeShapeProp, setActiveShapeProp] = useState<ShapeProps>('square')
  const [activeColoringProp, setActiveColoringProp] =
    useState<ColoringProps>('default')
  const [activeSeparationProp, setActiveSeparationProp] =
    useState<SeparationProps>('none')

  function handleActiveProp(prop: any) {
    setActiveProp(prop)
    if (variantName === 'size') {
      setActiveSizeProp(prop)
    } else if (variantName === 'fill') {
      setActiveFillProp(prop)
    } else if (variantName === 'shape') {
      setActiveShapeProp(prop)
    } else if (variantName === 'coloring') {
      setActiveColoringProp(prop)
    } else {
      setActiveSeparationProp(prop)
    }
  }

  return (
    <div className=''>
      <Tabs
        defaultValue={variantProps[0]}
        orientation='vertical'
        className='bg-background'
      >
        <TabsList aria-label='tabs example' className='border-none'>
          {variantProps.map((prop) => {
            return (
              <TabsTrigger
                value={prop}
                asChild
                className='text-xs'
                variant='button'
              >
                <button onClick={() => handleActiveProp(prop)}>{prop}</button>
              </TabsTrigger>
            )
          })}
        </TabsList>

        <div className='relative overflow-hidden rounded-lg border border-border'>
          <div className='flex items-center justify-center px-5 py-12 text-sm'>
            {variantName === 'size' ? (
              <Badge size={activeSizeProp}>{activeSizeProp}</Badge>
            ) : variantName === 'fill' ? (
              <Badge coloring='blue' fill={activeFillProp}>
                {activeFillProp}
              </Badge>
            ) : variantName === 'shape' ? (
              <Badge shape={activeShapeProp}>{activeShapeProp}</Badge>
            ) : variantName === 'coloring' ? (
              <Badge coloring={activeColoringProp}>{activeColoringProp}</Badge>
            ) : variantName === 'separation' &&
              activeSeparationProp === 'outline' ? (
              <div className='relative flex w-full justify-center'>
                <Badge className='z-10' separation={activeSeparationProp}>
                  {activeSeparationProp}
                </Badge>
                <span className='absolute -z-0 h-full w-24 bg-gray-500 blur-lg'></span>
              </div>
            ) : variantName === 'separation' ? (
              <Badge separation={activeSeparationProp}>
                {activeSeparationProp}
              </Badge>
            ) : (
              ''
            )}
          </div>

          {variantProps.map((prop) => {
            return (
              <TabsContent value={prop} className='border-t border-border'>
                <CodeBlock
                  code={
                    prop === 'default'
                      ? `<Badge>${activeProp}</Badge>`
                      : `<Badge ${variantName}='${prop}'>${prop}</Badge>`
                  }
                />
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
    </div>
  )
}
