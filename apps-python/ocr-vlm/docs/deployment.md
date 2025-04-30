# PaddleXOCR模型部署指南

本文档提供了PaddleXOCR模型从训练到部署的完整流程指导，包括模型导出、推理引擎选择、不同平台部署方案等内容。

## 模型导出

训练完成后，需要将模型导出为推理格式以便部署。

### 检测模型导出

```bash
# 导出文本检测模型
python tools/export_model.py \
    -c configs/text_detection_seal/PP-OCRv4_server_seal_det.yaml \
    -o Global.pretrained_model=./output/det_model/best_accuracy \
    Global.save_inference_dir=./inference/det_model
```

### 表格结构识别模型导出

```bash
# 导出表格识别模型
python tools/export_model.py \
    -c configs/table_recognition/SLANet.yaml \
    -o Global.pretrained_model=./output/table_model/best_accuracy \
    Global.save_inference_dir=./inference/table_model
```

### 文字识别模型导出

```bash
# 导出文字识别模型
python tools/export_model.py \
    -c configs/text_recognition/PP-OCRv4_mobile_rec.yaml \
    -o Global.pretrained_model=./output/rec_model/best_accuracy \
    Global.save_inference_dir=./inference/rec_model
```

导出的推理模型包含三个文件：
- `inference.pdmodel`：模型网络结构
- `inference.pdiparams`：模型参数
- `inference.pdiparams.info`：模型参数信息

## 推理引擎选择

PaddleXOCR支持多种推理引擎，根据部署需求可选择：

| 推理引擎 | 特点 | 适用场景 |
|---------|------|---------|
| Paddle Inference | 原生推理引擎，支持功能最完整 | 服务器端部署 |
| ONNX Runtime | 跨平台，兼容性好 | 跨平台部署 |
| OpenVINO | Intel设备优化 | Intel CPU/GPU部署 |
| TensorRT | NVIDIA GPU优化 | 高性能GPU部署 |
| Paddle Lite | 移动端/IoT设备优化 | 移动端/边缘设备部署 |

## Paddle Inference部署

### 环境准备

```bash
# 安装Paddle Inference
python -m pip install paddlepaddle-gpu==2.6.0
```

### 部署代码示例

```python
import cv2
import numpy as np
import paddle.inference as paddle_infer

class TextDetector:
    def __init__(self, model_dir):
        # 创建配置对象
        config = paddle_infer.Config()
        config.set_prog_file(f"{model_dir}/inference.pdmodel")
        config.set_params_file(f"{model_dir}/inference.pdiparams")
        
        # GPU配置
        config.enable_use_gpu(1000, 0)
        # 开启TensorRT加速（可选）
        # config.enable_tensorrt_engine(precision_mode=paddle_infer.PrecisionType.Float32, 
        #                             max_batch_size=1, min_subgraph_size=30)
        
        # 创建预测器
        self.predictor = paddle_infer.create_predictor(config)
        
    def preprocess(self, img):
        # 图像预处理
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, (640, 640))
        img = img.astype('float32') / 255.0
        img = img.transpose((2, 0, 1))
        img = np.expand_dims(img, axis=0)
        return img
        
    def predict(self, img):
        # 获取输入输出句柄
        input_names = self.predictor.get_input_names()
        input_handle = self.predictor.get_input_handle(input_names[0])
        
        # 设置输入
        input_handle.copy_from_cpu(self.preprocess(img))
        
        # 执行预测
        self.predictor.run()
        
        # 获取输出
        output_names = self.predictor.get_output_names()
        output_handle = self.predictor.get_output_handle(output_names[0])
        output_data = output_handle.copy_to_cpu()
        
        # 处理输出结果
        return self.postprocess(output_data)
    
    def postprocess(self, pred):
        # 根据模型输出格式解析结果
        # 此处根据实际模型输出进行处理
        return pred

# 使用示例
detector = TextDetector("./inference/det_model")
img = cv2.imread("test.jpg")
result = detector.predict(img)
```

## ONNX部署

### 模型转换为ONNX

