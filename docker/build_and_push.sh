#!/bin/bash

# 退出时如果有任何错误
set -e

# 移动到脚本所在的目录（docker 文件夹）
cd "$(dirname "$0")"

# 移动到项目根目录
cd ..

# 提示用户输入版本号
read -p "请输入版本号（例如 1.0.0）： " VERSION

# 设置并导出代理环境变量
export HTTP_PROXY="http://192.168.1.26:7890"
export HTTPS_PROXY="http://192.168.1.26:7890"
export NO_PROXY="localhost,127.0.0.1"

git pull

# 定义镜像名称和仓库信息
ALIYUN_REGISTRY="registry.cn-shanghai.aliyuncs.com"
NAMESPACE="zimablue"
REPO_NAME="sparkai-free"
IMAGE_NAME="${ALIYUN_REGISTRY}/${NAMESPACE}/${REPO_NAME}"

# 设置代理环境变量
#HTTP_PROXY="http://192.168.1.26:7890"
#HTTPS_PROXY="http://192.168.1.26:7890"
#NO_PROXY="localhost,127.0.0.1"

# 检查是否已登录阿里云镜像仓库
#if ! docker info | grep -q "${ALIYUN_REGISTRY}"; then
#    echo "您尚未登录阿里云镜像仓库，请先执行 docker login --username=tb982859_33 ${ALIYUN_REGISTRY}"
#    exit 1
#fi

# 创建或使用现有的 buildx 构建器
BUILDER_NAME="mybuilderproxy"
#
#if ! docker buildx inspect "${BUILDER_NAME}" >/dev/null 2>&1; then
#    docker buildx create --name "${BUILDER_NAME}" --use
#else
#    docker buildx use "${BUILDER_NAME}"
#fi

# 启动 buildx 构建器
docker buildx inspect --bootstrap

# 指定目标平台
PLATFORMS="linux/amd64,linux/arm64"

# 构建并推送多架构镜像，传递代理设置
docker buildx build \
    --builder "${BUILDER_NAME}" \
    --platform "${PLATFORMS}" \
    -t "${IMAGE_NAME}:${VERSION}" \
    -t "${IMAGE_NAME}:latest" \
    --push \
    -f ./docker/Dockerfile \
    .

echo "Docker 镜像已成功构建并推送到 ${IMAGE_NAME}，标签为 ${VERSION} 和 latest。"
