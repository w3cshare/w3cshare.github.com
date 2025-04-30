/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-29 19:34:01
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-31 13:10:54
 * @FilePath: /FullStack/micro-service/proto-pkg/src/proto-pkg.ts
 * @Description: --
 */
import { loadSync } from '@grpc/proto-loader'
import { join } from 'path'

function protoPkg() {
  return 'Hello from protoPkg'
}

function loadProto(protoFileName = 'user', protoDir = '../proto') {
  try {
    // 解析 proto 文件
    const packageDefinition = loadSync(
      join(
        __dirname,
        protoDir,
        protoFileName.indexOf('.proto') === -1 ? protoFileName + '.proto' : protoFileName,
      ),
      {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      },
    )

    // 获取 proto 包
    return packageDefinition
  } catch (error) {
    console.log(error)
    return null
  }
}

export { loadProto, protoPkg }
