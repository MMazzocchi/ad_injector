FROM node
RUN apt-get update && \
  apt-get install -y ffmpeg
RUN mkdir -p /code /data/uploads /data/outputs
WORKDIR /code
COPY ad_injector_server/package.json ./
RUN npm install
COPY ./ad_injector_server/index.js /code/
COPY ./ad_injector_server/inject/ /code/inject
CMD npm start
