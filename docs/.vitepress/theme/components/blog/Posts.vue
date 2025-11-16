<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../../composables/usePosts'

const { allPosts: posts } = usePosts()

const { theme } = useData()
</script>

<template>
  <div>
    <!-- Banner 区域 -->
    <div v-if="theme.blog?.banner" class="banner-container">
      <div class="banner-overlay">
        <div class="banner-content">
          <h1 class="banner-title">
            {{ theme.blog?.title }}
          </h1>
          <p class="banner-description">
            {{ theme.blog?.description }}
          </p>
        </div>
      </div>
      <img
        :src="theme.blog?.banner"
        :alt="theme.blog?.title"
        class="banner-image"
      >
    </div>

    <!-- 传统标题（如果没有 banner） -->
    <div v-else class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 pt-16">
      <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]">
        {{ theme.blog?.title }}
      </h2>
      <p class="font-light sm:text-xl text-gray-600 dark:text-gray-300">
        {{ theme.blog?.description }}
      </p>
    </div>

    <!-- 文章列表 -->
    <div class="mx-auto max-w-screen-xl lg:py-16 lg:px-6 px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Post v-for="post of posts" :key="post.href" :post="post" />
      </div>
    </div>
  </div>
</template>
