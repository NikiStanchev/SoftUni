import React, {Component} from 'react'

const List = (props) =>{
    return(
        <ul>
            {props.children}
        </ul>
    )
}

export default List