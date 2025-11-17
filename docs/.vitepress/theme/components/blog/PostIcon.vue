<script setup lang="ts">
import type { Post } from '../../composables/posts.data'

const props = defineProps<{
  post: Post
}>()

const category: string = props.post.data.category ? props.post.data.category : 'Article'

// 分类中文映射
const categoryMap: Record<string, string> = {
  Article: '文章',
  Tutorial: '教程',
  Document: '文档',
}

// 根据文章路径判断所属大分类，添加对应的emoji
function getCategoryEmoji(): string {
  const href = props.post.href || ''

  if (href.includes('/vpn-proxy/')) {
    return '🚀'
  }
  else if (href.includes('/ai/')) {
    return '🤖'
  }
  else if (href.includes('/blog/')) {
    return '📚'
  }
  else if (href.includes('/resources/')) {
    return '📦'
  }

  return '📄'
}

const categoryName = categoryMap[category] || category
const categoryEmoji = getCategoryEmoji()
</script>

<template>
  <div class="post-icon-container">
    <span class="category-emoji">{{ categoryEmoji }}</span>
    <span class="category-name">{{ categoryName }}</span>
  </div>
</template>

<style scoped>
.post-icon-container {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.category-emoji {
  font-size: 1rem;
  line-height: 1;
}

.category-name {
  line-height: 1;
}
</style>
