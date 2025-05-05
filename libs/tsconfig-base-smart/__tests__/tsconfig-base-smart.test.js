/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 10:30:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 10:30:00
 * @FilePath: /FullStack/libs/tsconfig-base-smart/__tests__/tsconfig-base-smart.test.js
 * @Description: tsconfig-base-smart插件测试文件
 */

'use strict'

const path = require('path')
const fs = require('fs')
const tsconfigBase = require('..')
const assert = require('assert').strict

/**
 * 测试获取基础配置路径功能
 */
function testGetBaseTsConfigPath() {
  console.log('测试获取基础配置路径...')
  const basePath = tsconfigBase.getBaseTsConfigPath()
  console.log('基础配置路径:', basePath)

  // 验证路径是否存在
  const exists = fs.existsSync(basePath)
  assert.strictEqual(exists, true, '基础配置文件应该存在')

  // 验证是否为正确的文件
  const filename = path.basename(basePath)
  assert.strictEqual(filename, 'tsconfig.base.json', '文件名应为tsconfig.base.json')

  console.log('获取基础配置路径测试完成')
  return true
}

/**
 * 测试创建配置功能
 */
function testCreateTsConfig() {
  console.log('测试创建配置...')

  // 测试默认配置
  const defaultConfig = tsconfigBase.createTsConfig()
  console.log('默认配置:', JSON.stringify(defaultConfig, null, 2))
  assert.strictEqual(
    defaultConfig.extends,
    'tsconfig-base-smart/tsconfig.base.json',
    'extends字段应正确设置',
  )

  // 测试自定义配置
  const customConfig = tsconfigBase.createTsConfig({
    compilerOptions: {
      outDir: './custom-dist',
      target: 'ES2022',
    },
    include: ['src/**/*'],
  })

  console.log('自定义配置:', JSON.stringify(customConfig, null, 2))
  assert.strictEqual(
    customConfig.extends,
    'tsconfig-base-smart/tsconfig.base.json',
    'extends字段应正确设置',
  )
  assert.strictEqual(customConfig.compilerOptions.outDir, './custom-dist', 'outDir应正确设置')
  assert.strictEqual(customConfig.compilerOptions.target, 'ES2022', 'target应正确设置')
  assert.deepStrictEqual(customConfig.include, ['src/**/*'], 'include应正确设置')

  console.log('创建配置测试完成')
  return true
}

/**
 * 运行所有测试
 */
function runTests() {
  console.log('开始测试 tsconfig-base-smart...')

  const test1 = testGetBaseTsConfigPath()
  const test2 = testCreateTsConfig()

  if (test1 && test2) {
    console.log('所有测试通过！')
    return true
  } else {
    console.error('测试失败！')
    return false
  }
}

// 执行测试
runTests()
console.info('tsconfig-base-smart tests completed')
