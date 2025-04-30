# PDF压缩服务 gRPC 接口规范

## 服务定义

### PdfCompressService

提供PDF文件压缩服务，支持单文件和批量压缩功能。

## 接口规范

### 1. 单文件压缩 (CompressPdf)

```protobuf
rpc CompressPdf(CompressRequest) returns (CompressResponse);
```

#### 请求参数 (CompressRequest)

- pdf_content: bytes - PDF文件二进制内容
- quality: int32 - 压缩质量(0-100)

#### 响应参数 (CompressResponse)

- compressed_pdf: bytes - 压缩后的PDF文件内容
- original_size: int64 - 原始文件大小
- compressed_size: int64 - 压缩后文件大小
- compression_ratio: float - 压缩率
- status_code: int32 - 状态码
- message: string - 状态信息

### 2. 批量压缩 (CompressPdfBatch)

```protobuf
rpc CompressPdfBatch(BatchCompressRequest) returns (BatchCompressResponse);
```

#### 请求参数 (BatchCompressRequest)

- files: repeated CompressRequest - PDF文件列表

#### 响应参数 (BatchCompressResponse)

- results: repeated CompressResponse - 压缩结果列表

## 错误处理

服务使用gRPC标准错误处理机制：

- INVALID_ARGUMENT: 请求参数无效
- INTERNAL: 服务器内部错误
- UNAVAILABLE: 服务不可用

## 使用示例

### 客户端初始化

```python
from grpc_client import PdfCompressClient

# 创建客户端实例
client = PdfCompressClient(server_address='localhost:50051')
```

### 单文件压缩

```python
# 读取PDF文件
with open('input.pdf', 'rb') as f:
    pdf_content = f.read()

# 压缩文件
compressed_pdf, info = client.compress_pdf(pdf_content, quality=30)

# 保存压缩后的文件
with open('output.pdf', 'wb') as f:
    f.write(compressed_pdf)
```

### 批量压缩

```python
# 准备多个PDF文件
pdf_files = [
    (pdf_content1, 30),
    (pdf_content2, 30)
]

# 批量压缩
results = client.compress_pdf_batch(pdf_files)

# 处理结果
for compressed_pdf, info in results:
    # 处理每个压缩后的文件
    pass
```

## 性能考虑

- 建议批量处理时控制并发数量
- 单个PDF文件大小建议不超过100MB
- 批量处理时建议每批次不超过10个文件

## 安全建议

- 在生产环境中使用TLS加密通信
- 实现适当的认证和授权机制
- 对输入文件大小进行限制
- 实现请求速率限制
