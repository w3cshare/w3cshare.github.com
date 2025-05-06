/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-23 20:44:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 15:48:23
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smart/src/prettier-plugin-smart.ts
 * @Description: .prettier配置 for prettier-plugin-smart
 */

// 导入必要的Prettier类型
import path from 'path'
import process from 'process'
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
 * 标准插件实现
 * 在Prettier 3.x中，插件的工作方式有所改变
 * 我们需要确保defaultOptions能够正确应用到所有使用此插件的项目中
 */
const prettierPluginSmart: Plugin = {
  // 提供默认选项，确保规则被应用
  defaultOptions: smartOptions,

  // 提供插件选项定义
  options: {
    semi: {
      type: 'boolean',
      default: false,
      description: '是否添加分号',
      category: 'Global',
    },
    singleQuote: {
      type: 'boolean',
      default: true,
      description: '使用单引号',
      category: 'Global',
    },
    trailingComma: {
      type: 'choice',
      default: 'all',
      description: '尾随逗号',
      choices: [
        { value: 'all', description: '所有可能的地方' },
        { value: 'es5', description: 'ES5语法支持的地方' },
        { value: 'none', description: '不使用尾随逗号' },
      ],
      category: 'Global',
    },
    printWidth: {
      type: 'int',
      default: 100,
      description: '每行最大宽度',
      category: 'Global',
    },
    tabWidth: {
      type: 'int',
      default: 2,
      description: '缩进宽度',
      category: 'Global',
    },
    useTabs: {
      type: 'boolean',
      default: false,
      description: '使用Tab缩进',
      category: 'Global',
    },
    bracketSpacing: {
      type: 'boolean',
      default: true,
      description: '对象括号间距',
      category: 'Global',
    },
    arrowParens: {
      type: 'choice',
      default: 'avoid',
      description: '箭头函数参数括号',
      choices: [
        { value: 'avoid', description: '可以省略时省略' },
        { value: 'always', description: '总是使用括号' },
      ],
      category: 'Global',
    },
    endOfLine: {
      type: 'choice',
      default: 'lf',
      description: '行尾符号',
      choices: [
        { value: 'lf', description: '\\n' },
        { value: 'crlf', description: '\\r\\n' },
        { value: 'cr', description: '\\r' },
        { value: 'auto', description: '保持现有的行尾' },
      ],
      category: 'Global',
    },
  },

  // 提供插件的核心功能
  parsers: {
    // 空对象表示我们不提供自定义解析器
  },

  // 提供格式化逻辑
  printers: {
    // 空对象表示我们使用默认的打印逻辑
  },
}

/**
 * 在安装时运行的一次性代码
 * 创建最小化的配置文件
 */
if (isNodeEnv && process.env.npm_lifecycle_event === 'install') {
  try {
    const fs = require('fs')
    const configPath = path.join(process.cwd(), '.prettierrc')

    // 如果不存在配置文件，则创建一个最小配置
    if (!fs.existsSync(configPath)) {
      console.log('\x1b[32m%s\x1b[0m', '[prettier-plugin-smart] 创建最小化配置文件')
      fs.writeFileSync(
        configPath,
        JSON.stringify({ plugins: ['prettier-plugin-smart'] }, null, 2),
        'utf-8',
      )
    }

    console.log('\x1b[32m%s\x1b[0m', '[prettier-plugin-smart] 配置完成')
  } catch (error) {
    // 忽略错误
  }
}

// 导出插件和智能配置选项，便于在JS配置文件中引用
export { smartOptions as defaultOptions }
export default prettierPluginSmart
