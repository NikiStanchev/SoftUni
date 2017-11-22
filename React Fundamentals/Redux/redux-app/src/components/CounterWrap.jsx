import React, {Component} from 'react'
import Counter from './Counter'

const mapStateToProps = function(state){
    return {
        something: state
    }
}

const mapDispatchToProps = function(dispatch){
    return{
        registerFunc:(elem)=>dispatch(actions(elem))
    }
}


// Parent
let CounterWrap = () =>{
    return(
        <div>
            {store.getState().map((counter)=>{
                return <Counter key={counter.index} props={counter}/>
            })}
            <button onClick={()=>{store.dispatch(actionObj.addCounter())}}>Add Counter</button>
            <button onClick={()=>{store.dispatch(actionObj.removeCounter())}}>Remove Counter</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterWrap)