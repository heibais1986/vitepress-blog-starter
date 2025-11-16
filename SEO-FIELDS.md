# SEO字段完整清单

## 📋 VitePress 文章 Frontmatter SEO字段

### **完整字段列表**

```yaml
---
# ============================================
# 基础信息（必填）
# ============================================
title: "文章标题 - 50-60字符最佳"
date: 2024-11-16
author: "杰哥"

# ============================================
# SEO核心字段（强烈推荐）
# ============================================
description: "文章描述 - 120-160字符，包含关键词，会显示在搜索结果中"
keywords: 
  - "主关键词"
  - "长尾关键词"
  - "相关关键词1"
  - "相关关键词2"

# ============================================
# 分类和标签（推荐）
# ============================================
category: "文章分类"
tags: 
  - "标签1"
  - "标签2"
  - "标签3"

# ============================================
# URL和链接（推荐）
# ============================================
permalink: "/custom-url-path"  # 自定义URL路径
canonical: "https://yourdomain.com/canonical-url"  # 规范链接
updated: 2024-11-16  # 最后更新时间

# ============================================
# 图片相关（推荐）
# ============================================
cover: "https://example.com/cover-image.jpg"  # 封面图
image: "https://example.com/main-image.jpg"   # 主图
thumbnail: "https://example.com/thumbnail.jpg" # 缩略图

# ============================================
# Open Graph 社交分享（推荐）
# ============================================
og:title: "Open Graph标题 - 可以与title不同"
og:description: "Open Graph描述"
og:type: "article"  # 内容类型: article, website, etc.
og:url: "https://yourdomain.com/article-url"
og:image: "https://example.com/og-image.jpg"
og:image:width: 1200
og:image:height: 630
og:site_name: "网站名称"
og:locale: "zh_CN"

# ============================================
# Twitter Card（推荐）
# ============================================
twitter:card: "summary_large_image"  # 卡片类型
twitter:site: "@username"            # 网站Twitter账号
twitter:creator: "@username"         # 作者Twitter账号
twitter:title: "Twitter标题"
twitter:description: "Twitter描述"
twitter:image: "https://example.com/twitter-image.jpg"

# ============================================
# 文章特定字段（可选）
# ============================================
excerpt: "文章摘要 - 简短概述"
summary: "文章总结"
subtitle: "副标题"
lang: "zh-CN"  # 文章语言
layout: "post"  # 布局模板

# ============================================
# 搜索引擎控制（可选）
# ============================================
robots: "index, follow"  # 爬虫指令
  # 可选值：
  # - index, follow（允许索引和跟踪链接）
  # - noindex, follow（不索引但跟踪链接）
  # - index, nofollow（索引但不跟踪链接）
  # - noindex, nofollow（都不允许）

# ============================================
# Schema.org 结构化数据（高级）
# ============================================
schema:
  "@context": "https://schema.org"
  "@type": "BlogPosting"
  headline: "文章标题"
  description: "文章描述"
  author:
    "@type": "Person"
    name: "杰哥"
  datePublished: "2024-11-16"
  dateModified: "2024-11-16"
  image: "https://example.com/image.jpg"
  publisher:
    "@type": "Organization"
    name: "杰哥的技术小站"
    logo:
      "@type": "ImageObject"
      url: "https://example.com/logo.png"

# ============================================
# 优先级和重要性（可选）
# ============================================
priority: 0.8  # sitemap优先级（0.0-1.0）
changefreq: "weekly"  # 更新频率: always, hourly, daily, weekly, monthly, yearly, never

# ============================================
# 阅读相关（可选）
# ============================================
readingTime: "5 分钟"
wordCount: 1200

# ============================================
# 状态控制（可选）
# ============================================
draft: false  # 是否草稿
published: true  # 是否发布
featured: true  # 是否精选
sticky: false  # 是否置顶

# ============================================
# 多语言支持（可选）
# ============================================
alternate:
  - lang: "en"
    url: "/en/article-url"
  - lang: "ja"
    url: "/ja/article-url"

# ============================================
# 相关文章（可选）
# ============================================
related:
  - "/posts/related-article-1"
  - "/posts/related-article-2"

# ============================================
# 版权信息（可选）
# ============================================
license: "CC BY-NC-SA 4.0"
copyright: "Copyright © 2024 杰哥"
---
```

