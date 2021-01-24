FROM alpine/node

WORKDIR /user/satoshi/app

COPY . .

RUN npm install --production

CMD ["npm", "start"]