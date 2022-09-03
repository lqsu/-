FROM alpine:latest

WORKDIR /AutoSignMachine/

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
RUN apk add --no-cache tzdata nodejs npm
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 复制代码
COPY . /AutoSignMachine/

RUN npm install --registry https://registry.npm.taobao.org

COPY docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT /entrypoint.sh

node index.js unicom --user 15694867110 --password 199971 --appid 247b001385de5cc6ce11731ba1b1583580b8159e5a51c4abd601e8fc1f8b2b87acf2234bc8a8487cb751a33da268d93d6c111416b0572de9880fc4ae86370754c30c206b71c709096316550b519b8394
