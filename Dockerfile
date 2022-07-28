FROM node:buster

WORKDIR /usr/src/pokemon-simulator/build

COPY ./build ./

RUN npm install -g serve

CMD ["/bin/bash"]