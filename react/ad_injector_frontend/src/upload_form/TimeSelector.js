import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import { sToHHMMSS, HHMMSSToS } from './conversions.js';
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

const TIME_REGEX = /^(\d+:)?(\d{1,2}:)?\d{1,2}$/;

const TimeInput = ({ classes, duration, onChange }) => {
  const ref = React.createRef();
  const [ range_value, setRangeValue ] = useState(0);

  const update = (value) => {
    const time = sToHHMMSS((value / 100) * duration);
    onChange(time);
    ref.current.value = time;
  };

  useEffect(() => { update(0); }, []);

  const textChange = (e) => {
    const time = e.currentTarget.value;
    if(TIME_REGEX.test(time)) {
      onChange(time);
      setRangeValue((HHMMSSToS(time) / duration) * 100);
    }
  };

  return (
    <div className={ classes.container }>
      <div>Inject Time:
        <input ref={ ref } type="text" onChange= { textChange } />
      </div>
      <div className={ classes.ticks }>
        <div>00:00</div>
        <div>{ sToHHMMSS(duration) }</div>
      </div>

      <RangeInput value={ range_value } onChange={ update } />
    </div>
  );
};

export default withStyles(styles)(TimeInput);
