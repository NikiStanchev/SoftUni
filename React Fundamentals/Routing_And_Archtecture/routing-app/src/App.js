import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/Form/Form'

const About = props =>(
  <div>
    <h1>About Page</h1>
    <Route
      path={props.match.url + '/contact'} component={Contact}
      />
  </div>
)

const Home = props =>(
  <div>
    <h1>Home Page</h1>
  </div>
)

const DashBoard = props =>(
  <div>
    <h1>Your Dashboard</h1>
    <p>{props.data}</p>
  </div>  
)

const Contact = props =>(
  <div>
    <h1>Contact Page</h1>
  </div>
)

const User = props =>{
  if(props.match.params.userName.length < 6) return null
  return(
    <div>
    <h1>User Detils</h1>
    <p>Display details for {props.match.params.userName}</p>
  </div>
  )
}

const NotFound = props =>(
  <div>
    <h1>Not Found 404</h1>
  </div>
)

function withData(WrappedComponent, data){
  class WithData extends Component{
    render(){
      return(
        <WrappedComponent data={data}/>
      )
    }
  }

  return WithData
}

const DashBoardWithData = withData(DashBoard, 'Some DATA')

class App extends Component {

  constructor(props){
    super(props)

    this.state = {loggedIn:false}
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path='/' render={()=>{
          if(this.state.loggedIn) return (<Redirect to='/dashboard'/>)
          else return (<Home/>)
        }}/>
        
        <Route path='/about' component={About}/>
        <Route path='/details/:userName' component={User}/>
        <Route component={NotFound}/>
        
        </Switch>
        <DashBoardWithData/>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
