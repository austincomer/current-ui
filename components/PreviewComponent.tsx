import PreviewCodeBlock from './PreviewCodeBlock'
import {
  fetchDemoCode,
  fetchGlobalsCode,
  fetchTailwindCode,
} from '@/lib/fetchComponentSource.'

type PreviewComponentProps = {
  demoComponent: React.ReactNode
  demoCodePath: string
}

export default function PreviewComponent({
  demoComponent,
  demoCodePath,
}: PreviewComponentProps) {
  const demoCode = fetchDemoCode(demoCodePath)
  const demoGlobals = fetchGlobalsCode()
  const demoTailwind = fetchTailwindCode()

  return (
    <div className='rounded-lg border border-border bg-background'>
      <div className='flex min-h-[350px] items-center justify-center px-5 py-10 text-sm'>
        {demoComponent}
      </div>
      <PreviewCodeBlock
        demoCode={demoCode}
        demoGlobals={demoGlobals}
        demoTailwind={demoTailwind}
      />
    </div>
  )
}
