FROM node
RUN apt-get update && \
  apt-get install -y ffmpeg
RUN mkdir -p /code
WORKDIR /code
COPY ad_injector_server/package.json ./
RUN npm install
COPY ./ad_injector_server/* /code/
