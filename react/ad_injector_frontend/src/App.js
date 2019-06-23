import React from 'react';
import withStyles from 'react-jss';
import UploadForm from './upload_form';
import Header from './Header.js';

const styles = {
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
    <Header />

    <div className={ classes.content_container }>
      <div className={ classes.content }>
        <section>
          <h2 style={{ textAlign: 'center' }}>Inject an Ad</h2>
          <p>Use the form below to inject an advertisement into an existing
             MP3.</p>

          <UploadForm />
        </section>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(App);
