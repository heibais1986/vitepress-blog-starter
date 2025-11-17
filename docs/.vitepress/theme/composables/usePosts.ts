import type { Ref } from 'vue'
import type { Post } from './posts.data'
import { useData, useRoute } from 'vitepress'
import { computed, ref } from 'vue'
import { data } from './posts.data'

export default () => {
  const { site } = useData()

  const allPosts: Ref<Post[]> = ref(data)

  const route = useRoute()

  const path = route.path

  function findCurrentIndex() {
    // 尝试匹配 /blog/posts/ 路径
    const blogIndex = allPosts.value.findIndex(p => `${site.value.base}blog${p.href}` === route.path)
    if (blogIndex !== -1) {
      return blogIndex
    }

    // 尝试匹配 /posts/ 路径（直接使用 href）
    const postsIndex = allPosts.value.findIndex(p => p.href === route.path || `${site.value.base}${p.href}` === route.path)
    return postsIndex
  }

  // 获取当前文章的分类路径（去掉文件名）
  function getCurrentCategory(href: string): string {
    const parts = href.split('/')
    parts.pop() // 移除文件名
    return parts.join('/')
  }

  const currentPost = computed(() => allPosts.value[findCurrentIndex()])

  // 优先查找同分类的前后文章
  // prevPost = 上一篇 = 更新的文章（index - 1）
  const prevPost = computed(() => {
    const currentIndex = findCurrentIndex()
    if (currentIndex === -1)
      return undefined

    const current = allPosts.value[currentIndex]
    const currentCategory = getCurrentCategory(current.href)

    // 优先找同分类的更新文章
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (getCurrentCategory(allPosts.value[i].href) === currentCategory) {
        return allPosts.value[i]
      }
    }

    // 如果没有同分类的，返回全局的上一篇
    return allPosts.value[currentIndex - 1]
  })

  // nextPost = 下一篇 = 更早的文章（index + 1）
  const nextPost = computed(() => {
    const currentIndex = findCurrentIndex()
    if (currentIndex === -1)
      return undefined

    const current = allPosts.value[currentIndex]
    const currentCategory = getCurrentCategory(current.href)

    // 优先找同分类的更早文章
    for (let i = currentIndex + 1; i < allPosts.value.length; i++) {
      if (getCurrentCategory(allPosts.value[i].href) === currentCategory) {
        return allPosts.value[i]
      }
    }

    // 如果没有同分类的，返回全局的下一篇
    return allPosts.value[currentIndex + 1]
  })

  return { allPosts, currentPost, nextPost, prevPost, path }
}
