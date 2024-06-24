# Establecer la imagen base con Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /movies-app

# Copiar el archivo package.json y package-lock.json del servidor y cliente
COPY package.json .
COPY server/package.json ./server/
COPY client/package.json ./client/

# Instalar las dependencias del servidor y cliente
RUN cd server && npm install --production --legacy-peer-deps
RUN cd client && npm install --production --legacy-peer-deps

# Copiar el resto de los archivos del servidor y cliente
COPY server ./server
COPY client ./client

# Construir la aplicación de cliente React
RUN cd client && npm run build

# Exponer el puerto en el que se ejecuta tu servidor Node.js
EXPOSE 80

# Comando para ejecutar el servidor Node.js
CMD ["node", "server/src/index.js"]
