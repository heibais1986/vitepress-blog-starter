# 分类列表页统一格式模板

所有分类列表页的 `index.md` 文件应该遵循以下统一格式：

## 标准格式

```markdown
---
title: 分类名称
description: <strong>✨ 关键词</strong> | 分类描述文字。<strong>建议收藏</strong>本页！
---

<CategoryPosts />
```

## 说明

1. **title**: 分类名称，会自动显示在页面顶部（大标题 + emoji）
2. **description**: 分类说明
   - 支持 HTML 标记（`<strong>` 加粗）
   - 使用 `|` 分隔不同部分
   - 显示为橙色提示框样式
3. **不要添加 Markdown 标题（# ## ###）**，标题由 CategoryPosts 组件自动生成
4. **只需要 `<CategoryPosts />` 组件即可**

## Emoji 自动匹配规则

CategoryPosts 组件会根据路径自动添加 emoji：

- `/vpn-proxy/free-nodes/` → 🔔
- `/vpn-proxy/` → 🚀
- `/ai/` → 🤖
- `/blog/freebies/` → ✨
- `/blog/` → 📚
- `/resources/` → 📦
- 其他 → 📄

## 示例

### 每日免费节点
```markdown
---
title: 每日免费节点
description: <strong>🔔 持续更新</strong> | 本板块每日更新免费VPN节点，供大家测试使用。建议您<strong>收藏本页</strong>，方便随时查看最新节点！
---

<CategoryPosts />
```

### 白嫖指南
```markdown
---
title: 白嫖指南
description: <strong>✨ 持续更新</strong> | 精选各种免费资源和白嫖技巧，能白嫖就不花钱！<strong>建议收藏</strong>本页，随时查看最新资源。
---

<CategoryPosts />
```

### VPN教程
```markdown
---
title: VPN教程
description: <strong>📖 完整教程</strong> | 全面的VPN使用教程，从入门到精通。帮助你快速掌握科学上网技巧！
---

<CategoryPosts />
```

## 视觉效果

页面会自动生成：
```
🔔 每日免费节点
────────────────────────────────────
[橙色提示框] 🔔 持续更新 | 本板块每日更新免费VPN节点...

[卡片1]
[卡片2]
[卡片3]
```

## 注意事项

1. ✅ 使用统一格式
2. ✅ 不要重复添加标题
3. ✅ description 可选，但建议添加
4. ✅ 支持 HTML strong 标记突出重点
5. ❌ 不要在 markdown 中写 `# 标题`
6. ❌ 不要添加额外的说明文字
