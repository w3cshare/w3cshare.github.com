/**
 * 自定义提交类型列表
 */
const types = [
  // 常规类型
  'feat', // 新功能
  'fix', // 修复Bug
  'docs', // 文档更新
  'style', // 代码风格调整（不影响代码功能）
  'refactor', // 代码重构（不包括 bug 修复或功能新增）
  'perf', // 性能优化
  'test', // 测试相关
  'build', // 构建系统或外部依赖更改
  'ci', // CI配置更改
  'chore', // 其他改动（不修改src或测试文件）
  'revert', // 回滚之前的提交

  // 自定义扩展类型
  'ui', // UI相关更改
  'wip', // 开发中的工作（Work In Progress）
  'api', // API相关更改
  'release', // 版本发布
  'deploy', // 部署相关
  'config', // 配置调整
  'i18n', // 国际化
  'lint', // 代码检查调整
  'types', // 类型定义文件更改
]

/**
 * 自定义作用域列表（可根据实际项目组件/模块进行调整）
 */
const scopes = [
  'components', // 组件
  'utils', // 工具
  'styles', // 样式
  'deps', // 依赖
  'config', // 配置
  'core', // 核心功能
  'ci', // 持续集成
  'scripts', // 脚本
  'docs', // 文档
  'release', // 发布
  'other', // 其他
  '', // 允许空作用域
]

/**
 * Commitlint 配置
 */
export const configuration = {
  prompt: {
    messages: {
      emptyWarning: '不能为空',
      lowerLimitWarning: '低于限制',
      max: '最多%d个字符',
      min: '至少%d个字符',
      skip: ':跳过',
      upperLimitWarning: '超过限制',
    },
    questions: {
      body: {
        description: '提供更详细的变更描述',
      },
      breaking: {
        description: '描述破坏性变更',
      },
      breakingBody: {
        description: '破坏性变更的详细描述',
      },
      isBreaking: {
        description: '是否有破坏性变更?',
      },
      isIssueAffected: {
        description: '是否影响任何未解决的Issues?',
      },
      issues: {
        description: '添加Issue引用 (例如: "fix #123", "ref #123")',
      },
      issuesBody: {
        description: '如果Issues已关闭，描述一下',
      },
      scope: {
        description: '更改的范围 (组件或文件名)',
      },
      subject: {
        description: '写一个简短的描述',
      },
      type: {
        description: '选择您要提交的更改类型',
        enum: {
          api: {
            description: 'API相关更改',
            emoji: '🔌',
            title: 'API',
          },
          build: {
            description: '构建系统或外部依赖更改',
            emoji: '🛠',
            title: 'Builds',
          },
          chore: {
            description: '其他改动 (不修改src或测试文件)',
            emoji: '♻️',
            title: 'Chores',
          },
          ci: {
            description: 'CI配置更改',
            emoji: '⚙️',
            title: 'Continuous Integrations',
          },
          docs: {
            description: '文档更新',
            emoji: '📚',
            title: 'Documentation',
          },
          feat: {
            description: '新功能',
            emoji: '✨',
            title: 'Features',
          },
          fix: {
            description: '修复Bug',
            emoji: '🐛',
            title: 'Bug Fixes',
          },
          i18n: {
            description: '国际化相关',
            emoji: '🌐',
            title: 'Internationalization',
          },
          perf: {
            description: '性能优化',
            emoji: '🚀',
            title: 'Performance Improvements',
          },
          refactor: {
            description: '代码重构 (不是新功能，也不是修bug)',
            emoji: '📦',
            title: 'Code Refactoring',
          },
          revert: {
            description: '回滚之前的提交',
            emoji: '🗑',
            title: 'Reverts',
          },
          style: {
            description: '格式调整 (不影响代码功能)',
            emoji: '💎',
            title: 'Styles',
          },
          test: {
            description: '测试相关',
            emoji: '🚨',
            title: 'Tests',
          },
          ui: {
            description: 'UI相关更改',
            emoji: '🎨',
            title: 'UI',
          },
          wip: {
            description: '开发中的工作',
            emoji: '🚧',
            title: 'WIP',
          },
        },
      },
    },
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ',',
    },
  },
  rules: {
    // body以空行开头
    'body-leading-blank': [1, 'always'],

    // footer以空行开头
    'footer-leading-blank': [1, 'always'],

    // header最大长度
    'header-max-length': [2, 'always', 100],

    // scope必须小写
    'scope-case': [2, 'always', 'lower-case'],

    // 允许scope为空
    'scope-empty': [0, 'never'],

    // scope定义
    'scope-enum': [2, 'always', scopes],

    // subject必须小写开头
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],

    // subject不能为空
    'subject-empty': [2, 'never'],

    // subject不能以.结尾
    'subject-full-stop': [2, 'never', '.'],

    // type必须小写
    'type-case': [2, 'always', 'lower-case'],

    // type不能为空
    'type-empty': [2, 'never'],

    // type类型定义
    'type-enum': [2, 'always', types],
  },
}
