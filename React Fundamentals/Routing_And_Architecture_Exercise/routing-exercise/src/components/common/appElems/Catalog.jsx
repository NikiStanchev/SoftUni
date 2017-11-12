import React,{Component} from 'react'
import Post from './partials/Post'

import requestHandler  from './../../../utils/requestHandler'

class Catalog extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        requestHandler.pullPosts().then(data=>{
            this.setState({posts:data})
        })
    }

    render(){
        return(
            <section id="viewCatalog">
                <div className="posts">
                   {this.state.posts.map(post=>{
                       return <Post key={post._id} props={post}/>
                   })}  
                </div>
        </section>
        )
    }
}


export default Catalog