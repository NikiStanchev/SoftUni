import React from 'react'
import {Link} from 'react-router-dom'
import dateConvertor from './../../../../utils/dateConvertor'
import requestHandler from './../../../../utils/requestHandler'

let Post = (props)=>{
    return(
        <article className="post">
        <div className="col rank">
            <span>{props.index}</span>
        </div>
        <div className="col thumbnail">
            <a href={props.props.url}>
                <img src={props.props.imageUrl}/>
            </a>
        </div>
        <div className="post-content">
            <div className="title">
                <a href={props.props.url}>
                    {props.props.title}
                </a>
            </div>
            <div className="details">
                <div className="info">
                    submitted {dateConvertor(props.props._kmd.lmt)} ago by {props.props.author}
                </div>
                <div className="controls">
                    <ul>
                        <li className="action"><Link className="commentsLink" to={`/details/${props.props._id}`}>comments</Link></li>
                        {localStorage.username === props.props.author ? <li className="action"><Link className="editLink" to={`/edit/${props.props._id}`}>edit</Link></li> : <li></li>}
                        {localStorage.username === props.props.author ? <li className="action"><Link className="deleteLink" to={`/catalog`} onClick={()=>{requestHandler.deletePost(props.props._id)}}>delete</Link></li> : <li></li>}
                    </ul>
                </div>
            </div>
        </div>
    </article>   
    )
}

export default Post