import React, {Componen} from 'react'
import {Link} from 'react-router-dom'

let Header = props =>{
    return(
        <header>
            <span className="logo">☃</span><span className="header">SeenIt</span>
            <div id="profile">
                <span>{localStorage.username}</span>|
                <Link className="commentsLink" to={'/'} onClick={()=>{localStorage.clear(), window.location.reload()}}>logout</Link>
            </div>
        </header>
    )
}

export default Header