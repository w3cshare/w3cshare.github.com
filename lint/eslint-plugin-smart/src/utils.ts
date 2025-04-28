/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:45:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-28 01:42:28
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/utils.ts
 * @Description: 工具函数，用于检测ESLint版本和加载插件
 */

import { type ESLintPlugin, type LoadedPlugins } from './types'

/**
 * 检查值是否为对象类型
 *
 * @param value - 要检查的值
 * @returns 如果值是对象且不是数组或null，则返回true；否则返回false
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * 检测ESLint版本，判断使用哪种配置风格
 *
 * @returns 如果ESLint版本大于等于9，则返回true；否则返回false
 */
export function isESLintV9(): boolean {
  try {
    const eslintVersion = require('eslint/package.json').version
    return parseInt(eslintVersion.split('.')[0], 10) >= 9
  } catch (error) {
    console.warn('无法检测ESLint版本，将使用ESLint v8兼容模式。')
    return false
  }
}

/**
 * 加载ESLint插件
 *
 * @returns 加载的插件对象
 */
export function loadPlugins(): LoadedPlugins {
  try {
    const jsoncPlugin = require('eslint-plugin-jsonc') as ESLintPlugin
    const jsoncParser = require('jsonc-eslint-parser')
    jsoncPlugin.parser = jsoncParser

    return {
      import: require('eslint-plugin-import') as ESLintPlugin,
      simpleImportSort: require('eslint-plugin-simple-import-sort') as ESLintPlugin,
      unusedImports: require('eslint-plugin-unused-imports') as ESLintPlugin,
      typescriptEslint: require('@typescript-eslint/eslint-plugin') as ESLintPlugin,
      typescriptEslintParser: require('@typescript-eslint/parser') as ESLintPlugin,
      react: require('eslint-plugin-react') as ESLintPlugin,
      reactHooks: require('eslint-plugin-react-hooks') as ESLintPlugin,
      jsxA11y: require('eslint-plugin-jsx-a11y') as ESLintPlugin,
      vue: require('eslint-plugin-vue') as ESLintPlugin,
      vueEslintParser: require('vue-eslint-parser') as ESLintPlugin,
      node: require('eslint-plugin-node') as ESLintPlugin,
      prettier: require('eslint-plugin-prettier') as ESLintPlugin,
      eslintConfigPrettier: require('eslint-config-prettier') as ESLintPlugin,
      jsonc: jsoncPlugin,
    }
  } catch (error: unknown) {
    console.error('Error loading plugins:', error)
    if (error instanceof Error) {
      throw new Error(`加载插件失败: ${error.message}`)
    } else {
      throw new Error('加载插件失败：未知错误')
    }
  }
}
