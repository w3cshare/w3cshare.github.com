import { defineConfig } from "cz-git";
import { globSync } from "glob";

const subProject = globSync(
  "{apps,apps-*,micro-*,lib-*,libs,packages,package-*}/*/",
  {
    cwd: process.cwd(),
    ignore: ["**/node_modules/**", "**/.git/**", "**/docs/**", "docs/**"],
    onlyDirectories: true,
  },
).map((path) => path.split("/")[1]);
console.log("🚀 ~ file: .commitlintrc.mjs:12 ~ subProjectPaths:", subProject);

/**
 * 自定义提交类型列表
 */
const types = [
  // 常规类型
  "feat", // 新功能
  "fix", // 修复Bug
  "docs", // 文档更新
  "style", // 代码风格调整（不影响代码功能）
  "refactor", // 代码重构（不包括 bug 修复或功能新增）
  "perf", // 性能优化
  "test", // 测试相关
  "build", // 构建系统或外部依赖更改
  "ci", // CI配置更改
  "chore", // 其他改动（不修改src或测试文件）
  "revert", // 回滚之前的提交

  // 自定义扩展类型
  "ui", // UI相关更改
  "wip", // 开发中的工作（Work In Progress）
  "api", // API相关更改
  "release", // 版本发布
  "deploy", // 部署相关
  "config", // 配置调整
  "i18n", // 国际化
  "lint", // 代码检查调整
  "types", // 类型定义文件更改
];

/**
 * 自定义作用域列表（可根据实际项目组件/模块进行调整）
 */
const scopes = [
  ...subProject, // 子项目
  "components", // 组件
  "utils", // 工具
  "styles", // 样式
  "deps", // 依赖
  "config", // 配置
  "core", // 核心功能
  "ci", // 持续集成
  "scripts", // 脚本
  "docs", // 文档
  "release", // 发布
  "other", // 其他
  "", // 允许空作用域
];

/**
 * Commitlint 配置
 */
const configuration = {
  rules: {
    // type类型定义
    "type-enum": [2, "always", types],

    // type必须小写
    "type-case": [2, "always", "lower-case"],

    // type不能为空
    "type-empty": [2, "never"],

    // scope定义
    "scope-enum": [2, "always", scopes],

    // scope必须小写
    "scope-case": [2, "always", "lower-case"],

    // 允许scope为空
    "scope-empty": [0, "never"],

    // subject必须小写开头
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],

    // subject不能为空
    "subject-empty": [2, "never"],

    // subject不能以.结尾
    "subject-full-stop": [2, "never", "."],

    // body以空行开头
    "body-leading-blank": [1, "always"],

    // footer以空行开头
    "footer-leading-blank": [1, "always"],

    // header最大长度
    "header-max-length": [2, "always", 100],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ",",
    },
    messages: {
      skip: ":跳过",
      max: "最多%d个字符",
      min: "至少%d个字符",
      emptyWarning: "不能为空",
      upperLimitWarning: "超过限制",
      lowerLimitWarning: "低于限制",
    },
    questions: {
      type: {
        description: "选择您要提交的更改类型",
        enum: {
          feat: {
            description: "新功能",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "修复Bug",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          docs: {
            description: "文档更新",
            title: "Documentation",
            emoji: "📚",
          },
          style: {
            description: "格式调整 (不影响代码功能)",
            title: "Styles",
            emoji: "💎",
          },
          refactor: {
            description: "代码重构 (不是新功能，也不是修bug)",
            title: "Code Refactoring",
            emoji: "📦",
          },
          perf: {
            description: "性能优化",
            title: "Performance Improvements",
            emoji: "🚀",
          },
          test: {
            description: "测试相关",
            title: "Tests",
            emoji: "🚨",
          },
          build: {
            description: "构建系统或外部依赖更改",
            title: "Builds",
            emoji: "🛠",
          },
          ci: {
            description: "CI配置更改",
            title: "Continuous Integrations",
            emoji: "⚙️",
          },
          chore: {
            description: "其他改动 (不修改src或测试文件)",
            title: "Chores",
            emoji: "♻️",
          },
          revert: {
            description: "回滚之前的提交",
            title: "Reverts",
            emoji: "🗑",
          },
          ui: {
            description: "UI相关更改",
            title: "UI",
            emoji: "🎨",
          },
          wip: {
            description: "开发中的工作",
            title: "WIP",
            emoji: "🚧",
          },
          api: {
            description: "API相关更改",
            title: "API",
            emoji: "🔌",
          },
          i18n: {
            description: "国际化相关",
            title: "Internationalization",
            emoji: "🌐",
          },
        },
      },
      scope: {
        description: "更改的范围 (组件或文件名)",
      },
      subject: {
        description: "写一个简短的描述",
      },
      body: {
        description: "提供更详细的变更描述",
      },
      isBreaking: {
        description: "是否有破坏性变更?",
      },
      breakingBody: {
        description: "破坏性变更的详细描述",
      },
      breaking: {
        description: "描述破坏性变更",
      },
      isIssueAffected: {
        description: "是否影响任何未解决的Issues?",
      },
      issuesBody: {
        description: "如果Issues已关闭，描述一下",
      },
      issues: {
        description: '添加Issue引用 (例如: "fix #123", "ref #123")',
      },
    },
    // 配置 START
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      {
        value: "feat",
        name: "feat:     ✨  新增功能 | A new feature",
        emoji: ":sparkles:",
      },
      {
        value: "fix",
        name: "fix:      🐛  修复缺陷 | A bug fix",
        emoji: ":bug:",
      },
      {
        value: "docs",
        name: "docs:     📝  文档更新 | Documentation only changes",
        emoji: ":memo:",
      },
      {
        value: "style",
        name: "style:    💄  代码格式 | Changes that do not affect the meaning of the code",
      },
      {
        value: "refactor",
        name: "refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature",
        emoji: ":lipstick:",
      },
      {
        value: "perf",
        name: "perf:     ⚡️  性能提升 | A code change that improves performance",
        emoji: ":recycle:",
      },
      {
        value: "test",
        name: "test:     ✅  测试相关 | Adding missing tests or correcting existing tests",
        emoji: ":zap:",
      },
      {
        value: "build",
        name: "build:    📦️   构建相关 | Changes that affect the build system or external dependencies",
        emoji: ":package:",
      },
      {
        value: "ci",
        name: "ci:       🎡  持续集成 | Changes to our CI configuration files and scripts",
        emoji: ":ferris_wheel:",
      },
      {
        value: "revert",
        name: "revert:   ⏪️  回退代码 | Revert to a commit",
        emoji: ":rewind:",
      },
      {
        value: "chore",
        name: "chore:    🔨  其他修改 | Other changes that do not modify src or test files",
        emoji: ":hammer:",
      },
    ],
    useEmoji: true,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [...scopes],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      { value: "closed", name: "closed:   标记 ISSUES 已完成" },
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
  // 配置 END
};

/** @type {import('cz-git').UserConfig} */
export default defineConfig(configuration);
