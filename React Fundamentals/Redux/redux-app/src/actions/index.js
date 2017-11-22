const ADD_COUNTER = 'ADD_COUNTER'
const REMOVE_LAST = 'REMOVE_LAST'
const INCREMENT = 'INCREMENT'
const CLEAR = 'CLEAR'

export default actionObj = {
    addCounter:()=>{
        return {type:ADD_COUNTER}
    },
    removeCounter:()=>{
        return {type:REMOVE_LAST}
    },
    incrementCounter:(payload)=>{
        return {type:INCREMENT, payload}
    },
    clearCounter:(payload)=>{
        return {type:CLEAR, payload}
    }
}