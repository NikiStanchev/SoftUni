import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class YearlyBalance extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const months = ['Empty', 'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return(
            <div className="col-md-3">
                <div className="card text-white bg-secondary">
                    <div className="card-body">
                    <blockquote className="card-blockquote">
                    <h2>{months[this.props.id]}</h2>
                    <h4>Year 2017</h4>
                    <label htmlFor="budget">Budget:</label>
                    <input className="col-md-9" name="budget" disabled/>
                    <label htmlFor="balance">Balance:</label>
                    <input className="col-md-9" name="balance" disabled/>
                    <div className="space-top">
                    <Link className="btn btn-secondary" to={'/monthly/' + this.props.id}>Details</Link>
                    </div>
                    </blockquote>
                    </div>
                </div>
            </div> 
        )
    }
}