# 张路欣 · 交互式双语个人简历 / Interactive Bilingual Portfolio

个人作品集式交互式网页简历，浅色暖调主题，原生 HTML / CSS / JavaScript 实现，无任何框架与构建工具。

An interactive, bilingual (中文 / English) portfolio resume for Zhang Luxin — built with plain HTML / CSS / JavaScript, no frameworks or build step.

## 项目结构 / Structure

```
├── index.html   # 页面骨架（内容由 script.js 动态渲染）
├── styles.css   # 全部样式（设计变量、布局、组件、响应式）
├── script.js    # 双语数据、渲染函数与交互逻辑
└── README.md    # 本文件
```

## 功能特性 / Features

- **中英双语切换 / Bilingual toggle**：右上角「中 / EN」一键切换整站语言，自动记忆选择（localStorage），所有条目均主语言 + 副语言对照显示。
- **重点板块 / Focus sections**：
  - 实习经历时间轴（映客科技 / 阳泉市电视台 / 盂县融媒体中心）
  - 校园经历卡片（小红书个人 IP 运营 / 班委 / 学生会组织部）
  - 作品集筛选 + 灯箱详情（视觉设计 / 短片作品 / 摄影作品，共 9 组作品）
- **交互动效 / Interactions**：滚动进度条、导航高亮、滚动显现、数字滚动增长、回到顶部、移动端汉堡菜单、键盘 Esc 关闭灯箱。
- **响应式 / Responsive**：桌面 / 平板 / 手机自适应；支持 `prefers-reduced-motion`。

## 本地运行 / Run Locally

直接用浏览器打开 `index.html` 即可，或启动任意静态服务器：

Open `index.html` directly in a browser, or serve it with any static server:

```bash
# 任选其一 / any of:
python3 -m http.server 8000
npx serve .
```

然后访问 / then visit `http://localhost:8000`。

## 自定义 / Customize

- **修改内容 / Edit content**：所有中英文文案集中在 `script.js` 顶部的 `DATA.zh` 与 `DATA.en` 两个对象中，直接修改即可。
- **更换主题 / Theme**：在 `styles.css` 的 `:root` 中调整 CSS 变量（背景 `--bg`、文字 `--paper`、强调色 `--accent` 等）。
- **替换图片 / Replace images**：作品集图片为氛围示意图，将 `script.js` 中的 `IMG` 映射替换为真实作品图地址即可。
- **更换证件照 / Replace ID photo**：Hero 区为取景框占位卡片，可替换为本人证件照。

## 技术说明 / Tech Notes

- 字体：Noto Serif SC / Noto Sans SC（通过自托管镜像加载）。
- 无第三方 JS 依赖；图片为远程 CDN 地址。
- 兼容现代浏览器（Chrome / Edge / Safari / Firefox）。

---

© 2026 张路欣 ZHANG LUXIN · Hand-coded with HTML / CSS / JS
