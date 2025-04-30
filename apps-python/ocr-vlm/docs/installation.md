# 环境安装指南

本文档介绍如何安装和配置PaddleXOCR所需的运行环境。根据您的操作系统和需求，可以选择不同的安装方式。

## 运行环境要求

推荐环境配置：
- PaddlePaddle >= 2.1.2
- Python 3.7 ~ 3.10
- CUDA 10.1/10.2/11.8/12.3 (GPU版本)
- CUDNN 7.6+

## 安装方式概述

PaddleXOCR提供以下安装方式：
1. **基于pip安装**：快速便捷，适合大多数用户
2. **基于Docker安装**：提供完整的运行环境，适合开发人员和生产环境
3. **源码安装**：适合需要修改源码的开发者

## 1. Python环境搭建

### 1.1 Windows系统

#### 1.1.1 安装Anaconda

1. 从清华镜像源下载Anaconda安装包：
   ```
   https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D
   ```
   
2. 选择适合您Windows系统的版本（通常为64位版本）

3. 安装时建议将安装位置更改到非系统盘，并勾选"Add Anaconda to my PATH environment variable"

#### 1.1.2 创建conda环境

1. 打开Anaconda Prompt终端
   
2. 创建名为`paddle_env`的Python环境：
   ```bash
   conda create --name paddle_env python=3.8 --channel https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
   ```
   
3. 激活环境：
   ```bash
   conda activate paddle_env
   ```

### 1.2 MacOS系统

#### 1.2.1 安装Anaconda

1. 从清华镜像源下载适用于MacOS的Anaconda安装包：
   ```
   https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D
   ```
   
2. 选择最新版本的MacOSX安装包（如Anaconda3-xxxx-MacOSX-x86_64.pkg）
   
3. 双击安装包按照默认设置安装

#### 1.2.2 创建conda环境

1. 打开终端
   
2. 将conda加入环境变量：
   ```bash
   echo 'export PATH="~/opt/anaconda3/bin:$PATH"' >> ~/.bash_profile
   source ~/.bash_profile
   ```
   
3. 创建名为`paddle_env`的Python环境：
   ```bash
   conda create --name paddle_env python=3.8 --channel https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
   ```
   
4. 激活环境：
   ```bash
   conda activate paddle_env
   ```

### 1.3 Linux系统

Linux用户可选择Anaconda或Docker两种方式运行。如果您熟悉Docker且需要训练PaddleOCR模型，推荐使用Docker环境；如果不熟悉Docker，则可以使用Anaconda来运行项目。

#### 1.3.1 Anaconda环境配置

1. 下载适用于Linux的Anaconda安装包：
   ```bash
   wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2021.05-Linux-x86_64.sh
   ```
   
2. 安装Anaconda：
   ```bash
   sh Anaconda3-2021.05-Linux-x86_64.sh
   ```
   
3. 将conda加入环境变量：
   ```bash
   echo 'export PATH="~/anaconda3/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```
   
4. 创建名为`paddle_env`的Python环境：
   ```bash
   conda create --name paddle_env python=3.8 --channel https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
   ```
   
5. 激活环境：
   ```bash
   conda activate paddle_env
   ```

#### 1.3.2 Docker环境配置

1. 首次运行需创建一个docker容器：
   ```bash
   # 如果使用CUDA10.2+CUDNN7
   sudo nvidia-docker run --name ppocr -v $PWD:/paddle --shm-size=64G --network=host -it registry.baidubce.com/paddlepaddle/paddle:2.1.3-gpu-cuda10.2-cudnn7 /bin/bash
   
   # 如果使用CUDA11+CUDNN8
   sudo nvidia-docker run --name ppocr -v $PWD:/paddle --shm-size=64G --network=host -it registry.baidubce.com/paddlepaddle/paddle:2.1.3-gpu-cuda11.2-cudnn8 /bin/bash
   ```
   
2. 再次进入容器：
   ```bash
   sudo docker container exec -it ppocr /bin/bash
   ```

## 2. 安装PaddlePaddle

### 2.1 基于pip安装(推荐)

根据您的设备类型和CUDA版本安装对应的PaddlePaddle版本：

```bash
# CPU版本
python -m pip install paddlepaddle==3.0.0b1 -i https://www.paddlepaddle.org.cn/packages/stable/cpu/

# GPU版本，CUDA 11.8
python -m pip install paddlepaddle-gpu==3.0.0b1 -i https://www.paddlepaddle.org.cn/packages/stable/cu118/

# GPU版本，CUDA 12.3
python -m pip install paddlepaddle-gpu==3.0.0b1 -i https://www.paddlepaddle.org.cn/packages/stable/cu123/
```

