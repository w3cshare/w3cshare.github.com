---
title: 微服务快速开始
description: 如何快速上手使用微服务架构进行开发
outline: deep
---

# 微服务快速入门指南

本文档提供微服务架构的快速上手指南，包括环境准备、项目初始化和基本概念讲解。

## 环境准备

在开始构建微服务系统前，您需要准备以下环境：

### 必备工具

1. **Docker 和 Docker Compose**
   - Docker用于容器化服务
   - Docker Compose用于本地服务编排
  
2. **Node.js 环境**（推荐v16+）
   - 用于NestJS微服务开发
   
3. **Java开发环境**（推荐JDK 17）
   - 用于Spring Cloud微服务开发
   
4. **Go环境**（推荐Go 1.18+）
   - 用于Go微服务开发

5. **数据库**
   - MongoDB
   - PostgreSQL
   - Redis

### 开发工具

- **VS Code** 或 **IntelliJ IDEA**：IDE支持
- **Postman**：API测试工具
- **DBeaver**：数据库管理工具

## 项目结构

我们的微服务项目采用Monorepo结构组织：

```
micro-service/
├── gateway/                 # API网关服务
├── services/                # 微服务集合
│   ├── user-service/        # 用户服务
│   ├── product-service/     # 产品服务
│   ├── order-service/       # 订单服务
│   └── payment-service/     # 支付服务
├── shared/                  # 共享模块
│   ├── proto/               # Protocol Buffers定义
│   ├── models/              # 共享模型
│   └── utils/               # 工具函数
├── infrastructure/          # 基础设施配置
│   ├── docker/              # Docker配置
│   ├── k8s/                 # Kubernetes配置
│   └── scripts/             # 部署脚本
└── docs/                    # 项目文档
```

## 创建第一个微服务

### 1. NestJS微服务示例

以下是创建NestJS微服务的步骤：

```bash
# 安装NestJS CLI
npm install -g @nestjs/cli

# 创建新项目
nest new user-service

# 进入项目目录
cd user-service

# 安装微服务依赖
npm install @nestjs/microservices @nestjs/config class-validator class-transformer
```

基本服务代码结构：

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // 创建一个微服务
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3001,
    },
  });
  
  // 同时创建HTTP服务，用于健康检查和Swagger文档
  const httpApp = await NestFactory.create(AppModule);
  httpApp.setGlobalPrefix('api');
  
  await app.listen();
  await httpApp.listen(3000);
  console.log('User microservice is running');
}
bootstrap();
```

### 2. Spring Boot微服务示例

以下是创建Spring Boot微服务的步骤：

首先，使用Spring Initializr创建项目，添加以下依赖：
- Spring Web
- Spring Data JPA
- PostgreSQL Driver
- Spring Cloud Discovery Client
- Lombok

基本代码结构：

```java
// ProductApplication.java
package com.fullstack.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ProductApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductApplication.class, args);
    }
}
```

配置文件：

```yaml
# application.yml
spring:
  application:
    name: product-service
  datasource:
    url: jdbc:postgresql://localhost:5432/product_db
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    
server:
  port: 8080
  
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
```

### 3. Go微服务示例

以下是创建Go微服务的步骤：

```bash
# 创建项目目录
mkdir -p payment-service
cd payment-service

# 初始化模块
go mod init github.com/fullstack/payment-service

# 安装依赖
go get -u github.com/asim/go-micro/v3
go get -u github.com/golang/protobuf/protoc-gen-go
```

基本代码结构：

```go
// main.go
package main

import (
	"context"
	"log"
	
	"github.com/asim/go-micro/v3"
	pb "github.com/fullstack/payment-service/proto"
)

type PaymentService struct{}

func (s *PaymentService) ProcessPayment(ctx context.Context, req *pb.PaymentRequest, res *pb.PaymentResponse) error {
	log.Printf("Processing payment: %v", req)
	
	// 处理支付逻辑
	res.Success = true
	res.TransactionId = "tx_123456"
	
	return nil
}

