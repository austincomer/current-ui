interface StepProps {
  index: number
  children: string
}

export default function Step({ index, children }: StepProps) {
  return (
    <div className='flex items-center gap-2.5'>
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-card-foreground text-sm font-semibold text-card'>
        {index}
      </div>
      <h3 className='text-xl font-semibold'>{children}</h3>
    </div>
  )
}
