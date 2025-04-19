import os
from PyPDF2 import PdfReader, PdfWriter
from PIL import Image
import io

# 设置Pillow的最大图片像素限制
Image.MAX_IMAGE_PIXELS = None

def compress_pdf(input_path: str, output_path: str, image_quality: int = 30) -> bool:
    """
    压缩PDF文件中的图片

    Args:
        input_path (str): 输入PDF文件路径
        output_path (str): 输出PDF文件路径
        image_quality (int, optional): 图片压缩质量，范围1-100，默认30

    Returns:
        bool: 压缩是否成功
    """
    try:
        reader = PdfReader(input_path)
        writer = PdfWriter()
        total_pages = len(reader.pages)
        processed_pages = 0
        processed_images = 0
        total_images = 0

        # 首先计算总图片数
        for page in reader.pages:
            if '/Resources' in page:
                resources = page['/Resources']
                if '/XObject' in resources:
                    xObject = resources['/XObject']
                    for obj in xObject:
                        if xObject[obj]['/Subtype'] == '/Image':
                            total_images += 1

        # 遍历每一页
        for page in reader.pages:
            processed_pages += 1
            print(f"\r处理页面进度: {processed_pages}/{total_pages}", end='')

            # 获取页面上的资源
            if '/Resources' in page:
                resources = page['/Resources']
                if '/XObject' in resources:
                    xObject = resources['/XObject']
                    # 遍历页面中的图片对象
                    for obj in xObject:
                        if xObject[obj]['/Subtype'] == '/Image':
                            try:
                                # 获取图片数据
                                image_data = xObject[obj].get_data()
                                # 压缩图片
                                img = Image.open(io.BytesIO(image_data))
                                img_buffer = io.BytesIO()
                                # 转换为RGB模式（如果需要）
                                if img.mode != 'RGB':
                                    img = img.convert('RGB')
                                # 使用JPEG格式压缩图片
                                img.save(img_buffer, 'JPEG', quality=image_quality, optimize=True)
                                # 更新图片数据
                                xObject[obj]._data = img_buffer.getvalue()
                                processed_images += 1
                                print(f"\r处理图片进度: {processed_images}/{total_images}", end='')
                            except Exception as e:
                                print(f"\n处理图片时出错: {str(e)}")
                                continue

            # 添加处理后的页面
            writer.add_page(page)

        print("\n压缩处理完成！")
        # 设置压缩选项
        writer.add_metadata(reader.metadata)

        # 确保输出目录存在
        output_dir = os.path.dirname(output_path)
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        # 保存压缩后的PDF
        with open(output_path, 'wb') as output_file:
            writer.write(output_file)

        # 清理缓存文件
        # clean_cache_files()
        return True
    except Exception as e:
        print(f"压缩过程中出错: {str(e)}")
        return False

def get_file_size_mb(file_path: str) -> float:
    """
    获取文件大小（MB）

    Args:
        file_path (str): 文件路径

    Returns:
        float: 文件大小（MB）
    """
    return os.path.getsize(file_path) / (1024 * 1024)


def clean_cache_files():
    """
    清理缓存文件，包括.pyc文件和临时文件
    """
    try:
        # 获取当前目录
        current_dir = os.path.dirname(os.path.abspath(__file__))
        # 遍历目录下的所有文件
        for root, dirs, files in os.walk(current_dir):
            for file in files:
                # 删除.pyc文件
                if file.endswith('.pyc') or file.endswith('.pyo'):
                    file_path = os.path.join(root, file)
                    try:
                        os.remove(file_path)
                        print(f"已删除缓存文件: {file_path}")
                    except Exception as e:
                        print(f"删除文件 {file_path} 时出错: {str(e)}")
                # 删除临时文件
                elif file.endswith('.tmp') or file.endswith('.temp'):
                    file_path = os.path.join(root, file)
                    try:
                        os.remove(file_path)
                        print(f"已删除临时文件: {file_path}")
                    except Exception as e:
                        print(f"删除文件 {file_path} 时出错: {str(e)}")
        return True
    except Exception as e:
        print(f"清理缓存文件时出错: {str(e)}")
        return False
