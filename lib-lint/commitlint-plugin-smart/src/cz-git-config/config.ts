export const types = [
  {
    emoji: ':sparkles:',
    name: 'feat:     ✨  新功能 | A new feature',
    value: 'feat',
  },
  {
    emoji: ':bug:',
    name: 'fix:      🐛  修复Bug | A bug fix',
    value: 'fix',
  },
  {
    emoji: ':memo:',
    name: 'docs:     📝  文档更新 | Documentation only changes',
    value: 'docs',
  },
  {
    emoji: ':lipstick:',
    name: 'style:    💄  格式调整 | Changes that do not affect the meaning of the code',
    value: 'style',
  },
  {
    emoji: ':art:',
    name: 'refactor: 🎨  代码重构 | A code change that neither fixes a bug nor adds a feature',
    value: 'refactor',
  },
  {
    emoji: ':ok_hand:',
    name: 'perf:     👌  性能优化 | A code change that improves performance',
    value: 'perf',
  },
  {
    emoji: ':white_check_mark:',
    name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests',
    value: 'test',
  },
  {
    emoji: ':package:',
    name: 'build:    📦️  构建相关 | Changes that affect the build system or external dependencies',
    value: 'build',
  },
  {
    emoji: ':ferris_wheel:',
    name: 'ci:       🎡  CI配置更改 | Changes to our CI configuration files and scripts',
    value: 'ci',
  },
  {
    emoji: ':rewind:',
    name: 'revert:   ⏪  回退代码 | Revert to a commit',
    value: 'revert',
  },
  {
    emoji: ':recycle:',
    name: 'chore:    ♻️   其他改动 | Other changes that do not modify src or test files',
    value: 'chore',
  },
  {
    emoji: ':electric_plug:',
    name: 'api:      🔌  API相关更改 | API related changes',
    value: 'api',
  },
  {
    emoji: ':wrench:',
    name: 'config:   🔧  修改配置文件 | Configuration changes',
    value: 'config',
  },
  {
    emoji: ':rocket:',
    name: 'deploy:   🚀  部署相关 | Deployment related changes',
    value: 'deploy',
  },
  {
    emoji: ':package:',
    name: 'file:     📦  添加新文件 | Add new files',
    value: 'file',
  },
  {
    emoji: ':see_no_evil:',
    name: 'git:      🙈  添加或修改.gitignore文件 | Add or update .gitignore file',
    value: 'git',
  },
  {
    emoji: ':globe_with_meridians:',
    name: 'i18n:     🌐  国际化相关 | Internationalization',
    value: 'i18n',
  },
  {
    emoji: ':tada:',
    name: 'init:     🎉  项目初始化 | Project initialization',
    value: 'init',
  },
  {
    emoji: ':mag:',
    name: 'lint:     🔍  代码检查调整 | Linting related changes',
    value: 'lint',
  },
  {
    emoji: ':ambulance:',
    name: 'patch:    🚑  添加补丁更新 | Add patch update',
    value: 'patch',
  },
  {
    emoji: ':rocket:',
    name: 'release:  🚀  版本发布 | Release version',
    value: 'release',
  },
  {
    emoji: ':package:',
    name: 'types:    📦  类型定义文件更改 | TypeScript type definition changes',
    value: 'types',
  },
  {
    emoji: ':art:',
    name: 'ui:       🎨  UI相关更改 | UI related changes',
    value: 'ui',
  },
  {
    emoji: ':construction:',
    name: 'wip:      🚧  开发中的工作 | Work in progress',
    value: 'wip',
  },
]

/**
 * cz-git 配置文件
 * 用于规范 Git Commit 提交信息格式，提升团队协作与代码可维护性。
 */
export const configuration = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    // AI 模式下的建议数量
    aiNumber: 1,

    // 别名设置：例如输入 `fd` 将自动转换为 `docs: fix typos`
    alias: { fd: 'docs: fix typos' },

    // 允许添加重大变更（breaking changes）的提交类型
    allowBreakingChanges: ['feat', 'fix'],

    // 是否允许自定义 issue 前缀（如 #123）
    allowCustomIssuePrefix: true,

    // 是否允许自定义作用域（scope）
    allowCustomScopes: true,

    // 是否允许空的 issue 前缀
    allowEmptyIssuePrefix: true,

    // 是否允许空的作用域
    allowEmptyScopes: true,

    // 换行符（用于 body 和 breaking change 的多行输入）
    breaklineChar: '|',

    // 每行最大字符数
    breaklineNumber: 100,

    // 是否启用颜色高亮确认信息
    confirmColorize: true,

    // 自定义 issue 前缀的别名
    customIssuePrefixAlias: 'custom',

    // 自定义 issue 前缀的位置对齐方式
    customIssuePrefixAlign: 'top',

    // 自定义作用域的别名
    customScopesAlias: 'custom',

    // 自定义作用域的位置对齐方式
    customScopesAlign: 'bottom',

    // 默认的 body 内容（可选）
    defaultBody: '',

    // 默认的 issues 关联内容（如 #123）
    defaultIssues: '',

    // 默认作用域
    defaultScope: '',

    // 默认的提交描述（subject）
    defaultSubject: '',

    // Emoji 对齐方式
    emojiAlign: 'center',

    // 空 issue 前缀的别名
    emptyIssuePrefixAlias: 'skip',

    // 空作用域的别名
    emptyScopesAlias: 'empty',

    // 可选的 issue 前缀列表（适用于 Gitee 等平台）
    issuePrefixes: [
      { name: 'link:     链接 ISSUES 进行中', value: 'link' },
      { name: 'closed:   标记 ISSUES 已完成', value: 'closed' },
    ],

    // 是否进入标记重大变更模式
    markBreakingChangeMode: false,

    // 各个提示语句定义
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

    // 作用域覆盖（可用于不同提交类型的特定作用域）
    scopeOverrides: undefined,

    // 可选的作用域列表
    scopes: [],

    // 跳过的提问序号数组
    skipQuestions: [],

    // 主题颜色代码（留空表示默认）
    themeColorCode: '',

    // 支持的提交类型及其图标和说明
    types,

    // 提交标题是否大写
    upperCaseSubject: false,

    // 是否启用 AI 智能推荐
    useAI: false,

    // 是否在提交信息前显示 Emoji 图标
    useEmoji: true,
  },

  // 提交规则（可参考 commitlint 官方文档配置）
  rules: {
    /*
     * @see: https://commitlint.js.org/#/reference-rules
     */
  },
}
