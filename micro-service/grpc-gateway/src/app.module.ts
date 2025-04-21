import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsulService } from './module/consul/consul.service';
import { ConsulController } from './module/consul/consul.controller';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ConsulController],
  providers: [AppService, ConsulService],
})
export class AppModule {}
