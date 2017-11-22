import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutAction} from './actions/authActions'

import HomePage from './components/Home/HomePage'
import CreatePage from './components/Create/CreatePage'
import ProfilePage from './components/Profile/ProfilePage'
import DetailsPage from './components/Details/DetailsPage'
import LoginPage from './components/Auth/LoginPage'
import RegisterPage from './components/Auth/RegisterPage'
import NotFound from './components/common/NotFound'

import Header from './components/common/Header'
import Footer from './components/common/Footer'

import {furniture} from './data.json'

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      loggedIn:false
    }

    this.onLogout = this.onLogout.bind(this)
  }

  componentWillMount(){
    if(localStorage.authToken){
      this.setState({loggedIn:true})
    }
  }

  onLogout(){
    this.setState({loggedIn:false})
    this.props.logout()
    this.props.history.push('/')
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loginSuccess){
      this.setState({loggedIn:true})
    }
  }

  render() {
    return (
      <div className="App">
          <Header 
            items={0}
            users={0}
            loggedIn={false}
            loggedIn={this.state.loggedIn}
            logout={this.onLogout}
          />
          <main>
          <Switch>
            <Route exact path='/' render={()=> <HomePage furniture={furniture}/>}/>
            <Route path='/create' component={CreatePage}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route path='/details/:id' component={DetailsPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route component={NotFound}/>
          </Switch>
          </main>
          <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    loginSuccess: state.login.success
  }
}

function mapDispatchToProps(dispatch){
  return{
    logout: () => dispatch(logoutAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
