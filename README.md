# 杰哥的技术小站 | VitePress Blog Starter

<p align="center">
  <img src="./docs/public/images/banner.png" alt="Banner" width="800">
</p>

基于 VitePress 1.6.x 构建的现代化个人博客网站，专注于 VPN 分享、AI 教程、资源分享和工具导航。

## ✨ 特性

- 🚀 **VitePress** - 基于 Vite 的静态站点生成器
- 🎨 **UnoCSS** - 即时按需的原子化 CSS 引擎
- 📝 **Markdown** - 完整的 Markdown 支持，包含 frontmatter
- 🔍 **SEO 优化** - 内置完整的 SEO meta 标签支持
- 🎯 **分类管理** - 自动根据文件夹路径生成分类
- 👤 **作者系统** - 支持多作者文章管理
- 🌓 **深色模式** - 内置暗黑主题切换
- 📱 **响应式设计** - 完美支持移动端
- 🔧 **自定义组件** - 丰富的自定义 Vue 组件

## 📦 技术栈

- **核心框架**: VitePress 1.6.3
- **UI 框架**: Vue 3.5.13
- **CSS 方案**: UnoCSS 65.4.3
- **包管理器**: pnpm 9.15.3
- **构建工具**: Vite
- **类型支持**: TypeScript 5.7.3

---

## 🚀 快速开始

### 📋 前置要求

确保你的环境满足以下要求：

- **Node.js**: >= 18.0.0
- **pnpm**: >= 9.0.0 (推荐使用 pnpm)
- **Git**: 用于版本控制

### 📥 安装步骤

#### 1. 克隆项目

```bash
git clone https://github.com/your-username/vitepress-blog-starter.git
cd vitepress-blog-starter
```

#### 2. 安装依赖

```bash
pnpm install
```

> 如果没有安装 pnpm，请先运行：`npm install -g pnpm`

#### 3. 启动开发服务器

```bash
pnpm dev
```

启动成功后，访问：`http://localhost:5173`

---

## 📝 文章编写指南

### 📂 文章目录结构

所有文章都存放在 `docs/posts/` 目录下，按照以下结构组织：

```
docs/posts/
├── vpn-proxy/           # 网络加速分类
│   ├── free-nodes/      # 免费节点
│   ├── tutorial/        # 翻墙教程
│   └── airport-review/  # 机场评测
├── ai/                  # AI 分类
│   ├── tools/           # AI 工具
│   ├── prompts/         # 提示词库
│   ├── tutorial/        # AI 教程
│   ├── advanced/        # 高手进阶
│   ├── llm/             # 大模型
│   └── workflow/        # 工作流
├── blog/                # 博客分类
│   ├── tutorials/       # 教程
│   ├── freebies/        # 白嫖指南
│   └── recommendations/ # 推荐
└── resources/           # 资源宝库
    ├── quark/           # 夸克资料
    ├── learning-materials/ # 学习资料
    └── software/        # 软件工具
```

### ✍️ 文章格式规范

每篇文章都是一个 `.md` 文件，必须包含 frontmatter 头部信息：

#### 基础模板

```markdown
---
title: 文章标题（必填，用于SEO和显示）
description: 文章描述（必填，用于SEO和卡片展示）
date: 2024-01-01（必填，文章日期，格式：YYYY-MM-DD）
author: 杰哥（必填，作者名称）
category: 教程（可选，分类标签）
tags:（可选，标签数组）
  - VPN
  - 科学上网
cover: /images/cover.jpg（可选，封面图片）
---

# 文章标题

这里开始写文章内容...
```

#### 完整 SEO 模板

如果你想要更好的 SEO 效果，使用完整模板：

```markdown
---
title: 2024年最佳免费VPN节点推荐 | 科学上网完全指南
description: 详细介绍2024年最新免费VPN节点获取方法，包括V2Ray、Shadowsocks等协议配置教程。
keywords:
  - 免费VPN
  - 科学上网
  - V2Ray节点
date: 2024-01-01
author: 杰哥
category: 教程
tags:
  - VPN
  - V2Ray
  - Shadowsocks
cover: /images/vpn-cover.jpg
canonical: https://your-domain.com/posts/vpn-proxy/tutorial/article
og:image: /images/vpn-og.jpg
twitter:card: summary_large_image
---

# 文章内容开始...
```

### 📋 Frontmatter 字段说明

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| `title` | ✅ | 文章标题，用于页面标题和卡片显示 | `2024年最佳VPN推荐` |
| `description` | ✅ | 文章描述，用于SEO和卡片摘要 | `详细介绍最新免费VPN节点获取方法` |
| `date` | ✅ | 发布日期，格式：YYYY-MM-DD | `2024-01-01` |
| `author` | ✅ | 作者名称，需在 `docs/blog/authors/` 中存在 | `杰哥` |
| `category` | ❌ | 文章分类 | `教程` |
| `tags` | ❌ | 标签数组 | `['VPN', '科学上网']` |
| `cover` | ❌ | 封面图片路径 | `/images/cover.jpg` |
| `keywords` | ❌ | SEO关键词数组 | `['免费VPN', 'V2Ray']` |
| `canonical` | ❌ | 规范链接 | `https://domain.com/post` |
| `og:image` | ❌ | Open Graph 图片 | `/images/og.jpg` |
| `twitter:card` | ❌ | Twitter 卡片类型 | `summary_large_image` |

