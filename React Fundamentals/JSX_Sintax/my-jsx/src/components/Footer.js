import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <div>
                {this.props.message}
            </div>
        )
    }
}

// const Footer = ({message}) => (
//     <div>
//         {message}
//     </div>
// )

export default Footer