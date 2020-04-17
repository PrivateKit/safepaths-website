FROM node:12.16.2-alpine3.9
LABEL proejct="safepaths-website"
LABEL maintainer="sherif@extremesolution.com"

ENV NODE_ENV development
ENV PORT 3000
WORKDIR /app
ADD . $WORKDIR
RUN npm install

CMD ["npm", "start"]

