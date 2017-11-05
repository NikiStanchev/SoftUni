import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle'
import FocusDiv from './components/FocusDiv'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div>
      <Toggle/>
      <br/>
      <FocusDiv number="1"/>
      <FocusDiv number="2"/>
      <br/>
      <FocusDiv number="3"/>
      <FocusDiv number="4"/>
      <br/>
      <Form/>
      </div>
    )
  }
}

export default App;
