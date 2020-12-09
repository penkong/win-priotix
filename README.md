<p align="center">
  <a href="http://www.penbeh.com/" target="blank"><h1>created by Mazdak Nazemi</h1></a>
</p>
<p align="center">
  nazemi.works@gmail.com
</p>

## Description

this powered by [Nest](https://github.com/nestjs/nest) and also can use it with spa and ssr application.

#####

## and also offer you :

##### MongoDB-Mongoose

##### Cookie-session

##### Clean-Architecture

##### Heavy Decoupling

---

### Installation

if you have locally installed mongodb go next step otherwise

use docker for create mongodb

command :

```bash
// that will create a container with db name in background.
// also check .env file or if you use docker-compose put env you need.


$ sudo docker run --name db -p 27017:27017 -d mongo


```

after that :

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
