import DownloadUiBUttonClient from './DownloadUIButtonClient'
import { fetchUIFolderData } from '@/lib/fetchUIFolderData'

export default async function DownloadUiBUtton() {
  const data = await fetchUIFolderData()

  return (
    <DownloadUiBUttonClient fileData={data}>
      Download Components
    </DownloadUiBUttonClient>
  )
}
