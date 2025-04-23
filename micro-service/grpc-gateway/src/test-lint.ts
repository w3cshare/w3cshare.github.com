/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 22:50:31
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 21:28:03
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/test-lint.ts
 * @Description: --
 */
// 测试eslint是否能正确检查
import { Injectable } from '@nestjs/common'

// 将未使用的变量添加下划线前缀，表示有意不使用
const _badVariable = 'test' // 应该使用const而不是var
const aaa = 'test'

// console.log('🚀 ~ file: test-lint.ts:15 ~ aaa:', aaa)

@Injectable()
export class TestLintService {
  constructor() {
    console.log('测试lint') // 应该警告不要使用console
  }

  public testMethod() {
    const unusedVariable = 'test'

    // console.log('🚀 ~ file: test-lint.ts:26 ~ unusedVariable:', unusedVariable)

    // 移除未使用的变量
    return 'test'
  }
}
