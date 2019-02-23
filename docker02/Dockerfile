# specify the node base image with your desired version node:<version>
FROM node:latest

# create dir for application
RUN mkdir /app

COPY calcEndPo2.js /app

# replace this with your application's default port
CMD ["node", "/app/calcEndPo2.js"]

