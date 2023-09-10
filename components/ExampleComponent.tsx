'use client'

import { useEffect, useState } from 'react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import CodeBlock from './CodeBlock'
import { Button } from './ui/Button'

export default function ExampleComponent({ variantName, variantProps }) {
  const [activeProp, setActiveProp] = useState('')

  useEffect(() => {
    setActiveProp(variantProps[0])
  }, [])

  return (
    <div className='rounded-lg border border-border bg-background'>
      <div className='flex items-center justify-center px-5 py-10 text-sm'>
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

      <Tabs
        defaultValue={variantProps[0]}
        orientation='vertical'
        className='border-t border-t-border'
      >
        <TabsList aria-label='tabs example'>
          {variantProps.map((prop) => {
            return (
              <TabsTrigger value={prop} asChild>
                <button onClick={() => setActiveProp(prop)}>{prop}</button>
              </TabsTrigger>
            )
          })}
        </TabsList>

        <div className='relative overflow-hidden'>
          {variantProps.map((prop) => {
            return (
              <TabsContent value={prop}>
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
