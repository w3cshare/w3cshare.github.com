# GitLab Runner 配置说明

## 初始化配置

首次启动GitLab和GitLab Runner后，需要进行以下配置：

### 1. 获取GitLab Runner注册令牌

1. 登录GitLab管理界面 (http://localhost:8929)
2. 进入管理区域 -> Overview -> Runners
3. 记下注册令牌(Registration token)

### 2. 注册GitLab Runner

```bash
# 进入GitLab Runner容器
docker exec -it gitlab-runner bash

# 注册Runner
gitlab-runner register
```

按照提示输入以下信息：

- GitLab实例URL: `http://repo-gitlab`
- 注册令牌: 从GitLab管理界面获取的令牌
- Runner描述: 如 `docker-node-runner`
- Runner标签: 如 `docker,node,frontend`
- Executor: 选择 `docker`
- 默认镜像: `node:18-alpine`

## 避免重设密码

由于配置了数据卷持久化，GitLab和Jenkins的数据会保存在本地目录中，因此不会在每次重启后重设密码。

- GitLab数据保存在 `./私服/gitlab/` 目录
- Jenkins数据保存在 `./私服/jenkins_home/` 目录
- GitLab Runner配置保存在 `./私服/gitlab-runner/config/` 目录

## 前端项目CI/CD配置

在前端项目根目录添加 `.gitlab-ci.yml` 文件，可参考 `./私服/node-builder/.gitlab-ci.yml` 的示例配置。

## 常用命令

```bash
# 启动所有服务
docker-compose -f docker-compose.CICD.yaml up -d

# 查看Jenkins初始密码
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

# 查看GitLab Runner状态
docker exec gitlab-runner gitlab-runner list
```
