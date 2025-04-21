---
title: 微前端快速开始
description: 如何快速上手使用微前端架构进行开发
outline: deep
---

# 微前端快速集成

本文档提供微前端架构的快速开始指南，帮助您迅速搭建和集成微前端应用。

## 环境准备

在开始前，请确保您的开发环境已安装以下工具：

- **Node.js**: v14.0.0 或更高版本
- **npm**: v6.0.0 或更高版本，或使用**pnpm/yarn**
- **Git**: 用于版本控制
- **现代浏览器**: Chrome、Firefox、Edge等，支持ES6+特性

## 快速启动模板

我们提供了完整的微前端项目模板，您可以通过以下命令快速创建：

```bash
# 使用我们的CLI工具创建项目
npx @fullstack/create-micro-frontend my-micro-app

# 或使用Git克隆模板仓库
git clone https://github.com/fullstack/micro-frontend-template.git my-micro-app
cd my-micro-app
pnpm install
```

## 项目结构

创建的项目结构如下：

```
my-micro-app/
├── container/             # 基座应用
│   ├── src/
│   ├── package.json
│   └── README.md
├── micro-apps/            # 微应用
│   ├── vue-app/           # Vue微应用
│   ├── react-app/         # React微应用
│   └── angular-app/       # Angular微应用
├── shared/                # 共享资源
│   ├── components/        # 共享组件
│   ├── utils/             # 共享工具函数
│   └── styles/            # 共享样式
├── package.json
└── README.md
```

## 启动开发服务器

```bash
# 安装所有依赖
pnpm install

# 启动所有服务
pnpm start

# 或者独立启动各个应用
pnpm start:container    # 启动基座应用
pnpm start:vue-app      # 启动Vue微应用
pnpm start:react-app    # 启动React微应用
pnpm start:angular-app  # 启动Angular微应用
```

启动后，您可以通过以下URL访问应用：

- 基座应用: http://localhost:3000
- Vue微应用: http://localhost:3001
- React微应用: http://localhost:3002
- Angular微应用: http://localhost:3003

## 基座应用配置

基座应用是微前端的核心，负责集成各个微应用。以下是基本配置步骤：

### 1. 配置微应用注册信息

在`container/src/config/apps.js`中注册微应用：

```javascript
export const microApps = [
  {
    name: 'vue-app',
    entry: process.env.NODE_ENV === 'production'
      ? 'https://example.com/vue-app/'
      : 'http://localhost:3001',
    container: '#micro-container',
    activeRule: '/vue'
  },
  {
    name: 'react-app',
    entry: process.env.NODE_ENV === 'production'
      ? 'https://example.com/react-app/'
      : 'http://localhost:3002',
    container: '#micro-container',
    activeRule: '/react'
  },
  {
    name: 'angular-app',
    entry: process.env.NODE_ENV === 'production'
      ? 'https://example.com/angular-app/'
      : 'http://localhost:3003',
    container: '#micro-container',
    activeRule: '/angular'
  }
];
```

### 2. 初始化微前端框架

在`container/src/main.js`中初始化微前端框架：

```javascript
import { registerMicroApps, start } from '@fullstack/micro-frontend';
import { microApps } from './config/apps';

// 注册微应用
registerMicroApps(microApps, {
  beforeLoad: [
    app => {
      console.log(`[Container] 开始加载 ${app.name} 应用`);
    }
  ],
  beforeMount: [
    app => {
      console.log(`[Container] 开始挂载 ${app.name} 应用`);
    }
  ],
  afterUnmount: [
    app => {
      console.log(`[Container] ${app.name} 应用已卸载`);
    }
  ]
});

// 启动微前端框架
start();
```

### 3. 创建微应用容器

在`container/src/App.vue`中创建微应用容器：

```html
<template>
  <div class="container">
    <header class="header">
      <nav>
        <router-link to="/vue">Vue应用</router-link>
        <router-link to="/react">React应用</router-link>
        <router-link to="/angular">Angular应用</router-link>
      </nav>
    </header>
    
    <main>
      <!-- 微应用将在此处挂载 -->
      <div id="micro-container"></div>
    </main>
    
    <footer>
      <p>微前端基座应用 &copy; 2023</p>
    </footer>
  </div>
</template>
```

## 微应用配置

每个微应用需要做特定配置以便集成到基座应用中：

### Vue微应用配置

在`micro-apps/vue-app/src/main.js`中：

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let instance = null;

// 微应用独立运行时
if (!window.__POWERED_BY_MICRO_FRONTEND__) {
  createApp(App).use(router).mount('#app');
}

