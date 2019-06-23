// Returns a Promise that will resolve with the duration of the given audio file
const getDuration = (file) => (new Promise((resolve) => {
  const audio = document.createElement('audio');

  audio.addEventListener('loadedmetadata', () => {
    resolve(audio.duration);
  });

  audio.src = URL.createObjectURL(file);
}));

module.exports = getDuration;
