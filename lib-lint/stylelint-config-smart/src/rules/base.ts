// ===== 基础规则 =====
export const baseRules = {
  'custom-property-pattern': [
    '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    {
      message: '自定义CSS变量应使用kebab-case命名',
    },
  ],
  'declaration-block-no-duplicate-properties': true, // 禁止在声明块中出现重复的属性
  'font-family-no-missing-generic-family-keyword': null, // 允许字体族没有通用族名称，适用于使用自定义字体的情况
  'keyframes-name-pattern': null, // 不限制关键帧名称模式
  'max-nesting-depth': 5, // 限制嵌套深度，防止过深的选择器嵌套
  'no-descending-specificity': true, // 禁止在高优先级选择器后出现被覆盖的低优先级选择器
  'no-empty-source': null, // 允许空文件，方便创建模板文件
  'selector-class-pattern': null, // 不限制类选择器命名模式，适应不同项目的命名规范
  'selector-id-pattern': null, // 不限制ID选择器命名模式
  'selector-max-compound-selectors': 5, // 限制复合选择器数量，提高选择器性能
  'selector-max-id': 1, // 限制一个选择器中ID选择器的数量为1，避免高特异性
}
