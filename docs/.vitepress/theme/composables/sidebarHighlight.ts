import { useRoute } from 'vitepress'
import { onMounted, watch } from 'vue'

export function useSidebarHighlight() {
  const route = useRoute()

  function highlightSidebar() {
    // 延迟执行，确保DOM已完全渲染
    setTimeout(() => {
      // 获取当前路径
      const currentPath = route.path
      console.log('当前路径:', currentPath)

      // 移除所有之前的高亮
      document.querySelectorAll('.sidebar-highlight-active').forEach((el) => {
        el.classList.remove('sidebar-highlight-active')
      })

      // 查找所有侧边栏链接
      const sidebarLinks = document.querySelectorAll('.VPSidebar a')

      console.log('找到侧边栏链接数量:', sidebarLinks.length)

      sidebarLinks.forEach((link) => {
        const href = link.getAttribute('href') || ''

        // 检查当前路径是否以链接路径开头
        if (href && currentPath.startsWith(href.replace(/\/$/, ''))) {
          console.log('匹配到链接:', href)
          link.classList.add('sidebar-highlight-active')
        }
      })
    }, 100)
  }

  onMounted(() => {
    console.log('sidebarHighlight mounted')
    highlightSidebar()
  })

  watch(() => route.path, () => {
    console.log('路径变化，重新高亮')
    highlightSidebar()
  })
}
