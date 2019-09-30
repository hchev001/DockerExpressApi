# About this Express API

This project is organized by a particular convention, its not required but recommend.

Inside the *src* folder you will four things of interest. 
- controllers folder
- models folder
- routes folder
- index.js

Each folder and index.js make reference to the Sample model that Mongoose uses for MongoDB.

## How to add your own model

### TLDR; 
Find every instance of the word "sample" and replace it with the name of your model.

### Convetion
1. The index.js is going to only reigster routes. This keeps the index.js file from becoming overwhelmingly long.
2. The routes folders includes javascript files that return functions, specifying the routes and the function to run from the respective controller for each HTTP verb associated to a route.
3. Models folder includes javascript files that define Mongoose Schemas. They are requjired in order to query the MongoDB.
4. Controllers folder, each **.controller.js* file exports an object, where each key's value is a function. Each function has the necessary logic for GET ALL, GET ONE, CREATE ONE, UPDATE ONE, DELETE ONE database query.

### Database Conection
index.js takes care of connecting to the database using Mongoose 

To access the MongoDB start a tty session inside the mongodb container

`docker exec -it mongodb bash`

Then run `mongo`