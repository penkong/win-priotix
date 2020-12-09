<p align="center">
  <a href="http://www.penbeh.com/" target="blank"><h1>created by Mazdak Nazemi</h1></a>
</p>
<p align="center">
  nazemi.works@gmail.com
</p>

## Description

this powered by [Nest](https://github.com/nestjs/nest) and also can use it with spa and ssr application.

##### Folder Structure :

backend
client (webpack version)
front-cra (create-react-app)

now before document and more about structure there are 2 things for us to know .

###### first :

because of geography , I need use vpn for fetching almost any kind of info from internet and with webpack 4 , 5 when use vpn or vpn in browser cause app not load up and it almost take 6 hours time of me to understand therefore for demonstration we use create-react-app but webpack version is fully functional and healthy but for rendering info i can't use that .
webpack is buggy with postcss too , webpack almost take whole day one .
also consider we can add many fancy things to webpack version for build production version .
(and my main vpn does not work now guess blocked by internet provider)

###### second:

because of time consideration for me and company I did these steps untill now

- api done (rest , nestjs , typescript , mongodb , mongoose , clean architecture and ...)
- react app done . (react , redux , redux-saga , store , persistance , routing and ...)
- back and front fully functional connected .
- upcoming render info of in dropdown ( probably we are going to use Semantic UI or React-Select with sass and ... )

Question:
please let me know of this

- do we need swagger?

* do we need fully tested components for backend and front ?? (there are a lot files and full test need lots of time also consider some package like monog-dev-server for test need vpn )
* please let me know about any edge case or other things you want to know .

### NOW LET'S START :

whole project fully written in typescript with my stlye of coding

- Git branching Not considered for now .

* Every folder has indexer - prevent code polution on imports .
* Data save in Database flat mode (can use embeded document but we used flat style)
* Almost commented .
* Negative sapcing in code .
* Naming style of JAVA projects .
* Type definitions .
* Backend structure is ready to become microservice .
* Each Domain in back provided by module .
* Clean architecture .
* Dockerfile . (I wanted to do more but must fix my problem with vpn for k8s and ...)
* Main logic in front come from redux .
* Decoupled frontend .
* Reusability .
* Frontend ready to use as micor-front with fancy thing like webpack federation module .
* Best store design in front .
* Api provide SPA , with small changes Ready to become SSR with something like nextjs or nuxtjs .
* Prttier
* Designed test style .
* And lots ... (as I notice will add here :))

### HOW USE ???

if you have locally installed mongodb go next step otherwise

use docker for create mongodb

command :

```bash
// that will create a container with db name in background.
// also check .env file or if you use docker-compose put env you need.


$ sudo docker run --name db -p 27017:27017 -d mongo


```

after that in each main folder, change to and :

```bash
$ npm install
```

### for backend stand alone :

change to directory

```bash

npm run start:dev

```

### for client stand alnoe :

change to directory

```bash

npm run start

```

### for front-cra stand alnoe :

change to directory

```bash

npm run start

```

### fro backend + client together :

change to backend directory

```bash

npm run dev

```

### fro backend + front-cra together (final project) :

change to backend directory

```bash

npm run dev:cra

```

#### Please let me know about any questions you have - project still under development

also because UI and UX is another thing for consideration I use UI kit components and
place of items for future .
if you think it is enough please let me know .
