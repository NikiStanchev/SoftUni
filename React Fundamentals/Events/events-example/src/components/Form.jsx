import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            password:''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        alert(this.state.name)
    }

    render(){

        return(
            <form onSubmit={this.onSubmit}>Name:
                <input 
                    onChange={this.onChange} 
                    name="name"
                    type="text" 
                    name={this.state.name}/>
                <input 
                    onChange={this.onChange} 
                    name="password"
                    type="password" 
                    name={this.state.password}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Form