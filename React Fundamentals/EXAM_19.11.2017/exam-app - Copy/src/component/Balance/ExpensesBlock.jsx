import React, {Component} from 'react'
import {removeExpense} from './../../api/remote'
import {withRouter} from 'react-router-dom'
import toastr from 'toastr'

class ExpensesBlock extends Component {

    constructor(props){
        super(props)
    }

     async deleteExpense(id){
        try{
            const res = await removeExpense(id)
        }catch(e){}
        toastr.success('You have successfully delete an Expense')
        this.props.history.push('/yearly/')
    }

    render(){
        return( 
            <tr>
            <td>{this.props.props.name}</td>
            <td>{this.props.props.category}</td>
            <td>{this.props.props.amount}</td>
            <td>{this.props.props.date}-{this.props.props.month}-{this.props.props.year}</td>
            <td>
                <a href="#" onClick={()=> (this.deleteExpense(this.props.props.id))} className="btn btn-secondary">Delete</a>
            </td>
        </tr>
        )
    }
}

export default withRouter(ExpensesBlock)