# 模型训练指南

本文档介绍如何对PaddleXOCR中的各个模块进行训练，以适应特定的应用场景和提高识别准确率。

## 前提条件

在开始训练前，请确保：

1. 已完成[环境安装](./installation.md)
2. 已准备好训练数据集
3. 安装了必要的训练依赖:
   ```bash
   pip install -e ".[torch,metrics]"
   ```

## 数据准备

不同模块的训练需要准备不同格式的数据集。以下是各个模块的数据格式要求：

### 印章文本检测数据集

印章文本检测数据集应包含以下文件：
- `train_images`目录：存放训练图像
- `train_labels.txt`：训练标签文件，每行格式为`图像路径\t标注信息`
- `val_images`目录：存放验证图像
- `val_labels.txt`：验证标签文件，格式同训练标签

示例标注文件格式：
```
train_data/img_10.jpg	[{"transcription": "印章文本", "points": [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]}]
```

### 表格结构识别数据集

表格结构识别数据集格式：
- `train/`目录：包含训练图像和标注文件
  - `images/`：存放训练表格图像
  - `labels/`：存放HTML格式的标注文件
- `val/`目录：包含验证图像和标注文件
  - `images/`：存放验证表格图像
  - `labels/`：存放HTML格式的标注文件

每个图像对应一个同名的HTML标注文件，包含表格的结构信息。

### 文本识别数据集

文本识别数据集格式：
- `train_images`目录：存放训练文本图像
- `rec_gt_train.txt`：训练标签文件，每行格式为`图像名 文本`
- `val_images`目录：存放验证文本图像
- `rec_gt_val.txt`：验证标签文件，格式同训练标签

示例标注文件：
```
word_001.png 你好
word_002.png Hello
```

## 数据标注工具

PaddleOCR提供了标注工具PPOCRLabel，可用于OCR数据标注：

```bash
pip install PPOCRLabel
PPOCRLabel --lang ch
```

详细使用说明可参考[数据标注工具](./labeling.md)文档。

## 数据校验

在开始训练前，建议对数据集进行校验，确保数据格式正确：

```bash
# 印章文本检测数据集校验
python main.py -c configs/text_detection_seal/PP-OCRv4_server_seal_det.yaml \
    -o Global.mode=check_dataset \
    -o Global.dataset_dir=./dataset/ocr_curve_det_dataset_examples

# 表格结构识别数据集校验
python main.py -c configs/table_recognition/SLANet.yaml \
    -o Global.mode=check_dataset \
    -o Global.dataset_dir=./dataset/table_rec_dataset_examples

# 文本识别数据集校验
python main.py -c configs/text_recognition/PP-OCRv4_mobile_rec.yaml \
    -o Global.mode=check_dataset \
    -o Global.dataset_dir=./dataset/ocr_rec_dataset_examples
```

## 训练流程

以下是各模块的训练命令和示例：

### 印章文本检测模型训练

训练印章文本检测模型（PP-OCRv4_server_seal_det）：

```bash
python main.py -c configs/text_detection_seal/PP-OCRv4_server_seal_det.yaml \
    -o Global.mode=train \
    -o Global.dataset_dir=./dataset/ocr_curve_det_dataset_examples
```

参数说明：
- `-c`: 指定配置文件路径
- `-o Global.mode=train`: 设置模式为训练
- `-o Global.dataset_dir`: 指定数据集路径

### 表格结构识别模型训练

训练表格结构识别模型（SLANet或SLANet_plus）：

```bash
python main.py -c configs/table_recognition/SLANet.yaml \
    -o Global.mode=train \
    -o Global.dataset_dir=./dataset/table_rec_dataset_examples
```

### 文本识别模型训练

训练文本识别模型（PP-OCRv4_mobile_rec或PP-OCRv4_server_rec）：

```bash
python main.py -c configs/text_recognition/PP-OCRv4_mobile_rec.yaml \
    -o Global.mode=train \
    -o Global.dataset_dir=./dataset/ocr_rec_dataset_examples
```

### 版面区域检测模型训练

训练版面区域检测模型（如PicoDet-L_layout_3cls）：

```bash
python main.py -c configs/structure_analysis/PicoDet-L_layout_3cls.yaml \
    -o Global.mode=train \
    -o Global.dataset_dir=./dataset/det_layout_examples
```

## 训练参数调整

通过修改配置文件或命令行参数，可以调整训练过程中的各种参数：

### 通用参数

- `Global.device`: 设置训练设备，如 "gpu:0,1" 表示使用前两张GPU
- `Global.distributed`: 是否使用分布式训练
- `Global.use_amp`: 是否使用混合精度训练
- `Train.epochs_iters`: 训练轮次数
- `Train.batch_size`: 批次大小
- `Train.learning_rate`: 学习率
- `Train.checkpoint_interval`: 模型保存间隔
- `Optimizer.type`: 优化器类型

