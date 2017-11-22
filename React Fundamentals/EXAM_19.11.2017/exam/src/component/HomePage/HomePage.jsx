import React, { Component } from 'react';
import {getPage, deleteHotel} from '../../api/remote'
import HotelsList from './HotelsList'
import {Link} from 'react-router-dom'

export default class HomePage extends Component {
    constructor(props){
        super(props)

        // this.state = {
        //     hotels:[]
        // }

        // this.deleteHotel =  this.deleteHotel.bind(this)
    }

    componentDidMount(){
        // this.getData()
    }

    // async getData(page = Number(this.props.match.params.page) || 1){
    //     const data = await getPage(page)
    //     this.setState({hotels:data})
    // }

    componentWillReceiveProps(nextProps){
        // if(nextProps.match.params.page !== this.props.match.params.page){
        //     this.getData(Number(nextProps.match.params.page))
        // }
    }

    // async deleteHotel(id){
    //     try{
    //         const res = await deleteHotel(id)
    //     }catch(e){}
    //     this.setState({hotels:this.state.hotels.filter(h=>h.id !== id)})
    //     this.getData()
    // }

    render() {
        return(
            <div>Home Page</div>
            
        )
    }
}