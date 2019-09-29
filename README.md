# SampleApi

Simple API setup. No connection to Database

# Instructions for Using The App

Make sure you have docker and docker-compose installed and that port 8080 is not being used by any other service.

In the root directory of the project, where the docker-compose.yml file exists

Create a folder called Database, the content of the MongoDatabase will be stored there

run: docker-compose build 
thne
run: docker-compose up -d

By now there should be a docker container running called 

node_backend

you can verify this by running

docker ps

and you should see all running containers

# starting the api

in a terminal window you will essentially connect to the container by typing the following:

docker exec -u www-data -it node_backend bash

it will open a terminal session inside the container

change to the project directory by typing: cd $PROJECT

to start the project just type npm start

# From this point forward

Any changes you make on the local directory will be updated inside the docker container