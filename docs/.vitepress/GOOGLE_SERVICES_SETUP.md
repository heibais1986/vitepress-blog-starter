# Google服务接入指南

本文档详细说明如何在VitePress博客中接入Google Analytics、Google Ads和Google Search Console。

---

## 📊 1. Google Analytics (GA4)

### **获取测量ID**

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建账号和媒体资源
3. 选择"数据流" → "网站"
4. 获取测量ID（格式：`G-XXXXXXXXXX`）

### **配置代码**

在 `config.mts` 中找到这两行：

```typescript
// Google Analytics (GA4) - 替换为你的测量ID
['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
['script', {}, `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`],
```

**替换步骤：**
1. 将两处 `G-XXXXXXXXXX` 替换为你的实际测量ID
2. 例如：`G-ABC123DEF456`

### **验证是否生效**

1. 部署网站后访问你的网站
2. 打开浏览器开发者工具 → Network标签
3. 查看是否有请求到 `www.google-analytics.com`
4. 等待24小时后在GA后台查看数据

---

## 💰 2. Google AdSense

### **获取发布商ID**

1. 访问 [Google AdSense](https://www.google.com/adsense/)
2. 申请账号（需要审核，通常1-7天）
3. 获取发布商ID（格式：`ca-pub-XXXXXXXXXXXXXXXX`）

### **配置代码**

在 `config.mts` 中找到这行：

```typescript
// Google AdSense - 替换为你的发布商ID
['script', {
  async: '',
  src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX',
  crossorigin: 'anonymous',
}],
```

**替换步骤：**
1. 将 `ca-pub-XXXXXXXXXXXXXXXX` 替换为你的实际发布商ID
2. 例如：`ca-pub-1234567890123456`

### **添加广告单元**

在你想显示广告的页面中添加：

```html
<!-- 文章内广告示例 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### **自动广告（推荐）**

自动广告无需手动添加广告代码，Google会自动在合适位置展示广告：

1. 在AdSense后台开启"自动广告"
2. 确保已添加AdSense脚本（上面配置的代码）
3. 等待Google自动展示广告

---

## 🔍 3. Google Search Console

### **获取验证码**

1. 访问 [Google Search Console](https://search.google.com/search-console/)
2. 添加资源 → 选择"网域"或"网址前缀"
3. 选择"HTML标记"验证方式
4. 复制meta标签中的`content`值（格式：一串随机字符）

### **配置代码**

在 `config.mts` 中找到这行：

```typescript
// Google Search Console验证 - 替换为你的验证码
['meta', { name: 'google-site-verification', content: 'your-verification-code-here' }],
```

**替换步骤：**
1. 将 `your-verification-code-here` 替换为你的实际验证码
2. 例如：`abcdefghijklmnopqrstuvwxyz123456789`

### **验证步骤**

1. 替换验证码后，构建并部署网站
2. 回到Google Search Console，点击"验证"
3. 验证成功后即可开始使用

### **提交Sitemap**

验证成功后，提交sitemap加快收录：

1. 在Search Console左侧菜单选择"站点地图"
2. 输入：`sitemap.xml`
3. 点击"提交"

**自动生成Sitemap：**

VitePress可以自动生成sitemap，在 `config.mts` 中添加：

```typescript
export default defineConfig({
  // ... 其他配置
  sitemap: {
    hostname: 'https://你的域名.com'
  }
})
```

---

## 🎯 完整配置示例

```typescript
head: [
  // ... 其他meta标签

  // Google Analytics
  ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF456' }],
  ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ABC123DEF456');
  `],

  // Google AdSense
  ['script', {
    async: '',
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456',
    crossorigin: 'anonymous',
  }],

  // Google Search Console
  ['meta', { name: 'google-site-verification', content: 'abc123def456ghi789jkl' }],
],
```

---

## ⚠️ 注意事项

### **隐私政策**

使用Google服务需要添加隐私政策页面，说明：
- 使用了Google Analytics收集访问数据
- 使用了Google AdSense展示广告
- Cookie使用说明
- 用户数据如何被使用

建议创建 `/privacy.md` 页面并在footer添加链接。

### **GDPR合规**

如果有欧盟用户，需要：
1. 添加Cookie同意弹窗
2. 允许用户拒绝追踪
3. 提供数据删除选项

可以使用插件如：`@cookie-consent`

### **性能影响**

Google服务会增加页面加载时间：
- GA4脚本：~50KB
- AdSense脚本：~100KB
- 建议使用异步加载（`async`属性）

### **广告政策**

AdSense有严格的政策，违规会被封号：
- 禁止成人、暴力、非法内容
- 禁止误导性内容
- 禁止版权侵权内容
- 不得人为点击广告

---

## ✅ 检查清单

部署前确认：

- [ ] 已替换所有 `XXXXXXXXXX` 为实际ID
- [ ] 已部署到生产环境
- [ ] GA4：在Network面板看到analytics请求
- [ ] AdSense：页面加载后看到广告或广告占位
- [ ] Search Console：验证成功
- [ ] Sitemap已提交
- [ ] 添加了隐私政策页面

---

## 🔗 相关链接

- [Google Analytics 文档](https://support.google.com/analytics)
- [Google AdSense 文档](https://support.google.com/adsense)
- [Google Search Console 文档](https://support.google.com/webmasters)
- [VitePress 配置文档](https://vitepress.dev/reference/site-config)

---

## 💡 常见问题

**Q: GA数据为什么不显示？**
A: 新站点需要等待24-48小时才能看到数据，确保测量ID正确。

**Q: AdSense申请被拒怎么办？**
A: 常见原因：内容不足（建议20+篇文章）、流量太少、内容质量不达标。

**Q: Search Console验证失败？**
A: 确保验证码正确，网站已部署，meta标签在`<head>`中。

**Q: 如何测试是否生效？**
A: 打开浏览器开发者工具，查看Network和Console，看是否有相关请求和错误。
