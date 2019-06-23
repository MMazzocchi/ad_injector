// Calls the inject endpoint with the given parameters
const inject = async (base, ad, time) => {
  const data = new FormData();

  data.append('base', base);
  data.append('ad', ad);
  data.append('time', time);

  const resp = await fetch('/api/inject', {
    method: 'POST',
    body: data,
  });

  if(!resp.ok) {
    const message = await resp.text();
    throw new Error("Error: "+message);
  }

  const name = await resp.text();
  return name;
};

// Download the given file
// This WILL redirect the page!
const download = (filename) => {
  const download_url = "/api/download/"+filename;
  window.location = download_url;
};

const API = {
  inject: inject,
  download: download,
};

module.exports = API;
