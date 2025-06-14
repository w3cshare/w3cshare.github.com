// ===== Vue 相关规则 =====
export const vueRules = {
  'selector-class-pattern': null, // Vue组件允许任意类名模式
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['deep', 'global', 'slotted', 'v-bind'],
    },
  ],
  'selector-pseudo-element-no-unknown': [
    true,
    {
      ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
    },
  ],
}
