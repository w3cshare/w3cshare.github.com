<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 11:40:07
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-17 14:50:07
 * @FilePath: /FullStack/micro-service/nest-template/src/module/auth/cli.md
 * @Description:
-->

# 全局

```bash
nest g module auth
nest g controller auth
nest g service auth

nest g guard guard/auth

nest g decorator decorator/auth
```

# 局部

## 1. 安装（赞成）

```bash
nest g module module/auth
nest g controller module/auth
nest g service module/auth

# CREATE src/module/auth/auth.guard.spec.ts (160 bytes)
# CREATE src/module/auth/auth.guard.ts (299 bytes)
nest g guard module/auth

# CREATE src/module/auth/auth.decorator.ts (117 bytes)
nest g decorator module/auth
```
