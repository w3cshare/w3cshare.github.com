import os
from grpc_client import PdfCompressClient

def compress_single_pdf(file_path: str, output_path: str, quality: int = 30):
    """压缩单个PDF文件示例

    Args:
        file_path: 输入PDF文件路径
        output_path: 输出PDF文件路径
        quality: 压缩质量(0-100)
    """
    # 初始化gRPC客户端
    client = PdfCompressClient()

    try:
        # 读取PDF文件
        with open(file_path, 'rb') as f:
            pdf_content = f.read()

        # 调用压缩服务
        compressed_pdf, info = client.compress_pdf(pdf_content, quality)

        # 保存压缩后的文件
        with open(output_path, 'wb') as f:
            f.write(compressed_pdf)

        # 打印压缩信息
        print(f"压缩完成:\n"
              f"原始大小: {info['original_size']/1024:.2f}KB\n"
              f"压缩后大小: {info['compressed_size']/1024:.2f}KB\n"
              f"压缩率: {info['compression_ratio']:.2%}")

    finally:
        client.close()

def compress_multiple_pdfs(input_dir: str, output_dir: str, quality: int = 30):
    """批量压缩PDF文件示例

    Args:
        input_dir: 输入PDF文件目录
        output_dir: 输出PDF文件目录
        quality: 压缩质量(0-100)
    """
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)

    # 初始化gRPC客户端
    client = PdfCompressClient()

    try:
        # 收集所有PDF文件
        pdf_files = []
        for filename in os.listdir(input_dir):
            if filename.lower().endswith('.pdf'):
                file_path = os.path.join(input_dir, filename)
                with open(file_path, 'rb') as f:
                    pdf_content = f.read()
                pdf_files.append((pdf_content, quality))

        # 批量压缩
        results = client.compress_pdf_batch(pdf_files)

        # 保存压缩后的文件
        for (filename, (compressed_pdf, info)) in zip(
            [f for f in os.listdir(input_dir) if f.lower().endswith('.pdf')],
            results
        ):
            output_path = os.path.join(
                output_dir,
                f"{os.path.splitext(filename)[0]}_compressed.pdf"
            )
            with open(output_path, 'wb') as f:
                f.write(compressed_pdf)

            print(f"文件 {filename} 压缩完成:\n"
                  f"原始大小: {info['original_size']/1024:.2f}KB\n"
                  f"压缩后大小: {info['compressed_size']/1024:.2f}KB\n"
                  f"压缩率: {info['compression_ratio']:.2%}\n")

    finally:
        client.close()

if __name__ == '__main__':
    # 单文件压缩示例
    compress_single_pdf(
        'input.pdf',
        'output_compressed.pdf',
        quality=30
    )

    # 批量压缩示例
    compress_multiple_pdfs(
        'input_pdfs',
        'output_pdfs',
        quality=30
    )
