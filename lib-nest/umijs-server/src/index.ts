import express from 'express'
import { Server } from 'http'
import bodyParser from 'body-parser'
import type { IApi } from '@umijs/types'

interface ServerOptions {
  port?: number
  host?: string
  prefix?: string
  routes?: RouteConfig[]
}

interface RouteConfig {
  path: string
  method: 'get' | 'post' | 'put' | 'delete' | 'options'
  handler: (req: express.Request, res: express.Response) => void
}

class UmiJsServer {
  private app: express.Application
  private server: Server | null = null
  private options: ServerOptions = {
    port: 8000,
    host: 'localhost',
    prefix: '/api',
    routes: [],
  }

  constructor(options?: ServerOptions) {
    this.options = { ...this.options, ...options }
    this.app = express()
    this.setupMiddlewares()
    this.setupRoutes()
  }

  private setupMiddlewares() {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))

    // CORS middleware
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      )
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

      // 处理OPTIONS请求
      if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
      }

      next()
    })
  }

  private setupRoutes() {
    const { prefix, routes } = this.options

    // Default health check route
    this.app.get(`${prefix}/health`, (req, res) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() })
    })

    // Setup custom routes
    if (routes && routes.length > 0) {
      routes.forEach(route => {
        const { path, method, handler } = route
        const fullPath = `${prefix}${path}`
        this.app[method](fullPath, handler)
      })
    }
  }

  public start(): Promise<void> {
    const { port, host } = this.options

    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(port, host as string, () => {
          console.log(`UmiJS Server running at http://${host}:${port}${this.options.prefix}`)
          resolve()
        })

        // 添加错误处理
        this.server.on('error', err => {
          console.error('UmiJS Server error:', err)
          reject(err)
        })
      } catch (err) {
        console.error('Failed to start UmiJS Server:', err)
        reject(err)
      }
    })
  }

  public stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.server) {
        resolve()
        return
      }

      this.server.close(err => {
        if (err) {
          reject(err)
          return
        }
        this.server = null
        resolve()
      })
    })
  }

  public addRoute(route: RouteConfig): void {
    const { prefix } = this.options
    const { path, method, handler } = route
    const fullPath = `${prefix}${path}`
    this.app[method](fullPath, handler)
  }
  // 添加获取Express应用实例的方法，方便用户进行自定义配置
  public getApp(): express.Application {
    return this.app
  }

  // 添加获取HTTP服务器实例的方法
  public getServer(): Server | null {
    return this.server
  }

  // 添加获取服务器配置的方法
  public getOptions(): ServerOptions {
    return { ...this.options }
  }
}

// 使用标准的Umi插件导出方式
export default function (api: IApi): void {
  let server: UmiJsServer | null = null

  api.describe({
    key: 'umiJsServer',
    config: {
      schema(joi) {
        return joi.object({
          port: joi.number(),
          host: joi.string(),
          prefix: joi.string(),
          routes: joi.array(),
        })
      },
    },
  })

  // Register command to start server manually
  api.registerCommand({
    name: 'server',
    description: 'Start UmiJS server',
    fn: async () => {
      const userConfig = api.userConfig.umiJsServer || {}
      server = new UmiJsServer(userConfig)
      await server.start()
      console.log('UmiJS server started')
    },
  })

  // Start server with dev command
  api.onDevCompileDone(({ port }) => {
    const userConfig = api.userConfig.umiJsServer || {}
    // Use dev server port if not specified
    if (!userConfig.port && port) {
      userConfig.port = port + 1 // Use next port to avoid conflict
    }

    server = new UmiJsServer(userConfig)
    server.start().catch(err => {
      console.error('Failed to start UmiJS server:', err)
    })
  })

  // Stop server when dev server stops
  api.onExit(() => {
    if (server) {
      server.stop().catch(err => {
        console.error('Failed to stop UmiJS server:', err)
      })
    }
  })

  // Expose API for other plugins
  api.addUmiExports([
    {
      exportMembers: ['UmiJsServer'],
      source: '@smarts-isoftstone/umijs-server',
    },
  ])
}

export { UmiJsServer }
