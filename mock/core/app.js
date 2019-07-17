import express from 'express';
import getJson from './utils/get-json';

const app = express();

app.get('/', (req, res) => res.send('Mock service for car log application.'));

app.get('/test', (req, res) => {
  const path = 'data/test.json';
  getJson(path, res);
});

export default app;
