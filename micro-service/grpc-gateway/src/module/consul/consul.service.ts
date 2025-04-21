/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-18 10:02:21
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-18 10:05:41
 * @FilePath: /FullStack/micro-service/grpc-gateway/src/module/consul/consul.service.ts
 * @Description: grpc consul service
 */
import { Injectable } from '@nestjs/common';
import Consul from 'consul';

@Injectable()
export class ConsulService {
  async getServices() {
    const consul = new Consul();
    // return await consul.agent.service.list();
    return consul.catalog.service.nodes({
      service: '用户中心',
    });
  }

  async getService() {
    const services = (await this.getServices()) as any;
    const service = services[Math.floor(Math.random() * services.length)] || {};

    return {
      url: `http://${service.ServiceAddress}:${service.ServicePort}`,
      token: process.env.CONSUL_TOKEN,
      serviceAddress: service.ServiceAddress,
      servicePort: service.ServicePort,
    };
  }
}
