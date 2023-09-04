import { fetchComponentCode } from '@/lib/fetchComponentSource.'
import CodeBlock from './CodeBlock'

export default function ComponentSource({ code }: { code: string }) {
  const compCode = fetchComponentCode(code)
  return (
    <div>
      <CodeBlock code={compCode} />
    </div>
  )
}
