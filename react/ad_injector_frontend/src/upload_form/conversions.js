

const sToHHMMSS = (s) => {
  let str = "";

  let min = Math.floor(s/60);
  const sec = Math.floor(s - (60*min));
  const hr = Math.floor(min/60);
  min -= hr * 60;

  if(hr > 0) {
    str += hr+":";
  }
  if(min < 10) {
    str += "0";
  }
  str += min+":";
  if(sec < 10) {
    str += "0";
  }
  str += sec;

  return str;
};

const HHMMSSToS = (str) => {
  const tokens = str.split(":");
  const s = tokens.reduce(
    (acc, value) => ((acc*60) + Number.parseInt(value)), 0)

  return s;
};

export {
  sToHHMMSS,
  HHMMSSToS,
};
