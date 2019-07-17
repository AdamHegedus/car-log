import express from 'express';
import sendFileContent from './sendFileContent';

const app = express();

app.get('/', (req, res) => res.send('Mock service for car log application.'));

app.get('/test', (req, res) => {
  res.append('Content-Type', 'application/json');
  const fileName = 'data/test.json';
  sendFileContent(fileName, res);
});

export default app;
