FROM node:18-alpine

WORKDIR /app

RUN npm install prisma --global

COPY package*.json ./

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]