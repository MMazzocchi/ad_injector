import React from 'react';
import withStyles from 'react-jss';
import UploadForm from './upload_form';

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
          <h2 style={{ textAlign: 'center' }}>Inject an Ad</h2>
          <p>Use the form below to inject an advertisement MP3 into an existing
             MP3.</p>

          <UploadForm />
        </section>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(App);
