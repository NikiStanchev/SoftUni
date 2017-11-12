import React, {Component} from 'react'
import collector from './../../../utils/DataCollector'
import requestHandler from './../../../utils/requestHandler'

import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'

class Submit extends Component {
    constructor(props){
        super(props)
        this.state = {
            fireRedirect: false
          }

        this.dataCollector = (e)=>{
            this.setState(collector(e))
        }

        this.createPost = (e)=>{
            e.preventDefault()
            this.setState({ fireRedirect: true })
            requestHandler.createPost(this.state).then(data=>{
            })
        }
    }


    componentDidMount(){
        this.setState({author:localStorage.getItem('username')})
    }

    render(){
        const { fireRedirect } = this.state
        return(
            <div className="submitArea formContainer">
            <form id="submitForm" className="submitForm" onSubmit={(e)=>{this.createPost(e)}}>
                <label>Link URL:</label>
                <input onChange={(e)=>{this.dataCollector(e)}} name="url" type="text"/>
                <label>Link Title:</label>
                <input onChange={(e)=>{this.dataCollector(e)}} name="title" type="text"/>
                <label>Link Thumbnail Image (optional):</label>
                <input onChange={(e)=>{this.dataCollector(e)}} name="imageUrl" type="text"/>
                <label>Comment (optional):</label>
                <textarea onChange={(e)=>{this.dataCollector(e)}} name="description"></textarea>               
                <input id="btnSubmitPost" value="Submit" type="submit"/>
            </form>
            {fireRedirect && ( <Redirect to='/catalog'/>)}
        </div>
        )
    }
}

export default Submit