/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:45:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-28 13:10:12
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/utils.ts
 * @Description: 工具函数，用于检测ESLint版本和加载插件
 */

/* global console */

import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsoncPlugin from 'eslint-plugin-jsonc'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import nodePlugin from 'eslint-plugin-node'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix'
import typescriptSortKeysPlugin from 'eslint-plugin-typescript-sort-keys'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import vuePlugin from 'eslint-plugin-vue'
import jsoncParser from 'jsonc-eslint-parser'
import vueEslintParser from 'vue-eslint-parser'

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
    // 使用动态导入来获取ESLint版本信息
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eslintPkg = (globalThis as any).require?.('eslint/package.json')

    // 如果能够获取到版本信息，则检查版本号
    if (eslintPkg?.version) {
      return parseInt(eslintPkg.version.split('.')[0], 10) >= 9
    }

    /*
     * 通过检查是否存在新的flat config API来判断
     * 如果globalThis上没有require方法，则很可能是在ESM环境下运行
     * ESLint v9默认使用ESM和flat config
     */
    return true
  } catch (error) {
    console.warn('无法检测ESLint版本，将使用ESLint v9兼容模式。', error)

    // 默认使用ESLint v9配置，因为现在的主流版本
    return true
  }
}

/**
 * 加载ESLint插件
 *
 * @returns 加载的插件对象
 */
export function loadPlugins(): LoadedPlugins {
  try {
    // 为jsonc插件添加parser
    const jsoncPluginWithParser = jsoncPlugin as ESLintPlugin
    jsoncPluginWithParser.parser = jsoncParser as unknown as {
      parse(text: string, options?: unknown): unknown
    }

    return {
      eslintConfigPrettier: eslintConfigPrettier as ESLintPlugin,
      import: importPlugin as ESLintPlugin,
      jsonc: jsoncPluginWithParser,
      jsxA11y: jsxA11yPlugin as ESLintPlugin,
      node: nodePlugin as ESLintPlugin,
      prettier: prettierPlugin as ESLintPlugin,
      react: reactPlugin as ESLintPlugin,
      reactHooks: reactHooksPlugin as ESLintPlugin,
      simpleImportSort: simpleImportSortPlugin as ESLintPlugin,
      sortKeysFix: sortKeysFixPlugin as ESLintPlugin,
      typescriptEslint: typescriptEslintPlugin as ESLintPlugin,
      typescriptEslintParser: typescriptEslintParser as ESLintPlugin,
      typescriptSortKeys: typescriptSortKeysPlugin as ESLintPlugin,
      unusedImports: unusedImportsPlugin as ESLintPlugin,
      vue: vuePlugin as ESLintPlugin,
      vueEslintParser: vueEslintParser as ESLintPlugin,
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