---

## 🎯 各字段详细说明

### **1. title（标题）- 必填**
- **用途**: 页面标题，显示在浏览器标签和搜索结果
- **最佳长度**: 50-60字符（中文25-30字）
- **SEO权重**: ⭐⭐⭐⭐⭐
- **示例**:
  ```yaml
  title: "2024年最佳免费VPN节点推荐 | 每日更新"
  ```

### **2. description（描述）- 强烈推荐**
- **用途**: 搜索结果摘要，社交分享描述
- **最佳长度**: 120-160字符（中文60-80字）
- **SEO权重**: ⭐⭐⭐⭐⭐
- **示例**:
  ```yaml
  description: "详细介绍2024年最新免费VPN节点获取方法，包括V2Ray、Shadowsocks等协议配置教程。每日更新稳定节点，助你轻松科学上网。"
  ```

### **3. keywords（关键词）- 推荐**
- **用途**: 页面关键词，帮助搜索引擎理解内容
- **数量**: 3-8个
- **SEO权重**: ⭐⭐⭐
- **示例**:
  ```yaml
  keywords:
    - "免费VPN 2024"
    - "科学上网"
    - "V2Ray节点"
    - "Shadowsocks"
  ```

### **4. canonical（规范链接）- 推荐**
- **用途**: 指定页面的规范URL，避免重复内容
- **SEO权重**: ⭐⭐⭐⭐
- **示例**:
  ```yaml
  canonical: "https://yourdomain.com/posts/vpn-proxy/free-nodes/2024"
  ```

### **5. og:* (Open Graph) - 推荐**
- **用途**: 社交媒体分享时显示的内容
- **SEO权重**: ⭐⭐⭐⭐
- **必需字段**:
  ```yaml
  og:title: "分享标题"
  og:description: "分享描述"
  og:image: "https://example.com/share-image.jpg"
  og:url: "https://example.com/article"
  ```

### **6. twitter:* (Twitter Card) - 推荐**
- **用途**: Twitter分享卡片
- **SEO权重**: ⭐⭐⭐
- **必需字段**:
  ```yaml
  twitter:card: "summary_large_image"
  twitter:title: "Twitter标题"
  twitter:description: "Twitter描述"
  twitter:image: "https://example.com/twitter-image.jpg"
  ```

### **7. robots（爬虫控制）- 可选**
- **用途**: 控制搜索引擎爬虫行为
- **SEO权重**: ⭐⭐⭐⭐
- **可选值**:
  - `index, follow` - 允许索引和跟踪
  - `noindex, follow` - 不索引但跟踪链接
  - `index, nofollow` - 索引但不跟踪链接
  - `noindex, nofollow` - 都不允许

### **8. schema (结构化数据) - 高级**
- **用途**: 提供结构化数据给搜索引擎
- **SEO权重**: ⭐⭐⭐⭐⭐
- **示例**:
  ```yaml
  schema:
    "@context": "https://schema.org"
    "@type": "BlogPosting"
    headline: "文章标题"
  ```

---

## 📝 不同文章类型的必需字段

### **博客文章（标准）**
```yaml
title: "必需"
description: "必需"
date: "必需"
author: "必需"
category: "推荐"
tags: "推荐"
cover: "推荐"
```

### **教程文章**
```yaml
title: "必需"
description: "必需"
keywords: "必需"
date: "必需"
updated: "推荐"
readingTime: "推荐"
difficulty: "推荐"  # 难度等级
```

### **新闻/更新文章**
```yaml
title: "必需"
description: "必需"
date: "必需"
updated: "必需"
priority: "推荐"
changefreq: "daily"
```

### **产品评测**
```yaml
title: "必需"
description: "必需"
keywords: "必需"
rating: "推荐"  # 评分
pros: "推荐"    # 优点
cons: "推荐"    # 缺点
```

---

