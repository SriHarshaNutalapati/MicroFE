import React from 'react'
import './Components.scss'

function Text(props){

    return (
        <p className={props.class}>{props.text}</p>
    )
}

export default Text;