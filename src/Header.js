import React from 'react'

function Header(props) {
    return (
        <div id='header'>
            <h2> Memory card game </h2>
            <p id='currentscore'> Current Score: {props.currentscore} </p>
            <p id='bestscore'> Best Score: {props.bestscore} </p>
        </div>
    )
}
export default Header