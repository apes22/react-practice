import React from 'react';
import classNames from 'classnames';


const SessionCounter = ({sessionsAvailable, sessionsCompleted}) => {
  const circleIndicators = [];
   for (var i=0; i<sessionsAvailable; i++){
     const isCompleted = (sessionsCompleted && i<sessionsCompleted);
     const completedClass = classNames(
      { 'completed': isCompleted }
   )
   let key = `session${i}`
  circleIndicators.push(
    <div className="col-xs-1 sessIndicators" key={key}
    >
    <svg>
      <circle
        className={completedClass}
        cx="20" 
        cy="20" 
        r="8" 
        fill="#D2D3D7">
      </circle>
      </svg>
    </div>
    )
  }
  return(
    <div id="sessions" className="row">
      <h3 id="sessionsCompleted">Sessions Completed: <span id="counter">{sessionsCompleted}</span></h3>
      <hr></hr>
      <div className="col-xs-12 ">
        <div className="row space-around">
        {circleIndicators}
        </div>
      </div> 
    </div>
  )
}

export default SessionCounter;