## 🌐 全站配置（config.mts head字段）

```typescript
head: [
  // 基础SEO
  ['meta', { name: 'keywords', content: '全站关键词' }],
  ['meta', { name: 'author', content: '作者名' }],
  ['meta', { name: 'robots', content: 'index,follow' }],
  
  // Open Graph
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:site_name', content: '网站名' }],
  ['meta', { property: 'og:locale', content: 'zh_CN' }],
  
  // Twitter
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@username' }],
  
  // 图标
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  
  // 验证
  ['meta', { name: 'google-site-verification', content: 'code' }],
  ['meta', { name: 'baidu-site-verification', content: 'code' }],
  
  // 主题色
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  
  // 视口
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
  
  // 语言
  ['meta', { 'http-equiv': 'content-language', content: 'zh-CN' }],
]
```

---

## ✅ SEO字段优先级排序

### **必须填写（Priority 1）**
1. `title` - 页面标题
2. `description` - 页面描述
3. `date` - 发布日期

### **强烈推荐（Priority 2）**
4. `keywords` / `tags` - 关键词
5. `author` - 作者
6. `canonical` - 规范URL
7. `og:title`, `og:description`, `og:image` - Open Graph

### **推荐填写（Priority 3）**
8. `category` - 分类
9. `cover` / `image` - 封面图
10. `updated` - 更新时间
11. `twitter:*` - Twitter卡片

### **可选填写（Priority 4）**
12. `robots` - 爬虫控制
13. `priority` - sitemap优先级
14. `schema` - 结构化数据
15. 其他自定义字段

---

## 📊 字段值规范

### **日期格式**
```yaml
date: 2024-11-16              # ISO 8601
date: 2024-11-16T10:30:00Z    # 带时间
date: 2024-11-16 10:30:00     # 中国时区
```

### **URL格式**
```yaml
# 绝对URL
canonical: "https://example.com/path"

# 相对URL
permalink: "/posts/article-name"
```

### **图片URL**
```yaml
# 外部图片
cover: "https://cdn.example.com/image.jpg"

# 本地图片
cover: "/images/cover.jpg"
```

### **数组格式**
```yaml
# 字符串数组
tags: ['标签1', '标签2', '标签3']

# 或者
tags:
  - 标签1
  - 标签2
  - 标签3
```

---

## 🎯 快速模板

### **最小SEO配置**
```yaml
---
title: "文章标题"
description: "文章描述120-160字符"
date: 2024-11-16
author: "杰哥"
tags: ['标签1', '标签2']
---
```

### **标准SEO配置**
```yaml
---
title: "文章标题 | 网站名"
description: "完整的文章描述，包含关键词，120-160字符"
keywords:
  - 关键词1
  - 关键词2
  - 关键词3
date: 2024-11-16
author: "杰哥"
category: "分类名"
tags: ['标签1', '标签2', '标签3']
cover: "https://example.com/cover.jpg"
canonical: "https://yourdomain.com/article-url"
---
```

### **完整SEO配置**
```yaml
---
title: "完整的文章标题 | 网站名"
description: "详细的文章描述，包含主要关键词和吸引点击的内容，控制在120-160字符"
keywords:
  - 主关键词
  - 长尾关键词1
  - 长尾关键词2
  - 相关关键词
date: 2024-11-16
updated: 2024-11-16
author: "杰哥"
category: "文章分类"
tags: ['标签1', '标签2', '标签3', '标签4']
cover: "https://example.com/cover.jpg"
canonical: "https://yourdomain.com/posts/article-name"
og:title: "Open Graph标题"
og:description: "Open Graph描述"
og:image: "https://example.com/og-image.jpg"
og:url: "https://yourdomain.com/posts/article-name"
twitter:card: "summary_large_image"
twitter:title: "Twitter标题"
twitter:description: "Twitter描述"
twitter:image: "https://example.com/twitter-image.jpg"
robots: "index, follow"
priority: 0.8
changefreq: "weekly"
---
```

---

**所有SEO字段已完整列举！根据文章类型选择合适的字段组合即可。** 📋✅
