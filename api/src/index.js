import bodyParser from 'body-parser';
import express from 'express';
import config from 'config';
import SampleRoutes from './routes/sample.routes';
import mongoose from "mongoose";

// Let mongoose use the same implementation
// of promises as the rest of the app
mongoose.Promise = global.Promise;

// Connect to the mongo database
// config/development.json or 
// config/production.json depending on NODE_ENV environment
// variable
mongoose
  .connect(config.setup.db, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: 1, connectTimeoutMS: 30000 })
  .catch(() => {
    console.log("Failed to connec tto mongodb server");
  });


let app = express();

// configure the port for the node express api to use
let port = config.setup.PORT;

// Assume that if a request contains data it is encoded as JSON
app.use(bodyParser.urlencoded({ extended: true }));

// Decode Request data
app.use(bodyParser.json());

// Add Your Routess Here
SampleRoutes(app);

app.listen(port);

console.log(`Server is listening on port ${port}`);

export default app;
