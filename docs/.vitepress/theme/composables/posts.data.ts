import type { MarkdownRenderer } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { formatDistance } from 'date-fns'
import { createMarkdownRenderer } from 'vitepress'
import useBlogFile from './useBlogFile'

let md: MarkdownRenderer
const { folderDir, readFrontMatter } = useBlogFile()

const dir = folderDir('posts')

export interface Post {
  title: string
  author: string
  href: string
  date: {
    time: number
    string: string
    since: string
  }
  excerpt: string | undefined
  data: Record<string, any>
}

declare const data: Post[]
export { data }

async function load(): Promise<Post[]>
async function load() {
  md = md || (await createMarkdownRenderer(process.cwd()))
  const posts: Post[] = []

  // 递归读取所有子文件夹中的 .md 文件
  function readDirRecursive(dirPath: string, relativePath = '') {
    const files = fs.readdirSync(dirPath)

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // 递归读取子文件夹
        readDirRecursive(fullPath, path.join(relativePath, file))
      }
      else if (file.endsWith('.md') && file !== 'index.md') {
        // 读取 markdown 文件（排除 index.md）
        const post = getPost(file, dirPath, relativePath)
        if (post)
          posts.push(post)
      }
    })
  }

  readDirRecursive(dir)
  return posts.sort((a, b) => b.date.time - a.date.time)
}

export default {
  watch: path.join(dir, '**/*.md'),
  load,
}

const cache = new Map()

function getPost(file: string, postDir: string, relativePath = ''): Post | null {
  const fullPath = path.join(postDir, file)
  const timestamp = fs.statSync(fullPath).mtimeMs

  const { data, excerpt } = readFrontMatter(file, postDir, cache)

  // 如果没有 title 或 date，跳过这个文件
  if (!data.title || !data.date) {
    return null
  }

  // 构建正确的 URL 路径
  const urlPath = relativePath
    ? path.join(relativePath, file).replace(/\.md$/, '.html')
    : file.replace(/\.md$/, '.html')

  const post: Post = {
    title: data.title,
    author: data.author ? data.author : 'Unknown',
    href: `/posts/${urlPath.replace(/\\/g, '/')}`,
    date: formatDate(data.date),
    excerpt: excerpt && md.render(excerpt),
    data,
  }

  cache.set(fullPath, {
    timestamp,
    post,
  })
  return post
}

function formatDate(date: string | Date): Post['date'] {
  if (!(date instanceof Date))
    date = new Date(date)

  date.setUTCHours(12)

  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    since: formatDistance(date, new Date(), { addSuffix: true }),
  }
}
