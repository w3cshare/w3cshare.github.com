<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-08 16:20:05
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-08 16:20:23
 * @FilePath: /FullStack/app/pdf2compress/README.md
 * @Description: PDF压缩工具项目说明
-->

# PDF压缩工具

## 项目简介

一个基于gRPC的PDF文件压缩服务，提供高效的单文件和批量压缩功能。本项目包含完整的客户端实现和示例代码，支持多种压缩策略和并发处理。

## 功能特点

- 支持单文件和批量PDF压缩
- 基于gRPC的高性能通信
- 可配置的压缩质量参数
- 详细的压缩结果信息
- 完善的错误处理机制

## 快速开始

### 1. 直接调用方式

最简单的使用方式是直接调用压缩函数：

```python
from compress import compress_pdf

# 读取并压缩PDF
with open('input.pdf', 'rb') as f:
    pdf_content = f.read()

# 压缩文件（quality范围0-100，值越小压缩率越高）
compressed_pdf, info = compress_pdf(pdf_content, quality=30)

# 保存压缩后的文件
with open('output.pdf', 'wb') as f:
    f.write(compressed_pdf)

print(f"压缩完成：压缩率 {info['compression_ratio']:.2%}")
```

### 2. 安装说明

1. 安装依赖包：

```bash
pip install -r requirements.txt
```

2. 确保gRPC服务器已启动并监听在指定端口（默认为localhost:50051）

### 3. gRPC服务调用

如果需要使用gRPC服务，可以通过以下方式调用：

#### 3.1 单文件压缩

```python
from grpc_client import PdfCompressClient

# 初始化客户端
client = PdfCompressClient()

try:
    # 读取并压缩PDF
    with open('input.pdf', 'rb') as f:
        pdf_content = f.read()

    compressed_pdf, info = client.compress_pdf(
        pdf_content,
        quality=30  # 压缩质量(0-100)
    )

    # 保存压缩后的文件
    with open('output.pdf', 'wb') as f:
        f.write(compressed_pdf)

    print(f"压缩完成：压缩率 {info['compression_ratio']:.2%}")

finally:
    client.close()
```

#### 3.2 批量压缩

```python
from grpc_client import PdfCompressClient
import os

# 初始化客户端
client = PdfCompressClient()

try:
    # 准备PDF文件列表
    pdf_files = []
    for filename in os.listdir('input_dir'):
        if filename.endswith('.pdf'):
            with open(os.path.join('input_dir', filename), 'rb') as f:
                pdf_files.append((f.read(), 30))  # (content, quality)

    # 批量压缩
    results = client.compress_pdf_batch(pdf_files)

    # 处理结果
    for (pdf, info) in results:
        print(f"压缩率: {info['compression_ratio']:.2%}")

finally:
    client.close()
```

#### 3.3 NestJS客户端调用

```typescript
// pdf.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';
import { readFile, writeFile } from 'fs/promises';

interface PdfService {
  compressPdf(data: { content: Buffer; quality: number }): Observable<{
    pdf: Buffer;
    info: {
      compression_ratio: number;
    };
  }>;
  compressPdfBatch(data: { files: Array<{ content: Buffer; quality: number }> }): Observable<{
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
  @Client({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: 'pdf_compress',
      protoPath: join(__dirname, 'proto/pdf_compress.proto'),
    },
  })
  private client: ClientGrpc;
  private pdfService: PdfService;

  onModuleInit() {
    this.pdfService = this.client.getService<PdfService>('PdfService');
  }

  async compressSinglePdf(filePath: string, quality: number = 30) {
    const content = await readFile(filePath);
    const result = await this.pdfService.compressPdf({ content, quality }).toPromise();

    const outputPath = filePath.replace('.pdf', '_compressed.pdf');
    await writeFile(outputPath, result.pdf);

    return {
      outputPath,
      compressionRatio: result.info.compression_ratio,
    };
  }

  async compressPdfBatch(files: Array<{ path: string; quality: number }>) {
    const fileContents = await Promise.all(
      files.map(async file => ({
        content: await readFile(file.path),
        quality: file.quality,
      })),
    );

    const result = await this.pdfService.compressPdfBatch({ files: fileContents }).toPromise();

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
```

使用示例：

```typescript
// app.controller.ts
import { Controller } from '@nestjs/common';
import { PdfCompressService } from './pdf.service';

@Controller()
export class AppController {
  constructor(private readonly pdfService: PdfCompressService) {}

  async compressPdf() {
    const result = await this.pdfService.compressSinglePdf(
      'input.pdf',
      30
    );
    console.log(`文件已压缩：${result.outputPath}，压缩率：${result.compressionRatio}`);
  }

  async compressPdfBatch() {
    const files = [
      { path: 'file1.pdf', quality: 30 },
      { path: 'file2.pdf', quality: 40 },
    ];
    const results = await this.pdfService.compressPdfBatch(files);
    results.forEach((result) => {
      console.log(`文件已压缩：${result.outputPath}，压缩率：${result.compressionRatio}`);
    });
  }
}

## 配置说明

### 压缩参数

- `quality`: 压缩质量(0-100)，值越小压缩率越高
- `pdf_content`: PDF文件的二进制内容

### 客户端配置

- `server_address`: gRPC服务器地址，默认为'localhost:50051'

### 返回信息

- `compressed_pdf`: 压缩后的PDF内容
- `original_size`: 原始文件大小
- `compressed_size`: 压缩后文件大小
- `compression_ratio`: 压缩率
- `status_code`: 状态码
- `message`: 状态信息

## 最佳实践

1. 性能优化

   - 批量处理时建议控制并发数量
   - 单个PDF文件建议不超过100MB
   - 每批次处理不超过10个文件

2. 错误处理
   - 始终使用try-finally确保资源正确释放
   - 实现适当的重试机制
   - 注意处理gRPC异常

## 项目结构

```

/pdf2compressed/
├── README.md # 项目说明文档
├── app.py # gRPC服务器实现
├── compress.py # PDF压缩核心功能
├── example.py # 使用示例
├── grpc_client.py # gRPC客户端实现
├── prompt.md # 项目需求文档
├── prompt_grpc.md # gRPC接口规范
├── proto/ # Protocol Buffers定义
└── requirements.txt # 项目依赖

```

## 接口文档

详细的gRPC接口规范请参考 [prompt_grpc.md](./prompt_grpc.md)
```