### 🎯 添加新文章的步骤

#### 步骤 1: 选择分类目录

根据文章主题，在 `docs/posts/` 下选择或创建对应的分类文件夹。

#### 步骤 2: 创建 Markdown 文件

在分类文件夹下创建 `.md` 文件，文件名建议使用英文：

```bash
# 例如：创建一篇VPN教程
docs/posts/vpn-proxy/tutorial/v2ray-setup-guide.md
```

#### 步骤 3: 添加 Frontmatter

复制上面的模板，填写文章信息：

```markdown
---
title: V2Ray 完整配置指南
description: 从零开始学习 V2Ray 的安装、配置和使用，包含详细的图文教程。
date: 2024-11-16
author: 杰哥
category: 教程
tags:
  - V2Ray
  - 科学上网
  - 教程
---
```

#### 步骤 4: 编写文章内容

在 frontmatter 后开始编写 Markdown 内容：

```markdown
# V2Ray 完整配置指南

## 什么是 V2Ray？

V2Ray 是一个...

## 安装步骤

### 1. 下载客户端

...
```

#### 步骤 5: 预览文章

保存文件后，开发服务器会自动刷新，访问对应的 URL 预览文章。

---

## 🏗️ 项目结构

```
vitepress-blog-starter/
├── docs/                          # 文档根目录
│   ├── .vitepress/                # VitePress 配置目录
│   │   ├── config.mts             # 核心配置文件（导航、SEO等）
│   │   ├── theme/                 # 主题配置
│   │   │   ├── components/        # 自定义组件
│   │   │   │   └── blog/          # 博客相关组件
│   │   │   │       ├── Post.vue           # 文章卡片
│   │   │   │       ├── Posts.vue          # 文章列表
│   │   │   │       ├── PostDetail.vue     # 文章详情
│   │   │   │       ├── CategoryPosts.vue  # 分类文章列表
│   │   │   │       └── PostAuthor.vue     # 作者信息
│   │   │   ├── composables/       # 可组合函数
│   │   │   │   ├── posts.data.ts         # 文章数据加载
│   │   │   │   ├── authors.data.ts       # 作者数据加载
│   │   │   │   ├── usePosts.ts           # 文章hooks
│   │   │   │   └── useAuthors.ts         # 作者hooks
│   │   │   ├── custom.css         # 自定义样式
│   │   │   └── index.ts           # 主题入口
│   │   ├── cache/                 # 构建缓存（自动生成）
│   │   ├── dist/                  # 构建输出（自动生成）
│   │   └── .temp/                 # 临时文件（自动生成）
│   ├── posts/                     # 文章目录 ⭐
│   │   ├── vpn-proxy/             # 网络加速分类
│   │   ├── ai/                    # AI 分类
│   │   ├── blog/                  # 博客分类
│   │   └── resources/             # 资源分类
│   ├── blog/                      # 博客系统
│   │   ├── posts/                 # 博客文章
│   │   ├── authors/               # 作者信息
│   │   └── index.md               # 博客首页
│   ├── about/                     # 关于页面
│   ├── public/                    # 静态资源
│   │   └── images/                # 图片资源
│   └── index.md                   # 网站首页
├── clean.ps1                      # 缓存清理脚本
├── package.json                   # 项目配置
├── pnpm-lock.yaml                 # 依赖锁定文件
├── SEO-FIELDS.md                  # SEO 字段说明文档
├── STRUCTURE.md                   # 项目结构文档
└── README.md                      # 本文件
```

---

## 🎨 自定义配置

### 🔧 网站基本信息

编辑 `docs/.vitepress/config.mts`：

```typescript
export default defineConfig({
  title: '你的网站名称',
  description: '你的网站描述',
  lang: 'zh-CN',
  
  themeConfig: {
    nav: nav(),        // 导航栏配置
    sidebar: {         // 侧边栏配置
      '/posts/xxx/': sidebarXXX(),
    },
    blog: {
      title: '欢迎标题',
      description: '欢迎描述',
      banner: '/images/banner.png',
    },
  },
})
```

### 👤 添加新作者

在 `docs/blog/authors/` 目录下创建作者文件：

```markdown
---
name: 作者名称
avatar: /images/avatar.jpg
bio: 作者简介
social:
  github: https://github.com/username
  twitter: https://twitter.com/username
---
```

### 🎯 修改导航菜单

编辑 `docs/.vitepress/config.mts` 中的 `nav()` 函数：

```typescript
function nav() {
  return [
    {
      text: '🚀 网络加速',
      items: [
        { text: '免费节点', link: '/posts/vpn-proxy/free-nodes/' },
        { text: '翻墙教程', link: '/posts/vpn-proxy/tutorial/' },
      ],
    },
    // 添加更多菜单...
  ]
}
```

