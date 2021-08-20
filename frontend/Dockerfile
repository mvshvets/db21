FROM node:12.2.0-alpine as build

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
