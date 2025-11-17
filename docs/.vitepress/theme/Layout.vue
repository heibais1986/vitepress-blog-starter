<script setup lang="ts">
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'
import PostDetail from './components/blog/PostDetail.vue'
import PostNav from './components/blog/PostNav.vue'
import { useSidebarHighlight } from './composables/sidebarHighlight'

const { Layout } = DefaultTheme
const route = useRoute()

// 检测是否是文章页面（/posts/ 或 /blog/posts/ 路径下的具体文章）
const isPostPage = computed(() => {
  const path = route.path
  // 检测是否包含 /posts/ 且以 .html 结尾（具体文章页面）
  return path.includes('/posts/') && path.endsWith('.html')
})

// 使用侧边栏高亮功能
useSidebarHighlight()
</script>

<template>
  <Layout>
    <template #doc-before>
      <!-- 如果是文章页面，自动添加 PostDetail 头部 -->
      <PostDetail v-if="isPostPage" />
    </template>

    <template #doc-after>
      <!-- 如果是文章页面，自动添加底部导航 -->
      <PostNav v-if="isPostPage" />
    </template>
  </Layout>
</template>
