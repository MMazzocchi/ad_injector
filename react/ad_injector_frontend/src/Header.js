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
};

const Header = ({ classes }) => (
  <div className={ classes.header }>    
    <div className={ classes.homeicon }>
      <a style={{ textDecoration: 'none' }} href="/">
        <div className={ classes.homelink }>
          Ad Injection Server
        </div>
      </a>
    </div>
  </div>
);

export default withStyles(styles)(Header);
