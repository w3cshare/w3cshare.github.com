import{_ as o,c as r,o as t,j as e}from"./chunks/framework.D30IVGRC.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"_docker-compose/私服.md","filePath":"_docker-compose/私服.md","lastUpdated":1750177463000}'),a={name:"_docker-compose/私服.md"};function s(c,n,d,p,l,_){return t(),r("div",null,n[0]||(n[0]=[e("pre",null,[e("code",null,`1. 版本更新 ：将 Docker Compose 版本从 4.0 更改为更稳定的 3.8 版本
2. Verdaccio (NPM 私有仓库) 优化 ：

   - 添加了持久化存储卷配置，包括配置文件、存储和插件目录
   - 设置了生产环境变量
   - 添加了健康检查确保服务正常运行
   - 配置了资源限制（CPU 和内存）
3. Harbor (Docker 私有仓库) 优化 ：

   - 更新了镜像版本为更稳定的 goharbor/harbor-portal:v2.5.0
   - 修复了端口映射问题，使用标准的 8080 和 443 端口
   - 添加了数据和配置的持久化存储
   - 设置了管理员密码环境变量
   - 配置了健康检查和资源限制
4. GitLab (Git 私有仓库) 优化 ：

   - 增强了 PostgreSQL 性能配置
   - 设置了时区为亚洲/上海
   - 添加了备份保留时间配置
   - 预留了邮件配置（需要用户自行修改）
   - 添加了健康检查和资源限制
5. 全局优化 ：

   - 为所有服务定义了外部卷，确保数据持久化
   - 统一了端口格式，使用引号包裹
   - 为所有服务添加了健康检查，确保服务可用性
   - 为所有服务配置了资源限制，防止资源过度使用
`)],-1)]))}const f=o(a,[["render",s]]);export{m as __pageData,f as default};
