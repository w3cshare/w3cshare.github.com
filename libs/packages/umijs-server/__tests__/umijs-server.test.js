'use strict'

const { UmiJsServer } = require('..')
const assert = require('assert').strict
const http = require('http')

// 创建服务器实例进行测试
const server = new UmiJsServer({
  port: 9000,
  host: 'localhost',
  prefix: '/api',
})

// 测试服务器是否可以启动和停止
async function testServerStartStop() {
  try {
    // 启动服务器
    await server.start()
    console.info('Server started successfully')

    // 发送请求测试健康检查接口
    const healthCheckResult = await new Promise((resolve, reject) => {
      http
        .get('http://localhost:9000/api/health', res => {
          let data = ''
          res.on('data', chunk => {
            data += chunk
          })
          res.on('end', () => {
            resolve({
              statusCode: res.statusCode,
              data: JSON.parse(data),
            })
          })
        })
        .on('error', err => {
          reject(err)
        })
    })

    // 验证健康检查接口返回状态码为200
    assert.strictEqual(healthCheckResult.statusCode, 200)
    // 验证健康检查接口返回的状态为ok
    assert.strictEqual(healthCheckResult.data.status, 'ok')
    console.info('Health check endpoint test passed')

    // 停止服务器
    await server.stop()
    console.info('Server stopped successfully')

    console.info('umijsServer tests passed')
  } catch (err) {
    console.error('Test failed:', err)
    process.exit(1)
  }
}

testServerStartStop()
