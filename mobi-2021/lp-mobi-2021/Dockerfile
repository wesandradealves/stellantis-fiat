# FROM mhart/alpine-node:12.22 AS builder
FROM mhart/alpine-node:10.24.1 AS builder

WORKDIR /app
COPY / .
RUN ls -la
RUN apk add --no-cache git openssh
RUN yarn install
RUN yarn run build

FROM nginx:alpine as stage

COPY --from=builder /app/build/ /usr/share/nginx/html/
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
