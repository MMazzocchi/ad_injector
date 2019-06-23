import React from 'react';
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
  const update = (value) => {
    onChange((value / 100) * duration);
  };

  return (
    <div className={ classes.container }>
      <div className={ classes.ticks }>
        <div>00:00</div>
        <div>{ sToHHMMSS(duration) }</div>
      </div>

      <RangeInput onChange={ update } />
    </div>
  );
};

export default withStyles(styles)(TimeInput);
