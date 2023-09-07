import fs from 'fs'
import path from 'path'

const ROOT_PATH = process.cwd()
export const DATA_PATH = path.join(ROOT_PATH, 'registry/ui')

export function fetchUIFolderData() {
  const filesData: { fileName: string, fileData: string }[] = []

  const files = fs.readdirSync(
    '/Users/austincomer/Desktop/DEV/current-ui/registry/ui'
  )

  files.forEach((file) => {
    const fileName = file

    const filePath = path.join(DATA_PATH, file)

    const fileData = fs.readFileSync(filePath, 'utf8')

    return filesData.push({
      fileName: fileName,
      fileData: fileData,
    })
  })

  return JSON.stringify(filesData)
}

