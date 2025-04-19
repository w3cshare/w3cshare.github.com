import os
from compress import compress_pdf, get_file_size_mb

# 输入文件
input_file = "input/WEB软件工程师_王伟.pdf"
# 输出文件
output_file = "output/WEB软件工程师_王伟_compressed.pdf"

def main():
    try:
        # 确保输入文件存在
        if not os.path.exists(input_file):
            print(f"错误：输入文件 {input_file} 不存在")
            return

        # 获取原始文件大小
        original_size = get_file_size_mb(input_file)
        print(f"原始文件大小: {original_size:.2f} MB")

        # 压缩PDF
        if not compress_pdf(input_file, output_file):
            print("错误：压缩过程中出现问题")
            return

        # 检查输出文件是否成功创建
        if not os.path.exists(output_file):
            print("错误：压缩过程中出现问题，未能生成输出文件")
            return

        # 获取压缩后文件大小
        compressed_size = get_file_size_mb(output_file)
        print(f"压缩后文件大小: {compressed_size:.2f} MB")

        # 计算压缩率
        compression_ratio = ((original_size - compressed_size) / original_size) * 100
        print(f"压缩率: {compression_ratio:.2f}%")
    except Exception as e:
        print(f"程序执行出错: {str(e)}")
        return

if __name__ == "__main__":
    main()


