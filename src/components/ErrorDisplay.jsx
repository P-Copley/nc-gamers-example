import React from 'react';

const ErrorDisplay = (props) => {
  if (props.status === 404) {
    return (
      <div className='error-display'>
        <p>
          Error! Code:{props.status}, {props.message}
        </p>
      </div>
    );
  } else if (props.status === 400) {
    return (
      <div className='error-display'>
        <p>
          Error! Code:{props.status}, {props.message}
        </p>
      </div>
    );
  }
};

export default ErrorDisplay;
