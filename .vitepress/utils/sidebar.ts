import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { DefaultTheme } from 'vitepress'

interface PackageInfo {
  displayName?: string
  name: string
  description?: string
}

// 读取 package.json
function readPackageJson(dir: string): PackageInfo | null {
  try {
    const packagePath = join(dir, 'package.json')
    return require(packagePath)
  } catch {
    return null
  }
}

// 获取目录下的 markdown 文件
function getMarkdownFiles(dir: string): string[] {
  const files = readdirSync(dir)
  return files.filter(file => file.endsWith('.md'))
}

// 获取目录下的子目录
function getSubDirectories(dir: string): string[] {
  const files = readdirSync(dir)
  return files.filter(file => {
    const fullPath = join(dir, file)
    return statSync(fullPath).isDirectory() && !file.startsWith('.')
  })
}

// 生成侧边栏项
function generateSidebarItem(dir: string, relativePath: string): DefaultTheme.SidebarItem {
  const packageJson = readPackageJson(dir)
  const markdownFiles = getMarkdownFiles(dir)
  const subDirs = getSubDirectories(dir)

  const items: DefaultTheme.SidebarItem[] = []

  // 添加 README.md 作为首页
  if (markdownFiles.includes('README.md')) {
    items.push({
      text: '概述',
      link: `${relativePath}/README.md`,
    })
  }

  // 添加 docs 目录下的文档
  if (subDirs.includes('docs')) {
    const docsPath = join(dir, 'docs')
    const docFiles = getMarkdownFiles(docsPath)
    docFiles.forEach(file => {
      if (file !== 'README.md') {
        items.push({
          text: file
            .replace('.md', '')
            .replace(/-/g, ' ')
            .replace(/^\w/, c => c.toUpperCase()),
          link: `${relativePath}/docs/${file}`,
        })
      }
    })
  }

  // 添加子目录
  subDirs
    .filter(subDir => subDir !== 'docs')
    .forEach(subDir => {
      const subDirPath = join(dir, subDir)
      const subPackageJson = readPackageJson(subDirPath)
      if (subPackageJson) {
        items.push(generateSidebarItem(subDirPath, `${relativePath}/${subDir}`))
      }
    })

  return {
    text: packageJson?.displayName || packageJson?.name || relativePath.split('/').pop() || '',
    items,
  }
}

// 生成侧边栏配置
export function generateSidebar(rootDir: string): DefaultTheme.Sidebar {
  const sidebar: DefaultTheme.Sidebar = {}
  const mainDirs = [
    'apps',
    'apps-native',
    'apps-python',
    'lib-nest',
    'lib-react',
    'lib-vue',
    'lib-cli',
    'lib-lint',
    'micro-frontend',
    'micro-service',
    'packages',
  ]

  mainDirs.forEach(dir => {
    const fullPath = join(rootDir, dir)
    try {
      if (statSync(fullPath).isDirectory()) {
        sidebar[`/${dir}/`] = [generateSidebarItem(fullPath, `/${dir}`)]
      }
    } catch {
      // 目录不存在时跳过
    }
  })

  // 添加根目录文档
  sidebar['/'] = [
    {
      text: '指南',
      items: [
        { text: '快速开始', link: '/docs/getting-started' },
        { text: '架构设计', link: '/docs/architecture' },
        { text: '目录结构', link: '/docs/directory-structure' },
        { text: '开发规范', link: '/docs/development-standards' },
        { text: '部署方案', link: '/docs/deployment' },
        { text: 'PNPM 指南', link: '/docs/pnpm-workspace-guide' },
      ],
    },
  ]

  console.log('🚀 ~ file: sidebar.ts:127 ~ sidebar:', JSON.stringify(sidebar))
  return sidebar
}
