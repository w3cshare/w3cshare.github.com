'use strict';

const eslintPluginSmarts = require('..');
const assert = require('assert').strict;

// 测试插件是否正确导出
describe('eslint-plugin-smarts', () => {
  it('应该导出插件对象', () => {
    assert.ok(eslintPluginSmarts);
    assert.ok(typeof eslintPluginSmarts === 'object');
  });

  it('应该包含configs属性', () => {
    assert.ok(eslintPluginSmarts.configs);
    assert.ok(eslintPluginSmarts.configs.recommended);
  });

  it('recommended配置应该包含rules', () => {
    assert.ok(eslintPluginSmarts.configs.recommended.rules);
    assert.ok(typeof eslintPluginSmarts.configs.recommended.rules === 'object');
  });

  it('recommended配置应该包含plugins', () => {
    assert.ok(eslintPluginSmarts.configs.recommended.plugins);
    assert.ok(typeof eslintPluginSmarts.configs.recommended.plugins === 'object');
  });

  // 测试React相关规则
  describe('React规则', () => {
    it('应该包含React相关规则', () => {
      const rules = eslintPluginSmarts.configs.recommended.rules;
      // 检查一些关键的React规则是否存在
      assert.ok('react/jsx-uses-react' in rules);
      assert.ok('react/jsx-uses-vars' in rules);
      assert.ok('react-hooks/rules-of-hooks' in rules);
    });
  });

  // 测试Vue相关规则
  describe('Vue规则', () => {
    it('应该包含Vue相关规则', () => {
      const rules = eslintPluginSmarts.configs.recommended.rules;
      // 检查一些关键的Vue规则是否存在
      assert.ok('vue/multi-word-component-names' in rules);
      assert.ok('vue/order-in-components' in rules);
      assert.ok('vue/component-name-in-template-casing' in rules);
    });
  });
});

console.info('eslint-plugin-smarts tests passed');
