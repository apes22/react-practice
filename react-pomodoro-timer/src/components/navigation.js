import React from 'react';


//returns a Bootstrap navigation with a button 
const Navigation = ({onReset, onOpenModal}) => 
<div className="row nav">
  <div className="col-xs-6">
    <button 
      id="reset" 
      className="btn btn-default btn-sm"  
     onClick={() => onReset()}
    >
      <i className="fa fa-undo fa-2x" aria-hidden="true"></i>
    </button>
    </div>
    <div className="col-xs-6 text-right">
      <button 
        id="settingsButton" 
        type="button" 
        className="btn btn-default btn-sm" 
        //data-toggle="modal" 
        //data-target="#myModal"
        onClick={() => onOpenModal()}
       >
        <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
        
			</button>
	</div>
  
</div>

export default Navigation;