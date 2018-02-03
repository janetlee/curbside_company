import {} from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(express.static(__dirname + './../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('', async (req, res) => {
    res.status(201);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});