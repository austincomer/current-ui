interface StepProps {
  index: number
  children: string
}

export default function Step({ index, children }: StepProps) {
  return (
    <div className='flex items-center gap-2.5'>
      <div className='flex items-center justify-center rounded-full bg-card-foreground text-xs lg:text-sm font-semibold text-card h-6 w-6'>
        {index}
      </div>
      <h3 className='font-semibold text-xl'>{children}</h3>
    </div>
  )
}
