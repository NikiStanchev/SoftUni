import React, { Component } from 'react'

export default class HomePage extends Component{


    render(){
        const {furniture} = this.props

        return(
            <div>
                <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Welcome</h1>
                    
                </div>
            </div>

        </div>
            </div>
        )
    }
}