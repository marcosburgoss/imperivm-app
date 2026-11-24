FROM node:20-alpine AS build

WORKDIR /app

COPY imperivm/frontend/angular/package*.json ./
RUN npm ci

COPY imperivm/frontend/angular/ ./
RUN npm run build -- --configuration production

FROM nginx:alpine

COPY imperivm/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/angular /usr/share/nginx/html

EXPOSE 80
