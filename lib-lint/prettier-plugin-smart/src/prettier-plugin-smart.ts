/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-23 20:44:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 12:12:29
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smart/src/prettier-plugin-smart.ts
 * @Description: .prettier配置 for prettier-plugin-smart
 */

// 导入必要的Prettier类型
import type { Options, Plugin } from 'prettier'

// 检查是否在Node环境中运行
const isNodeEnv = typeof process !== 'undefined' && process.versions && process.versions.node

/**
 * 智能默认配置 - 这些配置会自动应用到所有项目
 */
const smartOptions: Partial<Options> = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
}

// 打印欢迎信息，表明插件已被加载
if (isNodeEnv) {
  console.log('\x1b[32m%s\x1b[0m', '[prettier-plugin-smart] 智能格式化插件已加载，自动应用默认规则')
}

/**
 * Prettier初始化后自动应用配置的钩子
 * 这是真正实现零配置的关键部分
 */
let originalResolveConfig: any = null

if (isNodeEnv) {
  try {
    // 获取 prettier 模块
    const prettier = require('prettier')
    
    // 保存原始方法
    originalResolveConfig = prettier.resolveConfig.sync
    
    // 覆盖配置解析方法，注入我们的默认配置
    prettier.resolveConfig.sync = function(filePath: string, options: any) {
      const originalConfig = originalResolveConfig(filePath, options) || {}
      
      // 合并我们的默认配置，但保留用户配置的优先级
      return {
        ...smartOptions,
        ...originalConfig
      }
    }
    
    console.log('\x1b[32m%s\x1b[0m', '[prettier-plugin-smart] 配置注入成功，将对所有文件应用智能格式化规则')
  } catch (error) {
    console.warn('\x1b[33m%s\x1b[0m', '[prettier-plugin-smart] 无法访问Prettier API，降级为标准插件模式')
  }
}

/**
 * 标准插件实现 - 作为备用方案
 * 即使上面的高级方法不起作用，这个标准实现也能确保插件正常工作
 */
const prettierPluginSmart: Plugin = {
  // 提供标准的插件选项接口
  options: {
    smartFormatEnabled: {
      type: 'boolean',
      category: 'Global',
      default: true,
      description: '是否启用智能格式化规则',
    },
  },
  
  // 提供默认选项，确保规则被应用
  defaultOptions: {
    ...smartOptions,
    smartFormatEnabled: true,
  },
  
  // 提供解析器确保插件被加载
  parsers: {
    __dummy: {
      parse: () => ({}),
      astFormat: '__dummy',
      locStart: () => 0,
      locEnd: () => 0,
    },
  },
}

/**
 * 在安装时运行的一次性代码
 * 尝试修改全局Prettier配置
 */
if (isNodeEnv && process.env.npm_lifecycle_event === 'install') {
  try {
    const fs = require('fs')
    const path = require('path')
    
    // 尝试检测用户项目目录
    const projectDir = process.cwd()
    
    // 尝试创建最小化的配置文件
    const configPath = path.join(projectDir, '.prettierrc')
    
    // 如果不存在配置文件，则创建一个
    if (!fs.existsSync(configPath)) {
      console.log('\x1b[32m%s\x1b[0m', '[prettier-plugin-smart] 创建最小化配置文件')
      fs.writeFileSync(configPath, '{}', 'utf-8')
    }
    
    console.log('\x1b[32m%s\x1b[0m', '[prettier-plugin-smart] 配置完成')
  } catch (error) {
    // 忽略错误
  }
}

// 导出插件和智能配置选项，便于在JS配置文件中引用
export { smartOptions as defaultOptions }
export default prettierPluginSmart
