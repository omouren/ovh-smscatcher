# ovh-smscatcher

Viewer in Vue.js to mock OVH SMS Api and to avoid real sms sends.

![OVH SmsCatcher](https://raw.githubusercontent.com/omouren/ovh-smscatcher/master/screenshot.png)

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev
```

## Docker image
Pre-built [Docker image](https://hub.docker.com/r/omouren/ovh-smscatcher/)
``` bash
# By default, internaly server use port 8080
$ docker run --rm -p 80:8080 -ti omouren/ovh-smscatcher:latest
# You can override it with custom port by an environment variable
$ docker run --rm -e "PORT=1337" -p 80:1337 -ti omouren/ovh-smscatcher:latest
# Now go to http://localhost:80
```