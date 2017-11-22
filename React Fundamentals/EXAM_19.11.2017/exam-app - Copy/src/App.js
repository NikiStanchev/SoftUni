import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutAction} from './actions/authActions'

import HomePage from './component/HomePage/HomePage'
import LoginPage from './component/Auth/LoginPage'
import RegisterPage from './component/Auth/RegisterPage'
import Footer from './component/common/Footer'
import Header from './component/common/Header'
import NotFound from './component/common/NotFound'
import PrivateRoute from './component/common/PrivateRoute'
import CreatePage from './component/Create/CreatePage'
import DetailsPage from './component/Details/DetailsPage'

import MonthlyBalance from './component/Balance/MonthlyBalance'
import YearlyBalance from './component/Balance/YearlyBalance'
import Expenses from './component/Balance/Expenses'

import toastr from 'toastr'

class App extends Component {
  constructor(props) {
      super(props);

      this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
      toastr.success('You have  successfully logged out')
      localStorage.clear();
      this.props.history.push('/');
  }

  render() {
      return (
        <div>
          <Header loggedIn={localStorage.getItem('authToken') !== null} onLogout={this.onLogout} />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute path='/monthly/:id' component={MonthlyBalance}/>
            <PrivateRoute path='/yearly' component={YearlyBalance}/>
            <PrivateRoute path='/expenses/:id' component={Expenses}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      )
  }
}

export default withRouter(App)