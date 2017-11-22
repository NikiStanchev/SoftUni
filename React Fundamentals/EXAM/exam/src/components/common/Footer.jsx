import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="container modal-footer">
                <p>Exam &copy; SoftUni 2017</p>
            </div>
            </footer>
        )
    }
}