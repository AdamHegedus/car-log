import express from 'express';
import cors from 'cors';
import sendFileContent from './core/sendFileContent';

const port = 9999;
const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Mock service for car log application.'));

app.get('/test', (req, res) => {
  res.append('Content-Type', 'application/json');
  const fileName = 'data/test.json';
  sendFileContent(fileName, res);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
