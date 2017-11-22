import React, {Component} from 'react'
import {getMonthlyBalance} from './../../api/remote'
import Planner from './Planner'
import {Link} from 'react-router-dom'
import ExpensesBlock from './ExpensesBlock'

export default class MonthlyBalance extends Component{
    constructor(props){
        super(props)
        this.state = {
            budget:0,
            income:0,
            expenses:[],
            updatet:false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillMount(){
        this.getData()
    }

    async getData(){
        const monthly = await getMonthlyBalance(Number((new Date()).getFullYear()) ,Number(this.props.match.params.id))
        this.setState({
            budget:monthly.budget,
            income:monthly.income,
            expenses:monthly.expenses
        })
        this.setState({updatet:true})
    }


    render(){
        const months = ['Empty', 'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return(
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Welcome to Budget Planner</h1>
                </div>
            </div>
            <div className="row space-top ">
            <div className="col-md-12 ">
                    <div className="card bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                            <h2 id="month">{months[this.props.match.params.id]} {(new Date()).getFullYear()}</h2>
                                <div className="row">
                                    {this.state.updatet && <Planner income={this.state.income} budget={this.state.budget} id={this.props.match.params.id}/>}
                                    <div className="col-md-8 space-top">
                                    <div className="row">
                                            <h4 className="col-md-9">Expenses</h4>
                                            <Link className="btn btn-secondary ml-2 mb-2" to={'/expenses/' + this.props.match.params.id}>Add expenses</Link>
                                        </div>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Category</th>
                                                    <th>Cost</th>
                                                    <th>Payment Date</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.expenses.length !== 0 && this.state.expenses.map(e=>{
                                                    return <ExpensesBlock key={e.id} props={e}/>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


                                