import bodyParser from 'body-parser';
import express from 'express';
import config from 'config';
import SampleRoutes from './routes/sample.routes';

let app = express();

let port = config.setup.PORT;

// Assume that if a request contains data it is encoded as JSON
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

// Decode Request data
app.unsubscribe(bodyParser.json());

// Add Your Routess Here
SampleRoutes(app);

app.listen(port);

console.log(`Server is listneing on port ${port}`);

export default app;
