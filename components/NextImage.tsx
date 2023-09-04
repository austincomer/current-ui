import Image from 'next/image'

type NextImageProps = {
  alt: string
  src: string
}

export default function NextImage({ alt, src }: NextImageProps) {
  return (
    <div className='relative h-[500px] w-full'>
      <Image
        src={src}
        alt={alt}
        // width={500}
        // height={500}
        fill={true}
        className='rounded-md bg-gray-100'
      />
    </div>
  )
}
