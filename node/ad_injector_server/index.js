const express = require('express');
const multer = require('multer');
const getInjectEndpoint = require('./inject');
const path = require('path');

const DATA_DIR = '/data'
const UPLOAD_DIR = path.join(DATA_DIR, 'uploads');
const OUTPUT_DIR = path.join(DATA_DIR, 'ouputs');
const PORT = 8000;

const upload = multer({ dest: UPLOAD_DIR });
const inject_endpoint = getInjectEndpoint(OUTPUT_DIR);

const app = express();

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

const setFileHeaders = (res, filepath, stat) => {
  res.set('Content-Disposition', 'attachment; filename='+
    path.basename(filepath));
};

app.post('/inject', upload_fields, inject_endpoint);
app.use('/download',
  express.static(OUTPUT_DIR, { setHeaders: setFileHeaders }));

app.listen(PORT,() => {
  console.log(
`Started the ad injection server.
  Port:             ${ PORT }
  Upload Directory: ${ UPLOAD_DIR }
  Output Directory: ${ OUTPUT_DIR }`);
});
