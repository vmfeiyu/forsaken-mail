修改了dockerfile文件，可以在甲骨文arm64，oracle linux8上运行：   
FROM arm64v8/node:lts-alpine1  
RUN apk add --no-cache python3  
或者node指定镜像  
FROM node:lts-alpine@sha256:75808a50b9242a487f3b97ff3d486b44e3c5d753a63a6103be5dcb6a3a87aebf
