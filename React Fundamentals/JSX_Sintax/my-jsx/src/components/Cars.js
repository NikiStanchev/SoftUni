import React, {Component} from 'react'
import data from '../Data'
import Car from './Car'

class Cars extends Component{
    constructor(props){
        super(props)
        this.state = {
            cars:[]
        }
    }

    componentDidMount(){
        data
            .getCars()
            .then(cars =>{
                this.setState({
                    cars:cars
                })
            })
    }

    render () {
        let cars = this.state.cars.map(car => (
            <Car key={car.id} car={car}/>
        ))

        return <table>{cars}</table>
    }

}

export default Cars