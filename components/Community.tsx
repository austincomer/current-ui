import FlexGroup from './ui/FlexGroup'

export default function Community() {
  return (
    <FlexGroup>
      <h2 className='text-2xl font-bold'>Community</h2>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-1.5'>
          <h3 className='text-xl font-semibold'>Newsletter</h3>
          <p>
            To stay informed about new components, announcements, blog posts,
            and tips related to Current UI, subscribe to our newsletter
          </p>
          <a
            href='https://substack.com/profile/106534477-austin-comer?utm_source=profile-page'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-700 hover:underline dark:text-blue-400'
          >
            Subscribe to our newsletter
          </a>
        </div>

        <div className='flex flex-col gap-1.5'>
          <h3 className='text-xl font-semibold'>Twitter</h3>
          <p>
            If you want to stay up-to-date on the latest Current UI news, follow
            us on Twitter.
          </p>
          <a
            href='https://twitter.com/austinmcomer'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline dark:text-blue-400'
          >
            Follow us on Twitter
          </a>
        </div>

        <div className='flex flex-col gap-1.5'>
          <h3 className='text-xl font-semibold'>GitHub</h3>
          <p>
            If you want to explore the source code for Current UI, check out our
            GitHub repository.
          </p>
          <a
            href='https://github.com/austincomer/current-ui'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline dark:text-blue-400'
          >
            GitHub repo
          </a>
        </div>
      </div>
    </FlexGroup>
  )
}
