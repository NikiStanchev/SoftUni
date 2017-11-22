import React, {Component} from 'react'
import YearlyBlock from './YearlyBlock'

export default class YearlyList extends Component {
    constructor(props){
        super(props)

        this.state
    }
    render(){
        return(
            <div>
                {Object.keys(this.props.props.balances).map(b=>{
                    console.log(b)
                    let obj = this.props.props.balances[b]
                    if(b < 12){return (
                        <YearlyBlock key={b} props={obj} id={b}/>
                    )}
                })}
            </div>
        )
    }
}