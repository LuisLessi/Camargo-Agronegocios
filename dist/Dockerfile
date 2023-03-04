# Defina a imagem base
FROM node:16-alpine3.14

# Crie o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos da pasta dist para o diretório de trabalho
COPY dist/ ./

# Exponha a porta 8080
EXPOSE 8080

# Inicie o servidor web
CMD ["npm", "run", "start"]