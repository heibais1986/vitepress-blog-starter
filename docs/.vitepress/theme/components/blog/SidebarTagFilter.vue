<script setup lang="ts">
import { computed, ref } from 'vue'

interface Post {
  frontmatter?: {
    tags?: string[]
    [key: string]: any
  }
  data?: {
    tags?: string[]
    [key: string]: any
  }
  [key: string]: any
}

const props = defineProps<{
  posts: Post[]
}>()

const emit = defineEmits<{
  filter: [tags: string[]]
}>()

// 当前选中的标签
const selectedTags = ref<string[]>([])

// 统计每个标签的文章数量
const tagCounts = computed(() => {
  const counts: Record<string, number> = {}
  props.posts.forEach((post) => {
    const tags = post.frontmatter?.tags || post.data?.tags
    if (tags && Array.isArray(tags)) {
      tags.forEach((tag: string) => {
        counts[tag] = (counts[tag] || 0) + 1
      })
    }
  })
  return counts
})

// 从所有文章中收集标签，按文章数量降序排列
const allTags = computed(() => {
  const counts = tagCounts.value
  const tags = Object.keys(counts)

  // 按文章数量降序排序
  tags.sort((a, b) => counts[b] - counts[a])

  // 限制显示约40-50个tags（约10行，每行4-5个）
  return tags.slice(0, 45)
})

// 切换标签选中状态
function toggleTag(tag: string) {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  }
  else {
    selectedTags.value.push(tag)
  }
  emit('filter', selectedTags.value)
}

// 清除所有选中的标签
function clearTags() {
  selectedTags.value = []
  emit('filter', [])
}

// 判断标签是否被选中
function isTagSelected(tag: string): boolean {
  return selectedTags.value.includes(tag)
}
</script>

<template>
  <div v-if="allTags.length > 0" class="sidebar-tag-filter">
    <!-- 标题栏 -->
    <div class="filter-header">
      <div class="filter-title">
        <span class="icon">🏷️</span>
        <span class="text">标签筛选</span>
      </div>
      <button
        v-if="selectedTags.length > 0"
        class="clear-btn"
        @click="clearTags"
        title="清除筛选"
      >
        ✕
      </button>
    </div>

    <!-- 标签列表 - 横向换行布局 -->
    <div class="tags-list">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="tag-item"
        :class="{ active: isTagSelected(tag) }"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.sidebar-tag-filter {
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

/* 标题栏 */
.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.filter-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.filter-title .icon {
  font-size: 1rem;
}

.clear-btn {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-btn:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg);
}

/* 标签列表 - 横向换行布局 */
.tags-list {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 0.375rem;
}

.tag-item {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem; /* 更紧凑的padding */
  font-size: 0.6875rem; /* 11px - 更小的字体 */
  font-weight: 500;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  line-height: 1;
}

.tag-item:hover {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft);
}

.tag-item.active {
  color: #fff;
  background-color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.tag-item.active:hover {
  background-color: var(--vp-c-brand-dark);
}
</style>
