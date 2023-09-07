import { Console } from 'console'
import fs from 'fs'
import path from 'path'

const ROOT_PATH = process.cwd()
export const DATA_PATH = path.join(ROOT_PATH, 'registry/ui')

export async function fetchUIFolderData() {
  const filesData = []

  const files = fs.readdirSync(
    '/Users/austincomer/Desktop/DEV/current-ui/registry/ui'
  )

  files.forEach((file) => {
    const fileName = file

    const filePath = path.join(DATA_PATH, file)

    const fileData = fs.readFileSync(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      return data
    })

    return filesData.push({
      fileName: fileName,
      fileData: fileData,
    })
  })

  return JSON.stringify(filesData)
}
