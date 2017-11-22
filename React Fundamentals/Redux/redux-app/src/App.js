import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterWrap from './components/CounterWrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterWrap/>
      </div>
    );
  }
}

export default App;
