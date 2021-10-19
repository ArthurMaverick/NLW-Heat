FROM node:14.17.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install 

COPY . .
RUN npm run build


RUN npx prisma generate
EXPOSE 4000
CMD ["npm","start"]