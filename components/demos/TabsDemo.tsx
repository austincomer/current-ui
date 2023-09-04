import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'

export default function TabsDemo() {
  return (
    <div>
      <Tabs defaultValue='description' className='rounded-lg py-1 max-w-[500px] lg:max-w-[1000px] lg:w-[500px]'>
        <TabsList aria-label='tabs example'>
          <TabsTrigger variant='underline' value='description'>
            Description
          </TabsTrigger>
          <TabsTrigger variant='underline' value='specifications'>
            Specifications
          </TabsTrigger>
          <TabsTrigger variant='underline' value='reviews'>
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value='description'>
          <Description />
        </TabsContent>

        <TabsContent value='specifications'>
          <Specifications />
        </TabsContent>

        <TabsContent value='reviews'>
          <Reviews />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export const Description = () => {
  return (
    <div className='flex flex-col gap-3 p-7'>
      <h2 className='text-base font-semibold'>Canon R6 Mark II Overview</h2>
      <p>
        Matching strong photo performance with apt video capabilities, the Canon
        EOS R6 Mark II is a versatile mirrorless body for the multimedia
        creator. An updated 24.2MP CMOS sensor pairs with updated processing for
        more improved AF, impressive 4K 60p 10-bit video, and faster overall
        performance. Also, the camera body has been updated for more intuitive
        handling, including a redesigned top plate for easier access to
        different shooting modes.
      </p>
      <h3 className='font-semibold'>
        24.2MP Full-Frame Sensor and DIGIC X Processing
      </h3>
      <p>
        Hitting a sweet-spot in terms of resolution, the R6 Mark II incorporates
        a new 24.2MP CMOS sensor that's versatile for both photo and video
        applications, performs well in low-light conditions, and yields striking
        and accurate colors.
      </p>
    </div>
  )
}

export const Specifications = () => {
  return (
    <div className='flex flex-col gap-3.5 p-7'>
      <h2 className='pb-2 text-base font-semibold'>Key Specs</h2>
      <div className='flex justify-between border-b py-1 gap-5'>
        <p className='font-semibold'>Lens Mount</p>
        <p className='text-right'>Canon RF</p>
      </div>
      <div className='flex justify-between border-b py-1 gap-5'>
        <p className='font-semibold'>Sensor Resolution</p>
        <p className='text-right'>Actual: 25.6 Megapixel</p>
      </div>
      <div className='flex justify-between border-b py-1 gap-5'>
        <p className='font-semibold'>Image Sensor</p>
        <p className='text-right'>35.9 x 23.9 mm Full-Frame CMOS</p>
      </div>
      <div className='flex justify-between border-b py-1 gap-5'>
        <p className='font-semibold'>Image Stabilization</p>
        <p className='text-right'>Sensor-Shift, 5-Axis</p>
      </div>
      <div className='flex justify-between border-b py-1 gap-5'>
        <p className='font-semibold'>ISO Sensitivity</p>
        <p className='text-right'>100 to 102,400 in Manual, Auto Mode</p>
      </div>
      <div className='flex justify-between border-b py-1 gap-5'>
        <p className='font-semibold'>External Recording Modes</p>
        <p className='text-right'>6144 x 4032 up to 59.94 fps</p>
      </div>
    </div>
  )
}

export const Reviews = () => {
  return (
    <div className='flex flex-col gap-3.5 p-7'>
      <h3 className='text-base font-bold'>Reviews (3)</h3>
      <div className='flex flex-col justify-between gap-2 border-b py-2'>
        <h4 className='font-semibold'>Excellent camera</h4>
        <div className='flex gap-3.5 text-xs'>
          <p className='font-semibold'>5.0</p>
          <span className='text-neutral-400'>|</span>
          <p className='text-neutral-500'>8/16/2023</p>
          <span className='text-neutral-400'>|</span>
          <p className='text-neutral-500'>Scott</p>
        </div>
        <p className='text-xs'>
          The R6 M2 is a worthy upgrade to my EOS R. The auto focus performance
          is a huge improvement -- the eye detect AF is superb.
        </p>
      </div>
      <div className='flex flex-col justify-between gap-2 border-b py-2'>
        <h4 className='font-semibold'>So far, so good.</h4>
        <div className='flex gap-3.5 text-xs'>
          <p className='font-semibold'>4.0</p>
          <span className='text-neutral-400'>|</span>
          <p className='text-neutral-500'>8/14/2023</p>
          <span className='text-neutral-400'>|</span>
          <p className='text-neutral-500'>Robert</p>
        </div>
        <p className='text-xs'>
          So far I am happy with this solution as a lower-cost back-up for my R5
          since the image quality is on par, I can configure it the same and it
          uses the same batteries.
        </p>
      </div>
      <div className='flex flex-col justify-between gap-2 border-b py-2'>
        <h4 className='font-semibold'>Great Camera That Does It All</h4>
        <div className='flex gap-3.5 text-xs'>
          <p className='font-semibold'>5.0</p>
          <span className='text-neutral-400'>|</span>
          <p className='text-neutral-500'>8/14/2023</p>
          <span className='text-neutral-400'>|</span>
          <p className='text-neutral-500'>Bob</p>
        </div>
        <p className='text-xs'>
          Super upgrade from my EOS 5D III. Haven't used a lot yet but so far I
          am very happy with this camera. Pleasantly surprised how bright the
          viewfinder looks.
        </p>
      </div>
    </div>
  )
}
