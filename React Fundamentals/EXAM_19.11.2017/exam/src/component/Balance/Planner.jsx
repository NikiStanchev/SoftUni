import React, {Component} from 'react'
import {createPlanner} from './../../api/remote'
import toastr from 'toastr'

export default class Planner extends Component{
    constructor(props){
        super(props)

        this.state={
            income:0,
            budget:0
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    componentWillMount(){
        this.setState({
            income:this.props.income,
            budget:this.props.budget
        })
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async onSubmitHandler(e) {
        e.preventDefault()

        const planner = {
            income: Number(this.state.income),
            budget : Number(this.state.budget)
        }

        const res =  await createPlanner((new Date()).getFullYear(),this.props.id , planner )

        toastr.success('You have successfully update your Planner')
    }

    render(){
        return(
            <div className="col-md-3 space-top">
            <h4>Planner</h4>
            <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label className="form-control-label" htmlFor="income">Income:</label>
                    {this.state !== null && <input className="form-control" onChange={this.onChangeHandler} value={this.state.income} name="income" type="number"/>}
                </div>
                <div className="form-group">
                    <label className="form-control-label" htmlFor="budget">Budget:</label>
                    {this.state !== null && <input className="form-control" onChange={this.onChangeHandler} value={this.state.budget} name="budget" type="number"/>}
                </div>
                <input type="submit" className="btn btn-secondary" value="Save" />
            </form>
        </div>
        )
    }
}