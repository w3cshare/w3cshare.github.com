/**
 * @Author: Trae AI
 * @Description: 提交类型定义文件
 */

// 定义基础的提交类型数据结构
interface CommitTypeInfo {
  description: string

  // 中文描述
  emoji: string

  // emoji表情符号
  emojiCode: string

  // 英文标题
  formattedName?: string // emoji代码
  title: string

  value: string // 格式化后的名称（用于显示）
}

// 基础提交类型数据 - 单一数据源
const commitTypeData: Record<string, CommitTypeInfo> = {
  api: {
    description: 'API相关更改',
    emoji: '🔌',
    emojiCode: ':electric_plug:',
    title: 'API related changes',
    value: 'api',
  },
  build: {
    description: '构建系统或外部依赖更改',
    emoji: '📦️',
    emojiCode: ':package:',
    title: 'Changes that affect the build system or external dependencies',
    value: 'build',
  },
  chore: {
    description: '其他改动 (不修改src或测试文件)',
    emoji: '♻️',
    emojiCode: ':recycle:',
    title: 'Other changes that do not modify src or test files',
    value: 'chore',
  },
  ci: {
    description: 'CI配置更改',
    emoji: '🎡',
    emojiCode: ':ferris_wheel:',
    title: 'Changes to our CI configuration files and scripts',
    value: 'ci',
  },
  config: {
    description: '修改配置文件',
    emoji: '🔧',
    emojiCode: ':wrench:',
    title: 'Configuration file changes',
    value: 'config',
  },
  deploy: {
    description: '部署相关',
    emoji: '🚀',
    emojiCode: ':rocket:',
    title: 'Deployment related changes',
    value: 'deploy',
  },
  docs: {
    description: '文档更新',
    emoji: '📝',
    emojiCode: ':memo:',
    title: 'Documentation only changes',
    value: 'docs',
  },
  feat: {
    description: '新功能',
    emoji: '✨',
    emojiCode: ':sparkles:',
    title: 'A new feature',
    value: 'feat',
  },
  file: {
    description: '添加新文件',
    emoji: '📦',
    emojiCode: ':package:',
    title: 'Add new files',
    value: 'file',
  },
  fix: {
    description: '修复Bug',
    emoji: '🐛',
    emojiCode: ':bug:',
    title: 'A bug fix',
    value: 'fix',
  },
  git: {
    description: '添加或修改.gitignore 文件',
    emoji: '🙈',
    emojiCode: ':see_no_evil:',
    title: 'Add or modify .gitignore files',
    value: 'git',
  },
  i18n: {
    description: '国际化相关',
    emoji: '🌐',
    emojiCode: ':globe_with_meridians:',
    title: 'Internationalization and localization changes',
    value: 'i18n',
  },
  init: {
    description: '项目初始化',
    emoji: '🎉',
    emojiCode: ':tada:',
    title: 'Project initialization',
    value: 'init',
  },
  lint: {
    description: '代码检查调整',
    emoji: '🔍',
    emojiCode: ':mag:',
    title: 'Code linting rule changes',
    value: 'lint',
  },
  patch: {
    description: '添加补丁更新',
    emoji: '🚑',
    emojiCode: ':ambulance:',
    title: 'Add patch updates',
    value: 'patch',
  },
  perf: {
    description: '性能优化',
    emoji: '👌',
    emojiCode: ':ok_hand:',
    title: 'A code change that improves performance',
    value: 'perf',
  },
  refactor: {
    description: '代码重构 (不是新功能，也不是修bug)',
    emoji: '🎨',
    emojiCode: ':art:',
    title: 'A code change that neither fixes a bug nor adds a feature',
    value: 'refactor',
  },
  release: {
    description: '版本发布',
    emoji: '🚀',
    emojiCode: ':rocket:',
    title: 'Version release related',
    value: 'release',
  },
  revert: {
    description: '回滚之前的提交',
    emoji: '⏪',
    emojiCode: ':rewind:',
    title: 'Revert to a commit',
    value: 'revert',
  },
  style: {
    description: '格式调整 (不影响代码功能)',
    emoji: '💄',
    emojiCode: ':lipstick:',
    title: 'Changes that do not affect the meaning of the code',
    value: 'style',
  },
  test: {
    description: '测试相关',
    emoji: '✅',
    emojiCode: ':white_check_mark:',
    title: 'Adding missing tests or correcting existing tests',
    value: 'test',
  },
  types: {
    description: '类型定义文件更改',
    emoji: '📦',
    emojiCode: ':package:',
    title: 'TypeScript type definition file changes',
    value: 'types',
  },
  ui: {
    description: 'UI相关更改',
    emoji: '🎨',
    emojiCode: ':art:',
    title: 'User interface related changes',
    value: 'ui',
  },
  wip: {
    description: '开发中的工作',
    emoji: '🚧',
    emojiCode: ':construction:',
    title: 'Work In Progress',
    value: 'wip',
  },
}

// 为每个类型添加格式化的名称
Object.keys(commitTypeData).forEach(key => {
  const type = commitTypeData[key]

  // 格式化名称，保持与原来格式一致
  type.formattedName = `${type.value}:${' '.repeat(Math.max(0, 7 - type.value.length))} ${type.emoji}  ${type.description} | ${type.title}`
})

// 导出原始的types数组（保持向后兼容）
export const types = Object.values(commitTypeData).map(type => ({
  emoji: type.emojiCode,
  name: type.formattedName,
  value: type.value,
}))

// 导出原始的typeEnum对象（保持向后兼容）
export const typeEnum = Object.entries(commitTypeData).reduce(
  (acc, [key, type]) => {
    acc[key] = {
      description: type.description,
      emoji: type.emoji,
      title: type.title,
    }
    return acc
  },
  {} as Record<string, { description: string; emoji: string; title: string }>,
)

// 导出基础数据，方便将来扩展
export const commitTypes = commitTypeData
