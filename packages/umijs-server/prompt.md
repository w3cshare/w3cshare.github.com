<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-11 12:44:39
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-11 12:53:39
 * @FilePath: /umijs-server/prompt.md
 * @Description: umijs server plugin 提示词
-->
使用 UmiJS 实现一个插件，该插件依赖于项目的服务端口，并暴露以下 API 供页面中需要后端处理的接口使用：

接口1. **子进程命令执行**：
   - 功能：调用子进程执行命令，获取命令的执行结果，并将结果返回给调用者。

接口2. **打开新终端并执行命令**：
   - 功能：打开一个新的终端窗口，并在其中执行指定的命令。

接口3. **读取 pnpm-workspace.yaml 和子项目信息**：
   - 功能：读取 pnpm+lerna+workspace 项目根目录下的 `pnpm-workspace.yaml` 文件内容，并返回给调用者。
   - 同时，扫描每个目标目录下的子项目的 `package.json` 文件中的 `name` 字段，将这些名称作为数组 `children` 返回给调用者。
