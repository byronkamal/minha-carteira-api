FROM node

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

EXPOSE 3333

CMD ["yarn", "dev:server"]