func main() {
	// 创建新服务
	service := micro.NewService(
		micro.Name("payment.service"),
		micro.Version("latest"),
	)
	
	// 初始化服务
	service.Init()
	
	// 注册处理器
	pb.RegisterPaymentServiceHandler(service.Server(), new(PaymentService))
	
	// 运行服务
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
```

## 运行微服务系统

### 使用Docker Compose

创建`docker-compose.yml`文件：

```yaml
version: '3.8'

services:
  # 服务注册中心
  registry:
    image: consul:latest
    ports:
      - "8500:8500"
    networks:
      - microservice-network
      
  # API网关
  gateway:
    build: ./gateway
    ports:
      - "8080:8080"
    depends_on:
      - registry
    networks:
      - microservice-network
      
  # 用户服务
  user-service:
    build: ./services/user-service
    depends_on:
      - registry
      - mongodb
    networks:
      - microservice-network
      
  # 产品服务
  product-service:
    build: ./services/product-service
    depends_on:
      - registry
      - postgres
    networks:
      - microservice-network
      
  # 订单服务
  order-service:
    build: ./services/order-service
    depends_on:
      - registry
      - postgres
    networks:
      - microservice-network
      
  # 支付服务
  payment-service:
    build: ./services/payment-service
    depends_on:
      - registry
      - redis
    networks:
      - microservice-network
      
  # 数据库
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb-data:/data/db
    networks:
      - microservice-network
      
  postgres:
    image: postgres:latest
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: microservice_db
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - microservice-network
      
  redis:
    image: redis:latest
    ports:
      - "6379:6379"
    networks:
      - microservice-network

networks:
  microservice-network:
    driver: bridge
    
volumes:
  mongodb-data:
  postgres-data:
```

启动系统：

```bash
docker-compose up -d
```

## 服务间通信

### 1. 同步通信 (REST API)

服务之间可以通过REST API进行通信：

```typescript
// NestJS中的HTTP通信
@Injectable()
export class ProductService {
  constructor(private httpService: HttpService) {}
  
  async getProduct(id: string): Promise<any> {
    const response = await this.httpService.get(`http://product-service/api/products/${id}`)
      .pipe(map(res => res.data))
      .toPromise();
    return response;
  }
}
```

### 2. 同步通信 (gRPC)

使用gRPC进行高性能RPC调用：

```proto
// user.proto
syntax = "proto3";

package user;

service UserService {
  rpc GetUser (GetUserRequest) returns (User);
}

message GetUserRequest {
  string id = 1;
}

message User {
  string id = 1;
  string name = 2;
  string email = 3;
}
```

### 3. 异步通信 (消息队列)

使用Kafka或RabbitMQ实现事件驱动架构：

```typescript
// NestJS Kafka Producer
@Injectable()
export class OrderCreatedProducer {
  constructor(@Inject('KAFKA_PRODUCER') private kafkaClient: ClientKafka) {}
  
  async orderCreated(order: any) {
    this.kafkaClient.emit('order.created', order);
  }
}

// NestJS Kafka Consumer
@EventPattern('order.created')
async handleOrderCreatedEvent(order: any) {
  // 处理订单创建事件
  await this.inventoryService.reserveInventory(order.items);
}
```

## 健康检查与服务发现

### 配置Consul健康检查

每个服务需要暴露健康检查端点：

```typescript
// NestJS健康检查
@Controller('health')
export class HealthController {
  @Get()
  check() {
    return { status: 'ok' };
  }
}
```

Consul配置：

```json
{
  "service": {
    "name": "user-service",
    "port": 3000,
    "check": {
      "http": "http://user-service:3000/health",
      "interval": "10s",
      "timeout": "1s"
    }
  }
}
```

## 监控与日志

### 设置Prometheus监控

添加Prometheus指标收集：

```typescript
// NestJS Prometheus集成
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register({
      path: '/metrics',
      defaultMetrics: {
        enabled: true,
      },
    }),
  ],
})
export class AppModule {}
```

### 设置集中式日志

使用ELK Stack收集日志：

```yaml
# logback-spring.xml (Spring Boot)
<appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
  <destination>logstash:5000</destination>
  <encoder class="net.logstash.logback.encoder.LogstashEncoder"/>
</appender>

<root level="INFO">
  <appender-ref ref="LOGSTASH" />
</root>
```

## 下一步

学习完本快速入门指南后，您可以进一步探索：

1. [微服务架构设计详解](/micro-service/architecture)
2. [领域驱动设计实践](/micro-service/domain-driven-design)
3. [服务治理与弹性设计](/micro-service/service-governance)
4. [部署与运维自动化](/micro-service/deployment)
5. [微服务性能优化](/micro-service/performance-tuning) 