/**
 * @file ESLint configuration for TypeScript and Vue3 projects
 * @author ww <wwdqq7@qq.com>
 */

// import { defineConfig } from 'eslint/config'

import base from './base/index'
import sortImport from './common/sort-import'
import sortJson from './common/sort-json'
import sortObject from './common/sort-object'
import unusedImports from './common/unused-imports'
import react from './react/index'
import typescript from './typescript/index'
import vueTypescript from './vue/vue-typescript'

// 配置组合顺序很重要，后面的规则会覆盖前面的规则
export default [
  // 基础 ESLint 规则
  ...base,

  // 代码风格优化规则
  ...sortJson, // JSON 文件排序
  ...sortImport, // 导入语句排序
  // --fix 移除未使用导入的变量和导入语句：import { a } from 'a'
  ...unusedImports,
  ...sortObject, // 对象属性排序

  // 语言特定规则
  ...typescript, // TypeScript 规则
  ...vueTypescript, // Vue3 + TypeScript 规则
  ...react, // React 规则
].flat()
