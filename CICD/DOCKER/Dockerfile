FROM node:16.18.1-alpine3.17
WORKDIR /app
COPY package.json ./
# COPY package-lock.json ./
COPY ./ ./

RUN mv public/index-prod.html public/index.html
RUN npm i --force
RUN apk upgrade libssl3 libcrypto3
ENV  SKIP_PREFLIGHT_CHECK=true
ENV  INLINE_RUNTIME_CHUNK=false
RUN npm run build

RUN npm i -f postcss@8.4.31 --prefix node_modules/resolve-url-loader/
RUN cd /usr && npm i -g npm@9.8.1

ARG USERNAME=aztuser
RUN adduser -D $USERNAME


ENV NODE_ENV=${NODE_ENV}
USER $USERNAME


EXPOSE 3000
CMD ["npm", "run","server"]



# docker run  -e WHITELISTED_DOMAINS='http://localhost:3000' -p 3000:3000  imagesName