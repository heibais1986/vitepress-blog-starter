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

const categoryName = categoryMap[category] || category
</script>

<template>
  <div>
    <div v-if="category === 'Article'" class="i-heroicons-outline-book-open mr-2" />
    <div v-if="category === 'Tutorial'" class="i-heroicons-outline-academic-cap mr-2" />
    <div v-if="category === 'Document'" class="i-heroicons-outline-document mr-2" />
    <span>{{ categoryName }}</span>
  </div>
</template>

<style scoped></style>
