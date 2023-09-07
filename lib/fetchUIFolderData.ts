import fs from 'fs'
import path from 'path'

const ROOT_PATH = process.cwd()
export const REGISTRY_UI_PATH = path.join(ROOT_PATH, 'registry/ui')

export function fetchUIFolderData() {
  const filesData: { fileName: string, fileData: string }[] = []

  const files = fs.readdirSync(REGISTRY_UI_PATH)

  files.forEach((file) => {
    const fileName = file

    const filePath = path.join(REGISTRY_UI_PATH, file)

    const fileData = fs.readFileSync(filePath, 'utf8')

    return filesData.push({
      fileName: fileName,
      fileData: fileData,
    })
  })

  return JSON.stringify(filesData)
}

