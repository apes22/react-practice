import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';

const SettingsModal = ({...props}) => {

  const {
    modalIsOpen,
    onCancelChanges,
    onSaveSettings,

    sessValue,
    sessSlideStop,
    sessMin,
    sessMax,
    sessLen,

    breakValue,
    breakSlideStop,
    breakMin,
    breakMax,
    breakLen,
    
  } = props;
  return(
    <div className="modal-container">
    <Modal
      show={modalIsOpen}
      onHide={onCancelChanges}
      aria-labelledby="contained-modal-title"
     >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">
          Settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row">
        <h5>Session Length</h5>
      </div>
      <div className="row">
      <ReactBootstrapSlider
        value={sessValue}
        slideStop={sessSlideStop}
        min={sessMin}
        max={sessMax}
        />
       <span >{sessValue}</span> minute(s) 
        </div>
       <div className="row" >
            <h5>Break Length</h5>
        </div>
        <div className="row">
      <ReactBootstrapSlider
         value={breakValue}
         slideStop={breakSlideStop}
         min={breakMin}
         max={breakMax}
        />
       <span >{breakValue}</span> minute(s) 
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button  bsStyle="default" onClick={onCancelChanges}>Cancel</Button>
        <Button  bsStyle="primary" onClick={onSaveSettings}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default SettingsModal;