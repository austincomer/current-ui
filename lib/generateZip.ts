import JSZip, { file } from 'jszip'
import FileSaver from 'file-saver'

export function generateZip(data: string) {
  const componentFiles: { fileName: string, fileData: string }[] = JSON.parse(data)

  const zip = new JSZip()

  const uiFolder = zip.folder('current-ui')

  componentFiles.map((component) => {
    return uiFolder!.file(component.fileName, component.fileData)
  })

  zip.generateAsync({ type: 'blob' }).then(function (content) {
    FileSaver.saveAs(content, 'current-ui.zip')
  })
}
