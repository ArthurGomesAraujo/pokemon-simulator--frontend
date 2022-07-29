FROM node:buster

COPY ./build /usr/src/pokemon-simulator/build

WORKDIR /usr/src/pokemon-simulator/

RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "build"]