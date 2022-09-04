FROM node:16.17-alpine3.16 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build:stage

FROM nginx:alpine as runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf