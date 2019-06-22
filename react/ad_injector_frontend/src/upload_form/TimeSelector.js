import React from 'react';
import withStyles from 'react-jss';
import sToHHMMSS from './sToHHMMSS.js';

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

const TimeSelector = ({ classes, duration, onChange }) => {
  const disabled = (duration === undefined);

  return (
    <div className={ classes.container }>
      <div className={ classes.ticks }>
        <div
          style={{ color: disabled ? 'grey' : 'black' }}
          className={ classes.left_tick }>
 
          00:00
        </div>
        <div
          style={{ color: disabled ? 'grey' : 'black' }}
          className={ classes.right_tick }>

          { disabled ? '??:??' : sToHHMMSS(duration) } 
        </div>
      </div>

      <input
         disabled={ disabled }
         className={ classes.time_slider } id="insert_time"
         type="range"
         min="0"
         max={ disabled ? 100 : Math.floor(duration) }
         step="1"
         onChange={ onChange }/>
    </div>
  );
};

export default withStyles(styles)(TimeSelector);
