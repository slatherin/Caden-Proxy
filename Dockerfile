FROM node:10

WORKDIR /cadenza/documents/FEC/FEC-amazon-static

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5438

CMD ["npm", "start"]