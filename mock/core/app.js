import express from 'express';
import getJson from './utils/get-json';

const app = express();

app.get('/', (request, response) => response.send('Mock service for car log application.'));

app.get('/test', (request, response) => {
  const path = 'data/test.json';
  getJson(path, response);
});

export default app;
