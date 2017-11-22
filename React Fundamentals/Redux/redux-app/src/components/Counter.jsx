import React, {Component} from 'react'

// Child
let Counter = (props)=>{
    return (
        <div>
            <h1>{props.props.value}</h1>
            <button onClick={()=>{store.dispatch(actionObj.incrementCounter({index:props.props.index, step:5}))}}>Increment</button>
            <button>Decrement</button>
            <button onClick={()=>{store.dispatch(actionObj.clearCounter({index:props.props.index}))}}>Clear</button>
        </div>
    )
}

export default Counter
