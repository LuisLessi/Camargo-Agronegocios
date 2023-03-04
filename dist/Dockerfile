# Use uma imagem do node
FROM node

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos da pasta dist para o diretório de trabalho
COPY dist/ ./

# Exponha a porta 8080
EXPOSE 8080

# Inicie o aplicativo
CMD [ "npm", "start" ]