// 微应用入口，导出生命周期钩子
export async function bootstrap() {
  console.log('[Vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[Vue] vue app mounted', props);
  
  // 创建应用实例
  instance = createApp(App);
  instance.use(router);
  
  // 可接收基座下发的props
  const { container, shared } = props;
  instance.provide('shared', shared);
  
  // 挂载应用
  instance.mount(container ? container.querySelector('#app') : '#app');
}

export async function unmount() {
  console.log('[Vue] vue app unmounted');
  if (instance) {
    instance.unmount();
    instance = null;
  }
}
```

### React微应用配置

在`micro-apps/react-app/src/index.js`中：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let root = null;

// 微应用独立运行时
if (!window.__POWERED_BY_MICRO_FRONTEND__) {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}

// 微应用入口，导出生命周期钩子
export async function bootstrap() {
  console.log('[React] react app bootstraped');
}

export async function mount(props) {
  console.log('[React] react app mounted', props);
  
  const { container, shared } = props;
  const rootElement = container ? container.querySelector('#root') : document.getElementById('root');
  
  root = ReactDOM.createRoot(rootElement);
  root.render(<App shared={shared} />);
}

export async function unmount() {
  console.log('[React] react app unmounted');
  if (root) {
    root.unmount();
    root = null;
  }
}
```

## 配置Webpack打包

微应用需要特定的Webpack配置以支持微前端集成：

### Vue微应用Webpack配置

在`micro-apps/vue-app/vue.config.js`中：

```javascript
const { defineConfig } = require('@vue/cli-service');
const packageName = require('./package.json').name;

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
  },
});
```

### React微应用Webpack配置

在`micro-apps/react-app/config-overrides.js`中：

```javascript
const packageName = require('./package.json').name;

module.exports = {
  webpack: function override(config, env) {
    config.output.library = `${packageName}`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`;
    
    config.output.publicPath = process.env.NODE_ENV === 'production'
      ? 'https://example.com/react-app/'
      : 'http://localhost:3002/';
      
    return config;
  },
  devServer: (configFunction) => {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    };
  },
};
```

## 微应用间通信

### 全局状态共享

在`shared/utils/store.js`中创建共享状态：

```javascript
import { createStore } from '@fullstack/micro-store';

export const store = createStore({
  user: {
    name: 'Guest',
    isLoggedIn: false,
  },
  theme: 'light',
});

// 在基座应用或微应用中使用
// import { store } from '@shared/utils/store';
```

### 事件通信

创建事件总线，在`shared/utils/eventBus.js`中：

```javascript
export class EventBus {
  static events = {};

  static on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  static emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }

  static off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}

// 使用方式
// import { EventBus } from '@shared/utils/eventBus';
// EventBus.on('user-login', (data) => console.log(data));
// EventBus.emit('user-login', { name: 'John' });
```

## 高级特性

### 预加载微应用

```javascript
import { registerMicroApps, start, prefetchApps } from '@fullstack/micro-frontend';
import { microApps } from './config/apps';

registerMicroApps(microApps);

// 预加载指定微应用
prefetchApps([
  { name: 'vue-app' },
  { name: 'react-app' }
]);

start();
```

### 全局错误处理

```javascript
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from '@fullstack/micro-frontend';

// 添加全局错误处理
addGlobalUncaughtErrorHandler((event) => {
  console.error('微前端全局错误：', event);
  // 上报错误到监控系统
});

registerMicroApps([...]);
start();
```

## 部署指南

### 构建所有应用

```bash
# 构建基座应用和所有微应用
pnpm build

# 或单独构建
pnpm build:container     # 构建基座应用
pnpm build:vue-app       # 构建Vue微应用
pnpm build:react-app     # 构建React微应用
pnpm build:angular-app   # 构建Angular微应用
```

### Nginx配置

以下是部署到Nginx的典型配置：

```nginx
server {
    listen 80;
    server_name example.com;

    # 基座应用
    location / {
        root /path/to/container/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Vue微应用
    location /vue-app/ {
        alias /path/to/vue-app/dist/;
        index index.html;
        try_files $uri $uri/ /vue-app/index.html;
    }

    # React微应用
    location /react-app/ {
        alias /path/to/react-app/build/;
        index index.html;
        try_files $uri $uri/ /react-app/index.html;
    }

    # Angular微应用
    location /angular-app/ {
        alias /path/to/angular-app/dist/;
        index index.html;
        try_files $uri $uri/ /angular-app/index.html;
    }
}
```

## 下一步

- [阅读架构详情](/micro-frontend/architecture)
- [查看最佳实践](/micro-frontend/best-practices)
- [API参考文档](/micro-frontend/api)
- [示例项目](/micro-frontend/examples) 