import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  // 注册命令
  let disposable = vscode.commands.registerCommand('vscode-pro.openDragDropUI', () => {
    // 创建并显示新的webview面板
    const panel = vscode.window.createWebviewPanel(
      'dragDropUI', // 面板标识
      'Drag & Drop UI Builder', // 面板标题
      vscode.ViewColumn.One, // 显示在编辑器的哪个部位
      {
        enableScripts: true, // 启用JS
        retainContextWhenHidden: true, // 隐藏时保持状态
      },
    )

    // 设置webview的HTML内容
    panel.webview.html = getWebviewContent()

    // 处理webview发来的消息
    panel.webview.onDidReceiveMessage(
      message => {
        switch (message.command) {
          case 'generateCode':
            generateCode(message.data)
            return
        }
      },
      undefined,
      context.subscriptions,
    )
  })

  context.subscriptions.push(disposable)
}

// 生成webview的HTML内容
function getWebviewContent() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Drag & Drop UI Builder</title>
      <style>
        body {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .components-panel {
          border: 1px solid #ccc;
          padding: 10px;
          margin-bottom: 20px;
        }
        .canvas {
          border: 2px dashed #ccc;
          min-height: 300px;
          padding: 20px;
        }
        .component {
          padding: 10px;
          margin: 5px;
          background: #f0f0f0;
          border: 1px solid #ddd;
          cursor: move;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="components-panel">
        <h3>组件库</h3>
        <div class="component" draggable="true" data-type="button">Button</div>
        <div class="component" draggable="true" data-type="input">Input</div>
        <div class="component" draggable="true" data-type="text">Text</div>
      </div>

      <div class="canvas" id="canvas">
        <h3>画布</h3>
        <!-- 拖拽的组件将在这里显示 -->
      </div>

      <button onclick="generateCode()">生成代码</button>

      <script>
        const canvas = document.getElementById('canvas');
        let components = [];

        // 拖拽事件处理
        document.querySelectorAll('.component').forEach(comp => {
          comp.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.type);
          });
        });

        canvas.addEventListener('dragover', (e) => {
          e.preventDefault();
        });

        canvas.addEventListener('drop', (e) => {
          e.preventDefault();
          const type = e.dataTransfer.getData('text/plain');
          const component = createComponent(type);
          canvas.appendChild(component);
          components.push({ type, id: Date.now() });
        });

        function createComponent(type) {
          const div = document.createElement('div');
          div.className = 'component';
          div.textContent = type;
          return div;
        }

        function generateCode() {
          // 发送消息到extension
          vscode.postMessage({
            command: 'generateCode',
            data: components
          });
        }
      </script>
    </body>
    </html>
  `
}

// 生成代码的函数
function generateCode(components: any[]) {
  // TODO: 根据组件配置生成实际的代码
  vscode.window.showInformationMessage('Code generation started!')
}

export function deactivate() {}
