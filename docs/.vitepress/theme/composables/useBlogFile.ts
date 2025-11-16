import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

export default () => {
  function readFrontMatter(file: string, parentDir: string, cache: Map<any, any>) {
    const fullPath = path.join(parentDir, file)
    const timestamp = fs.statSync(fullPath).mtimeMs

    const cached = cache.get(fullPath)
    if (cached && timestamp === cached.timestamp)
      return cached.post

    const src = fs.readFileSync(fullPath, 'utf-8')
    return matter(src, { excerpt: true })
  }

  function folderDir(name: string): string {
    // @ts-expect-error: import.meta is supported
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    // authors 在 blog/ 文件夹下，posts 在根目录下
    if (name === 'authors') {
      return path.resolve(dirname, `../../../blog/${name}`)
    }
    return path.resolve(dirname, `../../../${name}`)
  }

  return { folderDir, readFrontMatter }
}
