import grpc
import io
from concurrent import futures
from typing import List, Optional, Tuple

# 导入生成的proto模块
from proto import pdf_compress_pb2
from proto import pdf_compress_pb2_grpc

class PdfCompressClient:
    def __init__(self, server_address: str = 'localhost:50051'):
        """初始化gRPC客户端

        Args:
            server_address: gRPC服务器地址
        """
        self.channel = grpc.insecure_channel(server_address)
        self.stub = pdf_compress_pb2_grpc.PdfCompressServiceStub(self.channel)

    def compress_pdf(self, pdf_content: bytes, quality: int = 30) -> Tuple[bytes, dict]:
        """压缩单个PDF文件

        Args:
            pdf_content: PDF文件内容
            quality: 压缩质量(0-100)

        Returns:
            Tuple[bytes, dict]: 压缩后的PDF内容和压缩信息
        """
        try:
            request = pdf_compress_pb2.CompressRequest(
                pdf_content=pdf_content,
                quality=quality
            )
            response = self.stub.CompressPdf(request)

            result_info = {
                'original_size': response.original_size,
                'compressed_size': response.compressed_size,
                'compression_ratio': response.compression_ratio,
                'status_code': response.status_code,
                'message': response.message
            }

            return response.compressed_pdf, result_info
        except grpc.RpcError as e:
            print(f"gRPC error: {e}")
            raise

    def compress_pdf_batch(self, pdf_files: List[Tuple[bytes, int]]) -> List[Tuple[bytes, dict]]:
        """批量压缩PDF文件

        Args:
            pdf_files: List of (pdf_content, quality) tuples

        Returns:
            List[Tuple[bytes, dict]]: 压缩结果列表
        """
        try:
            requests = []
            for content, quality in pdf_files:
                request = pdf_compress_pb2.CompressRequest(
                    pdf_content=content,
                    quality=quality
                )
                requests.append(request)

            batch_request = pdf_compress_pb2.BatchCompressRequest(files=requests)
            response = self.stub.CompressPdfBatch(batch_request)

            results = []
            for result in response.results:
                result_info = {
                    'original_size': result.original_size,
                    'compressed_size': result.compressed_size,
                    'compression_ratio': result.compression_ratio,
                    'status_code': result.status_code,
                    'message': result.message
                }
                results.append((result.compressed_pdf, result_info))

            return results
        except grpc.RpcError as e:
            print(f"gRPC error: {e}")
            raise

    def close(self):
        """关闭gRPC通道"""
        self.channel.close()
