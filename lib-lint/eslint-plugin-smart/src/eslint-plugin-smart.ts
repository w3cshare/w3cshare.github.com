/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:31:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 22:44:27
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/eslint-plugin-smart.ts
 * @Description: ESLint插件公共配置，适用于React、Vue、NestJS和TypeScript项目
 */

// 导入类型和优化后的规则集
import { createFlatConfigs } from './flat-configs'
import { createLegacyConfigs } from './legacy-configs'
import * as rules from './recommend'
import type { ESLintPluginExport as PluginExport } from './types'
import { isESLintV9, loadPlugins } from './utils'

/**
 * 创建ESLint配置导出对象
 *
 * @returns ESLint插件导出对象
 */
const createExportObject = (): PluginExport => {
  // 加载插件
  const plugins = loadPlugins()

  // 创建导出对象
  const exportObj: PluginExport = {
    configs: createFlatConfigs(plugins),
    plugins: {
      '@typescript-eslint': plugins.typescriptEslint,

      // 只保留确定存在的插件
      import: plugins.import,
      jsonc: plugins.jsonc,
      'jsx-a11y': plugins.jsxA11y,
      node: plugins.node,
      prettier: plugins.prettier,
      react: plugins.react,
      'react-hooks': plugins.reactHooks,
      'simple-import-sort': plugins.simpleImportSort,
      'sort-keys-fix': plugins.sortKeysFix,
      'typescript-sort-keys': plugins.typescriptSortKeys,
      'unused-imports': plugins.unusedImports,
      vue: plugins.vue,
    },
    rules: {
      base: rules.javascriptRules,
      json: rules.jsonRules,
      nestjs: rules.nestjsRules,
      react: rules.reactRules,
      typescript: rules.typescriptRules,
      vue: rules.vueRules,
    },
  }

  // 根据ESLint版本导出不同格式的配置
  if (isESLintV9()) {
    exportObj.configs = createFlatConfigs(plugins)
  } else {
    exportObj.configs = createLegacyConfigs(plugins, {
      baseRules: rules.javascriptRules,
      jsonRules: rules.jsonRules,
      nestjsRules: rules.nestjsRules,
      reactRules: rules.reactRules,
      typescriptRules: rules.typescriptRules,
      vueRules: rules.vueRules,
    })
  }

  return exportObj
}

// 创建导出对象
const exportObj = createExportObject()

// 兼容 CommonJS 和 ESM
if (typeof module !== 'undefined' && module.exports) {
  module.exports = exportObj
}

export default exportObj
