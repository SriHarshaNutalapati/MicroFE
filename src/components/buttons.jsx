import React from 'react'
import './Components.scss'
import Button from 'react-bootstrap/Button';

function MPButton(props){

    return (
        <button className={props.class}>{props.btnText}</button>
    )
}

export default MPButton;