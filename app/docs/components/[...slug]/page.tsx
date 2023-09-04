import type { Metadata } from 'next'
import { getMdxBySlug } from '@/lib/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMDXComponents } from '@/app/mdx-components'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

const components = useMDXComponents({})

async function getDocContent({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || ''
  const doc = await getMdxBySlug('components', slug)
  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocContent({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.frontmatter.metaTitle,
    description: doc.frontmatter.metaDescription,
    openGraph: {
      title: doc.frontmatter.metaTitle,
      description: doc.frontmatter.metaDescription,
      url: `http://localhost:3001/docs/components/${doc.frontmatter.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.frontmatter.metaTitle,
      description: doc.frontmatter.metaDescription,
      creator: '@austinmcomer',
    },
  }
}

export default async function ComponentsDoc({ params }: DocPageProps) {
  const doc = await getDocContent({ params })
  const Component = getMDXComponent(doc.code)

  return (
      <div className='flex justify-center lg:ml-[250px] min-[1395px]:ml-[0px]'>
        <div className='mb-[100px] mt-[70px] h-full w-full max-w-4xl px-5 py-7 lg:mt-[100px]'>
          <div className='flex flex-col justify-center gap-14'>
            <Component components={components as any} />
          </div>
        </div>
      </div>
  )
}
