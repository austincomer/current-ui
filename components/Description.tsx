import { buttonVariants } from './ui/Button'

type DescriptionProps = {
  hasRadixLink: boolean
  link: string
  children: string
}

export default function Description({
  hasRadixLink,
  link,
  children,
}: DescriptionProps) {
  return (
    <div className='flex flex-col items-start gap-3'>
      <span className='text-lg text-muted-foreground'>{children}</span>
      {hasRadixLink && (
        <a
          href={link}
          className={buttonVariants({
            variant: 'outline',
            shape: 'pill',
            size: 'xs',
          })}
          target='_blank'
          rel='noopener noreferrer'
        >
          Radix UI
        </a>
      )}
    </div>
  )
}
