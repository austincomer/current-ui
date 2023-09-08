import Image from 'next/image'

type NextImageProps = {
  alt: string
  src: string
}

export default function NextImage({ alt, src }: NextImageProps) {
  return (
    <div className=' w-full h-full'>
      <Image
        src={src}
        alt={alt}
        width={700}
        height={700}
        // fill={true}
        className='rounded-md object-contain w-full'
      />
    </div>
  )
}
