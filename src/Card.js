import React from 'react'

function Card(props) {
    return (
        <div class='card'>
            <img src={props.image} onClick={props.updateScore}/>
        </div>
    )
}

export default Card