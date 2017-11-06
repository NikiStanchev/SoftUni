import React, {Component} from 'react'
import PropTypes from 'prop-types'

const CurrencyDisplay = (props) =>{
    return(
        <div>
            {props.name.toUpperCase()}
            <input
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}
                    type='number'
                /> 
        </div>
    )
}

CurrencyDisplay.PropTypes = {
    onChange:PropTypes.func
}

export default CurrencyDisplay