import React, {Component} from 'react'
import collector from './../../utils/DataCollector'
import requestHandler from './../../utils/requestHandler'

import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            loading:false
        }
        this.dataCollector = (e)=>{
            this.setState(collector(e))
        }
        this.login=(e)=>{
            e.preventDefault()
            this.setState({loading:true})
            requestHandler.login(this.state).then(response=>{
                localStorage.setItem('token', response._kmd.authtoken)
                localStorage.setItem('username', response.username)
                localStorage.setItem('_id', response._id)
                this.setState({loading:false})
                window.location.reload()
            })
            
        }
    }

    render(){
        const { logedIn } = this.state
        return(
            <div>
            <form id="loginForm" onSubmit={e=>{this.login(e)}}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={(e)=>{this.dataCollector(e)}} name="username" type="text"/>
                <label>Password:</label>
                <input onChange={(e)=>{this.dataCollector(e)}} name="password" type="password"/>
                <input id="btnLogin" value="Sign In" type="submit"/>
            </form>
            </div>    
        )
    }
}

export default Login