```bash
# 安装paddle2onnx
pip install paddle2onnx

# 转换检测模型
paddle2onnx --model_dir ./inference/det_model \
            --model_filename inference.pdmodel \
            --params_filename inference.pdiparams \
            --save_file ./inference/det_model/model.onnx \
            --opset_version 12

# 转换识别模型
paddle2onnx --model_dir ./inference/rec_model \
            --model_filename inference.pdmodel \
            --params_filename inference.pdiparams \
            --save_file ./inference/rec_model/model.onnx \
            --opset_version 12
```

### ONNX Runtime部署示例

```python
import cv2
import numpy as np
import onnxruntime as ort

class TextRecognizer:
    def __init__(self, model_path):
        # 创建ONNX会话
        self.session = ort.InferenceSession(model_path, 
                                          providers=['CUDAExecutionProvider', 
                                                    'CPUExecutionProvider'])
        # 获取模型输入输出信息
        self.input_name = self.session.get_inputs()[0].name
        self.output_name = self.session.get_outputs()[0].name
        
    def preprocess(self, img):
        # 预处理图像
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        img = cv2.resize(img, (320, 32))
        img = img.astype('float32') / 255.0
        img = np.expand_dims(img, axis=0)
        img = np.expand_dims(img, axis=0)
        return img
        
    def predict(self, img):
        # 预处理
        input_data = self.preprocess(img)
        
        # 执行推理
        results = self.session.run([self.output_name], {self.input_name: input_data})
        
        # 后处理
        return self.postprocess(results[0])
        
    def postprocess(self, pred):
        # 根据模型输出解析结果
        # 此处根据实际模型输出进行处理
        return pred

# 使用示例
recognizer = TextRecognizer("./inference/rec_model/model.onnx")
img = cv2.imread("text.jpg")
result = recognizer.predict(img)
```

## TensorRT部署

### 转换为TensorRT引擎

```bash
# 使用trtexec工具转换ONNX模型为TensorRT引擎
trtexec --onnx=./inference/det_model/model.onnx \
        --saveEngine=./inference/det_model/model.engine \
        --workspace=1024 \
        --fp16
```

### Python部署示例

```python
import tensorrt as trt
import pycuda.driver as cuda
import pycuda.autoinit
import numpy as np
import cv2

class TensorRTInference:
    def __init__(self, engine_path):
        # 加载TensorRT引擎
        self.logger = trt.Logger(trt.Logger.WARNING)
        with open(engine_path, "rb") as f, trt.Runtime(self.logger) as runtime:
            self.engine = runtime.deserialize_cuda_engine(f.read())
        
        self.context = self.engine.create_execution_context()
        self.inputs, self.outputs, self.bindings = [], [], []
        self.stream = cuda.Stream()
        
        # 分配内存
        for binding in range(self.engine.num_bindings):
            size = trt.volume(self.engine.get_binding_shape(binding)) * \
                   self.engine.max_batch_size
            dtype = trt.nptype(self.engine.get_binding_dtype(binding))
            host_mem = cuda.pagelocked_empty(size, dtype)
            cuda_mem = cuda.mem_alloc(host_mem.nbytes)
            self.bindings.append(int(cuda_mem))
            
            if self.engine.binding_is_input(binding):
                self.inputs.append({"host": host_mem, "device": cuda_mem})
            else:
                self.outputs.append({"host": host_mem, "device": cuda_mem})
    
    def predict(self, img):
        # 准备输入数据
        img = self.preprocess(img)
        np.copyto(self.inputs[0]["host"], img.ravel())
        
        # 数据传输到GPU
        for inp in self.inputs:
            cuda.memcpy_htod_async(inp["device"], inp["host"], self.stream)
        
        # 执行推理
        self.context.execute_async_v2(bindings=self.bindings, 
                                     stream_handle=self.stream.handle)
        
        # 结果传回CPU
        for out in self.outputs:
            cuda.memcpy_dtoh_async(out["host"], out["device"], self.stream)
        
        # 同步
        self.stream.synchronize()
        
        # 处理输出
        return self.postprocess(self.outputs[0]["host"])
        
    def preprocess(self, img):
        # 预处理图像
        img = cv2.resize(img, (640, 640))
        img = img.astype('float32') / 255.0
        img = img.transpose((2, 0, 1))
        return np.expand_dims(img, axis=0)
        
    def postprocess(self, output):
        # 根据模型输出处理结果
        return output

# 使用示例
detector = TensorRTInference("./inference/det_model/model.engine")
img = cv2.imread("test.jpg")
result = detector.predict(img)
```

