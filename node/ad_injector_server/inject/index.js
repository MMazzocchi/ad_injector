const injectAd = require('./injectAd.js');

const inject_endpoint = (req, res) => {
  try {
    if(req.files['base'] &&
       req.files['ad'] &&
       req.body.time) {
  
      console.log(
`Received injection request:
   base: ${ req.files['base'][0].originalname }
   ad:   ${ req.files['ad'][0].originalname }
   time: ${ req.body.time }
      `);

       injectAd({
         base: req.files['base'][0].path,
         ad: req.files['ad'][0].path,
         time: req.body.time

       }).then(() => {
        res.send("Complete");

       }).catch((e) => {
         res.status(500).send(e.message);
       });

    } else {
      res.status(400).send("Invalid request.");
    }
  } catch(e) {
    res.status(500).send(e.message);
  }
};

module.exports = inject_endpoint;
