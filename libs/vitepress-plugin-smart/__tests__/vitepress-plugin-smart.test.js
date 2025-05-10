'use strict'

const { withSmartSync, withMermaid } = require('..')
const assert = require('assert').strict

async function runTests() {
  try {
    // 测试withSmartSync函数 (同步版本)
    console.log('测试 withSmartSync 函数...')
    const mockConfig = { title: '测试文档' }
    const enhancedConfig = withSmartSync(mockConfig)

    // 确保原始配置被保留
    assert.strictEqual(enhancedConfig.title, '测试文档')

    // 测试传入mermaid配置
    console.log('测试 mermaid 配置...')
    const configWithMermaid = withSmartSync(mockConfig, {
      mermaid: {
        enable: true,
        config: {
          theme: 'forest',
        },
      },
    })

    // 确保mermaid配置被正确应用
    assert.strictEqual(configWithMermaid.mermaid.theme, 'forest')

    // 测试禁用mermaid功能
    console.log('测试禁用 mermaid 功能...')
    const configWithoutMermaid = withSmartSync(mockConfig, {
      mermaid: {
        enable: false,
      },
    })

    // 确保mermaid配置没有被应用
    assert.strictEqual(configWithoutMermaid.mermaid, undefined)

    // 测试异步withMermaid函数
    console.log('测试异步 withMermaid 函数...')
    const result = await withMermaid(mockConfig)
    assert.strictEqual(typeof result, 'object')

    console.info('vitepress-plugin-smart 测试通过！')
  } catch (error) {
    console.error('测试失败:', error)
    process.exit(1)
  }
}

runTests()
