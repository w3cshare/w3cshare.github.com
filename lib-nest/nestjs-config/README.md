<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 13:00:50
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-31 17:54:00
 * @FilePath: /FullStack/micro-service/nestjs-config/README.md
 * @Description: --
-->

# `@smarts-isoftstone/nestjs-config`

> TODO: description

## Usage

```
const nestjsConfig = require('@smarts-isoftstone/nestjs-config');

// TODO: DEMONSTRATE API
```

## 使用

```
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: yourSchema
    })
  ]
})
```
