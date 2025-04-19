import grpc
from concurrent import futures
import time
from compress import compress_pdf
import tempfile
import os

# 导入生成的proto模块
from proto import pdf_compress_pb2
from proto import pdf_compress_pb2_grpc

class PdfCompressServicer(pdf_compress_pb2_grpc.PdfCompressServiceServicer):
    def CompressPdf(self, request, context):
        try:
            # 创建临时文件来存储输入的PDF
            with tempfile.NamedTemporaryFile(suffix='.pdf', delete=False) as input_file:
                input_file.write(request.pdf_content)
                input_path = input_file.name

            # 创建临时文件来存储压缩后的PDF
            output_path = input_path.replace('.pdf', '_compressed.pdf')

            # 压缩PDF
            compress_pdf(input_path, output_path, quality=request.quality)

            # 读取压缩后的文件
            with open(output_path, 'rb') as f:
                compressed_content = f.read()

            # 获取文件大小
            original_size = os.path.getsize(input_path)
            compressed_size = os.path.getsize(output_path)

            # 清理临时文件
            os.unlink(input_path)
            os.unlink(output_path)

            # 计算压缩率
            compression_ratio = ((original_size - compressed_size) / original_size) * 100

            return pdf_compress_pb2.CompressResponse(
                compressed_pdf=compressed_content,
                original_size=original_size,
                compressed_size=compressed_size,
                compression_ratio=compression_ratio,
                status_code=200,
                message='Success'
            )

        except Exception as e:
            return pdf_compress_pb2.CompressResponse(
                compressed_pdf=request.pdf_content,
                original_size=0,
                compressed_size=0,
                compression_ratio=0,
                status_code=500,
                message=str(e)
            )

    def CompressPdfBatch(self, request, context):
        results = []
        success_count = 0
        failed_count = 0

        for pdf_request in request.files:
            try:
                result = self.CompressPdf(pdf_request, context)
                if result.status_code == 200:
                    success_count += 1
                else:
                    failed_count += 1
                results.append(result)
            except Exception as e:
                failed_count += 1
                results.append(pdf_compress_pb2.CompressResponse(
                    compressed_pdf=pdf_request.pdf_content,
                    original_size=0,
                    compressed_size=0,
                    compression_ratio=0,
                    status_code=500,
                    message=str(e)
                ))

        return pdf_compress_pb2.BatchCompressResponse(
            results=results,
            total_files=len(request.files),
            success_count=success_count,
            failed_count=failed_count
        )

def serve():
    # 创建gRPC服务器
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    # 注册服务
    pdf_compress_pb2_grpc.add_PdfCompressServiceServicer_to_server(
        PdfCompressServicer(), server
    )

    # 添加监听端口
    server.add_insecure_port('[::]:50051')

    # 启动服务器
    server.start()
    print('PDF压缩服务已启动，监听端口: 50051')

    try:
        while True:
            time.sleep(86400)  # 一天
    except KeyboardInterrupt:
        server.stop(0)
        print('服务已停止')

if __name__ == '__main__':
    serve()
