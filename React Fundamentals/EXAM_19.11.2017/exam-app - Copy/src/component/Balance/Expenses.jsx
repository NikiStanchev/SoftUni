import React, {Component} from 'react'
import {createPlanner, addExpense} from './../../api/remote'
import {withRouter} from 'react-router-dom'
import toastr from 'toastr'

class Expenses extends Component{
    constructor(props){
        super(props)

        this.state = {
            paymentDate:0,
            name:'',
            category:'Non-essential',
            cost:0
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async onSubmitHandler(e) {
        e.preventDefault()
        if(this.state.cost <= 0){
            toastr.error('Your cost have to be more then 0')
            return
        }
        if(this.state.paymentDate <= 0){
            toastr.error('You must give paymentDate')
            return
        }
        const expense = {
            date:Number(this.state.paymentDate),
            name:this.state.name,
            category: this.state.category,
            amount:Number(this.state.cost)
        }

        const res =  await addExpense((new Date()).getFullYear(),this.props.match.params.id , expense )
        toastr.success('You have successfully add Expense')
        this.props.history.push('/monthly/' + this.props.match.params.id)
        
    }


    render(){
        const months = ['Empty', 'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return(
            <div>
                <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Add Expenses</h1>
                    <h3>{months[this.props.match.params.id]} {(new Date()).getFullYear()}</h3>
                </div>
            </div>
            <div className="row space-top">
                <div className="col-md-10">
                    <form onSubmit={this.onSubmitHandler}>
                        <legend>Add a new expense</legend>
                        <div className="form-group">
                            <label className="col-md-2" htmlFor="name">Name:</label>
                            <input onChange={this.onChangeHandler} className="col-md-2" name="name" type="text" />
                        </div>
                        <div className="form-group">
                            <label className="col-md-2" htmlFor="category">Category:</label>
                            <select onChange={this.onChangeHandler} value={this.state.rating} className="col-md-2 pl-2" name="category">
                                <option value='Non-essential'>Non-essential</option>
                                <option value='Fixed'>Fixed</option>
                                <option value='Variable'>Variable</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2" htmlFor="cost">Cost:</label>
                            <input onChange={this.onChangeHandler} className="col-md-2" name="cost" type="number" />
                        </div>
                        <div className="form-group">
                            <label className="col-md-2" htmlFor="paymentDate">Payment Date:</label>
                            <input onChange={this.onChangeHandler} className="col-md-2" name="paymentDate" type="x  " />
                        </div>
                        <input type="submit" className="btn btn-secondary" value="Add" />
                    </form>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

export default withRouter(Expenses)