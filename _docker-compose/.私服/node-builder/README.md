# 前端项目CI/CD配置指南

本目录包含前端项目CI/CD的相关配置和示例，帮助您快速配置前端项目的自动构建和部署流程。

## 目录结构

```
node-builder/
├── .gitlab-ci.yml  # GitLab CI/CD配置示例
├── .npm/           # NPM缓存目录
└── README.md       # 本说明文件
```

## 如何使用

### 1. 在前端项目中添加CI/CD配置

将示例的`.gitlab-ci.yml`文件复制到您的前端项目根目录，并根据项目需求进行修改。

### 2. 配置项目变量

在GitLab项目设置中，添加以下CI/CD变量：

- `NPM_TOKEN`: 私有NPM仓库的访问令牌（如需要）
- `DEPLOY_SERVER`: 部署服务器地址
- `DEPLOY_PATH`: 部署路径

### 3. 常见前端构建命令

```bash
# 安装依赖
npm ci

# 代码检查
npm run lint

# 单元测试
npm run test

# 构建生产环境代码
npm run build
```

## 优化构建速度

1. 使用`npm ci`代替`npm install`，速度更快且更可靠
2. 合理配置缓存，缓存`node_modules`和`.npm`目录
3. 使用私有NPM仓库加速依赖下载
4. 配置合理的构建阶段，避免不必要的步骤

## 与Jenkins集成

如果您同时使用Jenkins和GitLab，可以配置Jenkins监听GitLab的Webhook事件，实现更复杂的构建流程。

1. 在Jenkins中安装GitLab插件
2. 创建Pipeline项目，使用Jenkinsfile定义构建流程
3. 在GitLab项目中配置Webhook，指向Jenkins服务器

## 示例Jenkinsfile

```groovy
pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-v /home/node/.npm:/home/node/.npm'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'echo "部署到生产环境"'
                // 实际部署命令
            }
        }
    }
}
```
