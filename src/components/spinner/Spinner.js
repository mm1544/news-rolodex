// Will load a GIF
import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        // backgroundColor: '#95dada',
      }}
      alt='Loading...'
    />
  </Fragment>
);
