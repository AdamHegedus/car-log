const express = require('express');
const cors = require('cors');
const fs = require('fs');

const port = 9999;
const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Mock service for car log application.'));

function sendFileContent(fileName, res) {
  fs.readFile(`${fileName}`, (err, data) => {
    if (err) {
      res.sendStatus(404);
      return;
    }

    res.send(data);
  });
}

app.get('/test', (req, res) => {
  res.append('Content-Type', 'application/json');
  const fileName = 'test.json';
  sendFileContent(fileName, res);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
