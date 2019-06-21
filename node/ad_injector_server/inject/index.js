const inject_endpoint = (req, res) => {
  res.send(`Successfully uploaded ${req.files['base'][0].filename}`);
};

module.exports = inject_endpoint;
