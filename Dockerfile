FROM node:alpine

COPY ./ /usr/src/pokemon-simulator/

WORKDIR /usr/src/pokemon-simulator/

RUN npm install

ENTRYPOINT ["npm", "run", "start"]