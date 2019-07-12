import fs from 'fs';

const sendFileContent = (fileName, res) => {
  fs.readFile(`${fileName}`, (err, data) => {
    if (err) {
      res.sendStatus(404);
      return;
    }

    res.send(data);
  });
};

export default sendFileContent;
