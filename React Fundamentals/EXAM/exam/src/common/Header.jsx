import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class Header extends Component{
    render(){
        const {logout, items, users, loggedIn} = this.props

        return(
            <header>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link className="navbar-brand" to="/">FS</Link>
                            <NavLink className="nav-link" activeClassName='activ' exact to="/">Home</NavLink>
                            {loggedIn && <NavLink className="nav-link" activeClassName='activ' to="/create">Create Furniture</NavLink>}
                            {loggedIn && <NavLink className="nav-link" activeClassName='activ' to="/profile">My Furniture</NavLink>}
                            {loggedIn && <a className="nav-link"  href="javascript:void()" onClick={logout}>Logout</a>}
                            {!loggedIn && <NavLink className="nav-link" activeClassName='activ' to="/login">Login</NavLink>}
                            {!loggedIn && <NavLink className="nav-link" activeClassName='activ' to="/register">Register</NavLink>}
                            <span>{items} items in catalog</span>
                            <span>{users} registered users</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        )
    }
}