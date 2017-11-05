import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider'
import Roster from './components/Roster'
import Char from './components/Char'
import Bio from './components/Bio'
import observerMenu from './utils/observer'


class App extends Component {
  constructor(params){
    super(params)
    this.state = {
      focusedChar:0
    }
    this.eventHandler = (newState)=>{
      this.setState(newState)
    }
  }

  componentDidMount(){
    observerMenu.addObserver("changeFocus", this.eventHandler)
  }

  render() {
    return (
      <div className="App">
          <Slider/>
          <Roster/>
          <Bio params={({id:Number(this.state.id)})}/>
      </div>
    );
  }
}

export default App;
