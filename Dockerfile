FROM node:12.5.0-alpine

WORKDIR /home/node/app

COPY ./app/package*.json ./
RUN npm install

CMD ["sh", "-c", "npm start"]
