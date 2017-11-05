import React, {Component} from 'react'

class Car extends Component {
    render(){
        let car = this.props.car
        return(
            <tr>
                <td>{car.make}</td>
                <td>{car.model}</td>
            </tr>
        )
    }
}

export default Car