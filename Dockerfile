FROM node:12.10-alpine

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000
