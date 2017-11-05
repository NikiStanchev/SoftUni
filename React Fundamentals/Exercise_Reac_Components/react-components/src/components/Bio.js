import React, {Component} from 'react'
import Char from './Char'

class Bio extends Component{
    constructor(props){
        super(props)

        this.state = {
            id:0,
            curChar:{
                url:''
            }
        }

        
    }

    componentDidMount(){
        fetch('http://localhost:9999/character/' + this.state.id).then(data=>{
            return data.json()
        }).then(parsedData=>{
            this.setState({curChar:parsedData})
        })
    }

    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps)
    }

    componentWillUpdate(nextProps, nextState) {
        //console.log(nextProps.params.id)
        // fetch('http://localhost:9999/character/' + nextProps.params.id).then(data=>{
        //     console.log(data)
        //     return data.json()
        // }).then(parsedData=>{
        //     console.log(parsedData)
        // })
        // fetch('http://localhost:9999/character/' + 2).then(data=>{
        //     //console.log(data)
        //     return data.json()
        // }).then(parsedData=>{
        //     console.log(parsedData)
        //     this.setState({curChar:parsedData})
        // })
        
      }

    componentWillReceiveProps(nextProps){
        fetch('http://localhost:9999/character/' + nextProps.params.id).then(data=>{
            return data.json()
        }).then(parsedData=>{
            this.setState({curChar:parsedData})
        })
        
    }

    render(){
        return(
            <div>
                <fieldset>
                    <Char params={({url:this.state.curChar.url})}/>
                    <p>{this.state.curChar.bio}</p>
                </fieldset>
            </div>
            
        )
    }
}

export default Bio
