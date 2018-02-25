import React, {Component} from 'react';
import ProgressBar from 'react-progress-bar.js';
import SessionCounter from './session_counter';

const options = {
  color: '#FC6E6E',
  strokeWidth: 4,
  trailColor: '#D2D3D7',
  trailWidth: 4
}

const Timer = () => {
    const Circle = ProgressBar.Circle;
    return(
      <div id="content">
    <h1 id="timerName">Let's Focus!</h1>
    <Circle className="progressBarContainer"
      options={options}
    />
    <div className="row">
      <h2 id="timer">10:00</h2>
      <button 
        id="toggleTimer"
      >
        <i id="toggleIcon" className="fa fa-play fa-3x" aria-hidden="true"></i>
      </button>
    </div>
    <SessionCounter sessions={8} /> 
  </div>
    )
}

export default Timer;