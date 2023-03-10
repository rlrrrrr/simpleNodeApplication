FROM node:18.14.2

WORKDIR /app

COPY tsconfig.json package*.json ./

RUN npm install

COPY . .
EXPOSE 5000
CMD ["npm","run","tsToJs"]
CMD ["npm","start"]
