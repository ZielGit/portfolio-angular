# ---- Base Image ----
FROM node:22-alpine

# Instalar Angular CLI globalmente (versión 17)
RUN npm install -g @angular/cli@19

# Configurar el workspace y permisos
WORKDIR /app

# Copiar archivos de dependencias (optimiza caché de Docker)
COPY package.json package-lock.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del proyecto (con permisos correctos)
COPY . .

# Exponer puerto de desarrollo
EXPOSE 4200

# Comando para iniciar el servidor con Hot-Reload
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]

# Ejecuta: docker run -it --rm -v "${PWD}:/app" -p 4200:4200 name-image
