FROM node:alpine3.12

WORKDIR /app

COPY ./package.json .

RUN yarn install --prod 

COPY . .

RUN yarn run build

EXPOSE 3000

ENTRYPOINT ["yarn" "run start"]

