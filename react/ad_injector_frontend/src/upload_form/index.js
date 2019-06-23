import React, { useState } from 'react';
import withStyles from 'react-jss';
import TimeSelector from './TimeSelector.js';
import sToHHMMSS from './sToHHMMSS.js';
import API from './API.js';
import getDuration from './getDuration.js';

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
};

const UploadForm = ({ classes }) => {
  const [ duration, setDuration ] = useState(undefined);
  const [ time, setTime ] = useState("00:00");
  const [ processing, setProcessing ] = useState(false);
  const [ error, setError ] = useState(undefined);

  const base_change = async (e) => {
    const duration = await getDuration(e.currentTarget.files[0]);
    setDuration(duration);
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(undefined);

    const base = document.getElementById('base_file').files[0];
    const ad = document.getElementById('ad_file').files[0];

    setProcessing(true);

    try {
      const name = await API.inject(base, ad, time);
      API.download(name);

    } catch(e) {
      setError(e.message);
    }

    setProcessing(false);
  };

  const updateTime = (time_s) => {
    setTime(sToHHMMSS(time_s));
  };

  return (
    <form>
      <div className={ classes.form_row }>
        <div>
          <div className={ classes.form_label }>
            <label htmlFor="base_file">Base File:</label>
          </div>
          <div>
            <input id="base_file" type="file" onChange={ base_change }/>
          </div>
        </div>

        { duration === undefined ? '' :
          <div>
            <div className={ classes.form_label }>
              <label>Inject Time: <span>{ time }</span></label>
            </div>
            <div>
              <TimeSelector onChange={ updateTime } duration={ duration } />
            </div>
          </div>
        }
      </div>

      <div className={ classes.form_row }>
        <div className={ classes.form_label }>
          <label htmlFor="ad_file">Ad File:</label>
        </div>
        <div>
          <input id="ad_file" type="file" />
        </div>
      </div>

      <div className={ classes.form_row }>
        { processing ? 'Processing...' :
          <button onClick={ submit }>Submit</button>
        }
      </div>

      { error === undefined ? '' :
        <div className={ classes.form_row }>
          { error }
        </div>
      }
    </form>
  );
};

export default withStyles(styles)(UploadForm);
