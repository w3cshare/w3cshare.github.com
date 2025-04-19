/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-08 17:52:38
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-08 18:07:06
 * @FilePath: /FullStack/micro-service/grpc-client/src/pdf2compressed.module.ts
 * @Description: 调用PDF压缩工具 for python grpc服务
 */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { PdfCompressController } from './pdf2compressed.controller';
import { PdfCompressService } from './pdf2compressed.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PDF_COMPRESS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50051',
          package: 'pdf_compress',
          protoPath: join(__dirname, '../proto/pdf_compress.proto'),
        },
      },
    ]),
  ],
  controllers: [PdfCompressController],
  providers: [PdfCompressService],
  exports: [PdfCompressService],
})
export class Pdf2CompressedModule {}
