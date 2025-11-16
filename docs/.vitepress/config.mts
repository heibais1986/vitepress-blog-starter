import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: '杰哥的技术小站',
  description: '专注VPN科学上网、AI人工智能、Web开发教程和免费资源分享的技术博客。提供免费VPN节点、AI工具推荐、编程教程等优质内容。',
  head: [
    ['meta', { name: 'keywords', content: 'VPN,科学上网,免费节点,AI工具,ChatGPT,人工智能,Web开发,编程教程,免费资源,技术博客' }],
    ['meta', { name: 'author', content: '杰哥' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '杰哥的技术小站' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@jiegejishu' }],
    // Favicon
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    // 百度站长验证（需要替换为实际值）
    // ['meta', { name: 'baidu-site-verification', content: 'code-xxxxx' }],
    // Google Search Console验证（需要替换为实际值）
    // ['meta', { name: 'google-site-verification', content: 'xxxxx' }],
  ],
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    footer: {
      message: '杰哥的技术小站',
      copyright: 'Copyright © 2025 杰哥',
    },
    search: {
      provider: 'local',
    },
    nav: nav(),
    sidebar: {
      '/posts/vpn-proxy/': sidebarVpn(),
      '/posts/ai/': sidebarAi(),
      '/posts/blog/': sidebarBlog(),
      '/posts/resources/': sidebarResources(),
    },
    blog: {
      title: '你好，旅行者！',
      description: '欢迎来到杰哥的技术小站！',
      banner: '/images/banner.png',
    },

  },
  ignoreDeadLinks: true,
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    {
      text: '🚀 网络加速',
      items: [
        { text: '每日免费节点', link: '/posts/vpn-proxy/free-nodes/' },
        { text: 'VPN教程', link: '/posts/vpn-proxy/tutorial/' },
        { text: '机场', link: '/posts/vpn-proxy/airport-review/' },
      ],
    },
    {
      text: '🤖 AI',
      items: [
        { text: 'AI工具', link: '/posts/ai/tools/ai-tools-navigation' },
        { text: '提示词', link: '/posts/ai/prompts/' },
        { text: 'AI教程', link: '/posts/ai/tutorial/' },
        { text: '高手进阶', link: '/posts/ai/advanced/' },
        { text: '大模型', link: '/posts/ai/llm/' },
        { text: '工作流', link: '/posts/ai/workflow/' },
      ],
    },
    {
      text: '📚 博客',
      items: [
        { text: '教程', link: '/posts/blog/tutorials/' },
        { text: '白嫖', link: '/posts/blog/freebies/' },
        { text: '推荐', link: '/posts/blog/recommendations/' },
      ],
    },
    {
      text: '📦 资源宝库',
      items: [
        { text: '夸克资料', link: '/posts/resources/quark/' },
        { text: '学习资料', link: '/posts/resources/learning-materials/' },
      ],
    },
    {
      text: 'ℹ️ 关于',
      link: '/about/',
    },
  ]
}

function sidebarVpn() {
  return [
    {
      text: '🚀 网络加速',
      items: [
        { text: '每日免费节点', link: '/posts/vpn-proxy/free-nodes/' },
        { text: 'VPN教程', link: '/posts/vpn-proxy/tutorial/' },
        { text: '机场', link: '/posts/vpn-proxy/airport-review/' },
      ],
    },
  ]
}

function sidebarAi() {
  return [
    {
      text: '🤖 AI探索',
      items: [
        { text: 'AI工具', link: '/posts/ai/tools/ai-tools-navigation' },
        { text: '提示词', link: '/posts/ai/prompts/' },
        { text: 'AI教程', link: '/posts/ai/tutorial/' },
        { text: '高手进阶', link: '/posts/ai/advanced/' },
        { text: '大模型', link: '/posts/ai/llm/' },
        { text: '工作流', link: '/posts/ai/workflow/' },
      ],
    },
  ]
}

function sidebarBlog() {
  return [
    {
      text: '📚 博客',
      items: [
        { text: '教程', link: '/posts/blog/tutorials/' },
        { text: '白嫖', link: '/posts/blog/freebies/' },
        { text: '推荐', link: '/posts/blog/recommendations/' },
      ],
    },
  ]
}

function sidebarResources() {
  return [
    {
      text: '📦 资源宝库',
      items: [
        { text: '夸克资料', link: '/posts/resources/quark/' },
        { text: '学习资料', link: '/posts/resources/learning-materials/' },
      ],
    },
  ]
}
