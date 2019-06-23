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

// Define the files that will be uploaded on the inject endpoint
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

// Set the file as an attachment on download calls; this prevents the browser
// from auto-playing the file
const setFileHeaders = (res, filepath, stat) => {
  res.set('Content-Disposition', 'attachment; filename='+
    path.basename(filepath));
};

const app = express();
app.post('/inject', upload_fields, inject_endpoint);
app.use('/download',
  express.static(OUTPUT_DIR, { setHeaders: setFileHeaders }));

app.listen(PORT,() => {
  console.log('Started the ad injection server.');
  console.log(`  Port:             ${ PORT }`);
  console.log(`  Upload Directory: ${ UPLOAD_DIR }`);
  console.log(`  Output Directory: ${ OUTPUT_DIR }`);
});
