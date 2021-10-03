import React from 'react'
import './CustomButton.css'

const CustomButton = (props) => {

    return(
        <button className={`${props.googlestyle ? 'googleButton' : ' '} custom-button`} {...props} >
                {props.children}
        </button>
    )
}

export default CustomButton