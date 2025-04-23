/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-13 01:29:13
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 16:49:17
 * @FilePath: /FullStack/app/google-tab-home/vite.config.ts
 * @Description: google-tab-home vite.config.ts
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { execSync } from 'child_process'

// 确保目标目录存在
const ensureDir = (dir: string) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
}

// 复制目录中的所有文件
const copyDir = (srcDir: string, destDir: string) => {
  ensureDir(destDir)

  try {
    const files = readdirSync(srcDir)

    for (const file of files) {
      const srcPath = resolve(srcDir, file)
      const destPath = resolve(destDir, file)

      copyFileSync(srcPath, destPath)
      console.log(`Copied: ${srcPath} -> ${destPath}`)
    }
  } catch (error) {
    console.error(`Failed to copy directory ${srcDir} to ${destDir}:`, error)
  }
}

// 将manifest.json和图标文件复制到输出目录
const copyExtensionFiles = () => {
  const targetDir = resolve(__dirname, 'lib')
  const iconsTargetDir = resolve(targetDir, 'icons')

  ensureDir(targetDir)
  ensureDir(iconsTargetDir)

  // 复制manifest文件
  copyFileSync(
    resolve(__dirname, 'src/extension/manifest.json'),
    resolve(targetDir, 'manifest.json'),
  )

  // 尝试复制图标文件
  const iconsSourceDir = resolve(__dirname, 'src/extension/icons')
  // 1. 先查找自动生成的图标
  if (existsSync(iconsSourceDir)) {
    copyDir(iconsSourceDir, iconsTargetDir)
  }
  // 2. 如果没找到，尝试复制预先准备好的简单图标
  else {
    const simpleIconsDir = resolve(__dirname, 'src/extension/simple-icons')
    if (existsSync(simpleIconsDir)) {
      console.log('Copying simple icons...')

      // 将SVG图标复制到目标目录
      const sizes = [16, 48, 128]
      for (const size of sizes) {
        const svgSource = resolve(simpleIconsDir, `icon${size}.svg`)
        if (existsSync(svgSource)) {
          copyFileSync(svgSource, resolve(iconsTargetDir, `icon${size}.svg`))
          // 同时也以PNG名称复制SVG文件(暂时解决方案)
          copyFileSync(svgSource, resolve(iconsTargetDir, `icon${size}.png`))
          console.log(`Copied icon${size}.svg to target directory`)
        }
      }
    }
    // 3. 如果都没有找到，尝试生成图标
    else {
      console.warn('No icons found. Trying to generate default icons...')
      try {
        execSync('node src/extension/createDefaultIcons.js')

        // 生成后再次尝试复制
        if (existsSync(iconsSourceDir)) {
          copyDir(iconsSourceDir, iconsTargetDir)
        }
      } catch (error) {
        console.error('Failed to generate default icons:', error)
      }
    }
  }

  console.log('Extension files copied successfully')
}

export default defineConfig({
  // 基本路径
  base: './',

  // 构建配置
  build: {
    outDir: 'lib',
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },

  // 解析配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  // 开发服务器配置
  server: {
    port: 3000,
    open: true,
  },

  // 插件配置
  plugins: [
    {
      name: 'vite-plugin-extension-files',
      closeBundle() {
        // 在构建完成后执行
        copyExtensionFiles()

        // 可选：打包为zip文件
        try {
          const version = process.env.npm_package_version || '0.0.7'
          execSync(`cd lib && zip -r ../lib/google-tab-home-v${version}.zip .`)
          console.log(`Extension packaged to google-tab-home-v${version}.zip`)
        } catch (error) {
          console.error('Failed to create zip file:', error)
        }
      },
    },
  ],
})
