import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            password:'',
            make:''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
    }

    render(){

        return(
            <form onSubmit={this.onSubmit}>Name:
                <input 
                    onChange={this.onChange} 
                    name="name"
                    type="text" 
                    value={this.state.name}/>
                <input 
                    onChange={this.onChange} 
                    name="password"
                    type="password" 
                    value={this.state.password}/>

                <input type="submit" value="Submit"/><br/>
                <select onChange={this.onChange} name='make' value={this.state.make}>
                    <option value='volvo'>Volvo</option>
                    <option value='audi'>Audi</option>
                </select>
            </form>
        )
    }
}

export default Form