import React from 'react';

//example of CHILDREN usage in React, this allows
//for custom tag that will behave like a <div>
//wrapper- it wraps everything inside of the tag
//Below is making everything inside Scroll- scrollable.

const Scroll = (props) => {
  return(
    //note the styles need DOUBLE {{}} below to work right in react here.
    <div style= {{overflowY: 'scroll', border: '1px solid black', height: '40rem'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
