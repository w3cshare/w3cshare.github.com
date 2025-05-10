/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-04 21:37:27
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 20:18:00
 * @FilePath: /FullStack/libs/vitepress-plugin-smart/src/vitepress-plugin-smart.ts
 * @Description: vitepress-plugin-smart
 */
// 使用动态导入处理ESM模块
import type { MermaidConfig } from 'mermaid'
import process from 'process'
import type { UserConfig } from 'vitepress'

// 由于vitepress-plugin-mermaid是ESM模块，我们使用动态导入避免CommonJS/ESM兼容性问题
type WithMermaidFn = (config: UserConfig) => UserConfig

export interface SmartPluginOptions {
  mermaid?: {
    config?: MermaidConfig

    /**
     * 是否启用mermaid，默认启用
     */
    enable?: boolean
  }
}

/**
 * 智能VitePress插件，集成了多种实用功能
 * @param config VitePress配置对象
 * @param options 插件选项
 * @returns 处理后的VitePress配置对象
 */
export async function withSmart(
  config: UserConfig,
  options: SmartPluginOptions = {},
): Promise<UserConfig> {
  let enhancedConfig = { ...config }

  // 集成mermaid功能
  if (options.mermaid?.enable !== false) {
    // 将mermaid配置添加到VitePress配置中
    if (options.mermaid?.config) {
      enhancedConfig.mermaid = options.mermaid.config
    }

    try {
      // 动态导入vitepress-plugin-mermaid
      const mermaidModule = await import('vitepress-plugin-mermaid')
      const withMermaid = mermaidModule.withMermaid as WithMermaidFn

      // 应用mermaid插件
      enhancedConfig = withMermaid(enhancedConfig)
    } catch (error) {
      process.stdout.write('加载vitepress-plugin-mermaid失败:', error)
    }
  }

  return enhancedConfig
}

// 为了向后兼容，提供一个同步版本，但不直接导入withMermaid
export function withSmartSync(config: UserConfig, options: SmartPluginOptions = {}): UserConfig {
  const enhancedConfig = { ...config }

  // 集成mermaid配置
  if (options.mermaid?.enable !== false && options.mermaid?.config) {
    enhancedConfig.mermaid = options.mermaid.config
  }

  return enhancedConfig
}

// 为了向后兼容，提供异步版本的withMermaid函数
export const withMermaid = async (config: UserConfig): Promise<UserConfig> => {
  try {
    const mermaidModule = await import('vitepress-plugin-mermaid')
    return mermaidModule.withMermaid(config)
  } catch (error) {
    process.stdout.write('加载vitepress-plugin-mermaid失败:', error)
    return config
  }
}
