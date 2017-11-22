import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class Header extends Component{
    render(){
        const {loggedIn, onLogout} = this.props
        return(
          <header>
            <nav className="navbar navbar-dark bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {loggedIn && <NavLink className="nav-link"   activeClassName='activ' to="/yearly">Yearly Balance</NavLink>}
                            {loggedIn && <a href="javascript:void(0)" onClick={onLogout}>Logout</a>}
                            {!loggedIn && <NavLink className="nav-link" activeClassName='activ' to="/login">Login</NavLink>}
                            {!loggedIn && <NavLink className="nav-link" activeClassName='activ' to="/register">Register</NavLink>}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        )
    }
}