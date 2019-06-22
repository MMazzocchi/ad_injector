const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const inject = require('./inject');

const app = express();
const port = 8000;

const upload_fields = upload.fields([
  {
    name: 'base',
    maxCount: 1,
  },
  {
    name: 'ad',
    maxCount: 1,
  }
]);

app.post('/inject', upload_fields, inject);

app.listen(port,
  () => console.log(`Listening on port ${port}`));
