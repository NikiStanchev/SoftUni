import React, {Component} from 'react'
import Post from './../../common/appElems/partials/Post'
import requestHandler from './../../../utils/requestHandler'

class MyPosts extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        console.log(localStorage.username)
        requestHandler.getMyPosts(localStorage.username).then(data=>{
            this.setState({posts:data})
        })
    }

    render(){
        return(
        <section id="viewMyPosts">
        <div className="post post-content">
            <h1>Your Posts</h1>
        </div>
        {this.state.posts.map(post=>{
                       return <Post key={post._id} props={post}/>
                   })}  
        </section>
        )
    }
}

export default MyPosts