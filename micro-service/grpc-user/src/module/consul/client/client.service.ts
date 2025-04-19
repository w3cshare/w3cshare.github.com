/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-17 14:53:37
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 09:49:37
 * @FilePath: /FullStack/micro-service/nest-template/src/consul/client/client.service.ts
 * @Description: consul user service
 */
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Consul from 'consul';

@Injectable()
export class ClientService implements OnModuleInit, OnModuleDestroy {
  private readonly consul: Consul;
  private readonly serviceId = 'UserCenter';
  private readonly serviceName = '用户中心';
  private readonly serviceAddress = '127.0.0.1';
  private readonly servicePort = 50051;
  private readonly serviceAddressCheck = '192.168.111.1';
  private readonly servicePortCheck = 3001;
  constructor() {
    this.consul = new Consul({
      host: '127.0.0.1',
      // port: 8500, // 端口默认8500
      secure: false, // 是否使用https
      defaults: {
        token: '1234567', // consul token
      },
    });
  }

  private async registerService() {
    try {
      // 注册服务
      await this.consul.agent.service.register({
        id: this.serviceId,
        name: this.serviceName,
        address: this.serviceAddress,
        port: this.servicePort,
        tags: ['test'],
        check: {
          name: `${this.serviceId} HTTP Health Check`,
          http: `http://${this.serviceAddressCheck}:${this.servicePortCheck}/health`,
          interval: '10s',
          timeout: '5s',
        },
      });
    } catch (error) {
      console.log('🚀 ~ file: client.service.ts:46 ~ error:', error);
    }
  }

  private async deregisterService() {
    try {
      await this.consul.agent.service.deregister(this.serviceId);
    } catch (error) {
      console.log('🚀 ~ file: client.service.ts:49 ~ error:', error);
    }
  }

  onModuleInit(): void | Promise<void> {
    // 初始化
    console.log('Consul client service initialized.');
    this.registerService();
  }
  onModuleDestroy(): void | Promise<void> {
    // 销毁
    console.log('Consul client service destroyed.');
    this.deregisterService();
  }
}
