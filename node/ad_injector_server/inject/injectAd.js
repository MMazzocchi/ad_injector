const ffmpeg = require('fluent-ffmpeg');

const injectAd = ({ base, ad, time }) => {
  return new Promise((resolve, reject) => {

    // First, create a timmed copy of the base
    const trim_command = ffmpeg()
      .input(base)
        .inputFormat('mp3')
      .duration(time)
      .format('mp3');

     // Second, concatenate the trimmed base, the ad, and the remaining base
     ffmpeg()
      .input(trim_command.pipe())
      .input(ad)
        .inputFormat('mp3')
      .input(base)
        .inputFormat('mp3')
        .seekInput(time)
      .complexFilter([
        '[0:a][1:a][2:a]concat=n=3:v=0:a=1',
      ])
      .output('/code/out.mp3')
      .on('end', resolve)
      .on('error', reject)
      .run();
  }); 
};

module.exports = injectAd;
