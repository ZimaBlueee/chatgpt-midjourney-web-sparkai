# 使用 Node 作为基础镜像
FROM node:18-buster-slim

# 设置工作目录
WORKDIR /src

# 将 package.json 和 package-lock.json 文件复制到工作目录
COPY package*.json .

# 通过npm设置代理（如果需要）
#RUN npm config set proxy http://192.168.1.26:7890 \
# && npm config set https-proxy http://192.168.1.26:7890

# 安装 pm2 和 pnpm
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pm2 pnpm

# 安装项目依赖
RUN pnpm install

# 仅在安装依赖时使用代理
#RUN npm config set proxy http://192.168.1.26:7890 \
# && npm config set https-proxy http://192.168.1.26:7890 \
# && npm config set registry https://registry.npmmirror.com \
# && npm install -g pm2 pnpm \
# && pnpm install --registry=https://registry.npmmirror.com \
# && npm config delete proxy \
# && npm config delete https-proxy

# 将项目源代码复制到工作目录
COPY . .

# 暴露端口，与你的应用程序绑定的端口保持一致
EXPOSE 9520

# 运行命令
CMD [ "pnpm", "start" ,"--no-daemon"]
