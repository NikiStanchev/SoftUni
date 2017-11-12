import React, {Component} from 'react'



class CommentsList extends Component{
    constructor(props){
        super(props)
        
        this.state = {comments:[]}
    }

    

    remder(){
        return(
            <ul>
                {this.state.comments.map((c, i)=>(
                    <li key={i}>{c}</li>
                ))}
            </ul>
        )
    }
}

export default CommentsList