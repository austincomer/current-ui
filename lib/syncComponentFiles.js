const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')

const ROOT_PATH = process.cwd()

const sourceDirectoryDemos = path.join(ROOT_PATH, 'components/demos')
const sourceDirectoryUI = path.join(ROOT_PATH, 'components/ui')
const destinationDirectoryDemos = path.join(ROOT_PATH, 'registry/demos')
const destinationDirectoryUI = path.join(ROOT_PATH, 'registry/ui')

function copyFolderRecursive(sourceDir, destinationDir) {
  // Watch for changes in the source directory
  const watcher = chokidar.watch(sourceDir, { persistent: true })

  watcher.on('change', (sourceFilePath) => {
    // Calculate the destination file path
    const destinationFilePath = path.join(
      destinationDir,
      path.relative(sourceDir, sourceFilePath)
    )

    // Copy the changed file to the destination directory
    fs.copyFileSync(sourceFilePath, destinationFilePath)
    console.log(`File ${sourceFilePath} has been updated.`)
  })

  watcher.on('add', (sourceFilePath) => {
    // Calculate the destination file path
    const destinationFilePath = path.join(
      destinationDir,
      path.relative(sourceDir, sourceFilePath)
    )

    // Copy the new file to the destination directory
    fs.copyFileSync(sourceFilePath, destinationFilePath)
    console.log(`New file ${sourceFilePath} has been added.`)
  })

  watcher.on('unlink', (sourceFilePath) => {
    // Calculate the destination file path
    const destinationFilePath = path.join(
      destinationDir,
      path.relative(sourceDir, sourceFilePath)
    )

    // Remove the file from the destination directory
    fs.unlinkSync(destinationFilePath)
    console.log(`File ${sourceFilePath} has been removed.`)
  })
}

copyFolderRecursive(sourceDirectoryDemos, destinationDirectoryDemos)
copyFolderRecursive(sourceDirectoryUI, destinationDirectoryUI)
