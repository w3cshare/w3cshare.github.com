<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 00:53:10
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 02:01:58
 * @FilePath: /FullStack/libs/tsconfig-base/README.md
 * @Description: tsconfig-base-smart
-->

# tsconfig-base-smart

> TypeScript配置基础插件，为单体项目提供统一的TS配置模板

## 功能特点

- 📦 提供标准化的TypeScript基础配置
- 🚨 智能检测并提供配置缺失提醒
- 🎨 彩色命令行输出，提升开发体验

## 安装

```bash
pnpm add -D tsconfig-base-smart
```

## 使用方法

在项目中创建 `tsconfig.json` 文件：

```json
{
  "extends": "tsconfig-base-smart",
  "compilerOptions": {
    "outDir": "lib"
  },
  "references": [],
  "include": ["src/**/*"]
}
```

这是最简单有效的使用方式，继承了所有推荐的基础配置。

## 基础配置内容

`tsconfig-base-smart` 提供以下核心配置：

- ES2021 目标
- CommonJS 模块系统
- 装饰器支持
- 源码映射
- 类型声明生成
- 路径别名 (`@/*` → `src/*`)
- 自动排除测试文件和构建目录

## 最佳实践

1. 总是显式指定 `outDir`，避免使用默认值
2. 自定义 `include` 控制编译范围
3. 根据项目需求添加 `references` 配置项目依赖
