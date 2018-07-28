import React, { Component } from 'react';
import logo from './logo.svg';
import Start from './components/Start/Start.js';
import { getRhyme } from './services/DatamuseService';
import './App.css';
import './App.scss';
import './App.less';

class App extends Component {
  render() {
    this.testDatamuse();
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Start />
        <span className="sassClass">Sass</span><br />
        <span className="lessClass">Less</span>
      </div>
    );
  }
  
  async testDatamuse() {
    console.log(await getRhyme("dog"));
  }
}

export default App;