/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-08 17:52:38
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-08 17:54:26
 * @FilePath: /FullStack/micro-service/grpc-client/src/pdf2compressed.service.ts
 * @Description: PDF压缩服务实现
 */
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { readFile, writeFile } from 'fs/promises';
import { Observable } from 'rxjs';

interface PdfService {
  compressPdf(data: { content: Buffer; quality: number }): Observable<{
    pdf: Buffer;
    info: {
      compression_ratio: number;
    };
  }>;
  compressPdfBatch(data: {
    files: Array<{ content: Buffer; quality: number }>;
  }): Observable<{
    results: Array<{
      pdf: Buffer;
      info: {
        compression_ratio: number;
      };
    }>;
  }>;
}

@Injectable()
export class PdfCompressService implements OnModuleInit {
  private pdfService: PdfService;

  constructor(@Inject('PDF_COMPRESS_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.pdfService = this.client.getService<PdfService>('PdfCompressService');
  }

  async compressSinglePdf(filePath: string, quality: number = 30) {
    const content = await readFile(filePath);
    const result = await this.pdfService
      .compressPdf({ content, quality })
      .toPromise();

    if (!result) {
      throw new Error('Failed to compress PDF');
    }

    const outputPath = filePath.replace('.pdf', '_compressed.pdf');
    await writeFile(outputPath, result.pdf);

    return {
      outputPath,
      compressionRatio: result.info.compression_ratio,
    };
  }

  async compressPdfBatch(files: Array<{ path: string; quality: number }>) {
    const fileContents = await Promise.all(
      files.map(async (file) => ({
        content: await readFile(file.path),
        quality: file.quality,
      })),
    );

    const result = await this.pdfService
      .compressPdfBatch({ files: fileContents })
      .toPromise();

    if (!result) {
      throw new Error('Failed to compress PDF batch');
    }

    return Promise.all(
      files.map(async (file, index) => {
        const outputPath = file.path.replace('.pdf', '_compressed.pdf');
        await writeFile(outputPath, result.results[index].pdf);
        return {
          outputPath,
          compressionRatio: result.results[index].info.compression_ratio,
        };
      }),
    );
  }
}