## Paddle Lite移动端部署

### 转换模型

```bash
# 安装Paddle Lite
pip install paddlelite

# 优化模型
paddle_lite_opt \
    --model_file=./inference/det_model/inference.pdmodel \
    --param_file=./inference/det_model/inference.pdiparams \
    --optimize_out=./inference/det_model/model_opt \
    --valid_targets=arm
```

### Android Studio部署步骤

1. 下载PaddleLite预编译库：
   ```bash
   wget https://github.com/PaddlePaddle/Paddle-Lite/releases/download/v2.13/inference_lite_lib.android.armv8.gcc.c++_shared.with_extra.with_cv.tar.gz
   ```

2. 解压并导入Android Studio项目

3. 配置CMakeLists.txt:
   ```cmake
   # 设置Paddle Lite预测库路径
   set(PADDLE_LITE_DIR ${CMAKE_CURRENT_SOURCE_DIR}/PaddleLite)
   
   # 引入头文件
   include_directories(${PADDLE_LITE_DIR}/include)
   
   # 链接库文件
   target_link_libraries(
       native-lib
       ${PADDLE_LITE_DIR}/libs/${ANDROID_ABI}/libpaddle_lite_api_shared.so
       # 其他依赖库
   )
   ```

4. 在Java代码中调用：
   ```java
   public class OCRDetector {
       static {
           System.loadLibrary("native-lib");
       }
       
       // 定义native方法
       public native void init(String modelPath);
       public native float[] detect(Bitmap bitmap);
       
       // 其他方法
   }
   ```

5. C++实现：
   ```cpp
   #include <jni.h>
   #include <string>
   #include <paddle_api.h>
   
   // 创建预测器
   paddle::lite_api::SharedPtrPrctor predictor;
   
   extern "C"
   JNIEXPORT void JNICALL
   Java_com_example_paddleocr_OCRDetector_init(
       JNIEnv* env, jobject thiz, jstring model_path) {
       // 配置Paddle Lite
       paddle::lite_api::MobileConfig config;
       config.set_model_from_file(jstring2cppstring(env, model_path));
       predictor = paddle::lite_api::CreatePaddlePredictor<paddle::lite_api::MobileConfig>(config);
   }
   
   extern "C"
   JNIEXPORT jfloatArray JNICALL
   Java_com_example_paddleocr_OCRDetector_detect(
       JNIEnv* env, jobject thiz, jobject bitmap) {
       // 图像预处理和推理代码
       // ...
   }
   ```

## 服务化部署

### FastAPI部署

使用FastAPI创建OCR服务：

```python
from fastapi import FastAPI, UploadFile, File
import uvicorn
import numpy as np
import cv2
import paddle.inference as paddle_infer
import json
import base64

app = FastAPI()

# 初始化模型
det_model = "./inference/det_model"
rec_model = "./inference/rec_model"

# 实现DetectionModel和RecognitionModel类
# ...

# 创建模型实例
detector = DetectionModel(det_model)
recognizer = RecognitionModel(rec_model)

@app.post("/ocr")
async def ocr_service(file: UploadFile = File(...)):
    # 读取上传的图片
    image_bytes = await file.read()
    nparr = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    # 文本检测
    det_results = detector.predict(image)
    
    # 文本识别
    results = []
    for box in det_results:
        # 裁剪文本区域
        roi = get_roi_image(image, box)
        # 识别文本
        text = recognizer.predict(roi)
        results.append({
            "text": text,
            "box": box.tolist()
        })
    
    return {"results": results}

def get_roi_image(image, box):
    # 根据检测框裁剪文本区域
    # ...
    return roi

# 启动服务
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### Docker容器化部署

创建Dockerfile：

```dockerfile
FROM python:3.9-slim

