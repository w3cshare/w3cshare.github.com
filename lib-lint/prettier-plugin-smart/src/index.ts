/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-23 20:44:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 23:56:18
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smart/src/prettier-plugin-smart.ts
 * @Description: .prettier配置 for prettier-plugin-smart
 */

// 导入必要的Prettier类型
import fs from 'fs'
import path from 'path'
import type { Options, Plugin } from 'prettier'
import process from 'process'

// 检查是否在Node环境中运行
const isNodeEnv = typeof process !== 'undefined' && process.versions && process.versions.node

/**
 * 智能默认配置 - 这些配置会自动应用到所有项目
 */
const defaultOptions: Partial<Options> = {
  // 箭头函数参数是否总是带括号 'always' | 'avoid'
  arrowParens: 'always',

  // 对象前后添加空格 { foo: bar }
  bracketSpacing: true,

  // 行尾换行符 'lf' | 'crlf' | 'cr' | 'auto'
  endOfLine: 'lf',

  // 每行最大字符数
  printWidth: 100,

  // 结尾是否添加分号
  semi: false,

  // 是否使用单引号
  singleQuote: true,

  // tab宽度为2空格
  tabWidth: 2,

  // 多行时尽可能打印尾随逗号 'none' | 'es5' | 'all'
  trailingComma: 'all',

  // 是否使用tab替代空格
  useTabs: false,

  /*
   * 对象属性的引号使用：'as-needed' | 'consistent' | 'preserve'
   * quoteProps: 'as-needed',
   */

  /*
   * JSX中使用单引号
   * jsxSingleQuote: false,
   */

  /*
   * JSX标签闭合括号是否换行
   * <button
   *   className="prettier-class"
   *   id="prettier-id"
   *   onClick={this.handleClick}>
   *   Click Here
   * </button>
   * false:
   * <button
   *   className="prettier-class"
   *   id="prettier-id"
   *   onClick={this.handleClick}
   * >
   *   Click Here
   * </button>
   */
  bracketSameLine: false, // 在jsx中把'>' 是否单独放一行, 旧版叫 jsxBracketSameLine

  /*
   * requirePragma: false,
   * 是否在已被 Prettier 格式化的文件顶部插入 @format pragma
   * insertPragma: false,
   * Markdown 处理方式 'always' | 'never' | 'preserve'
   * proseWrap: 'preserve',
   */

  // HTML 空白敏感度 'css' | 'strict' | 'ignore'
  htmlWhitespaceSensitivity: 'css',

  // 是否格式化嵌入式语言 'auto' | 'off'
  embeddedLanguageFormatting: 'auto',

  /*
   * Vue 文件脚本和样式标签缩进
   * vueIndentScriptAndStyle: false,
   * 单个属性换行时，是否将属性放在单独的行上
   * singleAttributePerLine: false, // Vue/JSX中单个属性是否独占一行
   */
}

// 打印欢迎信息，表明插件已被加载
if (isNodeEnv) {
  process.stdout.write(
    '\x1b[32m[prettier-plugin-smart] 智能格式化插件已加载，自动应用默认规则\x1b[0m\n',
  )
}

/**
 * 标准插件实现
 * 在Prettier 3.x中，插件的工作方式有所改变
 * 我们需要确保defaultOptions能够正确应用到所有使用此插件的项目中
 */
const prettierPluginSmart: Plugin = {
  // 提供默认选项，确保规则被应用
  defaultOptions,

  // 提供插件选项定义
  options: {
    arrowParens: {
      category: 'Global',
      choices: [
        { description: '可以省略时省略', value: 'avoid' },
        { description: '总是使用括号', value: 'always' },
      ],
      default: 'avoid',
      description: '箭头函数参数括号',
      type: 'choice',
    },
    bracketSpacing: {
      category: 'Global',
      default: true,
      description: '对象括号间距',
      type: 'boolean',
    },
    endOfLine: {
      category: 'Global',
      choices: [
        { description: '\\n', value: 'lf' },
        { description: '\\r\\n', value: 'crlf' },
        { description: '\\r', value: 'cr' },
        { description: '保持现有的行尾', value: 'auto' },
      ],
      default: 'lf',
      description: '行尾符号',
      type: 'choice',
    },
    printWidth: {
      category: 'Global',
      default: 100,
      description: '每行最大宽度',
      type: 'int',
    },
    semi: {
      category: 'Global',
      default: false,
      description: '是否添加分号',
      type: 'boolean',
    },
    singleQuote: {
      category: 'Global',
      default: true,
      description: '使用单引号',
      type: 'boolean',
    },
    tabWidth: {
      category: 'Global',
      default: 2,
      description: '缩进宽度',
      type: 'int',
    },
    testKey: {
      category: 'Global',
      default: false,
      description: '测试key',
      type: 'boolean',
    },
    trailingComma: {
      category: 'Global',
      choices: [
        { description: '所有可能的地方', value: 'all' },
        { description: 'ES5语法支持的地方', value: 'es5' },
        { description: '不使用尾随逗号', value: 'none' },
      ],
      default: 'all',
      description: '尾随逗号',
      type: 'choice',
    },
    useTabs: {
      category: 'Global',
      default: false,
      description: '使用Tab缩进',
      type: 'boolean',
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
    const configPath = path.join(process.cwd(), '.prettierrc')

    // 如果不存在配置文件，则创建一个最小配置
    if (!fs.existsSync(configPath)) {
      process.stdout.write('\x1b[32m[prettier-plugin-smart] 创建最小化配置文件\x1b[0m\n')

      fs.writeFileSync(
        configPath,
        JSON.stringify({ plugins: ['prettier-plugin-smart'] }, null, 2),
        'utf-8',
      )
    }

    process.stdout.write('\x1b[32m[prettier-plugin-smart] 配置完成\x1b[0m\n')
  } catch (error) {
    // 忽略错误
  }
}

// 导出插件和智能配置选项，便于在JS配置文件中引用
export { defaultOptions }
export default prettierPluginSmart
