import React from 'react';
import withStyles from 'react-jss';

const styles = {
  form_row: {
    'padding': '10px',
    'border-bottom': '#DDD 1px solid',
    '&:last-child': {
      'border-bottom': 'none',
    }
  },
  form_label: {
    'padding-bottom': '5px',
  },
  time_slider: {
    'width': '100%',
  }
};

const UploadForm = ({ classes }) => (
  <form>
    <div className={ classes.form_row }>
      <div className={ classes.form_label }>
        <label for="base_file">Base File:</label>
      </div>
      <div>
        <input id="base_file" type="file" />
      </div>
    </div>
    <div className={ classes.form_row }>
      <div className={ classes.form_label }>
        <label for="ad_file">Ad File:</label>
      </div>
      <div>
        <input id="base_file" type="file" />
      </div>
    </div>
    <div className={ classes.form_row }>
      <div className={ classes.form_label }>
        <label for="insert_time">Insert Time: <span>00:00</span></label>
      </div>
      <div>
        <input className={ classes.time_slider } id="insert_time"
           type="range" />
      </div>
    </div>
    <div className={ classes.form_row }>
      <button>Submit</button>
    </div>
  </form>
);

export default withStyles(styles)(UploadForm);
