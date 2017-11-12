import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import dateConvertor from './../../../../utils/dateConvertor'
import Comment from './Comment'
import CreateComment from './CreateComment'

class Details extends Component{
    constructor(props){
        super(props)

        this.state={
            currentPost:{},
            comments:{}
        }
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
            this.setState({currentPost:parsedData})
            fetch(`https://baas.kinvey.com/appdata/kid_HJ_WQy-1f/comments?query={"postId":"${parsedData._id}"}&sort={"_kmd.ect": -1}`,{
                method:'GET',
                headers:{
                    Authorization: 'Kinvey ' + localStorage.getItem('token')
                }
            }).then(comRes=>{
                return comRes.json()
            }).then(parsedCom=>{
                this.setState({comments:parsedCom})
            })
        })
    }

    render(){
        return(
            <section id="viewComments">
            <div className="post">
                <div className="col thumbnail">
                    <a href={this.state.currentPost.url}>
                        <img src={this.state.currentPost.imageUrl}/>
                    </a>
                </div>
                <div className="post-content">
                    <div className="title">
                        <a href="http://sammyjs.org/docs/api/0.7.4/all#Sammy.RenderContext-load">
                            {this.state.currentPost.title}
                        </a>
                    </div>
                    <div className="details">
                        <p>{this.state.currentPost.description}</p>
                        <div className="info">
                            submitted {this.state.currentPost._kmd === undefined ? 'undefined' : dateConvertor(this.state.currentPost._kmd.lmt)} ago by {this.state.currentPost.author}
                        </div>
                        <div className="controls">
                            <ul>
                            {this.state.currentPost.author === localStorage.username ? <li className="action"><Link className="editLink" to={`/edit/${this.state.currentPost._id}`}>edit</Link></li> : <li></li>}
                            {this.state.currentPost.author === localStorage.username ? <li className="action"><a className="deleteLink" href="#">delete</a></li> : <li></li>}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="clear"></div>
            </div>
            <CreateComment props={this.state.currentPost}/>
            {this.state.comments.length > 0 ? this.state.comments.map(comment=>{return <Comment key={comment._id} props={comment}/>}) : false}
        </section>
        )
    }
}

export default Details