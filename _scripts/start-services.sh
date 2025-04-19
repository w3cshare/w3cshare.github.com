#!/bin/bash

# 颜色定义
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

echo -e "${YELLOW}开始启动FullStack服务...${NC}"

# 检查docker是否运行
if ! docker info > /dev/null 2>&1; then
  echo -e "${RED}错误: Docker未运行，请先启动Docker服务${NC}"
  exit 1
fi

# 检查docker-compose是否安装
if ! command -v docker-compose > /dev/null 2>&1; then
  echo -e "${RED}错误: docker-compose未安装，请先安装docker-compose${NC}"
  exit 1
fi

# 创建必要的目录结构
echo -e "${YELLOW}检查并创建必要的目录结构...${NC}"
directories=(
  "docker-compose/微服务/consul/config" 
  "docker-compose/微服务/consul/data"
  "docker-compose/微服务/java/config"
  "docker-compose/微服务/java/app"
  "docker-compose/微服务/node/config"
  "docker-compose/微服务/node/app"
  "docker-compose/微服务/nginx/config"
  "docker-compose/微服务/nginx/logs"
  "docker-compose/微服务/nginx/html"
  "docker-compose/微服务/nginx/ssl"
  "docker-compose/微服务/python/config"
  "docker-compose/微服务/python/app"
  "docker-compose/微服务/go/config"
  "docker-compose/微服务/go/app"
  "docker-compose/微服务/zipkin"
  "docker-compose/微服务/rabbitmq/data"
  "docker-compose/微服务/rabbitmq/logs"
  "docker-compose/微服务/nacos/logs"
  "docker-compose/微服务/nacos/data"
  "docker-compose/数据库/mysql/conf.d"
  "docker-compose/数据库/mysql/data"
  "docker-compose/数据库/mysql/logs"
  "docker-compose/数据库/mysql/sql"
  "docker-compose/数据库/postgresql/data"
  "docker-compose/数据库/postgresql/logs"
  "docker-compose/数据库/postgresql/sql"
  "docker-compose/数据库/redis/data"
  "docker-compose/数据库/mongo/data"
  "docker-compose/数据库/mongo/backup"
  "docker-compose/数据库/mongo/configdb"
  "docker-compose/数据库/elasticsearch/master/plugins"
  "docker-compose/数据库/elasticsearch/master/data"
  "docker-compose/数据库/elasticsearch/master/logs"
  "docker-compose/数据库/elasticsearch/master/config"
  "docker-compose/数据库/logstash/config"
  "docker-compose/数据库/logstash/plugins"
  "docker-compose/数据库/logstash/pipeline"
  "docker-compose/数据库/logstash/data"
  "docker-compose/数据库/kibana/plugins"
  "docker-compose/数据库/kibana/data"
  "docker-compose/数据库/pulsar/data"
  "docker-compose/数据库/pulsar/conf"
  "docker-compose/私服/verdaccio/conf"
  "docker-compose/私服/verdaccio/storage"
  "docker-compose/私服/verdaccio/plugins"
  "docker-compose/私服/harbor/data"
  "docker-compose/私服/harbor/config"
  "docker-compose/私服/gitlab/config"
  "docker-compose/私服/gitlab/logs"
  "docker-compose/私服/gitlab/data"
  "docker-compose/volumes/etcd"
  "docker-compose/volumes/minio"
  "docker-compose/volumes/milvus"
)

for dir in "${directories[@]}"; do
  mkdir -p "$dir"
  if [ $? -eq 0 ]; then
    echo -e "  ${GREEN}✓ 创建目录: $dir${NC}"
  else
    echo -e "  ${RED}✗ 创建目录失败: $dir${NC}"
  fi
done

# 启动服务
echo -e "\n${YELLOW}启动所有服务...${NC}"
cd "$(dirname "$0")"
docker-compose up -d

# 检查启动状态
if [ $? -eq 0 ]; then
  echo -e "\n${GREEN}所有服务启动成功!${NC}"
  echo -e "${YELLOW}服务访问地址:${NC}"
  echo -e "  Consul管理界面: ${GREEN}http://localhost:8500${NC}"
  echo -e "  Nacos管理界面: ${GREEN}http://localhost:8848/nacos${NC}"
  echo -e "  Zipkin追踪界面: ${GREEN}http://localhost:9411${NC}"
  echo -e "  RabbitMQ管理界面: ${GREEN}http://localhost:15672${NC} (用户名/密码: admin/admin)"
  echo -e "  Elasticsearch: ${GREEN}http://localhost:9200${NC} (用户名/密码: elastic/root)"
  echo -e "  Kibana界面: ${GREEN}http://localhost:5601${NC}"
  echo -e "  Milvus向量数据库UI: ${GREEN}http://localhost:8000${NC}"
  echo -e "  NPM私服(Verdaccio): ${GREEN}http://localhost:4873${NC}"
  echo -e "  Docker私服(Harbor): ${GREEN}http://localhost:8080${NC} (密码: Harbor12345)"
  echo -e "  GitLab: ${GREEN}http://localhost${NC} (用户名: root, 密码: password123)"
  echo -e "\n${YELLOW}提示: 首次启动某些服务可能需要较长时间初始化，请耐心等待。${NC}"
  echo -e "${YELLOW}可以使用 'docker-compose ps' 命令查看各服务状态。${NC}"
else
  echo -e "\n${RED}服务启动过程中出现错误，请检查日志。${NC}"
  echo -e "${YELLOW}可以使用 'docker-compose logs' 命令查看详细日志。${NC}"
fi