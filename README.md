# DockerExpressAPI...Actually a Full Web App 

Originally this repository was meant to be an example of how I orgnaize an Express API. However, some circumstances changed and decided to make it a full web app.
The project is composed of a MongoDB, Express API, Create-React-App client, and an NGINX Reverse Proxy. Each component is run in a Docker container. 
The tool docker-compose is used to orchestrate the docker containers.


# Instructions for Using The App

To start the project, from the root directory run:

`docker-compose up -d`


This will only start the containers, the backend and client still need to be started manually.

Open up two terminal sessions.

## Starting the Backend

The backend container is conveniently named *backend* 

We need to enter it first by running from the terminal:

`docker exec -u www-data -it backend bash`

This will let you open a bash terminal session inside the container as user *www-data*

Navigate to the project directory, either with:

`cd $PROJECT` or `cd /opt/app`

Start the backend

`npm start`

## Starting the Frontend
The frontend runs in a container called *client*, an instance of Create-React-App

We need to enter it first by running from the terminal:

`docker exec -u www-data -it client bash`

This will let you open a bash terminal session inside the container as user *www-data*

Navigate to the project directory, either with:

`cd $PROJECT` or `cd /opt/app`

Start the backend

`npm start`

# So you have the project running, what now?

## How to access the project

When running the project locally you will be able to access the React SPA via `http://localhost:9090/`

Any http request will need to be made to the appropriate route but prepending it first with `http://localhost:9090/api`

Example: To access the *samples* routes from the API. We would make a GET request to `http://localhost:9090/api/samples`

## Editing the Code

Any changes you make on the local directories (api, sample-client) will be updated inside the docker containers for ease of development.