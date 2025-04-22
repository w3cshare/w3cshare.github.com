/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 22:50:31
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-22 00:29:50
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/test-lint.ts
 * @Description: --
 */
// 测试eslint是否能正确检查
import { Injectable } from '@nestjs/common';

// const badVariable = 'test'; // 应该使用const而不是var

@Injectable()
export class TestLintService {
  constructor() {
    // console.log('测试lint'); // 应该警告不要使用console
  }

  public testMethod() {
    // const unused = 'unused';
    return 'test';
  }
}
