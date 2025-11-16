# 网站结构说明

## 📁 文件夹结构

```
docs/
├─ .vitepress/
│  ├─ config.mts                     # 网站配置
│  └─ theme/                         # 主题文件
│
├─ posts/                            # 所有文章目录
│  │
│  ├─ vpn-proxy/                     # 🚀 网络加速
│  │  ├─ free-nodes/                 # 免费节点
│  │  ├─ tutorial/                   # 翻墙教程
│  │  └─ airport-review/             # 机场
│  │
│  ├─ ai/                            # 🤖 AI
│  │  ├─ tools/                      # AI工具
│  │  ├─ prompts/                    # 提示词
│  │  ├─ tutorial/                   # AI教程
│  │  ├─ advanced/                   # 高手进阶
│  │  └─ llm/                        # 大模型
│  │
│  ├─ blog/                          # 📚 博客
│  │  ├─ tutorials/                  # 教程
│  │  ├─ freebies/                   # 白嫖
│  │  └─ recommendations/            # 推荐
│  │
│  └─ resources/                     # 📦 资源宝库
│     ├─ quark/                      # 夸克资料
│     └─ learning-materials/         # 学习资料
│
├─ about/                            # ℹ️ 关于本站
└─ index.md                          # 首页
```

## 🎯 导航菜单

### 1. 🚀 网络加速 (`/posts/vpn-proxy/`)
- **每日免费节点** - 每天更新免费VPN节点
- **VPN教程** - 翻墙入门指南、客户端使用教程
- **机场测评** - 优质机场推荐与对比

### 2. 🤖 AI探索 (`/posts/ai/`)
- **AI工具导航** - 精选AI工具大全
- **提示词库** - ChatGPT、Midjourney等提示词
- **AI教程** - 从入门到精通的AI学习路径
- **高手进阶** - API调用、模型微调等高级内容

### 3. 📚 博客 (`/posts/blog/`)
- **教程** - 各种实用教程（注册、支付、建站等）
- **白嫖指南** - 免费资源和白嫖技巧
- **推荐** - 好用的工具、网站、软件推荐

### 4. 📦 资源宝库 (`/posts/resources/`)
- **软件工具** - Windows/Mac/Android软件下载
- **学习资料** - 电子书、视频课程等

### 5. ℹ️ 关于 (`/about/`)
- 网站介绍
- 联系方式

## 📝 如何添加新文章

### 方法1：在现有分类下添加

例如，添加一篇VPN教程：

1. 进入 `docs/posts/vpn-proxy/tutorial/` 文件夹
2. 创建新的 `.md` 文件，例如 `shadowsocks-tutorial.md`
3. 添加frontmatter和内容：

```markdown
---
title: Shadowsocks使用教程
description: 详细的Shadowsocks配置指南
date: 2024-11-16
tags: [VPN, Shadowsocks, 教程]
---

# Shadowsocks使用教程

文章内容...
```

### 方法2：创建新分类

如果要在"博客"下新增一个分类：

1. 在 `docs/posts/blog/` 下创建新文件夹
2. 在文件夹中创建 `index.md` 作为分类首页
3. 在 `config.mts` 中添加导航和侧边栏配置

## 🎨 文章Frontmatter说明

```yaml
---
title: 文章标题              # 必填
description: 文章描述        # 必填
date: 2024-11-16           # 发布日期
tags: [标签1, 标签2]        # 文章标签
layout: doc                # 布局（默认doc）
---
```

## 🔧 修改导航菜单

编辑 `docs/.vitepress/config.mts` 中的 `nav()` 函数：

```typescript
function nav() {
  return [
    {
      text: '菜单名称',
      items: [
        { text: '子菜单1', link: '/路径1/' },
        { text: '子菜单2', link: '/路径2/' },
      ],
    },
  ]
}
```

## 🔧 修改侧边栏

编辑 `docs/.vitepress/config.mts` 中对应的侧边栏函数。

## 🚀 本地运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 📊 SEO优化建议

1. **文件夹命名**：使用英文和连字符，包含关键词
2. **文章标题**：清晰、包含关键词
3. **描述**：简洁明了，吸引点击
4. **URL结构**：保持简洁，层级清晰

## ⚠️ 注意事项

1. 所有文章都应该放在 `docs/posts/` 目录下
2. 每个分类文件夹建议包含 `index.md` 作为首页
3. 图片资源放在 `docs/public/` 目录下
4. 修改配置后需要重启开发服务器

## 📮 问题反馈

如有问题，请联系站长。
