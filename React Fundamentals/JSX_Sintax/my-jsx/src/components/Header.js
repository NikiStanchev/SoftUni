import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    render(){
        return(
            <div className='header'>
                <h1>
                    Menu
                </h1>
                <h2>
                    {this.props.menuItem}
                </h2>
            </div>
        )
    }
}


Header.PropTypes = {
    menuItem: PropTypes.string.isRequired
}
export default Header