### 数据增强参数

在配置文件中的`Train.dataset.augmentation`部分，可以设置数据增强参数：

```yaml
Train:
  dataset:
    augmentation:
      random_crop:
        probability: 0.5
      random_brightness:
        value: 0.3
      random_rotation:
        max_angle: 10
```

不同模块支持的数据增强操作略有不同，具体可参考各配置文件。

## 模型评估

在完成模型训练后，可以对模型进行评估：

```bash
# 印章文本检测模型评估
python main.py -c configs/text_detection_seal/PP-OCRv4_server_seal_det.yaml \
    -o Global.mode=evaluate \
    -o Global.dataset_dir=./dataset/ocr_curve_det_dataset_examples

# 表格结构识别模型评估
python main.py -c configs/table_recognition/SLANet.yaml \
    -o Global.mode=evaluate \
    -o Global.dataset_dir=./dataset/table_rec_dataset_examples

# 文本识别模型评估
python main.py -c configs/text_recognition/PP-OCRv4_mobile_rec.yaml \
    -o Global.mode=evaluate \
    -o Global.dataset_dir=./dataset/ocr_rec_dataset_examples
```

## 模型微调

如果您已有预训练模型，想在特定数据集上进行微调，可以通过以下方式进行：

1. 设置预训练模型路径：
   ```bash
   python main.py -c configs/text_detection_seal/PP-OCRv4_server_seal_det.yaml \
       -o Global.mode=train \
       -o Global.dataset_dir=./dataset/your_dataset \
       -o Global.pretrained_model=./pretrained_models/your_pretrained_model
   ```

2. 或者在配置文件中设置：
   ```yaml
   Global:
     pretrained_model: ./pretrained_models/your_pretrained_model
   ```

对于迁移学习场景，可以冻结部分网络层，只训练特定层：

```yaml
Train:
  freeze_params:
    - backbone
  learning_rate: 0.0001  # 使用较小的学习率
```

## 模型导出

训练完成后，可以将模型导出为推理格式：

```bash
# 导出模型
python main.py -c configs/text_detection_seal/PP-OCRv4_server_seal_det.yaml \
    -o Global.mode=export \
    -o Global.save_inference_dir=./inference/pp_ocr_det_v4_server_seal
```

导出的模型包含以下文件：
- `inference.pdiparams`: 模型参数文件
- `inference.pdiparams.info`: 模型参数信息
- `inference.pdmodel`: 模型结构文件
- `model.yml`: 模型配置文件

## 模型融合训练

PaddleXOCR还支持使用LLaMA-Factory进行模型融合和微调：

```bash
# 微调模型
llamafactory-cli train examples/train_lora/llama3_lora_sft.yaml

# 推理
llamafactory-cli chat examples/inference/llama3_lora_sft.yaml

# 模型融合
llamafactory-cli export examples/merge_lora/llama3_lora_sft.yaml
```

LLaMA-Factory还提供了可视化训练界面：

```bash
llamafactory-cli webui
```

## 性能优化技巧

1. **使用混合精度训练**：加速训练并减少内存占用
   ```bash
   python main.py -c config.yaml -o Global.use_amp=True
   ```

2. **梯度累积**：在显存不足的情况下增大等效批次大小
   ```yaml
   Train:
     gradient_accumulation_steps: 4
   ```

3. **学习率调整**：使用适当的学习率调度策略
   ```yaml
   Train:
     learning_rate:
       decay:
         type: cosine
         steps: 1000
         end_lr: 0.00001
   ```

4. **数据增强**：增加数据多样性，提高模型泛化能力
   ```yaml
   Train:
     dataset:
       augmentation:
         random_crop: True
         random_distort: True
   ```

5. **模型剪枝与量化**：减小模型体积，提高推理速度
   ```bash
   python prune.py -c configs/prune/prune_det_model.yaml
   ```

## 常见问题

1. **训练过程中显存不足**
   - 减小batch_size
   - 使用梯度累积
   - 启用混合精度训练

2. **过拟合问题**
   - 增加数据增强
   - 添加正则化项
   - 使用早停机制

3. **训练不收敛**
   - 检查学习率设置
   - 检查数据集标注是否正确
   - 尝试不同的优化器

4. **模型精度不高**
   - 增加训练数据量
   - 尝试使用预训练模型进行微调
   - 使用更复杂的模型架构

## 更多资源

- [PaddleOCR模型训练官方文档](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/training.md)
- [LLaMA-Factory微调指南](https://github.com/hiyouga/LLaMA-Factory/blob/main/README_zh.md) 