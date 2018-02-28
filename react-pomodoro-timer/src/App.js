import React, { Component } from 'react';
import Timer from './components/timer';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
         <div className="container-fluid">
            <Timer />
            <Footer />
         </div>
         <audio id="kyoto_bell" src="./sounds/kyoto_bell.mp3"></audio>
      </div>
    );
  }
}

export default App;