验证安装：
```bash
python -c "import paddle; print(paddle.__version__)"
```

如果显示版本号（如 `3.0.0-beta1`），则表示安装成功。

### 2.2 基于Docker安装

如果您使用的是Docker，可以使用官方提供的PaddlePaddle Docker镜像：

```bash
# CPU版本
docker run --name paddlex -v $PWD:/paddle --shm-size=8G --network=host -it registry.baidubce.com/paddlepaddle/paddle:3.0.0b1 /bin/bash

# GPU版本，CUDA 11.8
docker run --gpus all --name paddlex -v $PWD:/paddle --shm-size=8G --network=host -it registry.baidubce.com/paddlepaddle/paddle:3.0.0b1-gpu-cuda11.8-cudnn8.6-trt8.5 /bin/bash

# GPU版本，CUDA 12.3
docker run --gpus all --name paddlex -v $PWD:/paddle --shm-size=8G --network=host -it registry.baidubce.com/paddlepaddle/paddle:3.0.0b1-gpu-cuda12.3-cudnn9.0-trt8.6 /bin/bash
```

## 3. 安装PaddleX

PaddleX为您提供了两种安装模式：Wheel包安装和插件安装。

### 3.1 Wheel包安装模式

如果您使用PaddleX的应用场景为模型推理与集成，推荐使用更便捷、更轻量的Wheel包安装模式：

```bash
pip install https://paddle-model-ecology.bj.bcebos.com/paddlex/whl/paddlex-3.0.0b1-py3-none-any.whl
```

### 3.2 插件安装模式

如果您使用PaddleX的应用场景为二次开发（例如重新训练模型、微调模型、自定义模型结构、自定义推理代码等），推荐使用功能更加强大的插件安装模式：

1. 获取PaddleX源码：
   ```bash
   git clone https://github.com/PaddlePaddle/PaddleX.git
   cd PaddleX
   pip install -e .
   ```

2. 安装所需插件：
   ```bash
   # 安装PaddleOCR插件
   paddlex --install PaddleOCR
   
   # 安装多个插件
   paddlex --install PaddleOCR PaddleClas
   
   # 安装全部插件
   paddlex --install
   ```

### 3.3 Docker镜像安装（推荐给Linux用户）

您可以使用PaddleX官方Docker镜像，其中已经内置了PaddlePaddle和PaddleX（包括wheel包和所有插件），并配置好了相应的CUDA环境：

```bash
# CPU版本
docker run --name paddlex -v $PWD:/paddle --shm-size=8g --network=host -it registry.baidubce.com/paddlex/paddlex:paddlex3.0.0b1-paddlepaddle3.0.0b1-cpu /bin/bash

# GPU版本，CUDA 11.8
docker run --gpus all --name paddlex -v $PWD:/paddle --shm-size=8g --network=host -it registry.baidubce.com/paddlex/paddlex:paddlex3.0.0b1-paddlepaddle3.0.0b1-gpu-cuda11.8-cudnn8.6-trt8.5 /bin/bash

# GPU版本，CUDA 12.3
docker run --gpus all --name paddlex -v $PWD:/paddle --shm-size=8g --network=host -it registry.baidubce.com/paddlex/paddlex:paddlex3.0.0b1-paddlepaddle3.0.0b1-gpu-cuda12.3-cudnn9.0-trt8.6 /bin/bash
```

## 4. 数据标注工具安装（可选）

PaddleOCR提供了数据标注工具PPOCRLabel，可用于OCR任务的数据标注：

### 4.1 通过whl包安装与运行

#### Windows
```bash
pip install PPOCRLabel
PPOCRLabel --lang ch  # 启动【普通模式】，用于打【检测+识别】场景的标签
PPOCRLabel --lang ch --kie True  # 启动【KIE模式】，用于打【检测+识别+关键字提取】场景的标签
```

#### Ubuntu Linux
```bash
pip3 install PPOCRLabel
pip3 install trash-cli
PPOCRLabel --lang ch
```

#### MacOS
```bash
pip3 install PPOCRLabel
pip3 install opencv-contrib-python-headless==4.2.0.32
PPOCRLabel --lang ch
```

### 4.2 通过Python脚本运行

```bash
cd ./PPOCRLabel
python PPOCRLabel.py --lang ch
```

## 验证安装

完成所有安装步骤后，您可以运行以下命令验证PaddleX和相关插件是否安装成功：

```bash
# 验证PaddleX
python -c "import paddlex; print(paddlex.__version__)"

# 验证PaddleOCR插件
python -c "import paddleocr; print(paddleocr.__version__)"
```

如果能够正确显示版本号，则表示安装成功。 