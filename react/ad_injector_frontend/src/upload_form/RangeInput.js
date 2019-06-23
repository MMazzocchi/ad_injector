import React, { useState } from 'react';
import withStyles from 'react-jss';

const styles = {
  container: {
    'width': '100%',
    'position': 'relative',
    'min-height': '20px',
  },
  selector: {
    'border-width': '2px',
    'border-style': 'solid',
    'border-color': 'grey',
    'border-radius': '7px',
    'padding': '5px',
    'max-height': '0px',
    'display': 'inline-block',
    'background-color': 'white',
  },
  track_container: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'min-width': '100%',
    'min-height': '100%',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },
  track: {
    'border': '1px solid black',
    'margin-right': '7px',
    'margin-left': '7px',
  },
  selector_container: {
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'min-width': '100%',
    'min-height': '100%',
    'display': 'flex',
    'align-items': 'center',
  },
  selector_position: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'width': 0,
    'height': 0,
  },
};

const RangeInput = ({ classes, onChange=()=>{} }) => {
  const [ value, setValue ] = useState(0);
  const [ selected, setSelected ] = useState(false);

  const ref = React.createRef();

  const update = (e, force=false) => {
    if(selected || force) {
      const rect = ref.current.getBoundingClientRect();
      const new_value = ((e.clientX - rect.left) / rect.width)*100;
      setValue(new_value);
      onChange(new_value);
    }
  };

  return (
    <div ref={ ref }
       className={ classes.container }
       onMouseDown={ (e) => { setSelected(true); update(e, true); } }
       onMouseUp={ (e) => { setSelected(false) } }
       onMouseMove={ update }>

      <div className={ classes.track_container }>
        <div className={ classes.track }></div>
      </div>

      <div className={ classes.selector_container }>
        <div style={{ width: `${ value }%` }}></div>
        <div className={ classes.selector_position }>
          <div
            className={ classes.selector }
            style={{
              backgroundColor: selected ? 'steelblue' : '',
              borderColor: selected ? 'steelblue' : '',
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(RangeInput);
