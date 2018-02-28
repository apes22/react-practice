import React, {Component} from 'react';
import ProgressBar from 'react-progress-bar.js';
import SessionCounter from './session_counter';
import Navigation from './navigation';
import {Button, Modal} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import classNames from 'classnames';

const options = {
  color: '#FC6E6E',
  strokeWidth: 4,
  trailColor: '#D2D3D7',
  trailWidth: 4,
}

const SESSION_TIME = parseInt(1) * 60;
const BREAK_TIME = parseInt(1) * 60;
const MAX_SESSIONS = 8;

const secondsToMs = (sec) => {
  var m = Math.floor(sec / 60);
  var s = sec % 60;
  m = (m.toString().length === 1) ? "0" + m: m;
  s = (s.toString().length === 1) ? "0" + s: s;
  return (m + ":" + s);
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: SESSION_TIME,
      secondsLeft: SESSION_TIME,
      sessionLen: SESSION_TIME,
      breakLen: MAX_SESSIONS,
	    timeElapsed: 0,
	    name: "Let's Focus!",
	    isRunning: false,
      sessionsCompleted: 0,
      modalIsOpen: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.switchTimers = this.switchTimers.bind(this);
    this.countDown = this.countDown.bind(this);

    this.openModal = this.openModal.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  saveSettings(){
    this.stopTimer();
  }

  startTimer({name}){
    const {sessionsCompleted} = this.state
    if (sessionsCompleted < MAX_SESSIONS && !this.isRunning){
      this.setState({
        name: name,
        isRunning: true,
      });
      this.timerID = setInterval(
        () => this.countDown(),
        1000
      );
    }
  }

  onResetTimer(){
     this.stopTimer();
     this.setState({
      name: "Session",
      seconds: SESSION_TIME,
      secondsLeft: SESSION_TIME,
      timeElapsed: 0,
      sessionsCompleted: 0,
     });
    //view.updateSettings(SESSION_TIME, BREAK_TIME);
  }

  countDown() {
    let {secondsLeft, seconds} = this.state;
    if (secondsLeft > 0){
        secondsLeft -= 1;
        const timeElapsed_dec = (seconds - secondsLeft)/seconds;
        console.log(timeElapsed_dec);
        this.setState({
        secondsLeft: secondsLeft,
        timeElapsed: timeElapsed_dec,
      });   
    }else{
      this.switchTimers();
    }	
  }

  toggleTimer(){
    let {name, isRunning} = this.state;
    if (isRunning){
      this.stopTimer();
    }
    else{
      //Want to figure out a better way to represent when the timer hasn't been started before
      if (name === "Let's Focus!") { name = "Session";}
      this.startTimer({name: name });
    }
  }

  switchTimers(){
    const {name, sessionsCompleted} = this.state;
    if (name === "Session"){
      //var sessionLength = document.getElementById("sessionLength").textContent;
      //model.activeTimer.resetTime(sessionLength);
      this.setState({
        name: "Break",
        seconds: BREAK_TIME,
	      secondsLeft: BREAK_TIME,
        timeElapsed: 0,
        sessionsCompleted: sessionsCompleted + 1,
      }); 
      this.stopTimer();
    }else if (name === "Break"){
      //var breakLength = document.getElementById("breakLength").textContent;
     // model.activeTimer.resetTime(breakLength);
      this.stopTimer();
      this.setState({
        name: "Session",
        seconds: SESSION_TIME,
	      secondsLeft: SESSION_TIME,
	      timeElapsed: 0,
      });
    }
    this.startTimer({name: this.state.name});   
  }

  stopTimer(){
    clearInterval(this.timerID);
    this.setState({isRunning: false});
  }
  render(){
    const Circle = ProgressBar.Circle;
    const {
      secondsLeft,
      name,
      sessionsCompleted,
      timeElapsed,
      isRunning,
      } = this.state;
    
      const toggleClasses = classNames(
        'fa', 'fa-3x', 
        {'fa-pause': isRunning}, 
        {'fa-play': !isRunning}
        );
  
    return(
      <div>
      <Navigation onReset={this.onResetTimer} onOpenModal={this.openModal} />
      <div className="modal-container">
        <Modal
          show={this.state.modalIsOpen}
          onHide={this.closeModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Settings
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          <ReactBootstrapSlider
      value={this.state.sessionLen}
      change={this.changeValue}
      slideStop={this.changeValue}
    step={this.state.step}
    max={this.state.max}
    min={this.state.min}
    orientation="vertical"
    reversed={true}
    disabled="disabled" />

          </Modal.Body>
          <Modal.Footer>
            <Button  bsStyle="default" onClick={this.closeModal}>Cancel</Button>
            <Button  bsStyle="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
       
      <div id="content">
      <h1 id="timerName">{name}</h1>
      <Circle className="progressBarContainer"
        progress={timeElapsed}
        options={options}
        initialAnimate={false}
        
      />
      <div className="row">
        <h2 id="timer">{secondsToMs(secondsLeft)}</h2>
      <button 
        id="toggleTimer" onClick={this.toggleTimer}
      >
        <i id="toggleIcon" className={toggleClasses} aria-hidden="true"></i>
      </button>
    </div>
    <SessionCounter 
    sessionsAvailable={MAX_SESSIONS}
    sessionsCompleted={sessionsCompleted}
    SessionCounter/> 
  </div>
  </div>
    )
  } 
}

export default Timer;