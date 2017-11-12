import React, {Component} from 'react'
import requestHandler from './../../../../utils/requestHandler'

class CreateComment extends Component{
    constructor(props){
        super(props)

        this.state = {
            author:'',
            content:'',
            postId:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({
            author:localStorage.username,
            content: e.target.value,
            postId:this.props.props._id
        })
    }

    onSubmit(e){
        e.preventDefault()
        requestHandler.createComment(this.state)
        window.location.reload()
    }

    render(){
        return(
            <div className="post post-content">
                <form onSubmit={this.onSubmit} id="commentForm">
                    <label>Comment</label>
                    <textarea onChange={this.onChange} value={this.state.content} name="content" type="text"></textarea>
                    {this.state.content.length > 0 ? <input type="submit" value="Add Comment" id="btnPostComment"/> : false}
                </form>
            </div>
        )
    }
}

export default CreateComment