import React, { Component } from 'react';
import Navigation from './components/navigation';
import Timer from './components/timer';

import Footer from './components/footer';
import './App.css';

const MAX_SESSIONS = 8;

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="container-fluid">
            <Navigation />
              <Timer />
             
            <Footer />
         </div>
         <audio id="kyoto_bell" src="./sounds/kyoto_bell.mp3"></audio>
      </div>
    );
  }
}

export default App;
