# Ad Injector
This web server allows a user to "inject" an advertisement into an MP3 file.

![](https://raw.githubusercontent.com/MMazzocchi/ad_injector/master/img/ad_injector.png)

## Getting Started
### Pre-Requisites
Ensure that you have `docker` installed on your machine and it is running.

### Running
```
$ docker-compose up
```
**NOTE**: The first time running, it will take a while to pull all the docker
images and build each container. Subsequent runs will be much faster.

## Usage
Once running, navigate to http://localhost:8000. You should see a form allowing
for the upload of a "base" file (the file to inject INTO) and an "ad" file (the
file to inject). Select files from your machine, and select a time to inject at.

Click "Submit". Once the new MP3 has been generated, it should trigger a
download dialog box (you may have to disable popup blocking on your web
browser).

**NOTE**: Depending on the size of the file, it could take several minutes to
generate the file!
