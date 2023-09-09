FROM node:lts
WORKDIR /
COPY / .
RUN yarn install
RUN yarn run build
RUN yarn run export
EXPOSE 8080
CMD ["yarn", "start"]
