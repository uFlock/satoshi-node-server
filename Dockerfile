FROM node:14.15.4-alpine3.10

WORKDIR /user/satoshi/app

COPY . .

RUN npm install --production

CMD ["npm", "start"]