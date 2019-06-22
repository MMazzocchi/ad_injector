import React from 'react';
import withStyles from 'react-jss';

const styles = {
  header: {
    'background-color': 'steelblue',
    'color': 'white',
    'box-shadow': '#555555 0 0 8px 3px',
    'min-width': '100vh',
    'padding': '20px',
  },
  homeicon: {
    'border': '2px solid white',
    'display': 'inline-block',
    '&:hover': {
      'text-decoration': 'underline'
    }
  },
  homelink: {
    'padding': '5px',
    'color': 'white',
  },
  container: {
    'min-height': '100vh',
  },
  content_container: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  },
  content: {
    'max-width': '1000px',
    'padding': '20px',
  },
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

const App = ({ classes }) => (
  <div className={ classes.container }>
    <div className={ classes.header }>    
      <div className={ classes.homeicon }>
        <a style={{ textDecoration: 'none' }} href="/">
          <div className={ classes.homelink }>
            Ad Injection Server
          </div>
        </a>
      </div>
    </div>

    <div className={ classes.content_container }>
      <div className={ classes.content }>
        <section>
          <h2>Inject an Ad</h2>
          <p>Use the form below to inject an advertisement MP3 into an existing
             MP3.</p>

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
        </section>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(App);
