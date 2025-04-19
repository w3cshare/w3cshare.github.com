# Google 标签页首页

一个简洁美观的浏览器标签页首页，支持自定义背景、搜索引擎、快捷方式等功能。基于TypeScript和Vite构建。

![标签页预览](https://source.unsplash.com/random/1200x600/?browser,home)

## ✨ 功能特点

- 📅 时钟和日期显示 - 实时更新的时间和日期
- 🔍 自定义搜索引擎 - 支持多种搜索引擎配置
- 🌤️ 天气信息显示 - 当前位置的天气情况
- 🚀 可定制网站快捷方式 - 自定义常用网站访问
- 🖼️ 随机/自定义背景图片 - 支持个性化背景设置
- 📱 响应式设计 - 适配各种设备屏幕

## 📦 安装

```bash
# 使用pnpm
pnpm install

# 或使用npm
npm install

# 或使用yarn
yarn install
```

## 🔨 开发

### 开发模式

```bash
pnpm run dev
```

### 构建生产版本

```bash
pnpm run build
```

### 预览生产版本

```bash
pnpm run preview
```

## 🌟 设置为默认标签页

### 方法一：作为浏览器扩展安装（推荐）

1. 构建项目
   ```bash
   pnpm run build
   ```

2. 在Chrome浏览器中加载:
   - 打开Chrome浏览器访问 `chrome://extensions/`
   - 开启右上角的"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择本项目的`lib`目录
   - 完成后，每次打开新标签页时将显示此标签页

3. 在Edge、Firefox等浏览器中，操作类似

### 方法二：部署为网站并重定向

1. 将构建结果部署到静态网站托管服务器（GitHub Pages、Netlify等）

2. 安装"New Tab Redirect"或类似的浏览器扩展
   - [Chrome版本](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna)
   - [Firefox版本](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)

3. 在扩展设置中，将新标签页地址设置为已部署网站的URL

详细设置指南请参考 [docs/browser-setup.md](docs/browser-setup.md)

## 🛠️ 技术栈

- TypeScript
- Vite
- 原生DOM API
- localStorage存储

## 💡 使用方法

### 基本用法

```javascript
import { initTabHome } from 'google-tab-home';

// 初始化标签页
initTabHome({
  container: '#app',
  config: {
    weatherEnabled: true,
    searchEnabled: true,
    customBackground: 'https://example.com/background.jpg'
  }
});
```

### 完整配置示例

```javascript
const tabHome = initTabHome({
  container: document.getElementById('app'),
  config: {
    weatherEnabled: true,
    searchEnabled: true,
    customBackground: 'https://example.com/background.jpg'
  }
});

// 更新设置
tabHome.updateSettings({
  shortcuts: [
    {
      name: '自定义网站',
      url: 'https://example.com',
      icon: 'https://example.com/favicon.ico'
    }
  ]
});
```

## ⚙️ 自定义设置

可以通过浏览器本地存储来保存用户设置，包括：

- 背景图片URL
- 搜索引擎配置
- 快捷方式图标和链接
- 天气显示位置
- 底部引用文字

## 📄 许可证

ISC

## 🤝 贡献

欢迎提交Pull Request或Issue帮助改进项目！
