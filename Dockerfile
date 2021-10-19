FROM node:14 as builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install 

COPY . .
RUN npm run build



EXPOSE 4000
CMD ["npm","start"]