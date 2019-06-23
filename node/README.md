# Ad Injection Server (Node)
This image contains a `node` web server that can take a base MP3 file, inject
another MP3 file into it at a specified point, and return the combined file.

The server has the following endpoint(s):

### POST: `inject/`
This endpoint expects three parameters:
  * `base`: the base MP3 file to inject an ad into
  * `ad`: the MP3 to inject into the base file
  * `time`: the time to inject the ad ad (ex: `4:00`)

This endpoint will return the name of the generated file.
**NOTE**: This endpoint is **blocking**! For large files, it can take a while
to complete processing and return!

### GET: `download/<file name>`
This endpoint will serve the requested file (if it exists).

## Usage with Curl
```
$ curl \
  -F "base=@/path/to/base.mp3" \
  -F "ad=@/path/to/ad.mp3" \
  -F "time=4:00" \
  http://localhost/inject
```
