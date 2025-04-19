/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-08 18:03:24
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-08 18:18:12
 * @FilePath: /FullStack/micro-service/grpc-client/src/pdf2compressed.controller.ts
 * @Description: 测试调用PDF压缩工具 for python grpc服务
 */
import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { promises as fs } from 'fs';
import { join } from 'path';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

interface PdfCompressService {
  compressPdf(data: {
    content: Buffer;
    quality: number;
  }): Observable<{ pdf: Buffer; info: { compression_ratio: number } }>;
}

// 输入文件
const input_file = join(process.cwd(), 'input/WEB软件工程师_王伟.pdf');

//  输出文件
const output_file = join(
  process.cwd(),
  'output/WEB软件工程师_王伟_compressed.pdf',
);

@Controller('pdf')
export class PdfCompressController implements OnModuleInit {
  private pdfService: PdfCompressService;

  constructor(@Inject('PDF_COMPRESS_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    try {
      this.pdfService =
        this.client.getService<PdfCompressService>('PdfCompressService');
      if (!this.pdfService) {
        throw new Error('PDF压缩服务初始化失败');
      }
    } catch (error) {
      console.error('PDF服务初始化错误:', error);
      throw new Error(`PDF服务初始化失败: ${error.message}`);
    }
  }
  @Get('/compressed')
  async getPdf2compressed() {
    try {
      // 确保输入目录存在
      const inputDir = join(process.cwd(), 'input');
      await fs.mkdir(inputDir, { recursive: true });

      // 检查输入文件是否存在
      try {
        await fs.access(input_file);
      } catch (error) {
        throw new Error('输入文件不存在，请确保文件已放置在正确位置');
      }

      // 读取输入文件
      const pdfContent = await fs.readFile(input_file);

      // 验证输入数据格式
      if (!Buffer.isBuffer(pdfContent)) {
        throw new Error('输入PDF数据格式无效');
      }

      // 检查服务是否可用
      if (!this.pdfService) {
        throw new Error('PDF压缩服务未正确初始化');
      }

      // 调用压缩方法，设置默认压缩质量为30
      let result;
      try {
        const compressResponse = this.pdfService.compressPdf({
          content: pdfContent,
          quality: 30,
        });

        if (!compressResponse) {
          throw new Error('压缩服务返回值为空');
        }

        result = await firstValueFrom(compressResponse);
      } catch (error) {
        console.error('压缩服务调用失败:', error);
        throw new Error(`调用压缩服务失败: ${error.message}`);
      }

      // 检查返回结果是否有效
      if (!result || !result.pdf || !result.info) {
        throw new Error('压缩服务返回的数据结构无效');
      }

      // 验证返回的PDF数据格式
      if (!Buffer.isBuffer(result.pdf)) {
        throw new Error('压缩服务返回的PDF数据类型无效');
      }

      // 确保输出目录存在
      const outputDir = join(process.cwd(), 'output');
      await fs.mkdir(outputDir, { recursive: true });

      // 保存压缩后的文件
      await fs.writeFile(output_file, result.pdf);

      return {
        message: '文件压缩成功',
        outputPath: output_file,
        compressionRatio: result.info.compression_ratio,
      };
    } catch (error) {
      console.error('PDF压缩失败:', error);
      throw new Error(`PDF压缩失败: ${error.message}`);
    }
  }
}
