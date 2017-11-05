import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import HomePage from './components/HomePage'
import Clock from './components/Clock'
import Cars from './components/Cars'

// function tick(){
//     const element = <h1>It is {new Date().toLocaleTimeString()} hurry!</h1>

//     ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000)

// function Greeting () {
//     return <h1>Zdrasti</h1>
// }

// const Greeting = (props) => (
//     <div>
//         <h1>Zdrasti ot {props.name}</h1>
//         <h2>Pesho</h2>
//     </div>
// )




ReactDOM.render(<Cars />, document.getElementById('root'))
registerServiceWorker()
