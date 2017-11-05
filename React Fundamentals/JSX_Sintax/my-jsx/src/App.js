import React, { Component } from 'react'
//import logo from './logo.svg'
import './App.css'

class App extends Component {

  // formatUser (firstName, lastName){
  //   return firstName + ' ' + lastName
  // }

  // render() {
  //   let id = 5
  //   let firstName = 'pesho'
  //   let lastName = 'gosho'

  //   const el = <div>Some div</div>

  //   const element = <h2 id={id} className='some-class'>{el}{this.formatUser(firstName, lastName)}</h2>
  //   return element
  // }

  // greet (user) {
  //   if(user){
  //     let firstName = user.firstName
  //     let lastName = user.lastName

  //     return <div>Hi, {firstName} {lastName}!</div>
  //   }

  //   return <div>Sorry i dont know you!</div>
  // }

  // render(){
  //   return this.greet({
  //     firstName:'Pesho',
  //     lastName:'Gosho'
  //   })
  // }

  // render () {
  //   let data = [
  //     {id: 1, name: 'Vankata', age:12},
  //     {id: 2, name: 'Maca', age:1},
  //     {id: 3, name:'Meri', age:5},
  //     {id: 4, name:'Sisi', age:7}
  //   ]

  //   let catsList = data.map(cat => (
  //     <li key={cat.id}>
  //       My name is {cat.name}. I am {cat.age} years old!
  //     </li>
  //   ))

  //   return (
  //     <ul>
  //       {catsList}
  //     </ul>
  //   )
  // }

  render(){
    return (
      <div className='App'>
        My App Component
      </div>
    )
  }
}

export default App
