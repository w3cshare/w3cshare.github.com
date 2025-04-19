#!/bin/bash

# 颜色定义
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

echo -e "${YELLOW}正在停止FullStack服务...${NC}"

# 检查docker是否运行
if ! docker info > /dev/null 2>&1; then
  echo -e "${RED}错误: Docker未运行，无法停止服务${NC}"
  exit 1
fi

# 停止服务
cd "$(dirname "$0")"
docker-compose down

if [ $? -eq 0 ]; then
  echo -e "\n${GREEN}所有服务已成功停止!${NC}"
else
  echo -e "\n${RED}停止服务过程中出现错误，请检查日志。${NC}"
  echo -e "${YELLOW}可以使用 'docker-compose logs' 命令查看详细日志。${NC}"
fi