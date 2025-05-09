/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-09 14:59:44
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-09 23:41:25
 * @FilePath: /FullStack/lib-lint/commitlint-plugin-smart/src/cz-git/index.ts
 * @Description:
 */
import { defineConfig as _defineConfig } from 'cz-git'
import { globSync } from 'glob'
import deepmerge from 'deepmerge'
import { configuration as czConfiguration } from './config'
import { configuration as otherConfiguration } from './other'

const subProject = globSync('{apps,apps-*,micro-*,lib-*,libs,packages,package-*}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
}).map(path => path.split('/')[1])

const monoConfiguration = {
  prompt: { scopes: subProject },
}
otherConfiguration.rules['scope-enum'] = [2, 'always', subProject]

/** @type {import('cz-git').UserConfig} */
export const defineConfig = (config = {}) => {
  //
  return _defineConfig(
    deepmerge.all([otherConfiguration, czConfiguration, monoConfiguration, config]),
  )
}
