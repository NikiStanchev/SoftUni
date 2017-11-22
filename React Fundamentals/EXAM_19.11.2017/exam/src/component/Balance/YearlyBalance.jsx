import React, {Component} from 'react'
import YearlyList from './YearlyList'
import {getYearlyBalance} from './../../api/remote'

export default class YearlyBalance extends Component{
    constructor(props){
        super(props)
        this.state = {
            balances:[],
            year:(new Date()).getFullYear()
        }
    }

    componentDidMount(){
        this.getData()
    }

    async getData(){
        const data = await getYearlyBalance(this.state.year)
        this.setState({balances:data})
    }


    render(){
        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Yearly Balance</h1>
                    </div>
                    </div>
                    <div className="row space-top col-md-12">
                        {this.state.balances.length === 0 ? 
                    <p>Loading &hellip;</p> :
                    <YearlyList props={this.state}/> }   
                </div>
            </div>
        )
    }
}