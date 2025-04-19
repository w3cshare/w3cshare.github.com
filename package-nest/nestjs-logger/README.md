<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 13:58:58
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-03-29 18:12:57
 * @FilePath: /FullStack/micro-service/nestjs-logger/README.md
 * @Description: --
-->

# `@smarts-isoftstone/nestjs-logger`

> TODO: description

## Usage

```
const nestjsLogger = require('@smarts-isoftstone/nestjs-logger');

// TODO: DEMONSTRATE API
```

```

// import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  // LoggerService,
  LoggerModule,
} from '@smarts-isoftstone/nestjs-logger';

LoggerModule.register({
      level: 'debug',
      format: 'text',
    }),

    // LoggerModule.registerAsync({
    //   useFactory: (config: ConfigService) => ({
    //     level: config.get('LOG_LEVEL'),
    //     format: config.get('LOG_FORMAT'),
    //   }),
    //   inject: [ConfigService],
    // }),
```
