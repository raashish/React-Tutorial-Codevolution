import React, { Component } from 'react';

function ChildComponent(props) {
  {
    return (
      <div>
        {/* {Methods as Props} */}

        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

        {/* {if you need to pass parameters to the method use arrow func} */}
        <button onClick={() => props.greetHandler('child')}>
          Greet Parent
        </button>
      </div>
    );
  }
}

export default ChildComponent;
