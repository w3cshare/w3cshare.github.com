/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:45:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-24 10:39:26
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/utils.ts
 * @Description: 工具函数，用于检测ESLint版本和加载插件
 */

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
 * 安全地导入插件，如果出错则返回null
 *
 * @param packageName - 要导入的包名
 * @returns 导入的包或null（如果导入失败）
 */
export function safeRequire(packageName: string): unknown | null {
  try {
    return require(packageName)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '未知错误'
    console.warn(
      `Warning: ${packageName} 未安装或导入失败: ${errorMessage}。相关规则可能无法正常工作。`,
    )
    return null
  }
}

/**
 * 加载所有需要的ESLint插件
 *
 * @returns 加载的插件对象集合
 */
export function loadPlugins(): Record<string, unknown> {
  return {
    // 通用插件
    import: safeRequire('eslint-plugin-import'),
    simpleImportSort: safeRequire('eslint-plugin-simple-import-sort'),
    unusedImports: safeRequire('eslint-plugin-unused-imports'),

    // annotation: safeRequire('eslint-plugin-annotation'), // js排序插件

    // TypeScript相关
    typescriptEslint: safeRequire('@typescript-eslint/eslint-plugin'),
    typescriptEslintParser: safeRequire('@typescript-eslint/parser'),

    // React相关
    react: safeRequire('eslint-plugin-react'),
    reactHooks: safeRequire('eslint-plugin-react-hooks'),
    jsxA11y: safeRequire('eslint-plugin-jsx-a11y'),

    // Vue相关
    vue: safeRequire('eslint-plugin-vue'),
    vueEslintParser: safeRequire('vue-eslint-parser'),

    // Node.js相关
    node: safeRequire('eslint-plugin-node'),

    // Prettier相关
    prettier: safeRequire('eslint-plugin-prettier'),
    eslintConfigPrettier: safeRequire('eslint-config-prettier'),
    prettierCore: safeRequire('prettier'),
  }
}
