import DownloadUiBUttonClient from './DownloadUIButtonClient'
// import { fetchUIFolderData } from '@/lib/fetchUIFolderData'

export default function DownloadUiBUtton() {
  // const data = fetchUIFolderData()
  const data = 'hello'

  return (
    <DownloadUiBUttonClient fileData={data}>
      Download Components
    </DownloadUiBUttonClient>
  )
}
