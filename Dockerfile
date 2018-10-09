# ---- Dev ----
FROM node:10 as dev
WORKDIR /app
COPY package*.json /app/
RUN npm install --production
COPY . /app
RUN npm run build

# ---- Prod ----
FROM nginx:latest as prod
COPY --from=dev /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=dev /app/build /usr/share/nginx/html
