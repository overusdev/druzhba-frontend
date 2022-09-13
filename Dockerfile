# Dockerfile
# FROM node:lts as builder

# # create destination directory
# RUN mkdir -p /usr/src/nuxt-app
# WORKDIR /usr/src/nuxt-app

# # update and install dependency
# # RUN apk update && apk upgrade
# # RUN apk add git

# # copy the app, note .dockerignore
# COPY . /usr/src/nuxt-app/
# RUN npm install
# RUN npm run build

# EXPOSE 24678

# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=24678

# CMD [ "npm", "run", "dev" ]
