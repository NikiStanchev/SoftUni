import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle'
import FocusDiv from './components/FocusDiv'
import Form from './components/Form'
import Converter from './components/Converter/Converter'
import List from './components/List'

function Greeting(props){
  return(
    <div className={props.className}>
      Hello, {props.name}
      {props.message}
    </div>
  )
}

function FancyGreeting(props){
  return(
    <Greeting className='fancy' name={props.name} message='Welcome to the Unterground!'/>
  )
}

class App extends Component {

  constructor(props){
    super(props)

    this.state = {value:true}
  }
  render() {
    return (
      <div>
        <List>
          {['Pesho', 'Gosho', 'Vasko'].map((p,i)=>{
            return(
              <li key={i}>{p}</li>
            )
          })}
        </List>
        <Toggle/>
        <br/>
        {[1,2,3,4].map((n,i)=>{
          return(
            <FocusDiv key={i} number={n}>
            <p>Childrend Element</p>
            </FocusDiv>
          )
        })}
        <br/>
        <Form/>
        <br/>
        {this.state.value ? <Converter/> : null}
      </div>
    )
  }
}

export default App;
