<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-18 10:20:46
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:36:03
 * @FilePath: /FullStack/micro-service/nest-template/cli.md
 * @Description: cli
-->

    ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
    │ name          │ alias       │ description                                  │
    │ application   │ application │ Generate a new application workspace         │
    │ class         │ cl          │ Generate a new class                         │
    │ configuration │ config      │ Generate a CLI configuration file            │
    │ controller    │ co          │ Generate a controller declaration            │
    │ decorator     │ d           │ Generate a custom decorator                  │
    │ filter        │ f           │ Generate a filter declaration                │
    │ gateway       │ ga          │ Generate a gateway declaration               │
    │ guard         │ gu          │ Generate a guard declaration                 │
    │ interceptor   │ itc         │ Generate an interceptor declaration          │
    │ interface     │ itf         │ Generate an interface                        │
    │ library       │ lib         │ Generate a new library within a monorepo     │
    │ middleware    │ mi          │ Generate a middleware declaration            │
    │ module        │ mo          │ Generate a module declaration                │
    │ pipe          │ pi          │ Generate a pipe declaration                  │
    │ provider      │ pr          │ Generate a provider declaration              │
    │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
    │ resource      │ res         │ Generate a new CRUD resource                 │
    │ service       │ s           │ Generate a service declaration               │
    │ sub-app       │ app         │ Generate a new application within a monorepo │
    └───────────────┴─────────────┴──────────────────────────────────────────────┘

## 测试

```bash

# 测试
# nest g application application
# nest g configuration configuration
nest g class class
nest g filter filter
nest g controller controller
nest g decorator decorator
nest g gateway gateway
nest g guard guard
nest g interceptor interceptor
nest g interface interface
nest g library library
nest g middleware middleware
nest g module module
nest g pipe pipe
nest g provider provider
nest g resolver resolver
nest g resource resource
nest g service service
nest g sub-app sub-app
```
