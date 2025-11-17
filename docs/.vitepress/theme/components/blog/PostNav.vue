<script setup lang="ts">
import usePosts from '../../composables/usePosts'

const { prevPost, nextPost } = usePosts()
</script>

<template>
  <div v-if="prevPost || nextPost" class="post-navigation">
    <!-- 上一篇 -->
    <a v-if="prevPost" :href="prevPost.href" class="nav-card prev-post">
      <div class="nav-direction">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="nav-label">上一篇</span>
      </div>
      <div class="nav-title">{{ prevPost.title }}</div>
    </a>

    <!-- 下一篇 -->
    <a v-if="nextPost" :href="nextPost.href" class="nav-card next-post">
      <div class="nav-direction">
        <span class="nav-label">下一篇</span>
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div class="nav-title">{{ nextPost.title }}</div>
    </a>
  </div>
</template>

<style scoped>
.post-navigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding-top: 3rem;
  border-top: 2px solid var(--vp-c-divider);
}

/* 如果只有一篇，保持原来的宽度 */
.post-navigation:has(.nav-card:only-child) {
  grid-template-columns: 1fr 1fr;
}

.post-navigation:has(.prev-post:only-child) {
  justify-items: start;
}

.post-navigation:has(.prev-post:only-child) .prev-post {
  grid-column: 1;
}

.post-navigation:has(.next-post:only-child) {
  justify-items: end;
}

.post-navigation:has(.next-post:only-child) .next-post {
  grid-column: 2;
}

.nav-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem 1.5rem;
  background: var(--card-bg);
  border: 1px solid transparent;
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  text-decoration: none;
  transition: all var(--transition-base);
  cursor: pointer;
  width: 100%;
  min-height: 120px;
}

.nav-card:hover {
  background: var(--bg-secondary);
  border-color: var(--vp-c-brand-light);
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
}

.nav-direction {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-tertiary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.nav-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--vp-c-brand);
  transition: transform var(--transition-fast);
}

.nav-card:hover .nav-icon {
  color: var(--vp-c-brand-dark);
}

.prev-post:hover .nav-icon {
  transform: translateX(-3px);
}

.next-post:hover .nav-icon {
  transform: translateX(3px);
}

.nav-label {
  color: var(--vp-c-brand);
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.6;
  transition: color var(--transition-fast);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.nav-card:hover .nav-title {
  color: var(--vp-c-brand);
}

/* 上一篇左对齐 */
.prev-post .nav-direction {
  justify-content: flex-start;
}

.prev-post .nav-title {
  text-align: left;
}

/* 下一篇右对齐 */
.next-post .nav-direction {
  justify-content: flex-end;
  flex-direction: row-reverse;
}

.next-post .nav-title {
  text-align: right;
}

/* 响应式 */
@media (max-width: 768px) {
  .post-navigation {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 3rem;
    padding-top: 2rem;
  }

  .post-navigation:has(.nav-card:only-child) {
    justify-items: stretch;
  }

  .nav-card {
    padding: 1.5rem;
    min-height: 100px;
  }

  .nav-title {
    font-size: 1rem;
  }

  /* 移动端统一左对齐 */
  .next-post .nav-direction {
    justify-content: flex-start;
    flex-direction: row;
  }

  .next-post .nav-title {
    text-align: left;
  }
}
</style>
