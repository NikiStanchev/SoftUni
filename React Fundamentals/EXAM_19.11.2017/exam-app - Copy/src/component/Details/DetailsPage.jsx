// import React, { Component } from 'react'
// import {getDetails} from '../../api/remote' 
// import ReviewSection from './ReviewSection'

// export default class DetailsPage extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             hotel:false
//         }
//     }

//     componentDidMount(){
//         this.getData()
//     }

//     async getData(){
//         const hotel = await getDetails(Number(this.props.match.params.id))
//         this.setState({hotel})
//     }

//     render(){
//         let main = <p>Loading &hellip;</p>
//         if(this.state.hotel){
//             const hotel = this.state.hotel
//             main = (
//               <div className="col-sm-8">
//                     <div>
//                         <img className='img-fluid' alt={hotel.image} src={hotel.image}/>
//                     </div>
//                     <h2>{hotel.name}</h2>
//                     <h3>{hotel.location}</h3>
//                     <p>{hotel.description}</p>
//                     <p>Number of Rooms: {hotel.numberOfRooms}</p>
//                     <p>Parking Slots: {hotel.parkingSlots}</p>
//                 </div>
//             )
//         }

//         return(
//             <div className="container">
//                 <h1>Details Page</h1>
//                 <p>{main}</p>
//                 <ReviewSection hotelId={Number(this.props.match.params.id)}/>
//             </div>
//         )
//     }
// }