WORKDIR /app

# 安装依赖
RUN apt-get update && apt-get install -y \
    libgomp1 libgl1-mesa-glx libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# 复制项目文件
COPY . /app/

# 安装Python依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露端口
EXPOSE 8000

# 启动服务
CMD ["python", "app.py"]
```

构建和运行容器：

```bash
# 构建镜像
docker build -t paddleocr-service .

# 运行容器
docker run -p 8000:8000 -v /path/to/models:/app/inference paddleocr-service
```

## 云端部署

### AWS Lambda部署

1. 创建Lambda层包含PaddlePaddle依赖：
   ```bash
   pip install paddlepaddle -t python/
   zip -r paddle_layer.zip python/
   ```

2. 上传到Lambda层

3. 创建Lambda函数
   ```python
   import json
   import base64
   import cv2
   import numpy as np
   import paddle.inference as paddle_infer

   det_model = "/opt/inference/det_model"
   rec_model = "/opt/inference/rec_model"
   
   # 初始化模型代码
   # ...
   
   def lambda_handler(event, context):
       # 获取图片
       image_content = base64.b64decode(event['image'])
       nparr = np.frombuffer(image_content, np.uint8)
       image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
       
       # 推理过程
       # ...
       
       return {
           'statusCode': 200,
           'body': json.dumps({
               'results': results
           })
       }
   ```

### Kubernetes部署

创建Kubernetes部署配置：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: paddleocr-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: paddleocr
  template:
    metadata:
      labels:
        app: paddleocr
    spec:
      containers:
      - name: paddleocr
        image: your-registry/paddleocr-service:latest
        ports:
        - containerPort: 8000
        resources:
          limits:
            cpu: "2"
            memory: "4Gi"
            nvidia.com/gpu: 1
        volumeMounts:
        - name: models-volume
          mountPath: /app/inference
      volumes:
      - name: models-volume
        persistentVolumeClaim:
          claimName: models-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: paddleocr-service
spec:
  selector:
    app: paddleocr
  ports:
  - port: 80
    targetPort: 8000
  type: LoadBalancer
```

## 批处理推理

对于大规模数据处理，可使用批处理模式：

```python
import os
import cv2
import numpy as np
import paddle.inference as paddle_infer
import time

class BatchInference:
    def __init__(self, model_dir, batch_size=8):
        self.batch_size = batch_size
        
        # 初始化模型
        config = paddle_infer.Config()
        config.set_prog_file(f"{model_dir}/inference.pdmodel")
        config.set_params_file(f"{model_dir}/inference.pdiparams")
        config.enable_use_gpu(1000, 0)
        
        # 启用内存优化
        config.enable_memory_optim()
        # 设置零拷贝
        config.switch_use_feed_fetch_ops(False)
        
        self.predictor = paddle_infer.create_predictor(config)
        
    def batch_process(self, image_dir):
        image_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) 
                      if f.endswith(('.jpg', '.png', '.jpeg'))]
        
        results = []
        for i in range(0, len(image_files), self.batch_size):
            batch_files = image_files[i:i+self.batch_size]
            batch_images = [self.preprocess(cv2.imread(f)) for f in batch_files]
            
            # 组合batch
            batch_input = np.concatenate(batch_images, axis=0)
            
            # 执行批量推理
            batch_results = self.predict(batch_input)
            
            # 处理每张图像的结果
            for j, file in enumerate(batch_files):
                results.append({
                    "file": file,
                    "result": self.postprocess(batch_results[j])
                })
                
        return results
        
    def preprocess(self, img):
        # 图像预处理
        # ...
        return processed_img
        
    def predict(self, batch_input):
        # 获取输入句柄
        input_names = self.predictor.get_input_names()
        input_handle = self.predictor.get_input_handle(input_names[0])
        input_handle.copy_from_cpu(batch_input)
        
        # 执行推理
        self.predictor.run()
        
        # 获取输出
        output_names = self.predictor.get_output_names()
        output_handle = self.predictor.get_output_handle(output_names[0])
        output_data = output_handle.copy_to_cpu()
        
        # 拆分为每个样本的结果
        return np.split(output_data, self.batch_size, axis=0)
        
    def postprocess(self, pred):
        # 后处理
        # ...
        return processed_result

# 使用示例
batch_inference = BatchInference("./inference/det_model", batch_size=16)
results = batch_inference.batch_process("./images")
```

