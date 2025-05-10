/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-10 18:46:33
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 20:57:13
 * @FilePath: /FullStack/libs/vitepress-plugin-smart/src/vitepress-plugin-smart.ts
 * @Description: vitepress-plugin-smart 插件
 */

import type { UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default function (config: UserConfig) {
  return withMermaid(config)
}
