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

export default sToHHMMSS;
