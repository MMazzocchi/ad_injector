import React, { useState } from 'react';
import withStyles from 'react-jss';
import sToHHMMSS from './sToHHMMSS.js';
import RangeInput from './RangeInput.js';

const styles = {
  time_slider: {
    'width': '100%',
  },
  ticks: {
    'display': 'flex',
    'justify-content': 'space-between',
  },
  container: {
    'position': 'relative',
  }
};

const TimeInput = ({ classes, duration, onChange }) => {
  const [ time, setTime ] = useState("00:00");

  const update = (value) => {
    const new_time = sToHHMMSS((value / 100) * duration);
    setTime(new_time);
    onChange(new_time);
  };

  return (
    <div className={ classes.container }>
      <div>Inject Time: { time }</div>
      <div className={ classes.ticks }>
        <div>00:00</div>
        <div>{ sToHHMMSS(duration) }</div>
      </div>

      <RangeInput onChange={ update } />
    </div>
  );
};

export default withStyles(styles)(TimeInput);
