import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { ClientService } from './module/consul/client/client.service';
import { ClientController } from './module/consul/client/client.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ClientController],
  providers: [AppService, ClientService],
})
export class AppModule {}