### 🎨 自定义样式

编辑 `docs/.vitepress/theme/custom.css` 修改网站样式：

```css
/* 修改主色调 */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-dark: #535bf2;
}

/* 修改网站宽度 */
:root {
  --site-max-width: 1200px;
  --site-padding-x: 32px;
}
```

---

## 🛠️ 开发命令

### 开发服务器

```bash
# 启动开发服务器
pnpm dev

# 或使用 npm
npm run dev
```

访问：`http://localhost:5173`

### 构建生产版本

```bash
# 构建静态文件
pnpm build

# 或使用 npm
npm run build
```

构建输出：`docs/.vitepress/dist/`

### 预览生产版本

```bash
# 预览构建结果
pnpm serve

# 或使用 npm
npm run serve
```

访问：`http://localhost:4173`

### 清理缓存

如果遇到构建问题，运行清理脚本：

```bash
# 清理缓存并重新构建
pnpm clean:build

# 或只清理缓存
pnpm clean
```

清理的目录：
- `docs/.vitepress/.temp/`
- `docs/.vitepress/cache/`
- `docs/.vitepress/dist/`

---

## 🚀 部署指南

### 部署到 Vercel（推荐）

#### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

#### 2. 导入到 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Import Project"
3. 选择你的 GitHub 仓库
4. 配置构建设置：
   - **Framework Preset**: VitePress
   - **Build Command**: `pnpm build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Install Command**: `pnpm install`

#### 3. 部署完成

Vercel 会自动部署，每次推送代码都会触发自动部署。

### 部署到 Netlify

#### 1. 创建 `netlify.toml`

在项目根目录创建配置文件：

```toml
[build]
  command = "pnpm build"
  publish = "docs/.vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. 部署到 Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 拖拽 `docs/.vitepress/dist` 文件夹到网站
3. 或连接 GitHub 仓库自动部署

### 部署到 GitHub Pages

#### 1. 创建部署脚本

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm
      
      - run: pnpm install
      - run: pnpm build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

#### 2. 配置 base 路径

编辑 `docs/.vitepress/config.mts`：

```typescript
export default defineConfig({
  base: '/your-repo-name/', // GitHub 仓库名
  // ...其他配置
})
```

#### 3. 推送代码

```bash
git add .
git commit -m "Add GitHub Actions"
git push
```

部署完成后访问：`https://your-username.github.io/your-repo-name/`

---

## 💡 常见问题

### ❓ 构建时出现 "Cannot read properties of undefined (reading 'author')" 警告

**原因**：某些文章缺少 `author` 字段。

**解决方案**：
1. 确保所有 `.md` 文章都包含 `author: 杰哥` 字段
2. 运行清理命令：`pnpm clean:build`
3. 这些警告不影响构建结果，可以忽略

### ❓ 文章没有显示在列表中

**检查清单**：
1. ✅ 确保文章包含完整的 frontmatter（title、description、date、author）
2. ✅ 文件路径是否正确（在 `docs/posts/` 目录下）
3. ✅ frontmatter 格式是否正确（使用 `---` 包围）
4. ✅ 日期格式是否正确（YYYY-MM-DD）
5. ✅ 清理缓存后重新构建

### ❓ 修改配置后没有生效

**解决方案**：
1. 停止开发服务器（Ctrl + C）
2. 运行清理命令：`pnpm clean`
3. 重新启动：`pnpm dev`

### ❓ 图片无法显示

**检查清单**：
1. ✅ 图片是否放在 `docs/public/` 目录下
2. ✅ 路径是否以 `/` 开头（如：`/images/pic.jpg`）
3. ✅ 图片文件名是否正确（区分大小写）

### ❓ 如何修改网站宽度？

编辑 `docs/.vitepress/theme/custom.css`：

```css
:root {
  --site-max-width: 1400px;  /* 修改这个值 */
}
```

### ❓ 如何添加新的分类？

1. 在 `docs/posts/` 下创建新文件夹
2. 在 `docs/.vitepress/config.mts` 中添加导航和侧边栏配置
3. 创建 `index.md` 文件，使用 `<CategoryPosts />` 组件

---

## 📚 相关文档

- [VitePress 官方文档](https://vitepress.dev/)
- [UnoCSS 文档](https://unocss.dev/)
- [Vue 3 文档](https://cn.vuejs.org/)
- [Markdown 语法](https://markdown.com.cn/)
- [SEO-FIELDS.md](./SEO-FIELDS.md) - SEO 字段完整说明
- [STRUCTURE.md](./STRUCTURE.md) - 项目结构详细说明

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 提交代码

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add some amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

---

## 📄 许可证

MIT License

---

## 👨‍💻 作者

**杰哥**

- 网站：[你的网站](https://your-website.com)
- GitHub：[@your-github](https://github.com/your-github)

---

## ⭐ Star History

如果这个项目对你有帮助，请给一个 ⭐️ Star！

---

**最后更新时间**：2024-11-16
