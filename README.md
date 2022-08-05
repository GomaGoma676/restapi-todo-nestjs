### Create new NestJS project
```bash
$ npm i -g @nestjs/cli
$ npm i -g yarn

$ nest new api-lesson
# set strict true in tsconfig.json
```
### Install packages
```bash
# install prisma
$ yarn add -D prisma
$ yarn add @prisma/client
$ npx prisma init

# add docker-compose.yml file
# start db
$ docker compose up -d
# reset db
$ docker compose rm -s -f -v

# edit DATABASE_URL of .env
# add model definition to schema file

# prisma migrate and type generation
$ npx prisma migrate dev
$ npx prisma studio
$ npx prisma generate

# install packages
$ yarn add @nestjs/config @nestjs/jwt @nestjs/passport 
$ yarn add cookie-parser csurf passport passport-jwt bcrypt class-validator
$ yarn add -D @types/express @types/cookie-parser @types/csurf @types/passport-jwt @types/bcrypt
```
### Create module, controller, service
```bash
$ nest g module auth
$ nest g module user
$ nest g module todo
$ nest g module prisma
$ nest g controller auth --no-spec
$ nest g controller user --no-spec
$ nest g controller todo --no-spec
$ nest g service auth --no-spec
$ nest g service user --no-spec
$ nest g service todo --no-spec
$ nest g service prisma --no-spec
```

### Deploy to Heroku
create Procfile  
```bash
web: npm run start:prod  
```
create new heroku app
```bash
# add config vars  
JWT_SECRET : yours
# Add two Heroku Postgres in add-on
heroku git:remote -a yours
git push heroku main
# edit .env file 
DATABASE_URL=yours
SHADOW_DATABASE_URL=yours
# prisma migrate 
npx prisma migrate deploy
npx prisma studio
# edit .env.local of Next.js
NEXT_PUBLIC_API_URL=https://yours.herokuapp.com 
# deploy to Vercel
# add Vercel domain to cors middleware in NestJS
```
