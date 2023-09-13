'use client'

import { useEffect, useState } from 'react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import CodeBlock from './CodeBlock'
import { Button } from './ui/Button'

type ExampleComponentProps = {
  variantName: string
  variantProps: string[]
}

export default function ExampleComponent({
  variantName,
  variantProps,
}: ExampleComponentProps) {
  const [activeProp, setActiveProp] = useState('')

  useEffect(() => {
    setActiveProp(variantProps[0])
  }, [])

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
                <button onClick={() => setActiveProp(prop)}>{prop}</button>
              </TabsTrigger>
            )
          })}
        </TabsList>

        <div className='relative overflow-hidden rounded-lg border border-border'>
          <div className='flex items-center justify-center px-5 py-12 text-sm'>
            {variantName === 'variant' ? (
              <Button variant={activeProp}>{activeProp}</Button>
            ) : variantName === 'shape' ? (
              <Button shape={activeProp}>{activeProp}</Button>
            ) : variantName === 'size' ? (
              <Button size={activeProp}>{activeProp}</Button>
            ) : (
              ''
            )}
          </div>

          {variantProps.map((prop) => {
            return (
              <TabsContent value={prop} className='border-border border-t'>
                <CodeBlock
                  code={
                    prop === 'default'
                      ? `<Button>default</Button>`
                      : `<Button ${variantName}='${prop}'>${prop}</Button>`
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
