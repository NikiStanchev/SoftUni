import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'


class HomePage extends Component {
    render () {
        return ( 
            <div>
                <Header menuItem='Profile'/>
                <h1>
                    {this.props.homeMessage}
                </h1>
                <Footer message='My footer message' />
            </div>
        )
    }
}

// let HomePage = React.createClass({
//     render: function () {
//         return <h1>Test</h1>
//     }
// })

export default HomePage