/**
 * cz-git 配置
 */
export const configuration = {
  prompt: {
    aiNumber: 1,
    alias: { fd: 'docs: fix typos' },
    allowBreakingChanges: ['feat', 'fix'],
    allowCustomIssuePrefix: true,
    allowCustomScopes: true,
    allowEmptyIssuePrefix: true,
    allowEmptyScopes: true,
    breaklineChar: '|',
    breaklineNumber: 100,
    confirmColorize: true,
    customIssuePrefixAlias: 'custom',
    customIssuePrefixAlign: 'top',
    customScopesAlias: 'custom',
    customScopesAlign: 'bottom',
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
    emojiAlign: 'center',
    emptyIssuePrefixAlias: 'skip',
    emptyScopesAlias: 'empty',
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { name: 'link:     链接 ISSUES 进行中', value: 'link' },
      { name: 'closed:   标记 ISSUES 已完成', value: 'closed' },
    ],
    markBreakingChangeMode: false,
    messages: {
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      confirmCommit: '是否提交或修改commit ?',
      customFooterPrefix: '输入自定义issue前缀 :',
      customScope: '请输入自定义的提交范围 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      scope: '选择一个提交范围（可选）:',
      subject: '填写简短精炼的变更描述 :\n',
      type: '选择你要提交的类型 :',
    },
    scopeOverrides: undefined,
    scopes: [],
    skipQuestions: [],
    themeColorCode: '',
    types: [
      {
        emoji: ':sparkles:',
        name: 'feat:     ✨  新增功能 | A new feature',
        value: 'feat',
      },
      {
        emoji: ':bug:',
        name: 'fix:      🐛  修复缺陷 | A bug fix',
        value: 'fix',
      },
      {
        emoji: ':memo:',
        name: 'docs:     📝  文档更新 | Documentation only changes',
        value: 'docs',
      },
      {
        name: 'style:    💄  代码格式 | Changes that do not affect the meaning of the code',
        value: 'style',
      },
      {
        emoji: ':lipstick:',
        name: 'refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature',
        value: 'refactor',
      },
      {
        emoji: ':recycle:',
        name: 'perf:     ⚡️  性能提升 | A code change that improves performance',
        value: 'perf',
      },
      {
        emoji: ':zap:',
        name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests',
        value: 'test',
      },
      {
        emoji: ':package:',
        name: 'build:    📦️   构建相关 | Changes that affect the build system or external dependencies',
        value: 'build',
      },
      {
        emoji: ':ferris_wheel:',
        name: 'ci:       🎡  持续集成 | Changes to our CI configuration files and scripts',
        value: 'ci',
      },
      {
        emoji: ':rewind:',
        name: 'revert:   ⏪️  回退代码 | Revert to a commit',
        value: 'revert',
      },
      {
        emoji: ':hammer:',
        name: 'chore:    🔨  其他修改 | Other changes that do not modify src or test files',
        value: 'chore',
      },
    ],
    upperCaseSubject: false,
    useAI: false,
    useEmoji: true,
  },
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
}
