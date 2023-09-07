import JSZip, { file } from 'jszip'
import * as fileSaver from 'file-saver'

export async function createZip(data) {
  const componentFiles = await JSON.parse(data)

  const zip = new JSZip()

  const uiFolder = zip.folder('current-ui')

  componentFiles.map((component) => {
    return uiFolder.file(component.fileName, component.fileData)
  })

  zip.generateAsync({ type: 'blob' }).then(function (content) {
    fileSaver.saveAs(content, 'current-ui.zip')
  })
}
