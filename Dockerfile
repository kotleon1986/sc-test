FROM node:16.14 as node

WORKDIR /app

COPY . .

RUN npm i -g @angular/cli

RUN yarn

CMD ng serve --host=0.0.0.0