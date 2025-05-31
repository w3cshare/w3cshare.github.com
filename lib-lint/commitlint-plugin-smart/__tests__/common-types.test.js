'use strict'

/**
 * @Author: wangwei
 * @Date: 2023-04-22
 * @Description: common-types.ts 文件的测试用例
 */

const assert = require('assert').strict
const { types, typeEnum, commitTypes } = require('../src/common-types')

describe('common-types', () => {
  // 测试 types 数组
  describe('types', () => {
    it('应该是一个非空数组', () => {
      assert.ok(Array.isArray(types))
      assert.ok(types.length > 0)
    })

    it('每个类型应该包含必要的属性', () => {
      types.forEach(type => {
        assert.ok(typeof type.value === 'string', '类型值应该是字符串')
        assert.ok(typeof type.name === 'string', '类型名称应该是字符串')
      })
    })
  })

  // 测试 typeEnum 对象
  describe('typeEnum', () => {
    it('应该是一个非空对象', () => {
      assert.ok(typeof typeEnum === 'object')
      assert.ok(Object.keys(typeEnum).length > 0)
    })

    it('键值应该与 types 数组中的值一致', () => {
      const typeValues = types.map(type => type.value)
      Object.keys(typeEnum).forEach(key => {
        assert.ok(typeValues.includes(typeEnum[key]))
      })
    })
  })

  // 测试 commitTypes 对象
  describe('commitTypes', () => {
    it('应该是一个非空对象', () => {
      assert.ok(typeof commitTypes === 'object')
      assert.ok(Object.keys(commitTypes).length > 0)
    })

    it('应该包含所有必要的提交类型', () => {
      // 检查是否包含常见的提交类型
      const commonTypes = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
      commonTypes.forEach(type => {
        assert.ok(
          Object.values(commitTypes).some(t => t.value === type),
          `应该包含 ${type} 类型`,
        )
      })
    })

    it('每个提交类型应该有正确的结构', () => {
      Object.values(commitTypes).forEach(type => {
        assert.ok(typeof type.value === 'string', '类型值应该是字符串')
        assert.ok(typeof type.name === 'string', '类型名称应该是字符串')
        assert.ok(
          typeof type.emoji === 'string' || type.emoji === undefined,
          'emoji 应该是字符串或未定义',
        )
      })
    })
  })
})

console.info('common-types tests passed')
