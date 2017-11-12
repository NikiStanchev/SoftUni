import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import dateConvertor from './../../../../utils/dateConvertor'
import requestHandler from './../../../../utils/requestHandler'


let Comment = props =>{
    return(
            <article className="post post-content">
                <p>{props.props.content}</p>
                <div className="info">
                    {props.props._kmd === undefined ? 'undefined' : dateConvertor(props.props._kmd.lmt)} ago by {props.props.author} {props.props.author === localStorage.username ? <Link className="deleteLink" to={`/`} onClick={()=>{requestHandler.deleteComment(props.props._id)}}>delete</Link> : <div/>}
                </div>
            </article>
    )
}

export default Comment