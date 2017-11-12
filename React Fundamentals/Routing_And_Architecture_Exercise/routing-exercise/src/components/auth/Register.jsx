import React, {Component} from 'react'
import collector from './../../utils/DataCollector'
import requestHandler from './../../utils/requestHandler'


class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            repeatPass:''
        }
        this.collector = (e)=>{
            this.setState({[e.target.name]:e.target.value})
        }
        this.register = (e) =>{
            e.preventDefault()
            requestHandler.register({username:this.state.username, password:this.state.password})
        }
    }

    render(){
        return(
            <form 
                onSubmit={e=>{this.register(e)}}
                id="registerForm">
                    <h2>Register</h2>
                    <label>Username:</label>
                    <input onChange={(e)=>{this.collector(e)}} name="username" type="text"/>
                    <label>Password:</label>
                    <input onChange={(e)=>{this.collector(e)}} name="password" type="password"/>
                    <label>Repeat Password:</label>
                    <input onChange={(e)=>{this.collector(e)}} name="repeatPass" type="password"/>
                    <input id="btnRegister" value="Sign Up" type="submit"/>
            </form>
        )
    }
}

export default Register