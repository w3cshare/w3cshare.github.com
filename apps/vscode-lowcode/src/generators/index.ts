import * as vscode from 'vscode'
import * as path from 'path'
import * as fs from 'fs'
import { Component } from '../types'
import { generateReactComponent } from '../components'

// 代码生成器类
export class CodeGenerator {
  constructor(private workspaceRoot: string) {}

  // 生成组件代码
  async generateComponentCode(components: Component[]): Promise<void> {
    try {
      // 生成React组件代码
      const componentCode = generateReactComponent(components)

      // 确保目标目录存在
      const componentsDir = path.join(this.workspaceRoot, 'src', 'components')
      if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true })
      }

      // 写入组件文件
      const componentPath = path.join(componentsDir, 'GeneratedComponent.tsx')
      fs.writeFileSync(componentPath, componentCode)

      // 显示成功消息
      vscode.window.showInformationMessage(`组件代码已生成: ${componentPath}`)

      // 打开生成的文件
      const document = await vscode.workspace.openTextDocument(componentPath)
      await vscode.window.showTextDocument(document)
    } catch (error) {
      vscode.window.showErrorMessage(`生成代码时发生错误: ${error}`)
    }
  }

  // 生成样式代码
  async generateStyleCode(components: Component[]): Promise<void> {
    try {
      // 生成CSS样式代码
      const styleCode = `
.generated-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.component {
  margin: 5px 0;
}
      `

      // 确保目标目录存在
      const stylesDir = path.join(this.workspaceRoot, 'src', 'styles')
      if (!fs.existsSync(stylesDir)) {
        fs.mkdirSync(stylesDir, { recursive: true })
      }

      // 写入样式文件
      const stylePath = path.join(stylesDir, 'generated.css')
      fs.writeFileSync(stylePath, styleCode)

      vscode.window.showInformationMessage(`样式代码已生成: ${stylePath}`)
    } catch (error) {
      vscode.window.showErrorMessage(`生成样式代码时发生错误: ${error}`)
    }
  }

  // 更新项目配置
  async updateProjectConfig(): Promise<void> {
    try {
      const packageJsonPath = path.join(this.workspaceRoot, 'package.json')
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

        // 添加必要的依赖
        packageJson.dependencies = {
          ...packageJson.dependencies,
          react: '^18.2.0',
          'react-dom': '^18.2.0',
        }

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
        vscode.window.showInformationMessage('项目配置已更新')
      }
    } catch (error) {
      vscode.window.showErrorMessage(`更新项目配置时发生错误: ${error}`)
    }
  }
}
