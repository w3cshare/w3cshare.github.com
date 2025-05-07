/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 00:53:38
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 16:51:59
 * @FilePath: /FullStack/lib-lint/tsconfig-base-smart/src/tsconfig-base-smart.ts
 * @Description: TypeScript配置基础插件，提供统一的TS配置供子项目继承
 */
import * as fs from 'fs'
import * as path from 'path'
import process from 'process'

/**
 * TypeScript 配置类型定义
 */
export interface TsConfig {
  [key: string]: any
  compilerOptions?: {
    [key: string]: any
    outDir?: string
  }
  exclude?: string[]
  extends?: string
  include?: string[]
}

/**
 * ANSI 颜色代码
 */
const colors = {
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  yellow: '\x1b[33m',
}

/**
 * 格式化带颜色的错误消息
 * @param message 消息内容
 * @param color 颜色代码
 * @returns 格式化后的消息
 */
function formatColorMessage(message: string, color: keyof typeof colors): string {
  return `${colors[color]}${message}${colors.reset}\n`
}

/**
 * 输出警告信息
 * @param message 警告消息
 */
function writeWarning(message: string): void {
  process.stderr.write(formatColorMessage(`⚠️  警告: ${message}`, 'yellow'))
}

/**
 * 输出错误信息
 * @param message 错误消息
 */
function writeError(message: string): void {
  process.stderr.write(formatColorMessage(`❌ 错误: ${message}`, 'red'))
}

/**
 * 输出成功信息
 * @param message 成功消息
 */
function writeSuccess(message: string): void {
  process.stderr.write(formatColorMessage(`✅ 成功: ${message}`, 'green'))
}

/**
 * 输出信息
 * @param message 普通消息
 */
function writeInfo(message: string): void {
  process.stderr.write(formatColorMessage(`ℹ️  信息: ${message}`, 'blue'))
}

/**
 * 深度合并两个对象
 * @param target 目标对象
 * @param source 源对象
 * @returns 合并后的对象
 */
function deepMerge(target: Record<string, any>, source: Record<string, any>): Record<string, any> {
  if (!source) return target

  const output = { ...target }

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key]
        } else {
          output[key] = deepMerge(output[key], source[key])
        }
      } else {
        output[key] = source[key]
      }
    })
  }

  return output
}

/**
 * 检查值是否为对象
 * @param item 检查的值
 * @returns 是否为对象
 */
function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * 获取基础TypeScript配置路径
 * @returns 返回tsconfig.base.json的绝对路径
 */
export function getBaseTsConfigPath(): string {
  return path.resolve(__dirname, '../tsconfig.base.json')
}

/**
 * 加载基础TypeScript配置
 * @returns 基础配置对象
 * @throws 如果文件不存在或解析失败
 */
export function loadBaseTsConfig(): TsConfig {
  const baseTsConfigPath = getBaseTsConfigPath()

  try {
    if (!fs.existsSync(baseTsConfigPath)) {
      throw new Error(`基础配置文件不存在: ${baseTsConfigPath}`)
    }

    return JSON.parse(fs.readFileSync(baseTsConfigPath, 'utf8'))
  } catch (error) {
    if (error instanceof SyntaxError) {
      writeError(`基础配置解析失败: ${error.message}`)
    } else if (error instanceof Error) {
      writeError(error.message)
    }

    // 提供一个空的基础配置作为回退
    writeWarning('使用空配置作为回退')
    return { compilerOptions: {} }
  }
}

/**
 * 创建继承基础配置的TypeScript配置
 * @param customOptions 自定义配置选项
 * @param useDeepMerge 是否使用深度合并 (默认为true)
 * @returns 合并后的TypeScript配置对象
 */
export function createTsConfig(
  customOptions: TsConfig = {},
  useDeepMerge: boolean = true,
): TsConfig {
  // 加载基础配置
  const baseTsConfig = loadBaseTsConfig()

  // 处理自定义配置
  const mergedConfig = useDeepMerge
    ? deepMerge(baseTsConfig, customOptions)
    : { extends: 'tsconfig-base-smart', ...customOptions }

  // 确保设置了outDir
  if (!mergedConfig.compilerOptions?.outDir) {
    writeWarning('未设置 compilerOptions.outDir，这可能导致编译输出到错误位置。请确保设置outDir！')

    // 为防止问题，如果未设置则添加默认值
    if (!mergedConfig.compilerOptions) {
      mergedConfig.compilerOptions = {}
    }
    mergedConfig.compilerOptions.outDir = 'lib'
    writeWarning('已自动设置 outDir 为 "lib"，建议手动指定输出目录')
  }

  // 确保配置中包含必要的字段
  ensureRequiredFields(mergedConfig)

  return mergedConfig
}

/**
 * 确保配置中包含必要的字段
 * @param config 配置对象
 */
function ensureRequiredFields(config: TsConfig): void {
  if (!config.compilerOptions) {
    config.compilerOptions = {}
    writeWarning('缺少 compilerOptions 字段，已添加默认值')
  }

  // 添加常用的默认排除项，如果没有设置
  if (!config.exclude || config.exclude.length === 0) {
    config.exclude = ['node_modules', 'dist', 'lib', '**/*.spec.ts', '**/*.test.ts']
    writeInfo('已添加默认排除项')
  }
}

/**
 * 检查并验证TypeScript配置
 * @param config 要验证的配置
 * @returns 验证结果，包含是否有效和问题列表
 */
export function validateTsConfig(config: TsConfig): { isValid: boolean; issues: string[] } {
  const issues: string[] = []

  // 检查必要的compilerOptions
  const requiredOptions = ['module', 'target', 'outDir']

  requiredOptions.forEach(option => {
    if (!config.compilerOptions?.[option]) {
      issues.push(`缺少必要的编译选项: ${option}`)
    }
  })

  // 其他验证逻辑...

  return {
    issues,
    isValid: issues.length === 0,
  }
}

/**
 * 导出默认配置对象
 */
export default {
  createTsConfig,
  getBaseTsConfigPath,
  loadBaseTsConfig,
  validateTsConfig,
}
