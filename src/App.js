import React, { Component } from 'react';
import Resume from './resume.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mel Hsieh</h1>
        </header>
        <div> Hello World </div>
        <Resume/>
      </div>
    );
  }
}

export default App;
