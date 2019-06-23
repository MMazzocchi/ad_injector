const join = require('path').join;
const crypto = require('crypto');
const ffmpeg = require('fluent-ffmpeg');

const generateOutputFilename = () => {
  return crypto.randomBytes(20).toString('hex')+".mp3";
};

const injectAd = ({ base, ad, output_dir, time }) => {
  return new Promise((resolve, reject) => {

    const output_name = generateOutputFilename();
    const output_path = join(output_dir, output_name);

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
      .output(output_path)
      .on('end', () => {
        resolve(output_name);
      })
      .on('error', reject)
      .run();
  }); 
};

module.exports = injectAd;
