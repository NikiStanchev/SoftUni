import React, {Component} from 'react'
import Char from './Char'

class Roster extends Component{
    constructor(props){
        super(props)
        this.state = {
            charArr : [1,2,3,4]
        }
    }

    componentDidMount(){
        fetch('http://localhost:9999/roster').then(data=>{
            return data.json()
        }).then(parsedData=>{
            this.setState({charArr:parsedData})
        })
    }

    render(){
        return(
            <div>
                {this.state.charArr.map((char, index)=>{
                    return(
                        <Char key={index} params={char}/>
                    )
                })}
            </div>
        )
    }
}

export default Roster