# ---- Dev ----
FROM node:10 as dev
WORKDIR /app
COPY package*.json /app/
RUN npm install --production

# ---- Build ----
FROM dev as build
COPY .env /app/.env
COPY /src /app/src
COPY /public /app/public
RUN npm run build

# ---- Prod ----
FROM nginx:latest as prod
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
