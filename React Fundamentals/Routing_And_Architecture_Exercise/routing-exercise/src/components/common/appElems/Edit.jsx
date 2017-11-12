import React, {Component} from 'react'
import collector from './../../../utils/DataCollector'
import requestHandler from './../../../utils/requestHandler'

import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'


class Edit extends Component {
    constructor(props){
        super(props)
        this.state={
            _id:'',
            author:'',
            url:'',
            description:'',
            title:'',
            _acl:'',
            _kmd:'',
            imageUrl:'',
            fireRedirect: false
        }
        this.dataCollector = (e)=>{
            this.setState(collector(e))
        }

        this.editPost = (e)=>{
            e.preventDefault()
            this.setState({ fireRedirect: true })
            requestHandler.editPost(this.state).then(data=>{
            })
        }
        this.onChange = this.onChange.bind(this)
    }

    

    componentDidMount(){
        fetch('https://baas.kinvey.com/appdata/kid_HJ_WQy-1f/posts/' + this.props.match.params.id,{
            method:'GET',
            headers:{
                Authorization: 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json()
        }).then(parsedData=>{
            this.setState({
                _id:parsedData._id,
                author:parsedData.author,
                url:parsedData.url,
                description:parsedData.description,
                title:parsedData.title,
                _acl:parsedData._acl,
                _kmd:parsedData._kmd,
                imageUrl:parsedData.imageUrl
            })
        })
    }
    
    onChange(e){

        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { fireRedirect } = this.state
        return(
            <div className="submitArea formContainer">
            <form id="editForm" className="submitForm" onSubmit={(e)=>{this.editPost(e)}}>
                <label>Link URL:</label>
                <input onChange={this.onChange} value={this.state.url} name="url" type="text"/>
                <label>Link Title:</label>
                <input onChange={this.onChange} value={this.state.title} name="title" type="text"/>
                <label>Link Thumbnail Image (optional):</label>
                <input onChange={this.onChange} value={this.state.imageUrl} name="imageUrl" type="text"/>
                <label>Comment (optional):</label>
                <textarea onChange={this.onChange} value={this.state.description} name="description"></textarea>
                <input id="btnSubmitPost" value="Edit" type="submit"/>
            </form>
            {fireRedirect && ( <Redirect to='/catalog'/>)}
        </div>
        )
    }
}

export default Edit