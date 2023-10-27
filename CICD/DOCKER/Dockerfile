FROM node:16.18.1-alpine3.17
WORKDIR /app
COPY package.json ./
# COPY package-lock.json ./
COPY ./ ./
RUN npm i --force
RUN apk upgrade libssl3 libcrypto3

ARG USERNAME=aztuser
RUN adduser -D $USERNAME

USER $USERNAME

EXPOSE 3000
CMD ["npm", "start", "jest"]