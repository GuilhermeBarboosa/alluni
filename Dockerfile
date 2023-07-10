# Use a imagem do Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /src/app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o conteúdo do diretório atual para o diretório de trabalho
COPY . .

# Exponha a porta 4200
EXPOSE 4200

# Inicie o servidor do Angular
CMD ["ng", "server"]
