ARG VERSION

FROM node:${VERSION}

RUN apk add --no-cache bash

USER node

COPY package.json /home/node
COPY webpack.config.js /home/node

CMD ["tail", "-f", "/dev/null"]

