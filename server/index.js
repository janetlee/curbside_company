import {} from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';
// import Curbside from './curbside.dependencies.js';
// import Curbside from './curbside.sdk.js';

const app = express();

// Curbside.setAppId("CURBSIDE_APP_ID");
// Curbside.setUsageToken("CURBSIDE_USAGE");

app.use(helmet());
app.use(express.static(__dirname + './../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});

