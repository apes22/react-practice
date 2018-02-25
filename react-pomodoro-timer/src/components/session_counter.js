import React from 'react';

//How do I want to determine how many sessions we will have? through the props? or should I use the circleIndicator object?

const circleIndicator = {
  0: "session0",
  1: "session1",
  2: "session2",
  3: "session3",
  4: "session4",
  5: "session5",
  6: "session6",
  7: "session7"
};

const SessionCounter = ({sessions}) => {

  const circleIndicators = [];
   for (var i=0; i<sessions/2; i++){
    circleIndicators.push(
      <div className="col-xs-3 sessIndicators" key={circleIndicator[i]} >
        <svg><circle id={circleIndicator[i]} cx="20" cy="20" r="8" fill="#D2D3D7"></circle>
        </svg>
        </div>
    )
  }

  return(
    <div id="sessions" className="row">
      <h3 id="sessionsCompleted">Sessions Completed: <span id="counter">0</span></h3>
      <hr></hr>
      <div className="col-xs-6 left-well">
        <div className="row">
        {circleIndicators}
        </div>
      </div> 
      <div className="col-xs-6 right-well">
      <div className="row">
        {circleIndicators}
      </div>
      </div> 
    </div>
  )
}

/*
displaySessionIndicators: function(sessions){		

  for (var i=0; i<sessions; i++){
    //create circle element
    var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle.id = this.circleIndicator[i];
    circle.setAttributeNS(null,"cx", "20");
    circle.setAttributeNS(null,"cy", "20");
    circle.setAttributeNS(null,"r", "8");
    circle.setAttributeNS(null,"fill", "#D2D3D7");

    //append circle to svg element
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.appendChild(circle);

    //create a boostrap column of size xs-3 and append svg
    var col_xs_3 = document.createElement("div");
    col_xs_3.className = "col-xs-3";
    col_xs_3.classList.add("sessIndicators");
    col_xs_3.appendChild(svg);

    //attach the elements created to left-well 
    if (i<4){
      row.appendChild(col_xs_3);
      //attach the elements created to right-well 
    }else{
    row2.appendChild(col_xs_3);
    }
  }
},
*/

export default SessionCounter;
