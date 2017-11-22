import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Header extends Component{
    render(){
        const {loggedIn, onLogout} = this.props
        return(
            <header>
                <span>Hotel System</span>
                <NavLink  activeClassName='activ' exact to="/">Home</NavLink>
                {loggedIn && <NavLink  activeClassName='activ' to="/create">Create Hotel</NavLink>}
                {loggedIn && <a href="javascript:void(0)" onClick={onLogout}>Logout</a>}
                {!loggedIn && <NavLink activeClassName='activ' to="/login">Login</NavLink>}
                {!loggedIn && <NavLink activeClassName='activ' to="/register">Register</NavLink>}
            </header>
        )
    }
}