import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import GuestHome from './components/auth/Home'
import Home from './components/common/Menu'
import Wraper from './components/common/LogedWraper'


import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      token:''
    }
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.setState({token:localStorage.getItem('token')})
    }
  }

  render() {
    return (
      <BrowserRouter>
      
        <div>
          <Header/>
          {this.state.token === ''?<GuestHome/>:<Wraper/>}
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
