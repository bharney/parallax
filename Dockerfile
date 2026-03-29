FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY .github/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY app/index.html /usr/share/nginx/html/index.html
COPY app/404.html /usr/share/nginx/html/404.html
COPY app/robots.txt /usr/share/nginx/html/robots.txt
COPY --from=build /app/dist/ /usr/share/nginx/html/
COPY app/images/ /usr/share/nginx/html/images/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]