const injectAd = require('./injectAd.js');
const fs = require('fs');

const validRequest = (req) => (
  req.files['base'] &&
  req.files['ad'] &&
  req.body.time);

// Return an endpoint that will save generated files in <output_dir>
const getInjectEndpoint = (output_dir) => {
  fs.mkdirSync(output_dir, { recursive: true });

  return async (req, res) => {
    if(!validRequest(req)) {
      res.status(400).send("Invalid request.");

    } else {
      console.log("Received injection request:");
      console.log(`  base: ${ req.files['base'][0].originalname }`);
      console.log(`  ad:   ${ req.files['ad'][0].originalname }`);
      console.log(`  time: ${ req.body.time }`);

      try {
        const output = await injectAd({
          base: req.files['base'][0].path,
          ad: req.files['ad'][0].path,
          time: req.body.time,
          output_dir: output_dir,
        });

        // Send the name of the generated file
        res.send(output);

      } catch(e) {
        res.status(500).send(e.message);
      }
    }
  };
};

module.exports = getInjectEndpoint;
