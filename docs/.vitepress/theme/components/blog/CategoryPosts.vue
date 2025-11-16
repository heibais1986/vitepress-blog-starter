<script setup lang='ts'>
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import usePosts from '../../composables/usePosts'
import Post from './Post.vue'

const { allPosts } = usePosts()
const route = useRoute()

// 获取当前路径对应的分类文章
const categoryPosts = computed(() => {
  // 获取当前路径，移除末尾斜杠和 /blog 前缀
  let currentPath = route.path.replace(/\/$/, '')
  // 如果路径包含 /blog，移除它（因为文章 href 中没有 /blog）
  currentPath = currentPath.replace(/^\/blog/, '')

  const filtered = allPosts.value.filter((post) => {
    // post.href 格式: /posts/vpn-proxy/tutorial/xxx.html
    const postPath = post.href.replace(/\.html$/, '')
    // 获取文章所在的目录路径
    const postDir = postPath.substring(0, postPath.lastIndexOf('/'))
    // 检查文章目录是否匹配当前分类路径
    return postDir === currentPath
  })

  return filtered
})
</script>

<template>
  <div class="category-posts-container">
    <!-- 文章列表 -->
    <div v-if="categoryPosts.length > 0" class="flex flex-col gap-6 mt-8">
      <Post v-for="post in categoryPosts" :key="post.href" :post="post" />
    </div>

    <!-- 空状态 -->
    <div v-else class="text-center py-16 text-gray-500 dark:text-gray-400">
      <p class="text-lg">
        暂无文章
      </p>
    </div>
  </div>
</template>

<style scoped>
.category-posts-container {
  max-width: var(--site-max-width, 1200px);
  margin: 0 auto;
  padding: 0 var(--site-padding-x, 32px);
}
</style>
