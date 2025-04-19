<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-31 16:37:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-02 12:05:26
 * @FilePath: /FullStack/docker-compose/README.md
 * @Description: --
-->

# Docker Compose

[镜像加速器](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

```
{
  "registry-mirrors": [
    "https://docker.registry.cyou",
    "https://docker-cf.registry.cyou",
    "https://dockercf.jsdelivr.fyi",
    "https://docker.jsdelivr.fyi",
    "https://dockertest.jsdelivr.fyi",
    "https://mirror.aliyuncs.com",
    "https://dockerproxy.com",
    "https://mirror.baidubce.com",
    "https://docker.m.daocloud.io",
    "https://docker.nju.edu.cn",
    "https://docker.mirrors.sjtug.sjtu.edu.cn",
    "https://docker.mirrors.ustc.edu.cn",
    "https://mirror.iscas.ac.cn",
    "https://docker.rainbond.cc"
  ]
}
```

```
docker compose -f docker-compose/docker-compose.数据库.yaml up -d --build db-mysql

docker compose -f docker-compose/docker-compose.数据库.yaml up -d

docker compose -f docker-compose/docker-compose.数据库.yaml down
```

## 私有制品库

[https://verdaccio.org/zh-CN/docs/what-is-verdaccio](https://verdaccio.org/zh-CN/docs/what-is-verdaccio)

- Verdaccio 是一个轻量级的私有 npm 代理注册表，它允许您运行自己的 npm 仓库，而无需使用像 S3 或 Minio 这样的外部存储。

```
1. Create user
npm adduser --registry http://localhost:4873/

<!-- npm notice Log in on http://localhost:4873/
Username: wangwei
Password: wangwei123456
Email: (this IS public) wwdqq7@qq.com
Logged in on http://localhost:4873/. -->

2. Publish
npm publish --registry http://localhost:4873/

3. Refresh this page


```
