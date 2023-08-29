// import { useState } from 'react';
import './App.css';

function Intro(props) {
  return (
    <div >
      <header>
        <h1>
          Hi! my name is {props.name}
        </h1>
      </header>
    </div>
  );
}

export default Intro;
