import fs from 'fs'
import path from 'path'

const ROOT_PATH = process.cwd()
export const COMPONENT_DEMOS_PATH = path.join(ROOT_PATH, 'components/demos')
export const REGISTRY_PATH = path.join(ROOT_PATH, 'registry')

function fetchDemoCode(fromPath: string) {
  const PATH = path.join(REGISTRY_PATH, '/demos', fromPath)
  const source = fs.readFileSync(path.join(`${PATH}.tsx`), 'utf8')
  return source
}

function fetchGlobalsCode() {
  const PATH = path.join(COMPONENT_DEMOS_PATH, '/globalsDemo.css')
  const source = fs.readFileSync(path.join(PATH), 'utf8')
  return source
}

function fetchTailwindCode() {
  const PATH = path.join(COMPONENT_DEMOS_PATH, '/tailwindConfigDemo.js')
  const source = fs.readFileSync(path.join(PATH), 'utf8')
  return source
}

function fetchComponentCode(fromPath: string) {
  const PATH = path.join(REGISTRY_PATH, '/ui', fromPath)
  try {
    const source = fs.readFileSync(`${PATH}.tsx`, 'utf8')
    return source
  } catch (error) {
    console.error('Error reading file:', error)
    return ``
  }
}

export {
  fetchDemoCode,
  fetchGlobalsCode,
  fetchTailwindCode,
  fetchComponentCode,
}
