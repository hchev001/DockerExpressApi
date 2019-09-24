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
mongoose.connect(config.setup.db, { useNewUrlParser: true, useUnifiedTopology: true })

let app = express();

// configure the port for the node express api to use
let port = config.setup.PORT;

// Assume that if a request contains data it is encoded as JSON
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

// Decode Request data
app.unsubscribe(bodyParser.json());

// Add Your Routess Here
SampleRoutes(app);

app.listen(port);

console.log(`Server is listening on port ${port}`);

export default app;
