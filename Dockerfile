# Imagem do Node versão 10
FROM node:10

# Diretório de trabalho da aplicação. Criado dentro do conteiner
WORKDIR /usr/src/app

# Copia todos os arquivos package para o diretório ./
COPY package*.json ./

# Instala as dependências do aplicativo
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expõem o acesso ao conteiner pela porta 3002
EXPOSE 3002

# inicializa a aplicação
CMD [ "node", "server.js" ]