## 模型优化

### 量化

```bash
# 模型量化
python tools/quant/quant.py \
    -c configs/text_detection_seal/PP-OCRv4_server_seal_det.yaml \
    -o Global.pretrained_model=./output/det_model/best_accuracy \
    Global.save_inference_dir=./inference/det_model_quant \
    Global.quant_config={
        'weight_quantize_type':'channel_wise_abs_max',
        'activation_quantize_type':'moving_average_abs_max',
        'weight_bits':8,
        'activation_bits':8,
        'dtype':'int8',
        'window_size':10000,
        'moving_rate':0.9
    }
```

### 模型裁剪

```bash
# 模型裁剪
python tools/prune/prune.py \
    -c configs/text_recognition/PP-OCRv4_mobile_rec.yaml \
    -o Global.pretrained_model=./output/rec_model/best_accuracy \
    Global.save_inference_dir=./inference/rec_model_pruned \
    Global.prune_config={
        'pruned_ratio':0.2, 
        'prune_strategy':'l1_norm'
    }
```

## 性能优化

### 预处理优化

1. 使用OpenCV的DNN优化：
   ```python
   # 使用OpenCV的DNN模块
   import cv2
   
   # 创建预处理网络
   net = cv2.dnn.readNetFromONNX("preprocess.onnx")
   
   # 预处理图像
   blob = cv2.dnn.blobFromImage(img, 1.0/255.0, (640, 640), 
                              swapRB=True, crop=False)
   net.setInput(blob)
   preprocessed = net.forward()
   ```

2. 并行预处理：
   ```python
   from concurrent.futures import ThreadPoolExecutor
   
   def batch_preprocess(images, max_workers=4):
       # 创建线程池
       with ThreadPoolExecutor(max_workers=max_workers) as executor:
           # 并行预处理
           processed_images = list(executor.map(preprocess, images))
       return processed_images
   ```

### 推理优化

1. 使用TensorRT:
   ```python
   # 在Paddle Inference中启用TensorRT
   config.enable_tensorrt_engine(
       workspace_size=1 << 30,
       max_batch_size=1,
       min_subgraph_size=30,
       precision_mode=paddle_infer.PrecisionType.Half,  # 使用FP16
       use_static=True,
       use_calib_mode=False
   )
   ```

2. 内存优化:
   ```python
   # 开启内存优化
   config.enable_memory_optim()
   # 使用固定内存
   config.enable_use_gpu(1000, 0)
   # 开启zero copy
   config.switch_use_feed_fetch_ops(False)
   ```

## 常见问题

### 1. 精度下降问题

可能原因：
- 模型量化导致精度损失
- 前处理与训练不匹配
- 模型裁剪过度

解决方法：
- 使用QAT（量化感知训练）
- 确保预处理完全匹配训练配置
- 降低裁剪率，或使用混合精度推理

### 2. 推理速度慢

可能原因：
- 未启用优化选项
- 批处理大小不合适
- 未使用适当的推理引擎

解决方法：
- 启用TensorRT加速
- 根据设备特性调整批处理大小
- 对关键操作进行性能分析并优化

### 3. 内存占用过高

可能原因：
- 模型结构复杂
- 未开启内存优化
- 批处理大小过大

解决方法：
- 使用轻量级模型
- 开启内存优化选项
- 减小批处理大小
- 优化预处理流程

## 更多资源

- [PaddleOCR部署文档](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/deploy/README_ch.md)
- [Paddle Inference使用指南](https://paddle-inference.readthedocs.io/en/latest/introduction/quick_start.html)
- [Paddle Lite使用文档](https://paddle-lite.readthedocs.io/zh/latest/quick_start/tutorial.html)
- [TensorRT优化指南](https://developer.nvidia.com/tensorrt) 