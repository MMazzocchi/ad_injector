# Ad Injector
This web server allows a user to "inject" an advertisement into an MP3 file.

## Getting Started
### Pre-Requisites
Ensure that you have `docker` installed on your machine and it is running.

### Building
```
$ docker-compose build
```
**NOTE**: Building can take a while, as each image has to download its own
dependencies.

### Running
```
$ docker-compose up
```

## Usage
Once running, navigate to http://localhost:8000. You should see a form allowing
for the upload of a "base" file (the file to inject INTO) and an "ad" file (the
file to inject). Select files from your machine, and select a time to inject at.

Click "Submit". Once the new MP3 has been generated, it should trigger a
download dialog box (you may have to disable popup blocking on your web
browser).
