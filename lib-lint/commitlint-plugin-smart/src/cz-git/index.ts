/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-09 14:59:44
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 11:59:16
 * @FilePath: /FullStack/lib-lint/commitlint-plugin-smart/src/cz-git/index.ts
 * @Description: --
 */
import { defineConfig as _defineConfig, UserConfig } from 'cz-git'
import deepmerge from 'deepmerge'
import { globSync } from 'glob'
import process from 'process'

import { configuration as defaultConfiguration } from '@/commitlint-config/config'
import { configuration as czConfiguration } from '@/cz-git-config/config'

const subProject = globSync('{apps,apps-*,micro-*,lib-*,libs,packages,package-*}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],

  // 使用标准的glob选项
  withFileTypes: true,
})
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name.split('/')[0])

interface UserConfigExtends extends UserConfig {
  isMongo?: boolean
}

/** @type {import('cz-git').UserConfig} */
export const defineConfig = (
  config: UserConfigExtends = {
    isMongo: false,
  },
) => {
  let monoConfiguration = {
    prompt: { scopes: [] },
  }
  if (config.isMongo) {
    const scopes = ['docs', ...subProject]
    monoConfiguration = {
      prompt: { scopes },
    }
    defaultConfiguration.rules['scope-enum'] = [2, 'always', scopes]
  }

  // 合并配置并显式断言为 UserConfig 类型
  const mergedConfig = deepmerge.all([
    defaultConfiguration,
    czConfiguration,
    monoConfiguration,
    config,
  ]) as import('cz-git').UserConfig
  return _defineConfig(mergedConfig)
}
