import React from 'react';



function SideBar(props){

    return (
        <>
            <ul style={{"list-style-type": "none"}}>
                <li>Home</li>
                <li>Payment</li>
                <li>Offerings</li>
                <li>Settings</li>
            </ul>
        </>
    )
}

export default SideBar;