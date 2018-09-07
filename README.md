[![Build Status](https://travis-ci.org/telemark/tfk-search-index-politikere.svg?branch=master)](https://travis-ci.org/telemark/tfk-search-index-politikere)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-search-index-politikere/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-search-index-politikere?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-search-index-politikere

Henter ut politikere og dytter til søkeservicen vår

## Docker
To run this module as a service use the docker image.

Change the ENV parts of the [Dockerfile](Dockerfile) or use [docker.env](docker.env)

Build
```sh
$ docker build -t tfk-search-index-politikere .
```

or use the prebuilt image from [hub.docker.com](https://hub.docker.com/r/telemark/tfk-search-index-politikere/)

```sh
$ docker pull telemark/tfk-search-index-politikere
```

Run a container

```sh
$ docker run --rm tfk-search-index-politikere
```

or

```sh
$ docker run --env-file=docker.env --rm tfk-search-index-politikere
```

This will spin up a container. Do the job. Shut it down and remove it.

## License
[MIT](LICENSE)